#!/bin/bash
# deploy-to-server.sh - Deploy da aplicação para o servidor

set -e

echo "🚀 Deploy iNuTech iCT Plataforma"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Configurações
SERVER_IP="177.153.59.217"  # IP do servidor iNuTech
SERVER_USER="masternutech"  # Usuário do servidor
APP_NAME="inutech-plataforma"
REMOTE_DIR="/var/www/inutech/plataforma"

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date +'%H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    error "Execute este script no diretório raiz do projeto"
fi

# Configurações já definidas acima

log "Iniciando deploy para $SERVER_IP..."

# 1. Criar backup no servidor
log "Criando backup no servidor..."
ssh $SERVER_USER@$SERVER_IP "
    if [ -d '$REMOTE_DIR' ]; then
        cd /var/www/inutech
        tar -czf backups/plataforma-backup-\$(date +%Y%m%d_%H%M%S).tar.gz \
            --exclude='node_modules' \
            --exclude='.next' \
            plataforma/
        echo 'Backup criado'
    else
        echo 'Diretório não existe, primeiro deploy'
    fi
"

# 2. Transferir arquivos
log "Transferindo arquivos..."
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude 'prisma/dev.db' \
    --exclude '.env' \
    ./ $SERVER_USER@$SERVER_IP:$REMOTE_DIR/

# 3. Instalar dependências
log "Instalando dependências..."
ssh $SERVER_USER@$SERVER_IP "
    cd $REMOTE_DIR
    npm ci --only=production
"

# 4. Configurar banco de dados
log "Configurando banco de dados..."
ssh $SERVER_USER@$SERVER_IP "
    cd $REMOTE_DIR
    npx prisma generate
    npx prisma db push
"

# 5. Build da aplicação
log "Criando build de produção..."
ssh $SERVER_USER@$SERVER_IP "
    cd $REMOTE_DIR
    npm run build
"

# 6. Reiniciar aplicação
log "Reiniciando aplicação..."
ssh $SERVER_USER@$SERVER_IP "
    cd $REMOTE_DIR
    if pm2 describe $APP_NAME > /dev/null 2>&1; then
        pm2 restart $APP_NAME
    else
        pm2 start ecosystem.config.js
    fi
    pm2 save
"

# 7. Verificar status
log "Verificando status..."
sleep 5
ssh $SERVER_USER@$SERVER_IP "pm2 status $APP_NAME"

# 8. Testar aplicação
log "Testando aplicação..."
sleep 5
if ssh $SERVER_USER@$SERVER_IP "curl -s http://localhost:17011 > /dev/null"; then
    log "✅ Deploy concluído com sucesso!"
    log "🌐 Acesse: http://$SERVER_IP"
    log "📊 Logs: ssh $SERVER_USER@$SERVER_IP 'pm2 logs $APP_NAME'"
else
    error "❌ Aplicação não está respondendo"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log "Deploy finalizado!"
