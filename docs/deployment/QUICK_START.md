# 🚀 Guia Rápido - Deploy iNuTech iCT Plataforma

## ⚡ Deploy em 3 Passos

### 1️⃣ Configurar o Servidor (Uma vez)

No **servidor** (177.153.59.217):

```bash
# Baixar script de configuração
wget https://raw.githubusercontent.com/IsmaelMouraCosta/inutech-plataforma/main/scripts/setup-server.sh

# Ou transferir do seu computador:
scp scripts/setup-server.sh masternutech@177.153.59.217:/tmp/

# Executar no servidor
ssh masternutech@177.153.59.217
cd /tmp
chmod +x setup-server.sh
./setup-server.sh
```

### 2️⃣ Configurar DNS

No seu provedor de domínio, adicione:

```
Tipo: A
Nome: plataforma
Valor: 177.153.59.217
TTL: 3600
```

Resultado: `www.inutech.org.br` → `177.153.59.217:17011`

Aguarde 10-30 minutos para propagação.

### 3️⃣ Deploy da Aplicação

No seu **computador local**:

```bash
cd inutech-plataforma
./scripts/deploy-to-server.sh
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
certbot --nginx -d www.inutech.org.br
```

Responda:

- Email: `contato@inutech.org.br`
- Aceitar termos: `Y`
- Redirecionar HTTP → HTTPS: `2`

---

## 📊 Verificar Status

```bash
# Status da aplicação
ssh masternutech@177.153.59.217 'pm2 status'

# Ver logs em tempo real
ssh masternutech@177.153.59.217 'pm2 logs inutech-plataforma'

# Status do Nginx
ssh masternutech@177.153.59.217 'systemctl status nginx'
```

---

## 🔄 Atualizações Futuras

```bash
# Fazer mudanças no código...

# Deploy
./scripts/deploy-to-server.sh
```

Pronto! ✅

---

## 🆘 Comandos Úteis

### No Servidor

```bash
# Reiniciar aplicação
pm2 restart inutech-plataforma

# Ver logs
pm2 logs inutech-plataforma

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
ssh masternutech@177.153.59.217

# Transferir arquivo específico
scp arquivo.js masternutech@177.153.59.217:/var/www/inutech/plataforma/

# Executar comando remoto
ssh masternutech@177.153.59.217 'pm2 status'
```

---

## 🐛 Problemas Comuns

### Aplicação não inicia

```bash
ssh masternutech@177.153.59.217
cd /var/www/inutech/plataforma
npm run build
pm2 restart inutech-plataforma
pm2 logs inutech-plataforma
```

### Erro 502 (Bad Gateway)

```bash
# Verificar se aplicação está rodando
ssh masternutech@177.153.59.217 'pm2 status'

# Se não estiver, iniciar
ssh masternutech@177.153.59.217 'cd /var/www/inutech/plataforma && pm2 start ecosystem.config.js'
```

### DNS não resolve

```bash
# Verificar DNS
nslookup www.inutech.org.br

# Aguardar propagação (10min - 2h geralmente)
```

### SSL não funciona

```bash
# Verificar se DNS está propagado primeiro!
# Então rodar novamente:
ssh masternutech@177.153.59.217 'certbot --nginx -d www.inutech.org.br'
```

---

## 📁 Estrutura no Servidor

```
/var/www/inutech/
├── plataforma/           # Aplicação principal
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── prisma/
│   │   └── dev.db       # Banco de dados
│   ├── .env             # Variáveis de ambiente
│   └── ecosystem.config.js
│
├── backups/             # Backups automáticos
│   ├── plataforma-backup-20250107-143022.tar.gz
│   └── plataforma-backup-20250107-151534.tar.gz
│
└── /var/log/inutech/    # Logs
    ├── error.log
    └── out.log
```

---

## 📞 Referência Rápida

| Item                  | Valor                       |
| --------------------- | --------------------------- |
| **Servidor IP** | 177.153.59.217              |
| **Diretório**  | /var/www/inutech/plataforma |
| **Porta App**   | 17011 (interna)             |
| **Porta Nginx** | 80 (HTTP) / 443 (HTTPS)     |
| **Domínio**    | inutech.org.br              |
| **URL**         | https://www.inutech.org.br  |
| **Logs**        | /var/log/inutech/           |
| **Backups**     | /var/www/inutech/backups/   |

---

## 📚 Documentação Completa

Para mais detalhes, consulte:

- `PLANO_DEPLOY_PRD.md` - Guia completo passo a passo
- `README.md` - Documentação da aplicação

---

**Desenvolvido por iNuTech © 2025**
