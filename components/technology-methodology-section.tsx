'use client'

import Link from 'next/link'
import { TreePine, Database, Cog, Wrench, Leaf, Apple, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function TechnologyMethodologySection() {
  const methodologySteps = [
    {
      id: 1,
      title: 'O terreno firme e nutritivo',
      subtitle: 'Realidade',
      description: 'Representa os dados de qualidade e a infraestrutura tecnológica sólida que sustentam todo o desenvolvimento. Sem dados confiáveis e uma base computacional robusta, qualquer solução de AI está fadada ao fracasso.',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      id: 2,
      title: 'O caule',
      subtitle: 'Metodologias',
      description: 'As metodologias são o esqueleto da árvore, definindo a estrutura e o funcionamento do projeto. Metodologias como Agile, Scrum ou DevOps garantem que o desenvolvimento seja eficiente, adaptável e orientado para o valor.',
      icon: TreePine,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/10',
      borderColor: 'border-amber-200 dark:border-amber-800'
    },
    {
      id: 3,
      title: 'Os galhos',
      subtitle: 'Técnicas e heurísticas',
      description: 'As técnicas são as ferramentas que utilizamos para construir a solução. São os algoritmos de aprendizado de máquina, as técnicas de processamento de linguagem natural, as ferramentas de visualização de dados, entre outras.',
      icon: Wrench,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      id: 4,
      title: 'As folhas e flores',
      subtitle: 'Processos',
      description: 'Os processos são as atividades que transformam a matéria-prima (dados) em produto final (solução). Envolvem coleta de dados, pré-processamento, treinamento de modelos, avaliação e deploy.',
      icon: Leaf,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
      borderColor: 'border-purple-200 dark:border-purple-800'
    },
    {
      id: 5,
      title: 'Os frutos',
      subtitle: 'Resultados',
      description: 'As soluções são o resultado final de todo esse trabalho. São os produtos ou serviços que utilizam a AI para resolver problemas reais e gerar valor.',
      icon: Apple,
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50 dark:bg-red-900/10',
      borderColor: 'border-red-200 dark:border-red-800'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Tecnologia com Metodologia
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-slate-300">
            A construção de soluções em inteligência artificial é um processo complexo que exige a integração de diversos elementos. 
            Imagine uma árvore; podemos visualizar de forma clara como cada parte contribui para o sucesso da geração de bons frutos.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="space-y-8">
          {methodologySteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < methodologySteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-slate-600 dark:to-slate-700 z-0"></div>
                )}
                
                <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border ${step.borderColor} hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.id}.
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${step.bgColor} text-gray-700 dark:text-slate-300`}>
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Conheça mais sobre nossa abordagem tecnológica
            </h3>
            <p className="text-gray-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Explore nossa seção NuTechnology para descobrir como aplicamos essas metodologias 
              em projetos reais de inteligência artificial e inovação tecnológica.
            </p>
            <Link href="/tech">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                <span>NuTechnology</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
