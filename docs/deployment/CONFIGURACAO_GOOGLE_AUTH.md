# 🔐 Configuração Google OAuth - iNuTech iCT

## 🚨 **PROBLEMA IDENTIFICADO**

O erro 500 no login do Google está ocorrendo porque as variáveis de ambiente `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET` estão com valores placeholder.

## 🛠️ **SOLUÇÃO**

### 1️⃣ **Configurar Google Cloud Console**

#### **Passo 1: Acessar Google Cloud Console**
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Faça login com sua conta Google
3. Crie um novo projeto ou selecione um existente

#### **Passo 2: Ativar Google+ API**
1. No menu lateral, vá para **APIs & Services** > **Library**
2. Procure por **"Google+ API"**
3. Clique em **Enable**

#### **Passo 3: Criar Credenciais OAuth 2.0**
1. Vá para **APIs & Services** > **Credentials**
2. Clique em **+ CREATE CREDENTIALS** > **OAuth client ID**
3. Se for a primeira vez, configure a **OAuth consent screen**:
   - **User Type**: External
   - **App name**: iNuTech iCT Plataforma
   - **User support email**: contato@inutech.org.br
   - **Developer contact**: contato@inutech.org.br

#### **Passo 4: Configurar OAuth Client**
1. **Application type**: Web application
2. **Name**: iNuTech iCT - Web Client
3. **Authorized JavaScript origins**:
   ```
   http://localhost:17011
   https://seu-dominio.vercel.app
   ```
4. **Authorized redirect URIs**:
   ```
   http://localhost:17011/api/auth/callback/google
   https://seu-dominio.vercel.app/api/auth/callback/google
   ```

### 2️⃣ **Obter Credenciais**

Após criar o OAuth client, você receberá:
- **Client ID**: Uma string longa que começa com números
- **Client Secret**: Uma string secreta

### 3️⃣ **Configurar Variáveis de Ambiente**

#### **Para Desenvolvimento Local**
Edite o arquivo `.env.local`:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:17011"
NEXTAUTH_SECRET="desenvolvimento-local-secret-key-2025"

# Google OAuth - SUBSTITUA PELOS SEUS VALORES
GOOGLE_CLIENT_ID="seu-client-id-aqui"
GOOGLE_CLIENT_SECRET="seu-client-secret-aqui"
```

#### **Para Produção (Vercel)**
1. Acesse o dashboard do Vercel
2. Vá para **Settings** > **Environment Variables**
3. Adicione as variáveis:
   ```
   GOOGLE_CLIENT_ID = seu-client-id-aqui
   GOOGLE_CLIENT_SECRET = seu-client-secret-aqui
   NEXTAUTH_URL = https://seu-dominio.vercel.app
   NEXTAUTH_SECRET = uma-chave-secreta-forte
   ```

### 4️⃣ **Reiniciar Aplicação**

Após configurar as variáveis:

```bash
# Parar o servidor (Ctrl+C)
# Reiniciar
npm run dev
```

## 🔍 **Verificação**

### ✅ **Teste Local**
1. Acesse `http://localhost:17011`
2. Clique em **Login**
3. Selecione **Google**
4. Deve redirecionar para o Google OAuth
5. Após autorizar, deve retornar para o dashboard

### ✅ **Teste de Produção**
1. Faça deploy no Vercel
2. Acesse a URL de produção
3. Teste o login Google
4. Verifique se redireciona corretamente

## 🚨 **Problemas Comuns**

### **Erro 500 - Internal Server Error**
- ✅ **Causa**: Variáveis de ambiente não configuradas
- ✅ **Solução**: Configurar `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET`

### **Erro 400 - Invalid Client**
- ✅ **Causa**: Client ID incorreto
- ✅ **Solução**: Verificar se copiou o Client ID correto

### **Erro 403 - Access Denied**
- ✅ **Causa**: Domínio não autorizado
- ✅ **Solução**: Adicionar domínio nas **Authorized JavaScript origins**

### **Redirect URI Mismatch**
- ✅ **Causa**: URI de redirecionamento não configurada
- ✅ **Solução**: Adicionar `/api/auth/callback/google` nas **Authorized redirect URIs**

## 📋 **Checklist de Configuração**

- [ ] Google Cloud Console configurado
- [ ] Google+ API ativada
- [ ] OAuth consent screen configurado
- [ ] OAuth client criado
- [ ] Client ID obtido
- [ ] Client Secret obtido
- [ ] Variáveis de ambiente configuradas
- [ ] URIs de redirecionamento adicionadas
- [ ] Aplicação reiniciada
- [ ] Login testado localmente
- [ ] Deploy testado em produção

## 🔒 **Segurança**

### **Proteção das Credenciais**
- ✅ **Nunca** commite credenciais no Git
- ✅ **Use** `.env.local` para desenvolvimento
- ✅ **Configure** variáveis no Vercel para produção
- ✅ **Rotacione** credenciais periodicamente

### **Domínios Permitidos**
- ✅ **Desenvolvimento**: `localhost:17011`
- ✅ **Produção**: Seu domínio Vercel
- ✅ **Staging**: Domínio de teste (opcional)

## 📞 **Suporte**

Se ainda houver problemas:

1. **Verifique os logs** do console do navegador
2. **Verifique os logs** do terminal do Next.js
3. **Teste** com um projeto Google Cloud diferente
4. **Contate**: contato@inutech.org.br

---

**Desenvolvido com ❤️ pelo iNuTech iCT**  
*Configuração Google OAuth v1.0 - Janeiro 2025*