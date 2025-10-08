#!/bin/bash

# 🛡️ SCRIPT DE BACKUP AUTOMÁTICO - ARQUIVOS SENSÍVEIS
# Este script cria backups automáticos de arquivos sensíveis

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Diretório de backup
BACKUP_DIR="./backups/sensitive-files"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Criar diretório de backup se não existir
mkdir -p "$BACKUP_DIR"

log "🛡️ Iniciando backup de arquivos sensíveis..."

# Lista de arquivos sensíveis para backup
SENSITIVE_FILES=(
    ".env.local"
    ".env"
    ".env.development.local"
    ".env.test.local"
    ".env.production.local"
    "prisma/dev.db"
    "prisma/dev.db-journal"
)

# Função para fazer backup de um arquivo
backup_file() {
    local file="$1"
    
    if [ -f "$file" ]; then
        local backup_name="${file##*/}.backup.${TIMESTAMP}"
        local backup_path="$BACKUP_DIR/$backup_name"
        
        cp "$file" "$backup_path"
        
        if [ $? -eq 0 ]; then
            success "✅ Backup criado: $file -> $backup_path"
            return 0
        else
            error "❌ Falha ao criar backup: $file"
            return 1
        fi
    else
        warning "⚠️ Arquivo não encontrado: $file"
        return 1
    fi
}

# Fazer backup de todos os arquivos sensíveis
backup_count=0
total_files=${#SENSITIVE_FILES[@]}

for file in "${SENSITIVE_FILES[@]}"; do
    if backup_file "$file"; then
        ((backup_count++))
    fi
done

# Criar arquivo de metadados do backup
cat > "$BACKUP_DIR/backup_metadata_${TIMESTAMP}.txt" << EOF
# Backup de Arquivos Sensíveis - iNuTech iCT
Data: $(date)
Usuário: $(whoami)
Sistema: $(uname -a)
Diretório: $(pwd)
Arquivos processados: $backup_count/$total_files

## Arquivos incluídos neste backup:
EOF

for file in "${SENSITIVE_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "- $file" >> "$BACKUP_DIR/backup_metadata_${TIMESTAMP}.txt"
    fi
done

# Limpar backups antigos (manter apenas os últimos 10)
log "🧹 Limpando backups antigos..."
cd "$BACKUP_DIR"
ls -t *.backup.* 2>/dev/null | tail -n +11 | xargs -r rm -f
cd - > /dev/null

# Relatório final
echo ""
log "📊 RELATÓRIO DE BACKUP:"
success "✅ Arquivos processados: $backup_count/$total_files"
success "✅ Diretório de backup: $BACKUP_DIR"
success "✅ Timestamp: $TIMESTAMP"

if [ $backup_count -gt 0 ]; then
    success "🎉 Backup concluído com sucesso!"
else
    warning "⚠️ Nenhum arquivo sensível encontrado para backup"
fi

echo ""
log "🛡️ Para restaurar um backup, use:"
echo "   cp $BACKUP_DIR/[arquivo].backup.[timestamp] [arquivo_original]"
echo ""
log "📋 Para listar backups disponíveis:"
echo "   ls -la $BACKUP_DIR"
