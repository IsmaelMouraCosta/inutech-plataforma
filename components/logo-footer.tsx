'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/theme-context'
import { LOGO_SIZES, type LogoSize } from '@/lib/constants'

interface LogoFooterProps {
  size?: LogoSize
  showText?: boolean
  className?: string
}

export function LogoFooter({ size = 'md', showText = true, className = '' }: LogoFooterProps) {
  const { theme } = useTheme()
  const sizeConfig = LOGO_SIZES[size]
  
  // O footer sempre usa a logo azul e branco independente do modo
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Image
        src="/images/logos/02 - Logo iNuTech - 2022 - Azul e Branco.png"
        alt="iNuTech Logo"
        width={sizeConfig.width}
        height={sizeConfig.height}
        className={sizeConfig.className}
      />
      
      {showText && (
        <span className={`font-bold text-white ${sizeConfig.textSize}`}>
          Startup Labs
        </span>
      )}
    </div>
  )
}
