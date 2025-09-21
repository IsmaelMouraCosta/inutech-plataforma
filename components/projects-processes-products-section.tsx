'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight, Lightbulb, Target, Zap } from 'lucide-react'

export function ProjectsProcessesProductsSection() {
  const ctaItems = [
    {
      title: 'Aderir a Projetos',
      description: 'Participe de nossos projetos de pesquisa e desenvolvimento',
      link: '/science/projects',
      icon: Target,
      color: 'from-blue-600 to-cyan-600',
      hoverColor: 'hover:from-blue-700 hover:to-cyan-700'
    },
    {
      title: 'Avaliar Projetos',
      description: 'Avalie seu projeto com nossa metodologia robusta',
      link: '/tech/assessment',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      hoverColor: 'hover:from-green-700 hover:to-emerald-700'
    },
    {
      title: 'Avaliar Inovação',
      description: 'Descubra o potencial de inovação do seu projeto',
      link: '/innovation/starting',
      icon: Lightbulb,
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-700 hover:to-pink-700'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Projetos, Processos e Produtos
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-slate-300">
            Reduzimos riscos na concepção, realização e inovação de projetos de Ciência de Dados e Inteligência Artificial. 
            Ciência sólida, tecnologia aplicada e inovação medida.
          </p>
        </div>

        {/* Call to Action Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Link key={index} href={item.link}>
                <div className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-transparent overflow-hidden`}>
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-slate-200 transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${item.color} ${item.hoverColor} transition-all duration-200 shadow-lg group-hover:shadow-xl`}>
                      <span>{item.title}</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Nossa abordagem integrada combina rigor científico, excelência tecnológica e 
            metodologias de inovação para garantir o sucesso dos seus projetos.
          </p>
        </div>
      </div>
    </section>
  )
}
