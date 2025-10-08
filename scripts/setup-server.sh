#!/bin/bash
# setup-server.sh - Configuração automática do servidor para iNuTech iCT Plataforma

set -e

echo "🚀 Configuração do Servidor iNuTech iCT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date +'%H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }

# Verificar se está rodando como usuário correto
if [ "$EUID" -eq 0 ]; then 
   error "Não execute este script como root. Use o usuário masternutech."
fi

log "Iniciando configuração do servidor..."

# 1. Atualizar sistema
log "Atualizando sistema..."
sudo apt update && sudo apt upgrade -y

# 2. Instalar dependências essenciais
log "Instalando dependências essenciais..."
sudo apt install -y curl wget git build-essential

# 3. Instalar Node.js 20 LTS
log "Instalando Node.js 20 LTS..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    if [[ $NODE_VERSION == v20.* ]]; then
        log "Node.js 20 LTS já instalado: $NODE_VERSION"
    else
        warn "Node.js $NODE_VERSION encontrado, atualizando para v20.x.x"
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt install -y nodejs
    fi
else
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi

# 4. Instalar Nginx
log "Instalando Nginx..."
if command -v nginx &> /dev/null; then
    log "Nginx já instalado"
else
    sudo apt install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
fi

# 5. Instalar PM2
log "Instalando PM2..."
if command -v pm2 &> /dev/null; then
    log "PM2 já instalado"
else
    sudo npm install -g pm2
    pm2 startup systemd
    log "⚠️  Execute o comando sugerido acima para completar a configuração do PM2"
fi

# 6. Instalar SQLite3
log "Instalando SQLite3..."
if command -v sqlite3 &> /dev/null; then
    log "SQLite3 já instalado"
else
    sudo apt install -y sqlite3
fi

# 7. Instalar Certbot
log "Instalando Certbot..."
if command -v certbot &> /dev/null; then
    log "Certbot já instalado"
else
    sudo apt install -y certbot python3-certbot-nginx
fi

# 8. Configurar firewall
log "Configurando firewall..."
if command -v ufw &> /dev/null; then
    if sudo ufw status | grep -q "active"; then
        log "UFW já está ativo"
    else
        sudo ufw allow OpenSSH
        sudo ufw allow 'Nginx Full'
        sudo ufw enable
        log "UFW ativado com regras para SSH e Nginx"
    fi
else
    warn "UFW não instalado (opcional)"
fi

# 9. Criar diretórios
log "Criando diretórios..."
sudo mkdir -p /var/www/inutech/plataforma
sudo mkdir -p /var/www/inutech/backups
sudo mkdir -p /var/log/inutech

# 10. Configurar permissões
log "Configurando permissões..."
sudo chown -R $USER:$USER /var/www/inutech
sudo chown -R $USER:$USER /var/log/inutech
sudo chmod -R 755 /var/www/inutech

log "✅ Configuração do servidor concluída!"
log "📋 Próximos passos:"
log "   1. Configure o DNS: www.inutech.org.br → 177.153.59.217"
log "   2. Execute o deploy: ./scripts/deploy-to-server.sh"
log "   3. Configure SSL: certbot --nginx -d www.inutech.org.br"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log "Servidor configurado e pronto para deploy!"
