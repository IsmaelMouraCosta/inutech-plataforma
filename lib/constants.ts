// Constantes para tamanhos de logos e ícones
export const LOGO_SIZES = {
  sm: {
    width: 108, // 154 * 0.7 (30% menor)
    height: 28, // 36 * 0.7 (30% menor)
    className: 'h-7 w-auto',
    textSize: 'text-sm'
  },
  md: {
    width: 154, // Proporção mantida, mas tamanho reduzido
    height: 36, // Proporção mantida, mas tamanho reduzido
    className: 'h-9 w-auto',
    textSize: 'text-lg'
  },
  lg: {
    width: 200, // 154 * 1.3 (30% maior)
    height: 47, // 36 * 1.3 (30% maior)
    className: 'h-12 w-auto',
    textSize: 'text-2xl'
  }
} as const

export const ICON_SIZES = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8'
} as const

export type LogoSize = keyof typeof LOGO_SIZES
export type IconSize = keyof typeof ICON_SIZES
