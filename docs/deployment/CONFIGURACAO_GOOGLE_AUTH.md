# 🔐 Configuração da Autenticação Google OAuth

## 📋 Pré-requisitos

- Conta Google
- Acesso ao Google Cloud Console
- Domínio `inutech.org.br` configurado

## 🚀 Passo a Passo

### **1. Criar Projeto no Google Cloud Console**

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Faça login com sua conta Google
3. Crie um novo projeto ou selecione um existente
4. Ative a faturação (necessário para OAuth)

### **2. Habilitar APIs Necessárias**

1. Vá em **"APIs & Services" > "Library"**
2. Procure e habilite:
   - **Google+ API**
   - **Google Identity API**
   - **Google OAuth2 API**

### **3. Configurar Tela de Consentimento OAuth**

1. Vá em **"APIs & Services" > "OAuth consent screen"**
2. Selecione **"External"**
3. Preencha as informações:

```
App name: iNuTech iCT
User support email: admin@inutech.org.br
App logo: [Upload logo do iNuTech]
App domain: inutech.org.br
Developer contact information: admin@inutech.org.br
```

4. Em **"Scopes"**, adicione:

   - `openid`
   - `email`
   - `profile`
5. Em **"Test users"**, adicione emails de teste:

   - `admin@inutech.org.br`
   - `andre@inutech.org.br`
   - `ismael@inutech.org.br`

### **4. Criar Credenciais OAuth 2.0**

1. Vá em **"APIs & Services" > "Credentials"**
2. Clique em **"Create Credentials" > "OAuth 2.0 Client IDs"**
3. Selecione **"Web application"**
4. Configure:

```
Name: iNuTech Web Client

Authorized JavaScript origins:
- http://localhost:3000
- http://localhost:3001
- https://inutech.org.br
- https://www.inutech.org.br

Authorized redirect URIs:
- http://localhost:3000/api/auth/callback/google
- http://localhost:3001/api/auth/callback/google
- https://inutech.org.br/api/auth/callback/google
- https://www.inutech.org.br/api/auth/callback/google
```

5. Clique em **"Create"**
6. **Copie o Client ID e Client Secret**

### **5. Configurar Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google OAuth Configuration
GOOGLE_CLIENT_ID=seu_client_id_aqui
GOOGLE_CLIENT_SECRET=seu_client_secret_aqui

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=gerar_uma_chave_secreta_aleatoria

# Database (SQLite for development)
DATABASE_URL="file:./dev.db"

# Environment
NODE_ENV=development
```

### **6. Gerar NEXTAUTH_SECRET**

Execute no terminal:

```bash
openssl rand -base64 32
```

Ou use um gerador online de chaves secretas.

### **7. Configurar Banco de Dados**

Execute os comandos:

```bash
# Instalar dependências
npm install

# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma db push

# Verificar banco
npx prisma studio
```

### **8. Testar a Configuração**

1. Inicie a aplicação:

```bash
npm run dev
```

2. Acesse: `http://localhost:3000`
3. Clique em "Entrar" no header
4. Teste o login com um email `@inutech.org.br`

## 🔒 Configurações de Segurança

### **Domínios Permitidos**

A aplicação está configurada para aceitar apenas emails do domínio `@inutech.org.br`.

### **Roles e Permissões**

- **Admin**: Acesso total
- **Researcher**: Acesso a laboratórios e Obsidian
- **Student**: Acesso limitado
- **Guest**: Acesso básico

### **Emails Administradores**

```javascript
adminEmails: [
  'webmaster@inutech.org.br',
  'andrehsiqueira@inutech.org.br',
  'ismael.costa@inutech.org.br'
]
```

## 🚨 Troubleshooting

### **Erro: "client_id is required"**

- Verifique se as variáveis de ambiente estão configuradas
- Reinicie a aplicação após configurar o `.env.local`

### **Erro: "Access Denied"**

- Verifique se o email é do domínio `@inutech.org.br`
- Confirme se o domínio está na lista de domínios autorizados

### **Erro: "Invalid redirect URI"**

- Verifique se as URIs de redirecionamento estão corretas no Google Console
- Confirme se o `NEXTAUTH_URL` está correto

### **Erro de Banco de Dados**

- Execute `npx prisma generate`
- Execute `npx prisma db push`
- Verifique se o SQLite está funcionando

## 📞 Suporte

Para problemas com a configuração:

- Email: `webmaster@inutech.org.br`
- Documentação: [NextAuth.js](https://next-auth.js.org/)
- Google Cloud: [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)

---

**✅ Após seguir todos os passos, a autenticação Google estará funcionando perfeitamente!**
