'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/theme-context'

interface DiagramaInutechProps {
  className?: string
  width?: number
  height?: number
}

export function DiagramaInutech({ className = '', width = 1200, height = 800 }: DiagramaInutechProps) {
  const { theme } = useTheme()
  
  const isDark = theme === 'dark'
  const src = isDark ? '/images/diagrama-inutech-dark.svg' : '/images/diagrama-inutech-light.svg'
  const alt = `Diagrama Conceitual iNuTech - ${isDark ? 'Modo Escuro' : 'Modo Claro'}`
  
  return (
    <div className={`w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
