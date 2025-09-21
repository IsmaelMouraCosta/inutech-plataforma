# Versões SVG das Logos iNuTech

## Arquivos Criados

### Logos Completas (com texto)
- **`logo-color.svg`** - Logo colorida original com gradiente azul
- **`logo-light.svg`** - Logo light (azul e branco) para fundos escuros
- **`logo-dark.svg`** - Logo dark (cinza escuro) para fundos claros

### Ícones (apenas símbolo)
- **`icon-color.svg`** - Ícone colorido original com gradiente azul
- **`icon-light.svg`** - Ícone light (azul sólido) para fundos escuros
- **`icon-dark.svg`** - Ícone dark (cinza escuro) para fundos claros

### Favicon
- **`favicon.svg`** - Favicon do site usando o `icon-light.svg` (ícone light)

## Características dos SVGs

### Design Original
- Baseado nos arquivos SVG originais do iNuTech
- Mantém a fidelidade ao design oficial
- Usa o gradiente radial original para a versão colorida
- Preserva as proporções e elementos visuais

### Vantagens dos SVGs
- **Escalabilidade**: Mantém qualidade em qualquer tamanho
- **Performance**: Arquivos menores que PNG/JPG
- **Flexibilidade**: Fácil customização de cores
- **Acessibilidade**: Melhor suporte para leitores de tela

### Implementação
- Componente `LogoSvg` atualizado para usar os novos ícones
- Suporte automático para modo claro/escuro
- Integração com o sistema de temas
- Favicon configurado no layout principal

## Uso no Projeto

### Componente Logo
```tsx
import { LogoSvg } from './logo-svg'
import { LogoFooter } from './logo-footer'

// Uso básico (header/navegação)
<LogoSvg />

// Com tamanho específico
<LogoSvg size="lg" />

// Sem texto (apenas ícone)
<LogoSvg showText={false} />

// Logo para footer (sempre light)
<LogoFooter />
```

### Tamanhos Disponíveis
- `sm`: 24x24px
- `md`: 32x32px (padrão)
- `lg`: 48x48px

### Temas Suportados
- **Light Mode**: Usa `logo-color.svg` (logo colorida original)
- **Dark Mode**: Usa `logo-light.svg` (logo light para fundos escuros)
- **Footer**: Sempre usa `logo-light.svg` (logo light para o rodapé)
- **Favicon**: Usa `icon-light.svg` (ícone light)
- **Color**: Usa `icon-color.svg` ou `logo-color.svg` (para casos especiais)

## Estrutura dos Arquivos

```
public/
├── images/
│   ├── logo-color.svg      # Logo completa colorida
│   ├── logo-light.svg      # Logo completa light
│   ├── logo-dark.svg       # Logo completa dark
│   ├── icon-color.svg      # Ícone colorido
│   ├── icon-light.svg      # Ícone light
│   └── icon-dark.svg       # Ícone dark
└── favicon.svg             # Favicon do site
```

## Próximos Passos

1. **Testar** as logos em diferentes tamanhos e contextos
2. **Otimizar** os SVGs se necessário (remover metadados desnecessários)
3. **Implementar** fallbacks para navegadores antigos
4. **Considerar** criar versões em diferentes formatos (PNG, WebP) para compatibilidade
