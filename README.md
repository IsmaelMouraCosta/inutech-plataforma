# iNuTech iCT - Plataforma de Pesquisa Científica v2025.9.2

Uma plataforma moderna para divulgação científica, blog, revista científica e laboratórios virtuais do iNuTech iCT de Pesquisa Aplicada em Ciência, Tecnologia e Inovação.

> **🎯 Versão 2025.9.2** - Plataforma otimizada e pronta para deploy no Vercel com Google Cloud como alternativa.

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
- **Deploy**: Vercel (recomendado)

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta Google para OAuth

## 🚀 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/inutech/plataforma.git
cd plataforma
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
NEXTAUTH_URL="http://localhost:3000"
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
- Adicione `http://localhost:3000/api/auth/callback/google` como URI de redirecionamento

5. **Configure o banco de dados**

```bash
npx prisma generate
npx prisma db push
```

6. **Execute o projeto**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto (v0.8.0)

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
│   ├── development/      # Arquitetura e desenvolvimento
│   ├── deployment/       # Deploy e hospedagem
│   ├── design/          # Design atual
│   └── archive/         # Documentação histórica
├── lib/                  # Utilitários e configurações
├── prisma/               # Schema e migrações do banco
└── public/               # Arquivos estáticos
    └── images/          # Todas as imagens consolidadas
        ├── logos/       # Logos do iNuTech
        ├── screenshots/ # Screenshots do projeto
        └── docs/        # Imagens da documentação
```

## 🎯 Próximos Passos

### MVP (Fase 1)

- [X] Estrutura básica do projeto
- [X] Página inicial responsiva
- [X] Sistema de autenticação Google
- [X] Componentes UI base
- [X] Blog com Markdown
- [X] Páginas institucionais
- [X] Deploy inicial

### Fase 2

- [ ] Revista científica
- [ ] Laboratórios virtuais básicos
- [ ] Sistema de eventos
- [ ] Integração com Obsidian
- [ ] Área restrita funcional

### Fase 3

- [ ] Laboratórios avançados (IA, prototipação)
- [ ] Sistema de avaliação de inovação
- [ ] Integração com LinkedIn
- [ ] Analytics e métricas
- [ ] Otimizações de performance

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
