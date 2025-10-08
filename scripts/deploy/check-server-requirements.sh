#!/bin/bash
# check-server-requirements.sh - Verificar requisitos do servidor

echo "🔍 Verificando Requisitos do Servidor"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[✓]${NC} $1"; }
error() { echo -e "${RED}[✗]${NC} $1"; }
warn() { echo -e "${YELLOW}[⚠]${NC} $1"; }

# 1. Verificar sistema operacional
echo "1. Sistema Operacional:"
if command -v lsb_release &> /dev/null; then
    OS_INFO=$(lsb_release -d | cut -f2)
    log "Sistema: $OS_INFO"
else
    warn "lsb_release não encontrado, verificando /etc/os-release"
    if [ -f /etc/os-release ]; then
        OS_INFO=$(grep PRETTY_NAME /etc/os-release | cut -d'"' -f2)
        log "Sistema: $OS_INFO"
    else
        error "Não foi possível determinar o sistema operacional"
    fi
fi

# 2. Verificar Node.js
echo ""
echo "2. Node.js:"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    if [[ $NODE_VERSION == v20.* ]]; then
        log "Node.js $NODE_VERSION (recomendado)"
    else
        warn "Node.js $NODE_VERSION (recomendado: v20.x.x)"
    fi
else
    error "Node.js não instalado"
fi

# 3. Verificar npm
echo ""
echo "3. npm:"
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    log "npm v$NPM_VERSION"
else
    error "npm não encontrado"
fi

# 4. Verificar Nginx
echo ""
echo "4. Nginx:"
if command -v nginx &> /dev/null; then
    NGINX_VERSION=$(nginx -v 2>&1 | cut -d'/' -f2)
    log "Nginx $NGINX_VERSION"
    
    # Verificar se está rodando
    if systemctl is-active --quiet nginx; then
        log "Nginx está rodando"
    else
        warn "Nginx instalado mas não está rodando"
    fi
else
    error "Nginx não instalado"
fi

# 5. Verificar PM2
echo ""
echo "5. PM2:"
if command -v pm2 &> /dev/null; then
    PM2_VERSION=$(pm2 --version)
    log "PM2 v$PM2_VERSION"
else
    error "PM2 não instalado"
fi

# 6. Verificar SQLite3
echo ""
echo "6. SQLite3:"
if command -v sqlite3 &> /dev/null; then
    SQLITE_VERSION=$(sqlite3 --version | cut -d' ' -f1)
    log "SQLite3 $SQLITE_VERSION"
else
    error "SQLite3 não instalado"
fi

# 7. Verificar Git
echo ""
echo "7. Git:"
if command -v git &> /dev/null; then
    GIT_VERSION=$(git --version | cut -d' ' -f3)
    log "Git $GIT_VERSION"
else
    error "Git não instalado"
fi

# 8. Verificar Certbot
echo ""
echo "8. Certbot:"
if command -v certbot &> /dev/null; then
    CERTBOT_VERSION=$(certbot --version | cut -d' ' -f2)
    log "Certbot $CERTBOT_VERSION"
else
    warn "Certbot não instalado (necessário para SSL)"
fi

# 9. Verificar espaço em disco
echo ""
echo "9. Espaço em Disco:"
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -lt 80 ]; then
    log "Espaço em disco: ${DISK_USAGE}% usado"
else
    warn "Espaço em disco: ${DISK_USAGE}% usado (recomendado < 80%)"
fi

# 10. Verificar memória
echo ""
echo "10. Memória:"
TOTAL_MEM=$(free -h | awk 'NR==2{print $2}')
AVAIL_MEM=$(free -h | awk 'NR==2{print $7}')
log "Memória total: $TOTAL_MEM, Disponível: $AVAIL_MEM"

# 11. Verificar firewall
echo ""
echo "11. Firewall:"
if command -v ufw &> /dev/null; then
    UFW_STATUS=$(sudo ufw status | head -1)
    if [[ $UFW_STATUS == *"active"* ]]; then
        log "UFW ativo"
        # Verificar regras
        if sudo ufw status | grep -q "Nginx"; then
            log "Regra do Nginx configurada"
        else
            warn "Regra do Nginx não encontrada"
        fi
    else
        warn "UFW instalado mas inativo"
    fi
else
    warn "UFW não instalado (opcional)"
fi

# 12. Verificar permissões
echo ""
echo "12. Permissões:"
if [ "$EUID" -eq 0 ]; then
    warn "Executando como root (não recomendado para deploy)"
elif [ "$USER" = "masternutech" ]; then
    log "Executando como usuário correto: $USER"
else
    warn "Executando como usuário: $USER (recomendado: masternutech)"
fi

# Resumo
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Resumo da Verificação:"

ERRORS=0
WARNINGS=0

# Contar erros e warnings (simplificado)
if ! command -v node &> /dev/null; then ((ERRORS++)); fi
if ! command -v nginx &> /dev/null; then ((ERRORS++)); fi
if ! command -v pm2 &> /dev/null; then ((ERRORS++)); fi
if ! command -v sqlite3 &> /dev/null; then ((ERRORS++)); fi
if ! command -v git &> /dev/null; then ((ERRORS++)); fi

if [ "$ERRORS" -eq 0 ]; then
    log "✅ Todos os requisitos básicos atendidos!"
    echo ""
    echo "🚀 Pronto para deploy!"
else
    error "❌ $ERRORS requisitos não atendidos"
    echo ""
    echo "📋 Execute os comandos de instalação antes do deploy"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
