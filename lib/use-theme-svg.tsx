'use client'

import React from 'react'
import { useTheme } from '@/contexts/theme-context'
import { useEffect, useState } from 'react'

/**
 * Hook para selecionar automaticamente o arquivo SVG correto baseado no tema atual
 * @param baseName - Nome base do arquivo (sem sufixo -dark ou -light)
 * @returns Caminho completo para o arquivo SVG correto
 */
export function useThemeSvg(baseName: string): string {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    // Durante o SSR, retorna o arquivo light como fallback
    return `/images/${baseName}-light.svg`
  }
  
  // Se o arquivo tem sufixo -dark ou -light, usa o tema atual
  if (baseName.includes('-dark') || baseName.includes('-light')) {
    return `/images/${baseName}.svg`
  }
  
  // Lista de arquivos que têm versões dark/light
  const themeAwareFiles = ['logo', 'metodologia', 'icon', 'competencias']
  
  // Se o arquivo está na lista de arquivos com tema, usa o sufixo
  if (themeAwareFiles.includes(baseName)) {
    return `/images/${baseName}-${theme}.svg`
  }
  
  // Caso contrário, usa o arquivo original sem sufixo
  return `/images/${baseName}.svg`
}

/**
 * Função utilitária para obter o caminho do SVG baseado no tema
 * @param baseName - Nome base do arquivo (sem sufixo -dark ou -light)
 * @param theme - Tema atual ('light' | 'dark')
 * @returns Caminho completo para o arquivo SVG
 */
export function getThemeSvgPath(baseName: string, theme: 'light' | 'dark'): string {
  return `/images/${baseName}-${theme}.svg`
}

/**
 * Componente SVG que automaticamente carrega a versão correta baseada no tema
 */
interface ThemeSvgProps {
  baseName: string
  alt?: string
  className?: string
  width?: number | string
  height?: number | string
  [key: string]: any
}

export function ThemeSvg({ 
  baseName, 
  alt = '', 
  className = '', 
  width, 
  height, 
  ...props 
}: ThemeSvgProps) {
  const svgPath = useThemeSvg(baseName)
  
  return (
    <img
      src={svgPath}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  )
}
