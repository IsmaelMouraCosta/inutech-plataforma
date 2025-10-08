# 🚀 Plano de Deploy em Produção - iNuTech iCT Plataforma

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Pré-requisitos](#pré-requisitos)
3. [Arquitetura de Deploy](#arquitetura-de-deploy)
4. [Instalação Passo a Passo](#instalação-passo-a-passo)
5. [Configuração do Nginx](#configuração-do-nginx)
6. [Configuração do PM2](#configuração-do-pm2)
7. [Scripts de Deploy](#scripts-de-deploy)
8. [Monitoramento e Logs](#monitoramento-e-logs)
9. [Backup e Rollback](#backup-e-rollback)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

### Informações do Deploy

- **Servidor**: Linux Debian 11/12
- **Localização**: `/var/www/inutech/plataforma`
- **Porta da Aplicação**: 17011 (interna)
- **Web Server**: Nginx (reverse proxy)
- **Process Manager**: PM2
- **Domínio**: www.inutech.org.br ou inutech.org.br
- **SSL**: Let's Encrypt (Certbot)

### Características

✅ **Multi-aplicação**: Não interfere com outras aplicações no servidor
✅ **Zero-downtime**: Deploy sem parar outras aplicações
✅ **Auto-restart**: PM2 reinicia automaticamente em caso de falha
✅ **Logs centralizados**: PM2 gerencia logs da aplicação
✅ **SSL/HTTPS**: Certificado gratuito Let's Encrypt
✅ **Rollback**: Sistema de backup e rollback

---

## 📋 Pré-requisitos

### No Servidor Debian

1. **Sistema operacional**

   ```bash
   # Verificar versão
   lsb_release -a
   # Debian 11+ ou Ubuntu 20.04+
   ```
2. **Usuário com sudo**

   ```bash
   # Verificar permissões
   sudo -v
   ```
3. **Firewall configurado**

   ```bash
   # Portas necessárias abertas:
   # - 80 (HTTP)
   # - 443 (HTTPS)
   # - 22 (SSH)
   ```
4. **Domínio configurado** (opcional, mas recomendado)

   - DNS apontando para o IP do servidor
   - Exemplo: www.inutech.org.br → 177.153.59.217:17011

### Software Necessário

- Node.js 20 LTS
- npm ou yarn
- Nginx
- PM2
- Git
- Certbot (para SSL)
- SQLite3

---

## 🏗️ Arquitetura de Deploy

```
Internet
    ↓
[Cloudflare/DNS] (opcional)
    ↓
Servidor Debian (IP_PUBLICO)
    ↓
[Firewall] Portas 80/443
    ↓
[Nginx] Reverse Proxy
    ├── www.inutech.org.br → localhost:17011 (iNuTech Plataforma)
    ├── app1.inutech.org.br       → localhost:3000 (Outra App)
    └── app2.inutech.org.br       → localhost:8080 (Outra App)
    ↓
[PM2] Process Manager
    ├── inutech-plataforma (porta 17011)
    ├── app1 (porta 3000)
    └── app2 (porta 8080)
    ↓
[Aplicação Next.js] /var/www/inutech/plataforma
    ↓
[SQLite Database] /var/www/inutech/plataforma/prisma/dev.db
```

### Vantagens desta Arquitetura

✅ **Isolamento**: Cada aplicação roda em sua própria porta
✅ **Escalabilidade**: Fácil adicionar mais aplicações
✅ **Manutenção**: Deploy independente de cada aplicação
✅ **Segurança**: Nginx protege as aplicações Node.js
✅ **Performance**: Nginx serve arquivos estáticos diretamente

---

## 📦 Instalação Passo a Passo

### ⚡ Script de Verificação Automática (RECOMENDADO)

**Antes de iniciar o deploy manual, execute o script de verificação:**

```bash
# Copiar script para servidor (se ainda não estiver lá)
scp scripts/deploy/check-server-requirements.sh masternutech@177.153.59.217:/tmp/

# No servidor, executar
chmod +x /tmp/check-server-requirements.sh
/tmp/check-server-requirements.sh
```

Este script verifica automaticamente todos os requisitos (itens 1.1 a 1.6) e indica:

- ✅ O que já está instalado e configurado
- ❌ O que precisa ser instalado
- ⚠️ O que recomendamos corrigir

Se preferir verificação e instalação manual, siga as etapas abaixo.

---

### Fase 1: Preparação do Servidor (30 minutos)

#### 1.1. Atualizar Sistema

```bash
# Conectar ao servidor
ssh masternutech@177.153.59.217

# Verificar versão do sistema
lsb_release -a

# Atualizar pacotes
sudo apt update && sudo apt upgrade -y

# Verificar e instalar dependências essenciais
echo "Verificando dependências essenciais..."
for pkg in curl wget git build-essential; do
    if ! dpkg -l | grep -q "^ii  $pkg "; then
        echo "Instalando $pkg..."
        sudo apt install -y $pkg
    else
        echo "✓ $pkg já instalado"
    fi
done
```

#### 1.2. Instalar Node.js 20 LTS

```bash
# Verificar se Node.js já está instalado
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "Node.js já instalado: $NODE_VERSION"
  
    # Verificar se é versão 20
    if [[ $NODE_VERSION == v20.* ]]; then
        echo "✓ Node.js 20 LTS já está instalado"
        node --version
        npm --version
    else
        echo "⚠️  Versão atual: $NODE_VERSION"
        echo "Recomendado atualizar para v20.x.x"
        read -p "Deseja atualizar para Node.js 20 LTS? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            # Adicionar repositório NodeSource
            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
            sudo apt install -y nodejs
        fi
    fi
else
    echo "Node.js não encontrado. Instalando Node.js 20 LTS..."
    # Adicionar repositório NodeSource
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    # Instalar Node.js
    sudo apt install -y nodejs
fi

# Verificar instalação
echo "Versões instaladas:"
node --version  # deve mostrar v20.x.x
npm --version   # deve mostrar v10.x.x
```

#### 1.3. Instalar Nginx

```bash
# Verificar se Nginx já está instalado
if command -v nginx &> /dev/null; then
    NGINX_VERSION=$(nginx -v 2>&1 | cut -d'/' -f2)
    echo "✓ Nginx já instalado: $NGINX_VERSION"
    sudo systemctl status nginx --no-pager
else
    echo "Nginx não encontrado. Instalando..."
    # Instalar Nginx
    sudo apt install -y nginx
  
    # Habilitar inicialização automática
    sudo systemctl enable nginx
  
    # Iniciar Nginx
    sudo systemctl start nginx
fi

# Verificar status
echo "Status do Nginx:"
sudo systemctl status nginx --no-pager
```

#### 1.4. Instalar PM2 Globalmente

```bash
# Verificar se PM2 já está instalado
if command -v pm2 &> /dev/null; then
    PM2_VERSION=$(pm2 --version)
    echo "✓ PM2 já instalado: v$PM2_VERSION"
    pm2 list
else
    echo "PM2 não encontrado. Instalando..."
    # Instalar PM2
    sudo npm install -g pm2
  
    echo "PM2 instalado com sucesso: v$(pm2 --version)"
fi

# Verificar se PM2 startup já está configurado
if ! systemctl is-enabled pm2-* &> /dev/null; then
    echo "Configurando PM2 para iniciar no boot..."
    pm2 startup systemd
    echo "⚠️  Execute o comando sugerido acima para completar a configuração"
else
    echo "✓ PM2 startup já está configurado"
fi
```

#### 1.5. Instalar SQLite3

```bash
# Verificar se SQLite3 já está instalado
if command -v sqlite3 &> /dev/null; then
    SQLITE_VERSION=$(sqlite3 --version | cut -d' ' -f1)
    echo "✓ SQLite3 já instalado: $SQLITE_VERSION"
else
    echo "SQLite3 não encontrado. Instalando..."
    # Instalar SQLite3
    sudo apt install -y sqlite3
  
    # Verificar versão
    echo "SQLite3 instalado: $(sqlite3 --version | cut -d' ' -f1)"
fi
```

#### 1.6. Configurar Firewall (se UFW estiver ativo)

```bash
# Verificar se UFW está instalado e ativo
if command -v ufw &> /dev/null; then
    UFW_STATUS=$(sudo ufw status | head -1)
    echo "UFW Status: $UFW_STATUS"
  
    if [[ $UFW_STATUS == *"active"* ]]; then
        echo "UFW está ativo. Verificando regras..."
  
        # Verificar se regras já existem
        if ! sudo ufw status | grep -q "Nginx"; then
            echo "Adicionando regra para Nginx..."
            sudo ufw allow 'Nginx Full'
        else
            echo "✓ Regra do Nginx já existe"
        fi
  
        if ! sudo ufw status | grep -q "OpenSSH"; then
            echo "Adicionando regra para OpenSSH..."
            sudo ufw allow OpenSSH
        else
            echo "✓ Regra do OpenSSH já existe"
        fi
  
        # Mostrar status atual
        sudo ufw status numbered
    else
        echo "UFW está instalado mas inativo"
        read -p "Deseja ativar o firewall? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            sudo ufw allow OpenSSH
            sudo ufw allow 'Nginx Full'
            sudo ufw enable
        fi
    fi
else
    echo "⚠️  UFW não está instalado (opcional)"
    echo "Sistema pode estar usando outro firewall ou nenhum"
fi
```

---

### Fase 2: Preparação do Diretório (10 minutos)

#### 2.1. Criar Estrutura de Diretórios

```bash
# Criar diretório base
sudo mkdir -p /var/www/inutech

# Criar diretório da aplicação
sudo mkdir -p /var/www/inutech/plataforma

# Criar diretório de backups
sudo mkdir -p /var/www/inutech/backups

# Criar diretório de logs
sudo mkdir -p /var/log/inutech

# Configurar permissões
sudo chown -R $USER:$USER /var/www/inutech
sudo chown -R $USER:$USER /var/log/inutech
sudo chmod -R 755 /var/www/inutech
```

#### 2.2. Configurar Usuário da Aplicação (Recomendado)

```bash
# Criar usuário específico (opcional, mas mais seguro)
sudo useradd -r -s /bin/bash -d /var/www/inutech inutech

# Adicionar ao grupo www-data
sudo usermod -a -G www-data inutech

# Configurar permissões
sudo chown -R inutech:www-data /var/www/inutech/plataforma
sudo chmod -R 750 /var/www/inutech/plataforma
```

---

### Fase 3: Deploy da Aplicação (20 minutos)

#### 3.1. Clonar ou Copiar Código

**Opção A: Via Git (Recomendado)**

```bash
# Navegar para o diretório
cd /var/www/inutech

# Clonar repositório
git clone https://github.com/IsmaelMouraCosta/inutech-plataforma.git plataforma

# Entrar no diretório
cd plataforma
```

**Opção B: Via SCP/RSYNC**

```bash
# Na máquina local, enviar arquivos
rsync -avz --exclude 'node_modules' \
  --exclude '.next' \
  --exclude 'prisma/dev.db' \
  /caminho/local/inutech-plataforma/ \
  usuario@IP_SERVIDOR:/var/www/inutech/plataforma/

# Conectar ao servidor
ssh usuario@IP_SERVIDOR
cd /var/www/inutech/plataforma
```

#### 3.2. Instalar Dependências

```bash
cd /var/www/inutech/plataforma

# Limpar cache do npm (se necessário)
npm cache clean --force

# Conferir o cache
npm cache verify

# IMPORTANTE: Instalar TODAS as dependências (incluindo devDependencies)
# O build do Next.js com Tailwind precisa das devDependencies
npm ci

# ❌ NÃO use --only=production antes do build!
# Isso causará erro: "Cannot find module '@tailwindcss/postcss'"
```

**Por que instalar todas as dependências?**

O Next.js com Tailwind CSS precisa das `devDependencies` para fazer o build:

- `@tailwindcss/postcss` (devDependency)
- `tailwindcss` (devDependency)
- TypeScript e compiladores

Após o build, você pode opcionalmente remover as devDependencies para economizar espaço:

```bash
# Opcional: Remover devDependencies APÓS o build
npm prune --production

# Isso manterá apenas as dependências de produção
# Economiza ~200-300MB de espaço
```

#### 3.3. Configurar Variáveis de Ambiente

```bash
# Criar arquivo .env
nano /var/www/inutech/plataforma/.env
```

Adicionar:

```bash
# .env
NODE_ENV=production
DATABASE_URL="file:./prisma/dev.db"
PORT=17011
HOST=0.0.0.0

# NextAuth
NEXTAUTH_URL="https://www.inutech.org.br"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

**Verificar se foi configurado corretamente:**

```bash
# 1. Verificar se o arquivo existe
ls -la /var/www/inutech/plataforma/.env

# 2. Ver conteúdo do arquivo (sem expor segredos no log)
cat /var/www/inutech/plataforma/.env

# 3. Verificar permissões (deve ser 600 ou 644)
ls -l /var/www/inutech/plataforma/.env

# 4. Ajustar permissões se necessário
chmod 600 /var/www/inutech/plataforma/.env

# 5. Testar se Next.js consegue ler as variáveis
cd /var/www/inutech/plataforma
node -e "require('dotenv').config(); console.log('NODE_ENV:', process.env.NODE_ENV); console.log('PORT:', process.env.PORT);"
```

#### 3.4. Configurar Banco de Dados

```bash
cd /var/www/inutech/plataforma

# Gerar Prisma Client
npx prisma generate

# Criar/atualizar banco de dados
npx prisma db push

# Migrar dados (se necessário)
npm run db:seed
```

#### 3.5. Build da Aplicação

```bash
cd /var/www/inutech/plataforma

# Build de produção
npm run build

# Verificar se o build foi criado
ls -la .next/
```

**Se ocorrer erro no build:**

```bash
# Erro: "Cannot find module '@tailwindcss/postcss'"
# Solução: Reinstalar todas as dependências

# 1. Limpar node_modules
rm -rf node_modules .next

# 2. Reinstalar TODAS as dependências (incluindo dev)
npm ci

# 3. Tentar build novamente
npm run build

# Se ainda der erro, verificar:
npm list @tailwindcss/postcss
npm list tailwindcss
```

**Troubleshooting de Build:**

| Erro                                          | Causa                   | Solução                          |
| --------------------------------------------- | ----------------------- | ---------------------------------- |
| `Cannot find module '@tailwindcss/postcss'` | Falta devDependency     | `npm ci` (sem --only=production) |
| `Error: Turbopack build failed`             | node_modules corrompido | `rm -rf node_modules && npm ci`  |
| `ENOSPC: no space left on device`           | Disco cheio             | `df -h` e liberar espaço        |
| `Error: spawn ENOMEM`                       | Pouca memória          | Aumentar RAM ou swap               |

---

### Fase 4: Configuração do PM2 (15 minutos)

#### 4.1. Criar Arquivo de Configuração do PM2

```bash
# Criar arquivo ecosystem.config.js
nano /var/www/inutech/plataforma/ecosystem.config.js
```

Adicionar:

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'inutech-plataforma',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 17011',
    cwd: '/var/www/inutech/plataforma',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 17011,
      DATABASE_URL: 'file:./prisma/dev.db'
    },
    error_file: '/var/log/inutech/error.log',
    out_file: '/var/log/inutech/out.log',
    log_file: '/var/log/inutech/combined.log',
    time: true,
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    listen_timeout: 10000,
    kill_timeout: 5000,
    wait_ready: true
  }]
}
```

#### 4.2. Iniciar Aplicação com PM2

```bash
cd /var/www/inutech/plataforma

# Iniciar aplicação
pm2 start ecosystem.config.js

# Verificar status
pm2 status

# Ver logs em tempo real
pm2 logs inutech-plataforma

# Salvar configuração do PM2
pm2 save

# Garantir que PM2 inicia no boot
pm2 startup systemd
```

#### 4.3. Comandos Úteis do PM2

```bash
# Status de todas as aplicações
pm2 list

# Status específico
pm2 show inutech-plataforma

# Logs
pm2 logs inutech-plataforma --lines 100

# Reiniciar
pm2 restart inutech-plataforma

# Parar
pm2 stop inutech-plataforma

# Remover
pm2 delete inutech-plataforma

# Monitoramento em tempo real
pm2 monit
```

---

### Fase 5: Configuração do Nginx (20 minutos)

#### 5.1. Criar Configuração do Site

```bash
# Criar arquivo de configuração
sudo nano /etc/nginx/sites-available/www.inutech.org.br
```

Adicionar:

```nginx
# /etc/nginx/sites-available/www.inutech.org.br

# Upstream (backend Node.js)
upstream inutech_backend {
    server 127.0.0.1:17011;
    keepalive 64;
}

# Redirecionar HTTP para HTTPS (será usado após SSL)
server {
    listen 80;
    listen [::]:80;
    server_name www.inutech.org.br inutech.org.br;

    # Permitir certbot para renovação SSL
    location /.well-known/acme-challenge/ {
        masternutech /var/www/certbot;
    }

    # Redirecionar para HTTPS (descomentar após configurar SSL)
    # return 301 https://$server_name$request_uri;

    # Temporariamente, servir a aplicação (até configurar SSL)
    location / {
        proxy_pass http://inutech_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # Servir arquivos estáticos do Next.js diretamente
    location /_next/static/ {
        alias /var/www/inutech/plataforma/.next/static/;
        expires 365d;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

    # Servir arquivos públicos
    location /static/ {
        alias /var/www/inutech/plataforma/public/;
        expires 7d;
        access_log off;
        add_header Cache-Control "public";
    }

    # Health check
    location /health {
        access_log off;
        return 200 "OK\n";
        add_header Content-Type text/plain;
    }

    # Logs
    access_log /var/log/nginx/inutech-access.log;
    error_log /var/log/nginx/inutech-error.log;
}

# Configuração HTTPS (ativar após obter SSL)
# server {
#     listen 443 ssl http2;
#     listen [::]:443 ssl http2;
#     server_name www.inutech.org.br inutech.org.br;
#
#     # SSL Certificates (Let's Encrypt)
#     ssl_certificate /etc/letsencrypt/live/www.inutech.org.br/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/www.inutech.org.br/privkey.pem;
#     ssl_trusted_certificate /etc/letsencrypt/live/www.inutech.org.br/chain.pem;
#
#     # SSL Configuration (Mozilla Intermediate)
#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
#     ssl_prefer_server_ciphers off;
#     ssl_session_cache shared:SSL:10m;
#     ssl_session_timeout 10m;
#     ssl_session_tickets off;
#     ssl_stapling on;
#     ssl_stapling_verify on;
#
#     # Security Headers
#     add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
#     add_header X-Frame-Options "SAMEORIGIN" always;
#     add_header X-Content-Type-Options "nosniff" always;
#     add_header X-XSS-Protection "1; mode=block" always;
#
#     # Mesmas configurações de location do bloco HTTP acima
#     location / {
#         proxy_pass http://inutech_backend;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#         proxy_cache_bypass $http_upgrade;
#         proxy_read_timeout 300s;
#         proxy_connect_timeout 75s;
#     }
#
#     location /_next/static/ {
#         alias /var/www/inutech/plataforma/.next/static/;
#         expires 365d;
#         access_log off;
#         add_header Cache-Control "public, immutable";
#     }
#
#     location /static/ {
#         alias /var/www/inutech/plataforma/public/;
#         expires 7d;
#         access_log off;
#         add_header Cache-Control "public";
#     }
#
#     access_log /var/log/nginx/inutech-ssl-access.log;
#     error_log /var/log/nginx/inutech-ssl-error.log;
# }
```

#### 5.2. Ativar Site

```bash
# Criar link simbólico para sites-enabled
sudo ln -s /etc/nginx/sites-available/www.inutech.org.br \
           /etc/nginx/sites-enabled/

# Testar configuração do Nginx
sudo nginx -t

# Se OK, recarregar Nginx
sudo systemctl reload nginx
```

#### 5.3. Verificar se Está Funcionando

```bash
# Testar localmente
curl http://localhost:17011

# Testar através do Nginx
curl http://localhost

# Testar pelo domínio (ajustar conforme seu domínio)
curl http://www.inutech.org.br
```

---

### Fase 6: Configuração SSL com Let's Encrypt (15 minutos)

#### 6.1. Instalar Certbot

```bash
# Instalar Certbot e plugin Nginx
sudo apt install -y certbot python3-certbot-nginx

# Verificar instalação
certbot --version
```

#### 6.2. Obter Certificado SSL

```bash
# Obter certificado (certbot configura Nginx automaticamente)
sudo certbot --nginx -d www.inutech.org.br -d inutech.org.br

# Seguir instruções:
# 1. Fornecer email
# 2. Aceitar termos
# 3. Escolher redirecionar HTTP para HTTPS (opção 2)
```

#### 6.3. Configurar Renovação Automática

```bash
# Testar renovação
sudo certbot renew --dry-run

# Verificar timer de renovação automática
sudo systemctl status certbot.timer

# Habilitar se não estiver ativo
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

#### 6.4. Ajustar Configuração Nginx (Pós-SSL)

```bash
# Editar configuração
sudo nano /etc/nginx/sites-available/www.inutech.org.br

# Descomentar o bloco HTTPS e comentar proxy_pass do bloco HTTP
# O Certbot já deve ter feito isso automaticamente

# Testar e recarregar
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔄 Scripts de Deploy Automatizado

### Script 1: Deploy Inicial

Criar arquivo `/var/www/inutech/plataforma/scripts/deploy-initial.sh`:

```bash
#!/bin/bash
# deploy-initial.sh - Deploy inicial da aplicação iNuTech iCT Plataforma

set -e  # Parar em caso de erro

echo "🚀 Iniciando deploy inicial do iNuTech iCT Plataforma..."

# Variáveis
APP_DIR="/var/www/inutech/plataforma"
APP_NAME="inutech-plataforma"
LOG_DIR="/var/log/inutech"

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

# Verificar se está rodando como usuário correto
if [ "$EUID" -eq 0 ]; then 
   error "Não execute este script como masternutech. Use o usuário da aplicação."
fi

# 1. Navegar para diretório da aplicação
log "Navegando para $APP_DIR..."
cd $APP_DIR || error "Diretório não encontrado: $APP_DIR"

# 2. Instalar dependências
log "Instalando dependências..."
npm ci || error "Falha ao instalar dependências"

# 3. Gerar Prisma Client
log "Gerando Prisma Client..."
npx prisma generate || error "Falha ao gerar Prisma Client"

# 4. Criar/atualizar banco de dados
log "Configurando banco de dados..."
npx prisma db push || error "Falha ao configurar banco de dados"

# 5. Migrar dados (se necessário)
if [ -d "data" ] && [ "$(ls -A data/*.json 2>/dev/null)" ]; then
    log "Migrando dados..."
    npm run db:seed || warn "Falha ao migrar dados (pode já estar migrado)"
fi

# 6. Build da aplicação
log "Criando build de produção..."
npm run build || error "Falha no build"

# 7. Configurar PM2
log "Configurando PM2..."
if pm2 describe $APP_NAME > /dev/null 2>&1; then
    log "Aplicação já existe no PM2, reiniciando..."
    pm2 restart $APP_NAME
else
    log "Iniciando aplicação no PM2..."
    pm2 start ecosystem.config.js
fi

# 8. Salvar configuração PM2
pm2 save

# 9. Verificar status
log "Verificando status..."
sleep 5
pm2 status $APP_NAME

# 10. Testar endpoint
log "Testando endpoint..."
sleep 5
if curl -s http://localhost:17011 > /dev/null; then
    log "✅ Aplicação respondendo corretamente!"
else
    error "❌ Aplicação não está respondendo"
fi

log "✅ Deploy inicial concluído com sucesso!"
log "📊 Verificar logs: pm2 logs $APP_NAME"
log "🌐 Acessar: http://localhost:17011"
```

### Script 2: Deploy de Atualização

Criar arquivo `/var/www/inutech/plataforma/scripts/deploy-update.sh`:

```bash
#!/bin/bash
# deploy-update.sh - Atualização da aplicação iNuTech iCT Plataforma

set -e

echo "🔄 Iniciando atualização do iNuTech iCT Plataforma..."

# Variáveis
APP_DIR="/var/www/inutech/plataforma"
APP_NAME="inutech-plataforma"
BACKUP_DIR="/var/www/inutech/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }

# Verificar usuário
if [ "$EUID" -eq 0 ]; then 
   error "Não execute como masternutech"
fi

cd $APP_DIR || error "Diretório não encontrado"

# 1. Criar backup
log "Criando backup..."
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/plataforma-$TIMESTAMP.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='coverage' \
    . || warn "Falha ao criar backup completo"

# Backup do banco de dados
if [ -f "prisma/dev.db" ]; then
    cp prisma/dev.db $BACKUP_DIR/dev.db.$TIMESTAMP
    log "✅ Backup do banco criado"
fi

# 2. Atualizar código (Git)
if [ -d ".git" ]; then
    log "Atualizando código do Git..."
    git stash || true
    git pull origin main || git pull origin master || warn "Falha ao atualizar do Git"
    git stash pop || true
fi

# 3. Instalar/atualizar dependências
log "Atualizando dependências..."
npm ci || error "Falha ao instalar dependências"

# 4. Atualizar Prisma
log "Atualizando Prisma Client..."
npx prisma generate

# 5. Aplicar migrações do banco (se houver)
log "Aplicando migrações do banco..."
npx prisma db push || warn "Nenhuma migração aplicada"

# 6. Rebuild
log "Recriando build..."
npm run build || error "Falha no build"

# 7. Reload no PM2 (sem downtime)
log "Recarregando aplicação..."
pm2 reload $APP_NAME --wait-ready || pm2 restart $APP_NAME

# 8. Verificar status
log "Verificando status..."
sleep 5
pm2 status $APP_NAME

# 9. Testar
log "Testando aplicação..."
sleep 5
if curl -s http://localhost:17011 > /dev/null; then
    log "✅ Atualização concluída com sucesso!"
    log "📦 Backup salvo em: $BACKUP_DIR/plataforma-$TIMESTAMP.tar.gz"
else
    error "❌ Aplicação não está respondendo. Execute rollback!"
fi

# 10. Limpar backups antigos (manter últimos 10)
log "Limpando backups antigos..."
cd $BACKUP_DIR
ls -t plataforma-*.tar.gz | tail -n +11 | xargs -r rm --
log "✅ Limpeza concluída"
```

### Script 3: Rollback

Criar arquivo `/var/www/inutech/plataforma/scripts/rollback.sh`:

```bash
#!/bin/bash
# rollback.sh - Reverter para versão anterior

set -e

echo "⏪ Iniciando rollback do iNuTech iCT Plataforma..."

# Variáveis
APP_DIR="/var/www/inutech/plataforma"
APP_NAME="inutech-plataforma"
BACKUP_DIR="/var/www/inutech/backups"

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# Verificar usuário
if [ "$EUID" -eq 0 ]; then 
   error "Não execute como masternutech"
fi

# Listar backups disponíveis
log "Backups disponíveis:"
ls -lht $BACKUP_DIR/plataforma-*.tar.gz | head -5

# Pegar último backup
LAST_BACKUP=$(ls -t $BACKUP_DIR/plataforma-*.tar.gz | head -1)

if [ -z "$LAST_BACKUP" ]; then
    error "Nenhum backup encontrado!"
fi

log "Último backup: $LAST_BACKUP"
read -p "Deseja restaurar este backup? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    log "Rollback cancelado"
    exit 0
fi

# Parar aplicação
log "Parando aplicação..."
pm2 stop $APP_NAME || warn "Aplicação já estava parada"

# Backup do estado atual (antes do rollback)
log "Criando backup de segurança do estado atual..."
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
tar -czf $BACKUP_DIR/pre-rollback-$TIMESTAMP.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    -C /var/www/inutech plataforma

# Limpar diretório atual
log "Limpando diretório atual..."
cd /var/www/inutech
rm -rf plataforma.old
mv plataforma plataforma.old

# Restaurar backup
log "Restaurando backup..."
mkdir -p plataforma
tar -xzf $LAST_BACKUP -C plataforma

# Restaurar banco de dados
BACKUP_DATE=$(basename $LAST_BACKUP | sed 's/plataforma-\(.*\)\.tar\.gz/\1/')
DB_BACKUP="$BACKUP_DIR/dev.db.$BACKUP_DATE"

if [ -f "$DB_BACKUP" ]; then
    log "Restaurando banco de dados..."
    cp $DB_BACKUP plataforma/prisma/dev.db
fi

# Reinstalar dependências
log "Reinstalando dependências..."
cd plataforma
npm ci

# Regenerar Prisma Client
npx prisma generate

# Rebuild
log "Recriando build..."
npm run build

# Reiniciar aplicação
log "Reiniciando aplicação..."
pm2 restart $APP_NAME

# Verificar
sleep 5
if curl -s http://localhost:17011 > /dev/null; then
    log "✅ Rollback concluído com sucesso!"
    log "📦 Estado anterior salvo em: $BACKUP_DIR/pre-rollback-$TIMESTAMP.tar.gz"
    rm -rf /var/www/inutech/plataforma.old
else
    error "❌ Rollback falhou. Estado anterior em: plataforma.old"
fi
```

### Tornar Scripts Executáveis

```bash
cd /var/www/inutech/plataforma/scripts
chmod +x deploy-initial.sh deploy-update.sh rollback.sh
```

---

## 📊 Monitoramento e Logs

### Configurar Logrotate

Criar arquivo `/etc/logrotate.d/inutech`:

```
/var/log/inutech/*.log {
    daily
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data www-data
    sharedscripts
    postrotate
        pm2 reloadLogs
    endscript
}
```

### Visualizar Logs

```bash
# Logs do PM2
pm2 logs inutech-plataforma

# Logs do Nginx
sudo tail -f /var/log/nginx/inutech-access.log
sudo tail -f /var/log/nginx/inutech-error.log

# Logs da aplicação
tail -f /var/log/inutech/out.log
tail -f /var/log/inutech/error.log

# Logs do sistema
sudo journalctl -u nginx -f
```

### Monitoramento do PM2

```bash
# Dashboard interativo
pm2 monit

# Métricas
pm2 describe inutech-plataforma

# Lista de processos
pm2 list
```

---

## 💾 Backup e Manutenção

### Script de Backup Automático

Criar arquivo `/var/www/inutech/scripts/backup-cron.sh`:

```bash
#!/bin/bash
# backup-cron.sh - Backup automático diário

BACKUP_DIR="/var/www/inutech/backups"
APP_DIR="/var/www/inutech/plataforma"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Criar backup
tar -czf $BACKUP_DIR/auto-backup-$TIMESTAMP.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    -C /var/www/inutech plataforma

# Backup do banco
cp $APP_DIR/prisma/dev.db $BACKUP_DIR/auto-dev.db.$TIMESTAMP

# Manter últimos 30 dias
find $BACKUP_DIR -name "auto-backup-*.tar.gz" -mtime +30 -delete
find $BACKUP_DIR -name "auto-dev.db.*" -mtime +30 -delete

echo "Backup criado: $TIMESTAMP"
```

### Configurar Cron

```bash
# Editar crontab
crontab -e

# Adicionar linha para backup diário às 3h
0 3 * * * /var/www/inutech/scripts/backup-cron.sh >> /var/log/inutech/backup.log 2>&1
```

---

## 🔍 Troubleshooting

### Problema 1: Aplicação não inicia

```bash
# Verificar logs
pm2 logs inutech-plataforma --lines 50

# Verificar porta em uso
sudo lsof -i :17011

# Testar diretamente
cd /var/www/inutech/plataforma
NODE_ENV=production npm start
```

### Problema 2: Nginx retorna 502 Bad Gateway

```bash
# Verificar se aplicação está rodando
pm2 status inutech-plataforma

# Verificar logs do Nginx
sudo tail -50 /var/log/nginx/inutech-error.log

# Testar backend diretamente
curl http://localhost:17011

# Reiniciar serviços
pm2 restart inutech-plataforma
sudo systemctl restart nginx
```

### Problema 3: Banco de dados corrompido

```bash
# Restaurar do backup
cd /var/www/inutech/backups
ls -lht dev.db.* | head -5

# Copiar backup
cp dev.db.TIMESTAMP /var/www/inutech/plataforma/prisma/dev.db

# Reiniciar aplicação
pm2 restart inutech-plataforma
```

### Problema 4: Build falha

```bash
# Limpar cache e reconstruir
cd /var/www/inutech/plataforma
rm -rf .next node_modules
npm cache clean --force
npm install
npm run build
```

### Problema 5: SSL não funciona

```bash
# Testar renovação
sudo certbot renew --dry-run

# Verificar certificados
sudo certbot certificates

# Reobter certificado (se expirado)
sudo certbot --nginx -d www.inutech.org.br --force-renewal
```

---

## ✅ Checklist de Deploy

### Pré-Deploy

- [ ] Servidor Debian atualizado
- [ ] Node.js 20 LTS instalado
- [ ] Nginx instalado e configurado
- [ ] PM2 instalado globalmente
- [ ] Domínio apontando para servidor
- [ ] Firewall configurado (portas 80/443)
- [ ] Usuário com permissões adequadas

### Deploy Inicial

- [ ] Diretórios criados (`/var/www/inutech/plataforma`)
- [ ] Código clonado/copiado
- [ ] Dependências instaladas (`npm ci`)
- [ ] Build criado (`npm run build`)
- [ ] Banco configurado (`npx prisma db push`)
- [ ] Dados migrados (`npm run db:seed`)
- [ ] PM2 configurado e aplicação rodando
- [ ] Nginx configurado
- [ ] Site habilitado no Nginx
- [ ] SSL configurado com Let's Encrypt
- [ ] Backup inicial criado

### Pós-Deploy

- [ ] Aplicação acessível via HTTPS
- [ ] APIs respondendo corretamente
- [ ] Logs sendo gerados
- [ ] PM2 salvo e configurado para iniciar no boot
- [ ] Cron de backup configurado
- [ ] Monitoramento configurado
- [ ] Documentação atualizada
- [ ] Equipe notificada

### Testes

- [ ] Acesso via navegador funciona
- [ ] APIs retornam dados corretos
- [ ] Autenticação Google OAuth funcionando
- [ ] Blog e revista funcionando
- [ ] Laboratórios acessíveis
- [ ] SSL válido e ativo
- [ ] Redirect HTTP → HTTPS funcionando
- [ ] Performance aceitável (< 2s)
- [ ] Logs sendo escritos corretamente

---

## 🎯 Resumo de Comandos Essenciais

### Deploy Inicial Completo

```bash
# 1. Preparar ambiente (uma vez)
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx
sudo npm install -g pm2
pm2 startup systemd

# 2. Deploy da aplicação
cd /var/www/inutech/plataforma
npm ci
npx prisma generate
npx prisma db push
npm run db:seed
npm run build
pm2 start ecosystem.config.js
pm2 save

# 3. Configurar Nginx
sudo ln -s /etc/nginx/sites-available/www.inutech.org.br /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 4. SSL
sudo certbot --nginx -d www.inutech.org.br
```

### Atualização Rápida

```bash
cd /var/www/inutech/plataforma
./scripts/deploy-update.sh
```

### Rollback Rápido

```bash
cd /var/www/inutech/plataforma
./scripts/rollback.sh
```

### Monitoramento Rápido

```bash
# Status geral
pm2 status

# Logs em tempo real
pm2 logs inutech-plataforma

# Métricas
pm2 monit

# Nginx logs
sudo tail -f /var/log/nginx/inutech-*.log
```

---

## 📞 Suporte e Contatos

**Equipe de Desenvolvimento:**

- Email: contato@inutech.org.br
- Fone: [+55 61 9 8128 2855](http://wa.me/5561981282855)
- LinkedIn: [iNuTech iCT](https://www.linkedin.com/company/institutonutech/)
- Website: [inutech.org.br](https://inutech.org.br/)

**Em caso de problemas críticos:**

1. Verificar logs: `pm2 logs inutech-plataforma`
2. Executar rollback: `./scripts/rollback.sh`
3. Contatar equipe de desenvolvimento

---

**📅 Data:** Janeiro 2025
**📝 Versão:** 1.0
**✍️ Autor:** Equipe DEV iNuTech
**🔄 Última Atualização:** 07/01/2025

---

**✅ Plano de Deploy Completo - iNuTech iCT Plataforma em Debian com Nginx**
