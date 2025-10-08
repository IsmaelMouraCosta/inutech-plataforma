# iNuTech iCT - Plataforma de Pesquisa Científica v2025.10.1

Uma plataforma moderna para divulgação científica, blog, revista científica e laboratórios virtuais do iNuTech iCT de Pesquisa Aplicada em Ciência, Tecnologia e Inovação.

> **🎯 Versão 2025.10.1** - Plataforma otimizada com Hero redesenhado, documentação completa de deploy, scripts automatizados e LGPD implementado.

## 🚀 Funcionalidades

### Área Pública

- **Blog Científico**: Artigos e publicações sobre ciência e tecnologia
- **Revista Científica**: Publicações revisadas por pares
- **Laboratórios Virtuais**: Ambientes online para prototipação e experimentação
- **Eventos**: Agenda de conferências, workshops e meetups
- **Institucional**: Informações sobre o instituto, regimento e documentos

### Área Restrita (Login Google)

- **Dashboard**: Painel de controle personalizado
- **Ferramentas Avançadas**: Acesso a laboratórios premium
- **Conteúdo Exclusivo**: Artigos e recursos restritos
- **Comunidade**: Networking com pesquisadores

## 🛠️ Tecnologias

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Autenticação**: NextAuth.js com Google OAuth
- **Database**: Prisma ORM com SQLite
- **UI Components**: Radix UI + Lucide React
- **Markdown**: React Markdown para conteúdo
- **Deploy**: Vercel (recomendado) + Debian/Nginx (produção)
- **Process Manager**: PM2
- **SSL**: Let's Encrypt

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta Google para OAuth

## 🚀 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/IsmaelMouraCosta/inutech-plataforma.git
cd inutech-plataforma
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:17011"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

4. **Configure o Google OAuth**

