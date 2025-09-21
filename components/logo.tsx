'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/theme-context'
import { LOGO_SIZES, type LogoSize } from '@/lib/constants'

interface LogoProps {
  size?: LogoSize
  showText?: boolean
  className?: string
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const { theme } = useTheme()
  
  const sizeConfig = LOGO_SIZES[size]
  
  // Seleciona o arquivo correto baseado no tema
  const logoPath = theme === 'dark' ? '/images/logo-dark.svg' : '/images/logo-light.svg'
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Image
        src={logoPath}
        alt="iNuTech Logo"
        width={sizeConfig.width}
        height={sizeConfig.height}
        className={sizeConfig.className}
      />
      {showText && (
        <span className={`font-bold text-gray-900 dark:text-white ${sizeConfig.textSize}`}>
          iNuTech
        </span>
      )}
    </div>
  )
}
