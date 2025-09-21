# 🗺️ Mapa do Site - iNuTech iCT

## 📋 Páginas Publicadas

### 🏠 **Página Inicial**
- **URL:** `/`
- **Status:** ✅ Publicada
- **Descrição:** Página principal com hero section, estatísticas, funcionalidades, posts recentes, preview dos laboratórios e seção de eventos

---

### 🧭 **Navegação Principal**

#### 📚 **NuScience** (`/science`)
- **URL:** `/science`
- **Status:** ✅ Publicada
- **Descrição:** Página principal da seção científica

##### **Revista Científica**
- **URL:** `/revista`
- **Status:** ✅ Publicada
- **Descrição:** Revista científica com artigos revisados por pares
- **Conteúdo Disponível:**
  - 1 artigo: "IA e Saúde Mental" (`/revista/ia-saude-mental`)
- **Funcionalidades:**
  - Sistema de volumes e edições
  - Categorias: Research, Review, Case Study, Editorial
  - Busca e filtros
  - Artigos em destaque

##### **Laboratórios Virtuais**
- **URL:** `/laboratorios`
- **Status:** ✅ Publicada
- **Descrição:** Laboratórios virtuais interativos
- **Laboratórios Disponíveis:**
  - **IA & Machine Learning** (`/laboratorios/ai-ml`) - ✅ Disponível
  - **Robótica & Automação** - ✅ Disponível
  - **Cibersegurança** - ✅ Disponível
- **Laboratórios em Desenvolvimento:**
  - **Ciência de Dados** - 🚧 Em desenvolvimento
  - **Biotecnologia** - 🚧 Em desenvolvimento
  - **Computação Quântica** - 🚧 Em desenvolvimento

#### 💻 **NuTechnology**
- **URL:** `/tech`
- **Status:** ✅ Publicada
- **Descrição:** Conteúdo sobre tecnologia e inovação

#### 🚀 **NuInnovation** (`/innovation`)
- **URL:** `/innovation`
- **Status:** ✅ Publicada
- **Descrição:** Página principal da seção de inovação

##### **Blog Científico**
- **URL:** `/blog`
- **Status:** ✅ Publicada
- **Descrição:** Blog com artigos sobre ciência e tecnologia
- **Conteúdo Disponível:**
  - 2 artigos:
    - "Introdução à IA Generativa" (`/blog/introducao-ia-generativa`)
    - "Ciência de Dados 2024" (`/blog/ciencia-dados-2024`)
- **Funcionalidades:**
  - Sistema de tags e categorias
  - Posts em destaque
  - Newsletter
  - Tempo de leitura

##### **Eventos**
- **URL:** `/eventos`
- **Status:** ✅ Publicada
- **Descrição:** Calendário de eventos, palestras e workshops

#### ℹ️ **Sobre**
- **URL:** `/about`
- **Status:** ✅ Publicada
- **Descrição:** Informações sobre o iNuTech iCT
- **Conteúdo:**
  - Missão, visão e valores
  - História da instituição
  - Equipe
  - Áreas de atuação
  - Estatísticas

#### 📞 **Contato**
- **URL:** `/contact`
- **Status:** ✅ Publicada
- **Descrição:** Formulário de contato e informações
- **Funcionalidades:**
  - Formulário de contato
  - Informações de contato
  - Horário de funcionamento
  - FAQ
  - Links para redes sociais

---

### 🔐 **Sistema de Autenticação**

#### **Login**
- **URL:** `/auth/signin`
- **Status:** ✅ Publicada
- **Descrição:** Página de login com NextAuth.js

#### **Dashboard**
- **URL:** `/dashboard`
- **Status:** ✅ Publicada
- **Descrição:** Área do usuário logado

---

### 📄 **Páginas Específicas**

#### **Artigos do Blog**
- **URL:** `/blog/[slug]`
- **Status:** ✅ Publicada
- **Descrição:** Páginas individuais dos artigos do blog
- **Exemplos:**
  - `/blog/introducao-ia-generativa`
  - `/blog/ciencia-dados-2024`

#### **Artigos da Revista**
- **URL:** `/revista/[slug]`
- **Status:** ✅ Publicada
- **Descrição:** Páginas individuais dos artigos científicos
- **Exemplos:**
  - `/revista/ia-saude-mental`

#### **Obsidian**
- **URL:** `/obsidian`
- **Status:** ✅ Publicada
- **Descrição:** Sistema de notas

---

### 🎨 **Componentes e Funcionalidades**

#### **Componentes Principais**
- ✅ **Header** - Navegação com submenus
- ✅ **Footer** - Links e informações
- ✅ **Hero** - Seção principal com animação
- ✅ **Theme Toggle** - Modo claro/escuro
- ✅ **Logo SVG** - Logotipo responsivo

#### **Funcionalidades Técnicas**
- ✅ **Next.js 14** com App Router
- ✅ **NextAuth.js** para autenticação
- ✅ **Prisma** para banco de dados
- ✅ **Tailwind CSS** para estilização
- ✅ **TypeScript** para tipagem
- ✅ **Modo escuro/claro**
- ✅ **Design responsivo**
- ✅ **SEO otimizado**

---

### 📊 **Estatísticas do Conteúdo**

#### **Blog**
- **Total de Artigos:** 2
- **Artigos em Destaque:** 0
- **Tags Disponíveis:** Várias (IA, Ciência de Dados, etc.)

#### **Revista Científica**
- **Total de Artigos:** 1
- **Artigos Publicados:** 1
- **Categorias:** Research, Review, Case Study, Editorial

#### **Laboratórios**
- **Total de Laboratórios:** 6
- **Disponíveis:** 3
- **Em Desenvolvimento:** 3

---

### 🔗 **Estrutura de Navegação**

```
iNuTech iCT
├── 🏠 Início (/)
├── 📚 NuScience (/science)
│   ├── Revista (/revista)
│   └── Laboratórios (/laboratorios)
│       ├── IA & ML (/laboratorios/ai-ml)
│       ├── Robótica
│       ├── Cibersegurança
│       ├── Ciência de Dados (🚧)
│       ├── Biotecnologia (🚧)
│       └── Computação Quântica (🚧)
├── 💻 NuTechnology (/tech)
├── 🚀 NuInnovation (/innovation)
│   ├── Blog (/blog)
│   └── Eventos (/eventos)
├── ℹ️ Sobre (/about)
├── 📞 Contato (/contact)
└── 🔐 Autenticação
    ├── Login (/auth/signin)
    └── Dashboard (/dashboard)
```

---

### 📝 **Observações**

- **Status de Desenvolvimento:** Fase 2 em andamento
- **Última Atualização:** Janeiro 2025
- **Responsivo:** ✅ Sim
- **Acessibilidade:** ✅ Implementada
- **SEO:** ✅ Otimizado
- **Performance:** ✅ Otimizada

---

### 🚀 **Próximos Passos**

1. **Conteúdo:**
   - Adicionar mais artigos ao blog
   - Expandir artigos da revista científica
   - Desenvolver laboratórios pendentes

2. **Funcionalidades:**
   - Sistema de busca avançada
   - Newsletter funcional
   - Sistema de comentários
   - Integração com redes sociais

3. **Melhorias:**
   - Otimização de performance
   - Melhorias de UX/UI
   - Testes automatizados
   - Monitoramento de analytics

---

*Este mapa foi gerado automaticamente baseado na estrutura atual do site iNuTech iCT.*