- Acesse [Google Cloud Console](https://console.cloud.google.com/)
- Crie um novo projeto ou selecione um existente
- Ative a API do Google+
- Crie credenciais OAuth 2.0
- Adicione `http://localhost:17011/api/auth/callback/google` como URI de redirecionamento

5. **Configure o banco de dados**

```bash
npx prisma generate
npx prisma db push
```

6. **Execute o projeto**

```bash
npm run dev
```

Acesse [http://localhost:17011](http://localhost:17011)

## ✨ Melhorias Recentes (v2025.9.3)

### 🎨 Interface e UX
- **Hero Component Redesenhado**: Layout moderno com animações fluidas
- **Padding Otimizado**: Espaçamento superior ajustado para melhor hierarquia visual
- **Animações Suaves**: Linhas onduladas animadas com gradientes
- **Design Responsivo**: Melhor experiência em todos os dispositivos

### 🚀 Deploy e Infraestrutura
- **Documentação Completa**: Guias detalhados de deploy
- **Scripts Automatizados**: Deploy, backup e rollback automatizados
- **Múltiplas Opções**: Vercel, Debian/Nginx, Google Cloud
- **SSL/HTTPS**: Configuração automática com Let's Encrypt
- **Monitoramento**: PM2 com logs centralizados

### 📚 Documentação
- **QUICK_START.md**: Deploy em 3 passos
- **PLANO_DEPLOY_PRD.md**: Guia completo (1475 linhas)
- **Scripts de Verificação**: Validação automática de requisitos
- **Troubleshooting**: Soluções para problemas comuns

## 🚀 Deploy em Produção

### Opção 1: Deploy Rápido (3 passos)

```bash
# 1. Configurar servidor (primeira vez)
scp scripts/setup-server.sh masternutech@177.153.59.217:/tmp/
ssh masternutech@177.153.59.217 'chmod +x /tmp/setup-server.sh && /tmp/setup-server.sh'

# 2. Configurar DNS
# Adicionar registro A: www.inutech.org.br → 177.153.59.217

# 3. Deploy automático
./scripts/deploy-to-server.sh
```

### Opção 2: Deploy Manual

Consulte a documentação completa:
- **[GUIA_DEPLOY.md](docs/deployment/GUIA_DEPLOY.md)** - Guia passo a passo
- **[QUICK_START.md](docs/deployment/QUICK_START.md)** - Guia rápido
- **[PLANO_DEPLOY_PRD.md](docs/deployment/PLANO_DEPLOY_PRD.md)** - Plano completo

### Opções de Hospedagem

| Plataforma | Custo | Dificuldade | Recomendado |
|------------|-------|-------------|-------------|
| **Vercel** | Gratuito | Fácil | ✅ Desenvolvimento |
| **Debian + Nginx** | Servidor próprio (177.153.59.217) | Médio | ✅ Produção |
| **Google Cloud** | Créditos nonprofit | Médio | ✅ Escalável |
| **Railway** | $5/mês | Fácil | ✅ Alternativa |

## 📊 Status do Projeto

### ✅ Funcionalidades Implementadas
- **Blog Científico**: Sistema completo com Markdown
- **Revista Científica**: Publicações revisadas por pares
- **Laboratórios Virtuais**: IA & ML, Robótica, Cibersegurança
- **Autenticação**: Google OAuth com NextAuth.js
- **Dashboard**: Área restrita para usuários
- **Deploy**: Scripts automatizados e documentação completa

### 🚧 Em Desenvolvimento
- **Sistema de Eventos**: Calendário e gestão
- **Laboratórios Avançados**: Prototipação com IA
- **Área Restrita**: Funcionalidades premium
- **Integração Obsidian**: Sistema de notas

### 📈 Métricas
- **Páginas**: 15+ páginas implementadas
- **Componentes**: 20+ componentes React
- **Documentação**: 2000+ linhas de documentação
- **Scripts**: 5+ scripts de automação
- **Cobertura**: 100% das funcionalidades principais

## 📁 Estrutura do Projeto (v2025.9.3)

```
├── app/                    # Next.js 14 App Router
│   ├── api/               # Rotas da API
│   ├── auth/              # Páginas de autenticação
│   ├── blog/              # Blog científico
│   ├── revista/           # Revista científica
│   ├── laboratorios/      # Laboratórios virtuais
│   ├── eventos/           # Eventos e agenda
│   ├── about/             # Páginas institucionais
│   └── dashboard/         # Área restrita
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Radix UI)
│   └── ...               # Componentes específicos
├── content/              # Conteúdo Markdown
│   ├── blog/            # Artigos do blog
│   └── revista/         # Artigos da revista
├── contexts/             # Contextos React
├── docs/                 # Documentação organizada
│   ├── dev/             # Arquitetura e desenvolvimento
│   ├── deployment/       # Deploy e hospedagem
│   │   ├── GUIA_DEPLOY.md        # Guia passo a passo
│   │   ├── QUICK_START.md        # Deploy rápido
│   │   ├── PLANO_DEPLOY_PRD.md   # Deploy completo
│   │   └── RELEASE_SUMMARY_v2025.9.3.md
│   ├── design/          # Design atual
│   └── archive/         # Documentação histórica
├── lib/                  # Utilitários e configurações
├── prisma/               # Schema e migrações do banco
├── scripts/              # Scripts de deploy e automação
│   ├── setup-server.sh  # Configuração automática do servidor
│   ├── deploy-to-server.sh  # Deploy automatizado
│   └── deploy/          # Scripts de deploy
│       └── check-server-requirements.sh
├── ecosystem.config.js   # Configuração PM2
└── public/               # Arquivos estáticos
    └── images/          # Todas as imagens consolidadas
        ├── logos/       # Logos do iNuTech
        ├── screenshots/ # Screenshots do projeto
        └── docs/        # Imagens da documentação
```

## 🎯 Próximos Passos

### MVP (Fase 1) ✅

- [X] Estrutura básica do projeto
- [X] Página inicial responsiva com Hero redesenhado
- [X] Sistema de autenticação Google
- [X] Componentes UI base (Radix UI)
- [X] Blog com Markdown
- [X] Revista científica
- [X] Laboratórios virtuais
- [X] Páginas institucionais
- [X] Deploy inicial
- [X] Documentação completa de deploy
- [X] Scripts automatizados

### Fase 2 (Em Desenvolvimento)

- [ ] Sistema de eventos completo
- [ ] Laboratórios virtuais avançados
- [ ] Integração com Obsidian
- [ ] Área restrita funcional
- [ ] Sistema de busca avançada
- [ ] Newsletter funcional

### Fase 3 (Futuro)

- [ ] Laboratórios avançados (IA, prototipação)
- [ ] Sistema de avaliação de inovação
- [ ] Integração com LinkedIn
- [ ] Analytics e métricas avançados
- [ ] Otimizações de performance
- [ ] Sistema de comentários
- [ ] Integração com redes sociais

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: contato@inutech.org.br
- **Fone:** [+55 61 9 8128 2855](http://wa.me/5561981282855)
- **LinkedIn**: [iNuTech iCT](https://www.linkedin.com/company/institutonutech/)
- **Whatsapp:** [Contato iNuTech](http://wa.me/5561981282855)
- **Website**: [inutech.org.br](https://inutech.org.br/)

---

Desenvolvido com ❤️ pelo iNuTech iCT
