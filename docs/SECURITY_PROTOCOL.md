# 🛡️ PROTOCOLO DE SEGURANÇA - iNuTech iCT

## ⚠️ **REGRA FUNDAMENTAL: NUNCA MODIFICAR ARQUIVOS SENSÍVEIS**

### 🚨 **ARQUIVOS PROTEGIDOS (NUNCA TOCAR)**
```
.env*
*.env
.env.local
.env.development.local
.env.test.local
.env.production.local
*.db
*.db-journal
prisma/dev.db*
credentials/
secrets/
keys/
*.key
*.pem
*.p12
*.pfx

# Arquivos de configuração críticos
lib/auth-config.ts         # ⚠️ CRÍTICO: Configuração do NextAuth
```

### 🔒 **PROTOCOLO OBRIGATÓRIO**

#### **ANTES de qualquer modificação:**
1. ✅ **SEMPRE** perguntar explicitamente sobre arquivos sensíveis
2. ✅ **SEMPRE** criar backup antes de modificar
3. ✅ **SEMPRE** verificar se há configurações funcionais
4. ✅ **NUNCA** assumir que arquivos podem ser modificados

#### **DURANTE modificações:**
1. ✅ **SEMPRE** preservar configurações existentes
2. ✅ **SEMPRE** manter funcionalidades ativas
3. ✅ **SEMPRE** documentar mudanças
4. ✅ **NUNCA** sobrescrever sem backup

#### **APÓS modificações:**
1. ✅ **SEMPRE** testar funcionalidades críticas
2. ✅ **SEMPRE** verificar se nada foi quebrado
3. ✅ **SEMPRE** documentar o que foi alterado
4. ✅ **SEMPRE** manter rollback disponível

### 🚫 **PROIBIÇÕES ABSOLUTAS**

#### **NUNCA FAZER:**
- ❌ Modificar arquivos `.env*` sem autorização
- ❌ Modificar `lib/auth-config.ts` sem backup
- ❌ Sobrescrever configurações funcionais
- ❌ Deletar backups ou arquivos de configuração
- ❌ Assumir que configurações podem ser alteradas
- ❌ Quebrar funcionalidades existentes
- ❌ Modificar credenciais ou chaves
- ❌ Alterar configurações de banco de dados
- ❌ Modificar URLs de callback ou redirecionamento
- ❌ Alterar listas de domínios/emails permitidos sem aprovação

#### **SEMPRE FAZER:**
- ✅ Perguntar antes de tocar em arquivos sensíveis
- ✅ Criar backup antes de qualquer modificação
- ✅ Preservar funcionalidades existentes
- ✅ Testar após qualquer mudança
- ✅ Documentar todas as alterações
- ✅ Manter rollback disponível

### 🔧 **PROCEDIMENTOS DE SEGURANÇA**

#### **1. Verificação Prévia**
```bash
# SEMPRE verificar antes de modificar
ls -la .env*
cat .env.local | grep -E "(GOOGLE|DATABASE|SECRET)"
```

#### **2. Backup Obrigatório**
```bash
# SEMPRE criar backup antes de modificar
cp .env.local .env.local.backup.$(date +%Y%m%d_%H%M%S)

# Para arquivos de configuração críticos
cp lib/auth-config.ts lib/auth-config.ts.backup.$(date +%Y%m%d_%H%M%S)
```

#### **3. Teste Pós-Modificação**
```bash
# SEMPRE testar após modificações
npm run dev
# Verificar se login Google funciona
# Verificar se banco de dados conecta
# Verificar se todas as funcionalidades estão ativas
```

### 📋 **CHECKLIST DE SEGURANÇA**

#### **Antes de qualquer modificação:**
- [ ] Identifiquei todos os arquivos sensíveis?
- [ ] Criei backup de todos os arquivos que serão modificados?
- [ ] Perguntei explicitamente sobre permissão para modificar?
- [ ] Verifiquei se há configurações funcionais que não devem ser alteradas?
- [ ] Documentei o que será modificado?

#### **Durante a modificação:**
- [ ] Preservei todas as configurações existentes?
- [ ] Mantive todas as funcionalidades ativas?
- [ ] Não quebrei nenhuma integração?
- [ ] Documentei todas as mudanças feitas?

#### **Após a modificação:**
- [ ] Testei todas as funcionalidades críticas?
- [ ] Verifiquei se o login Google ainda funciona?
- [ ] Confirmei que o banco de dados ainda conecta?
- [ ] Validei que todas as integrações estão funcionando?
- [ ] Documentei todas as alterações realizadas?

### 🚨 **PROCEDIMENTOS DE EMERGÊNCIA**

#### **Se algo foi quebrado:**
1. **PARAR** imediatamente todas as modificações
2. **RESTAURAR** backup mais recente
3. **TESTAR** se funcionalidades foram restauradas
4. **COMUNICAR** o que aconteceu
5. **DOCUMENTAR** o incidente

#### **Comandos de Restauração:**
```bash
# Restaurar backup mais recente
cp .env.local.backup.* .env.local

# Verificar se foi restaurado
cat .env.local

# Testar aplicação
npm run dev
```

### 📞 **CONTATOS DE EMERGÊNCIA**

- **Administrador**: contato@inutech.org.br
- **Desenvolvedor**: ismael.costa@inutech.org.br
- **WhatsApp**: [+55 61 9 8128 2855](http://wa.me/5561981282855)

### 🏆 **COMPROMISSO DE SEGURANÇA**

**EU, ASSISTENTE DE IA, COMPROMETO-ME A:**

1. ✅ **NUNCA** modificar arquivos sensíveis sem autorização explícita
2. ✅ **SEMPRE** criar backup antes de qualquer modificação
3. ✅ **SEMPRE** preservar funcionalidades existentes
4. ✅ **SEMPRE** perguntar antes de tocar em configurações
5. ✅ **SEMPRE** testar após modificações
6. ✅ **SEMPRE** documentar alterações
7. ✅ **SEMPRE** manter rollback disponível

**Este protocolo é OBRIGATÓRIO e deve ser seguido em TODAS as interações.**

---

**Desenvolvido com ❤️ pelo iNuTech iCT**  
*Protocolo de Segurança v1.0 - Janeiro 2025*
