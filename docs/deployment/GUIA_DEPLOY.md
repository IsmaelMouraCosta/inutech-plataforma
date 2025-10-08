# 🚀 Guia de Deploy - iNuTech iCT Plataforma

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Pré-requisitos](#pré-requisitos)
3. [Deploy Inicial (Deploy-Initial)](#deploy-inicial)
4. [Deploy de Atualização (Deploy-Update)](#deploy-de-atualização)
5. [Scripts Disponíveis](#scripts-disponíveis)
6. [Troubleshooting](#troubleshooting)
7. [Comandos Úteis](#comandos-úteis)

---

## 🎯 Visão Geral

Este guia apresenta o processo completo de deploy da aplicação iNuTech iCT Plataforma utilizando os scripts automatizados desenvolvidos para facilitar o processo de instalação e atualização.

### **Informações do Servidor:**
- **IP**: 177.153.59.217
- **Usuário**: masternutech
- **Domínio**: www.inutech.org.br
- **Porta da Aplicação**: 17011
- **Diretório**: /var/www/inutech/plataforma

---

## 📋 Pré-requisitos

### **No Seu Computador Local:**
- Git instalado
- Acesso SSH ao servidor
- Chave SSH configurada
- Projeto clonado localmente

### **No Servidor:**
- Debian 11/12 ou Ubuntu 20.04+
- Usuário `masternutech` com sudo
- Acesso à internet
- Portas 80, 443, 22 abertas

---

## 🚀 Deploy Inicial (Deploy-Initial)

### **Fase 1: Preparação do Servidor (Primeira vez)**

#### 1.1. Conectar ao Servidor

```bash
# Conectar via SSH
ssh masternutech@177.153.59.217
```

#### 1.2. Executar Script de Configuração

```bash
# No servidor, executar configuração automática
cd /tmp
wget https://raw.githubusercontent.com/IsmaelMouraCosta/inutech-plataforma/main/scripts/setup-server.sh
chmod +x setup-server.sh
./setup-server.sh
```

**O que o script faz:**
- ✅ Atualiza o sistema
- ✅ Instala Node.js 20 LTS
- ✅ Instala Nginx
- ✅ Instala PM2
- ✅ Instala SQLite3
- ✅ Instala Certbot
- ✅ Configura firewall
- ✅ Cria diretórios necessários
- ✅ Configura permissões

#### 1.3. Verificar Instalação

```bash
# Verificar se tudo foi instalado corretamente
node --version    # deve mostrar v20.x.x
nginx --version   # deve mostrar versão do Nginx
pm2 --version     # deve mostrar versão do PM2
sqlite3 --version # deve mostrar versão do SQLite3
certbot --version # deve mostrar versão do Certbot
```

### **Fase 2: Deploy da Aplicação**

#### 2.1. No Seu Computador Local

```bash
# Navegar para o diretório do projeto
cd inutech-plataforma

# Executar deploy automático
./scripts/deploy-to-server.sh
```

**O que o script faz:**
- ✅ Cria backup da versão anterior (se existir)
- ✅ Transfere arquivos via rsync
- ✅ Instala dependências (`npm ci`)
- ✅ Gera Prisma Client (`npx prisma generate`)
- ✅ Configura banco de dados (`npx prisma db push`)
- ✅ Cria build de produção (`npm run build`)
- ✅ Inicia aplicação com PM2
- ✅ Salva configuração do PM2
- ✅ Testa se aplicação está respondendo

#### 2.2. Verificar Deploy

```bash
# Conectar ao servidor para verificar
ssh masternutech@177.153.59.217

# Verificar status da aplicação
pm2 status

# Ver logs em tempo real
pm2 logs inutech-plataforma

# Testar aplicação localmente
curl http://localhost:17011
```

### **Fase 3: Configuração do Nginx**

#### 3.1. Criar Configuração do Site

```bash
# No servidor
sudo nano /etc/nginx/sites-available/www.inutech.org.br
```

**Adicionar configuração:**

```nginx
# /etc/nginx/sites-available/www.inutech.org.br

upstream inutech_backend {
    server 127.0.0.1:17011;
    keepalive 64;
}

server {
    listen 80;
    listen [::]:80;
    server_name www.inutech.org.br inutech.org.br;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

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

    location /_next/static/ {
        alias /var/www/inutech/plataforma/.next/static/;
        expires 365d;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

    location /static/ {
        alias /var/www/inutech/plataforma/public/;
        expires 7d;
        access_log off;
        add_header Cache-Control "public";
    }

    access_log /var/log/nginx/inutech-access.log;
    error_log /var/log/nginx/inutech-error.log;
}
```

#### 3.2. Ativar Site

```bash
# Criar link simbólico
sudo ln -s /etc/nginx/sites-available/www.inutech.org.br /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Recarregar Nginx
sudo systemctl reload nginx
```

### **Fase 4: Configuração SSL**

#### 4.1. Configurar DNS

No seu provedor de domínio, adicionar:

```
Tipo: A
Nome: www
Valor: 177.153.59.217
TTL: 3600
```

Aguarde 10-30 minutos para propagação.

#### 4.2. Obter Certificado SSL

```bash
# No servidor, após DNS propagado
sudo certbot --nginx -d www.inutech.org.br -d inutech.org.br
```

**Responder:**
- Email: `contato@inutech.org.br`
- Aceitar termos: `Y`
- Redirecionar HTTP → HTTPS: `2`

#### 4.3. Verificar SSL

```bash
# Testar renovação
sudo certbot renew --dry-run

# Verificar certificados
sudo certbot certificates
```

---

## 🔄 Deploy de Atualização (Deploy-Update)

### **Processo Automático**

#### 1. Fazer Mudanças no Código

```bash
# No seu computador local
# Fazer alterações no código...
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

#### 2. Executar Deploy de Atualização

```bash
# No servidor
ssh masternutech@177.153.59.217
cd /var/www/inutech/plataforma

# Executar script de atualização
./scripts/deploy-update.sh
```

**O que o script faz:**
- ✅ Cria backup da versão atual
- ✅ Atualiza código do Git
- ✅ Instala/atualiza dependências
- ✅ Atualiza Prisma Client
- ✅ Aplica migrações do banco
- ✅ Recria build de produção
- ✅ Recarrega aplicação no PM2 (sem downtime)
- ✅ Testa se aplicação está funcionando
- ✅ Limpa backups antigos

#### 3. Verificar Atualização

```bash
# Verificar status
pm2 status inutech-plataforma

# Ver logs
pm2 logs inutech-plataforma --lines 50

# Testar aplicação
curl http://localhost:17011
```

### **Processo Manual (Se necessário)**

#### 1. Backup Manual

```bash
# No servidor
cd /var/www/inutech
tar -czf backups/manual-backup-$(date +%Y%m%d_%H%M%S).tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    plataforma/
```

#### 2. Atualização Manual

```bash
# Atualizar código
cd /var/www/inutech/plataforma
git pull origin main

# Instalar dependências
npm ci

# Atualizar Prisma
npx prisma generate
npx prisma db push

# Rebuild
npm run build

# Reiniciar aplicação
pm2 restart inutech-plataforma
```

---

## 🔧 Scripts Disponíveis

### **Scripts de Deploy**

| Script | Função | Quando Usar |
|--------|--------|--------------|
| `setup-server.sh` | Configuração inicial do servidor | Primeira vez |
| `deploy-to-server.sh` | Deploy completo da aplicação | Deploy inicial |
| `deploy-update.sh` | Atualização da aplicação | Atualizações |
| `rollback.sh` | Reverter para versão anterior | Em caso de problemas |

### **Scripts de Verificação**

| Script | Função | Quando Usar |
|--------|--------|--------------|
| `check-server-requirements.sh` | Verificar requisitos do servidor | Antes do deploy |
| `deploy-initial.sh` | Deploy inicial completo | Deploy inicial |
| `deploy-update.sh` | Atualização completa | Atualizações |

### **Comandos de Execução**

```bash
# Configuração do servidor (primeira vez)
ssh masternutech@177.153.59.217 'wget -O - https://raw.githubusercontent.com/IsmaelMouraCosta/inutech-plataforma/main/scripts/setup-server.sh | bash'

# Deploy inicial
./scripts/deploy-to-server.sh

# Atualização
ssh masternutech@177.153.59.217 'cd /var/www/inutech/plataforma && ./scripts/deploy-update.sh'

# Rollback
ssh masternutech@177.153.59.217 'cd /var/www/inutech/plataforma && ./scripts/rollback.sh'
```

---

## 🔍 Troubleshooting

### **Problema 1: Deploy falha**

```bash
# Verificar logs do deploy
ssh masternutech@177.153.59.217 'pm2 logs inutech-plataforma --lines 100'

# Verificar se aplicação está rodando
ssh masternutech@177.153.59.217 'pm2 status'

# Testar manualmente
ssh masternutech@177.153.59.217 'cd /var/www/inutech/plataforma && npm run build'
```

### **Problema 2: Aplicação não inicia**

```bash
# Verificar dependências
ssh masternutech@177.153.59.217 'cd /var/www/inutech/plataforma && npm ci'

# Verificar Prisma
ssh masternutech@177.153.59.217 'cd /var/www/inutech/plataforma && npx prisma generate'

# Reiniciar PM2
ssh masternutech@177.153.59.217 'pm2 restart inutech-plataforma'
```

### **Problema 3: Nginx retorna 502**

```bash
# Verificar se aplicação está rodando
ssh masternutech@177.153.59.217 'pm2 status inutech-plataforma'

# Verificar logs do Nginx
ssh masternutech@177.153.59.217 'sudo tail -50 /var/log/nginx/inutech-error.log'

# Testar backend
ssh masternutech@177.153.59.217 'curl http://localhost:17011'

# Reiniciar serviços
ssh masternutech@177.153.59.217 'pm2 restart inutech-plataforma && sudo systemctl restart nginx'
```

### **Problema 4: SSL não funciona**

```bash
# Verificar DNS
nslookup www.inutech.org.br

# Testar renovação
ssh masternutech@177.153.59.217 'sudo certbot renew --dry-run'

# Reobter certificado
ssh masternutech@177.153.59.217 'sudo certbot --nginx -d www.inutech.org.br --force-renewal'
```

---

## 🛠️ Comandos Úteis

### **Monitoramento**

```bash
# Status da aplicação
ssh masternutech@177.153.59.217 'pm2 status'

# Logs em tempo real
ssh masternutech@177.153.59.217 'pm2 logs inutech-plataforma'

# Monitoramento de recursos
ssh masternutech@177.153.59.217 'pm2 monit'

# Status do Nginx
ssh masternutech@177.153.59.217 'sudo systemctl status nginx'
```

### **Manutenção**

```bash
# Reiniciar aplicação
ssh masternutech@177.153.59.217 'pm2 restart inutech-plataforma'

# Parar aplicação
ssh masternutech@177.153.59.217 'pm2 stop inutech-plataforma'

# Iniciar aplicação
ssh masternutech@177.153.59.217 'pm2 start inutech-plataforma'

# Reiniciar Nginx
ssh masternutech@177.153.59.217 'sudo systemctl restart nginx'
```

### **Backup e Restore**

```bash
# Criar backup manual
ssh masternutech@177.153.59.217 'cd /var/www/inutech && tar -czf backups/manual-$(date +%Y%m%d_%H%M%S).tar.gz --exclude="node_modules" --exclude=".next" plataforma/'

# Listar backups
ssh masternutech@177.153.59.217 'ls -la /var/www/inutech/backups/'

# Restaurar backup
ssh masternutech@177.153.59.217 'cd /var/www/inutech/plataforma && ./scripts/rollback.sh'
```

### **Logs e Debug**

```bash
# Logs da aplicação
ssh masternutech@177.153.59.217 'tail -f /var/log/inutech/out.log'

# Logs de erro
ssh masternutech@177.153.59.217 'tail -f /var/log/inutech/error.log'

# Logs do Nginx
ssh masternutech@177.153.59.217 'sudo tail -f /var/log/nginx/inutech-access.log'

# Logs de erro do Nginx
ssh masternutech@177.153.59.217 'sudo tail -f /var/log/nginx/inutech-error.log'
```

---

## 📊 Checklist de Deploy

### **Deploy Inicial**

- [ ] Servidor configurado com `setup-server.sh`
- [ ] DNS configurado (www.inutech.org.br → 177.153.59.217)
- [ ] Aplicação deployada com `deploy-to-server.sh`
- [ ] Nginx configurado e ativo
- [ ] SSL configurado com Let's Encrypt
- [ ] Aplicação acessível via HTTPS
- [ ] PM2 configurado para iniciar no boot
- [ ] Backup inicial criado

### **Deploy de Atualização**

- [ ] Código atualizado no repositório
- [ ] Backup criado automaticamente
- [ ] Deploy executado com `deploy-update.sh`
- [ ] Aplicação testada e funcionando
- [ ] Logs verificados
- [ ] Performance verificada

### **Pós-Deploy**

- [ ] Aplicação acessível via navegador
- [ ] APIs respondendo corretamente
- [ ] Autenticação funcionando
- [ ] SSL válido e ativo
- [ ] Logs sendo gerados
- [ ] Monitoramento ativo

---

## 📞 Suporte

**Em caso de problemas:**

1. **Verificar logs**: `pm2 logs inutech-plataforma`
2. **Executar rollback**: `./scripts/rollback.sh`
3. **Contatar equipe**: contato@inutech.org.br

**Documentação adicional:**
- [QUICK_START.md](QUICK_START.md) - Guia rápido
- [PLANO_DEPLOY_PRD.md](PLANO_DEPLOY_PRD.md) - Plano completo
- [README.md](../../README.md) - Documentação da aplicação

---

**📅 Data:** Janeiro 2025  
**📝 Versão:** 1.0  
**✍️ Autor:** Equipe DEV iNuTech  
**🔄 Última Atualização:** 07/01/2025

---

**✅ Guia de Deploy Completo - iNuTech iCT Plataforma**
