# Arquitetura Técnica - iNuTech iCT Plataforma

## 📋 Visão Geral

A **iNuTech iCT Plataforma** é uma aplicação web moderna desenvolvida para divulgação científica, blog, revista científica e laboratórios virtuais do Instituto de Pesquisa Aplicada em Ciência, Tecnologia e Inovação.

## 🏗️ Arquitetura da Aplicação

### Stack Tecnológico Principal

- **Frontend**: Next.js 14 (App Router)
- **Runtime**: Node.js 18+
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Lucide React
- **Autenticação**: NextAuth.js v4
- **Database**: SQLite com Prisma ORM
- **Deploy**: Vercel (região: gru1 - São Paulo)

### Arquitetura de Componentes

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js 14)                    │
├─────────────────────────────────────────────────────────────┤
│  App Router          │  Components        │  Contexts       │
│  ├── /               │  ├── ui/           │  ├── theme      │
│  ├── /blog           │  ├── header        │  └── auth       │
│  ├── /revista        │  ├── footer        │                 │
│  ├── /laboratorios   │  ├── hero          │                 │
│  ├── /dashboard      │  └── ...           │                 │
│  └── /auth           │                    │                 │
├─────────────────────────────────────────────────────────────┤
│                    API Layer (Next.js API Routes)           │
│  ├── /api/auth/[...nextauth]  (NextAuth.js)                 │
│  ├── /api/blog                (Blog endpoints)              │
│  └── /api/revista             (Revista endpoints)           │
├─────────────────────────────────────────────────────────────┤
│                    Data Layer (Prisma ORM)                  │
│  ├── User Management          │  ├── Content Management     │
│  ├── Authentication           │  ├── Event Management       │
│  └── Session Management       │  └── Lab Management         │
└─────────────────────────────────────────────────────────────┘
```

## 🗄️ Modelo de Dados

### Schema do Banco (Prisma)

```prisma
// Principais entidades
- User: Gestão de usuários e perfis
- Account: Contas OAuth (Google)
- Session: Sessões de usuário
- Post: Artigos do blog e revista
- Comment: Sistema de comentários
- Event: Gestão de eventos
- Lab: Laboratórios virtuais
- Document: Documentos institucionais
```

### Relacionamentos Principais

- **User** ↔ **Account** (1:N) - Usuário pode ter múltiplas contas OAuth
- **User** ↔ **Post** (1:N) - Usuário pode criar múltiplos posts
- **User** ↔ **Event** (1:N) - Usuário pode organizar múltiplos eventos
- **Post** ↔ **Comment** (1:N) - Post pode ter múltiplos comentários

## 🔐 Sistema de Autenticação

### NextAuth.js Configuration

```typescript
// Estratégia: JWT + Prisma Adapter
// Provider: Google OAuth 2.0
// Domínios permitidos: Configuráveis via authConfig
// Redirecionamento: Dashboard após login
```

### Middleware de Proteção

```typescript
// Rotas protegidas:
- /dashboard/* (Área restrita)
- /obsidian/* (Ferramentas avançadas)

// Comportamento:
- Redireciona para /auth/signin se não autenticado
- Validação de token JWT
```

## 🎨 Sistema de Design

### Tailwind CSS Configuration

```javascript
// Paleta de cores customizada:
- Primary: Azul (#3b82f6)
- Secondary: Cinza (#64748b)
- Accent: Ciano (#0ea5e9)

// Modo escuro: class-based
// Fontes: Inter (sans), JetBrains Mono (mono)
// Animações: fade-in, slide-up
```

### Componentes UI

- **Base**: Radix UI (acessibilidade)
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod
- **Notificações**: React Hot Toast
- **Markdown**: React Markdown + rehype/remark

## 📁 Estrutura de Arquivos

```
inutech-plataforma/
├── app/                    # Next.js 14 App Router
│   ├── api/                # API Routes
│   │   └── auth/           # NextAuth.js endpoints
│   ├── auth/               # Páginas de autenticação
│   ├── blog/               # Blog científico
│   ├── revista/            # Revista científica
│   ├── laboratorios/       # Laboratórios virtuais
│   ├── dashboard/          # Área restrita
│   └── globals.css         # Estilos globais
├── components/             # Componentes React
│   ├── ui/                 # Componentes base (Radix UI)
│   ├── header.tsx          # Cabeçalho
│   ├── footer.tsx          # Rodapé
│   └── ...                 # Componentes específicos
├── lib/                    # Utilitários e configurações
│   ├── auth-config.ts      # Configuração de autenticação
│   ├── prisma.ts           # Cliente Prisma
│   ├── blog.ts             # Lógica do blog
│   └── utils.ts            # Utilitários gerais
├── prisma/                 # Schema e migrações
│   ├── schema.prisma       # Modelo de dados
│   └── migrations/         # Migrações do banco
├── content/                # Conteúdo Markdown
│   ├── blog/               # Artigos do blog
│   └── revista/            # Artigos da revista
└── public/                 # Arquivos estáticos
    ├── images/             # Imagens
    └── favicon.svg         # Favicon
```

## 🚀 Deploy e Infraestrutura

### Vercel Configuration

```json
{
  "regions": ["gru1"],           // Região: São Paulo
  "framework": "nextjs",         // Framework: Next.js
  "functions": {
    "maxDuration": 30            // Timeout: 30s
  },
  "headers": [                   // Headers de segurança
    "X-Content-Type-Options: nosniff",
    "X-Frame-Options: DENY",
    "X-XSS-Protection: 1; mode=block"
  ]
}
```

### Variáveis de Ambiente

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 🔧 Scripts e Comandos

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento

# Build e Deploy
npm run build           # Build de produção
npm run start           # Servidor de produção

# Database
npm run db:generate     # Gerar cliente Prisma
npm run db:push         # Aplicar mudanças no schema
npm run db:studio       # Interface visual do banco

# Qualidade
npm run lint            # ESLint
```

## 📊 Características de Performance

### Next.js 14 Features

- **App Router**: Roteamento baseado em arquivos
- **Server Components**: Renderização no servidor
- **Streaming**: Carregamento progressivo
- **Image Optimization**: Otimização automática de imagens
- **Font Optimization**: Carregamento otimizado de fontes

### Otimizações Implementadas

- **Code Splitting**: Divisão automática de código
- **Tree Shaking**: Remoção de código não utilizado
- **Static Generation**: Geração estática de páginas
- **Edge Runtime**: Execução na edge quando possível

## 🔒 Segurança

### Headers de Segurança

```http
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

### Autenticação

- **OAuth 2.0**: Google como provider
- **JWT**: Tokens seguros para sessões
- **CSRF Protection**: Proteção contra CSRF
- **Domain Validation**: Validação de domínios permitidos

### Validação de Dados

- **Zod**: Validação de schemas TypeScript
- **React Hook Form**: Validação de formulários
- **Prisma**: Validação no nível do banco

## 📱 Responsividade e Acessibilidade

### Design Responsivo

- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: Tailwind CSS breakpoints
- **Flexible Grid**: CSS Grid e Flexbox

### Acessibilidade

- **Radix UI**: Componentes acessíveis por padrão
- **ARIA Labels**: Rótulos para screen readers
- **Keyboard Navigation**: Navegação por teclado
- **Color Contrast**: Contraste adequado de cores

## 🔄 Integrações

### APIs Externas

- **Google OAuth**: Autenticação
- **Google Images**: Avatars de usuários
- **GitHub**: Avatars (fallback)

### Ferramentas de Desenvolvimento

- **ESLint**: Linting de código
- **TypeScript**: Tipagem estática
- **Prisma Studio**: Interface visual do banco
- **Vercel Analytics**: Métricas de performance

## 📈 Monitoramento e Analytics

### Métricas Disponíveis

- **Vercel Analytics**: Métricas de performance
- **Next.js Built-in**: Métricas de build
- **Console Logs**: Logs de autenticação e eventos

### Logs Implementados

```typescript
// Autenticação
- Login autorizado/bloqueado
- Novos usuários registrados
- Logout de usuários

// Sistema
- Erros de compilação
- Requests de API
- Sessões de usuário
```

## 🚧 Roadmap Técnico

### Fase 2 (Em Andamento)

- [ ] Sistema de eventos completo
- [ ] Laboratórios virtuais básicos
- [ ] Integração com Obsidian
- [ ] Área restrita funcional

### Fase 3 (Futuro)

- [ ] Laboratórios avançados (IA, prototipação)
- [ ] Sistema de avaliação de inovação
- [ ] Integração com LinkedIn
- [ ] Analytics avançados
- [ ] Otimizações de performance

## 🛠️ Manutenção e Suporte

### Backup e Versionamento

- **Git**: Controle de versão
- **Vercel**: Deploy automático
- **Prisma Migrations**: Versionamento do banco

### Monitoramento

- **Vercel Dashboard**: Métricas de deploy
- **Console Logs**: Debugging
- **Error Boundaries**: Tratamento de erros

---

**Desenvolvido com ❤️ pelo iNuTech iCT**

*Documentação técnica atualizada em: Janeiro 2025*
