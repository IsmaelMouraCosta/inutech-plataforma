#!/bin/bash

# Script para gerenciar aplicações do iNuTech
# Uso: ./manage-apps.sh [start|stop|status] [app-name]

APP_NAME=$2
ACTION=$1

# Configurações das aplicações
declare -A APPS
APPS[innovation]="1647:/path/to/innovation"
APPS[assessment]="1887:/path/to/assessment" 
APPS[projects]="2000:/path/to/projects"
APPS[themis]="327:/path/to/themis"

# Função para verificar se uma porta está em uso
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0  # Porta em uso
    else
        return 1  # Porta livre
    fi
}

# Função para iniciar aplicação
start_app() {
    local app=$1
    local config=${APPS[$app]}
    
    if [ -z "$config" ]; then
        echo "❌ Aplicação '$app' não encontrada"
        exit 1
    fi
    
    local port=$(echo $config | cut -d: -f1)
    local path=$(echo $config | cut -d: -f2)
    
    if check_port $port; then
        echo "⚠️  Aplicação '$app' já está rodando na porta $port"
        return 0
    fi
    
    echo "🚀 Iniciando aplicação '$app' na porta $port..."
    
    # Navegar para o diretório e iniciar
    cd "$path" || {
        echo "❌ Erro: Diretório '$path' não encontrado"
        exit 1
    }
    
    # Iniciar em background
    nohup npm run dev -- -p $port > /tmp/${app}.log 2>&1 &
    local pid=$!
    
    # Aguardar um pouco e verificar se iniciou
    sleep 3
    if check_port $port; then
        echo "✅ Aplicação '$app' iniciada com sucesso (PID: $pid)"
        echo "📝 Logs disponíveis em: /tmp/${app}.log"
    else
        echo "❌ Falha ao iniciar aplicação '$app'"
        exit 1
    fi
}

# Função para parar aplicação
stop_app() {
    local app=$1
    local config=${APPS[$app]}
    
    if [ -z "$config" ]; then
        echo "❌ Aplicação '$app' não encontrada"
        exit 1
    fi
    
    local port=$(echo $config | cut -d: -f1)
    
    if ! check_port $port; then
        echo "⚠️  Aplicação '$app' não está rodando na porta $port"
        return 0
    fi
    
    echo "🛑 Parando aplicação '$app' na porta $port..."
    
    # Encontrar e matar processo na porta
    local pids=$(lsof -ti:$port)
    if [ -n "$pids" ]; then
        echo $pids | xargs kill -9
        echo "✅ Aplicação '$app' parada com sucesso"
    else
        echo "⚠️  Nenhum processo encontrado na porta $port"
    fi
}

# Função para verificar status
status_app() {
    local app=$1
    local config=${APPS[$app]}
    
    if [ -z "$config" ]; then
        echo "❌ Aplicação '$app' não encontrada"
        exit 1
    fi
    
    local port=$(echo $config | cut -d: -f1)
    
    if check_port $port; then
        echo "✅ $app: RODANDO (porta $port)"
    else
        echo "❌ $app: PARADA (porta $port)"
    fi
}

# Função para listar todas as aplicações
list_apps() {
    echo "📋 Aplicações disponíveis:"
    for app in "${!APPS[@]}"; do
        local config=${APPS[$app]}
        local port=$(echo $config | cut -d: -f1)
        local path=$(echo $config | cut -d: -f2)
        
        if check_port $port; then
            echo "  ✅ $app: RODANDO (porta $port)"
        else
            echo "  ❌ $app: PARADA (porta $port)"
        fi
    done
}

# Função para mostrar ajuda
show_help() {
    echo "🔧 Gerenciador de Aplicações iNuTech"
    echo ""
    echo "Uso: $0 [comando] [aplicação]"
    echo ""
    echo "Comandos:"
    echo "  start <app>    - Iniciar aplicação"
    echo "  stop <app>     - Parar aplicação"
    echo "  status <app>   - Verificar status da aplicação"
    echo "  list           - Listar todas as aplicações"
    echo "  help           - Mostrar esta ajuda"
    echo ""
    echo "Aplicações disponíveis:"
    for app in "${!APPS[@]}"; do
        echo "  - $app"
    done
}

# Main
case $ACTION in
    start)
        if [ -z "$APP_NAME" ]; then
            echo "❌ Nome da aplicação é obrigatório"
            show_help
            exit 1
        fi
        start_app $APP_NAME
        ;;
    stop)
        if [ -z "$APP_NAME" ]; then
            echo "❌ Nome da aplicação é obrigatório"
            show_help
            exit 1
        fi
        stop_app $APP_NAME
        ;;
    status)
        if [ -z "$APP_NAME" ]; then
            echo "❌ Nome da aplicação é obrigatório"
            show_help
            exit 1
        fi
        status_app $APP_NAME
        ;;
    list)
        list_apps
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo "❌ Comando inválido: $ACTION"
        show_help
        exit 1
        ;;
esac


