"use client"

import Image from 'next/image'
import { useTheme } from '@/contexts/theme-context'

export function CompetenciesSection() {
  const { theme } = useTheme()
  
  // Seleciona o arquivo correto baseado no tema
  const competenciasPath = theme === 'dark' ? '/images/competencias-dark.svg' : '/images/competencias-light.svg'
  
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-slate-100 sm:text-4xl">
            Nossas Competências
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-600 dark:text-slate-300">
            Áreas de especialização e competências técnicas do iNuTech em ciência de dados e inteligência artificial.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="w-[100%]">
              <Image
                src={competenciasPath}
                alt="Competências iNuTech - Áreas de especialização em ciência de dados e IA"
                width={1200}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-secondary-500 dark:text-slate-400">
            Competências desenvolvidas pelo iNuTech em ciência de dados, inteligência artificial e inovação tecnológica
          </p>
        </div>
      </div>
    </section>
  )
}
