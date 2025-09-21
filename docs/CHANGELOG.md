# Changelog - iNuTech iCT Plataforma

## [0.8.0] - 2025-09-06

### 🎯 **Reorganização Completa do Projeto**

#### ✅ **Estrutura Reorganizada**

- **Imagens consolidadas** em `/public/images/`
  - Logos em `/public/images/logos/`
  - Screenshots em `/public/images/screenshots/`
  - Documentação em `/public/images/docs/`
- **Documentação organizada** em subdiretórios temáticos:
  - `/docs/development/` - Arquitetura técnica e desenvolvimento
  - `/docs/deployment/` - Configuração e hospedagem
  - `/docs/design/` - Documentação de design atual
  - `/docs/archive/` - Documentação histórica

#### 🗑️ **Arquivos Removidos**

- `public/favicon_OLD.svg` - Favicon obsoleto
- `scripts/apply-dark-mode.js` - Script desnecessário
- `inutech-plataforma.code-workspace` - Workspace desnecessário
- Diretório `/image/` - Imagens movidas para `/public/images/`
- Diretório `/scripts/` - Removido após limpeza

#### 📁 **Estrutura Final Organizada**

```
inutech-plataforma/
├── app/                    # Next.js 14 App Router
├── components/            # Componentes React
├── content/              # Conteúdo Markdown
├── contexts/             # Contextos React
├── docs/                 # Documentação organizada
│   ├── development/      # Arquitetura e desenvolvimento
│   ├── deployment/       # Deploy e hospedagem
│   ├── design/          # Design atual
│   └── archive/         # Documentação histórica
├── lib/                  # Utilitários e configurações
├── prisma/              # Schema e migrações
├── public/              # Arquivos estáticos
│   └── images/          # Todas as imagens consolidadas
│       ├── logos/       # Logos do iNuTech
│       ├── screenshots/ # Screenshots do projeto
│       └── docs/        # Imagens da documentação
└── [arquivos de config] # Configurações do projeto
```

#### 🚀 **Melhorias Implementadas**

- **Footer atualizado** com dados de contato corretos
- **Links externos** configurados para abrir em nova aba
- **Documentação técnica** completa criada
- **Estratégias de hospedagem** documentadas
- **Estrutura limpa** e organizada para desenvolvimento

#### 📋 **Próximos Passos (v0.9.0)**

- [ ] Implementar sistema de eventos
- [ ] Desenvolver laboratórios virtuais básicos
- [ ] Integração com Obsidian
- [ ] Área restrita funcional
- [ ] Sistema de comentários

---

## [0.1.0] - 2024-04-21

### 🎉 **Versão Inicial**

- Estrutura básica do projeto Next.js 14
- Sistema de autenticação Google OAuth
- Blog científico com Markdown
- Páginas institucionais
- Componentes UI base
- Deploy inicial no Vercel

---

**Desenvolvido com ❤️ pelo iNuTech iCT**

