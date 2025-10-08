# 🚀 Guia Rápido - Deploy Themis MVP

## ⚡ Deploy em 3 Passos

### 1️⃣ Configurar o Servidor (Uma vez)

No **servidor** (177.153.59.17):

```bash
# Baixar script de configuração
wget https://raw.githubusercontent.com/seu-repo/setup-server.sh

# Ou transferir do seu computador:
scp setup-server.sh root@177.153.59.17:/tmp/

# Executar no servidor
ssh root@177.153.59.17
cd /tmp
chmod +x setup-server.sh
./setup-server.sh
```

### 2️⃣ Configurar DNS

No seu provedor de domínio, adicione:

```
Tipo: A
Nome: themis
Valor: 177.153.59.17
TTL: 3600
```

Resultado: `themis.dominio.com.br` → `177.153.59.17`

Aguarde 10-30 minutos para propagação.

### 3️⃣ Deploy da Aplicação

No seu **computador local**:

```bash
cd themis-mvp
./deploy-to-server.sh
```

O script faz automaticamente:
- ✅ Backup da versão anterior
- ✅ Transfer dos arquivos
- ✅ Instalação de dependências
- ✅ Build de produção
- ✅ Reinício da aplicação

---

## 🔐 Configurar SSL (Após DNS propagado)

No **servidor**:

```bash
certbot --nginx -d themis.dominio.com.br
```

Responda:
- Email: `seu@email.com`
- Aceitar termos: `Y`
- Redirecionar HTTP → HTTPS: `2`

---

## 📊 Verificar Status

```bash
# Status da aplicação
ssh root@177.153.59.17 'pm2 status'

# Ver logs em tempo real
ssh root@177.153.59.17 'pm2 logs themis-mvp'

# Status do Nginx
ssh root@177.153.59.17 'systemctl status nginx'
```

---

## 🔄 Atualizações Futuras

```bash
# Fazer mudanças no código...

# Deploy
./deploy-to-server.sh
```

Pronto! ✅

---

## 🆘 Comandos Úteis

### No Servidor

```bash
# Reiniciar aplicação
pm2 restart themis-mvp

# Ver logs
pm2 logs themis-mvp

# Monitorar recursos
pm2 monit

# Reiniciar Nginx
systemctl restart nginx

# Ver uso de recursos
htop  # ou: top
df -h  # espaço em disco
free -h  # memória
```

### Do Seu Computador

```bash
# Conectar ao servidor
ssh root@177.153.59.17

# Transferir arquivo específico
scp arquivo.js root@177.153.59.17:/opt/iNuTech/proto/

# Executar comando remoto
ssh root@177.153.59.17 'pm2 status'
```

---

## 🐛 Problemas Comuns

### Aplicação não inicia

```bash
ssh root@177.153.59.17
cd /opt/iNuTech/proto
npm run build
pm2 restart themis-mvp
pm2 logs themis-mvp
```

### Erro 502 (Bad Gateway)

```bash
# Verificar se aplicação está rodando
ssh root@177.153.59.17 'pm2 status'

# Se não estiver, iniciar
ssh root@177.153.59.17 'cd /opt/iNuTech/proto && pm2 start ecosystem.config.js'
```

### DNS não resolve

```bash
# Verificar DNS
nslookup themis.dominio.com.br

# Aguardar propagação (10min - 2h geralmente)
```

### SSL não funciona

```bash
# Verificar se DNS está propagado primeiro!
# Então rodar novamente:
ssh root@177.153.59.17 'certbot --nginx -d themis.dominio.com.br'
```

---

## 📁 Estrutura no Servidor

```
/opt/iNuTech/
├── proto/              # Aplicação principal
│   ├── src/
│   ├── public/
│   ├── prisma/
│   │   └── dev.db     # Banco de dados
│   ├── .env           # Variáveis de ambiente
│   └── ecosystem.config.js
│
├── backups/           # Backups automáticos
│   ├── themis-backup-20250930-143022.tar.gz
│   └── themis-backup-20250930-151534.tar.gz
│
└── /var/log/themis/   # Logs
    ├── error.log
    └── out.log
```

---

## 📞 Referência Rápida

| Item | Valor |
|------|-------|
| **Servidor IP** | 177.153.59.17 |
| **Diretório** | /opt/iNuTech/proto |
| **Porta App** | 32701 (interna) |
| **Porta Nginx** | 80 (HTTP) / 443 (HTTPS) |
| **Domínio** | themis.dominio.com.br |
| **URL** | https://themis.dominio.com.br |
| **Logs** | /var/log/themis/ |
| **Backups** | /opt/iNuTech/backups/ |

---

## 📚 Documentação Completa

Para mais detalhes, consulte:
- `DEPLOY_PRODUCTION.md` - Guia completo passo a passo
- `README.md` - Documentação da aplicação

---

**Desenvolvido por iNuTech © 2025**
