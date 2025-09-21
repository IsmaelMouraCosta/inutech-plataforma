"use client"

import { Brain, Scale, GraduationCap } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'

const researchProjects = [
  {
    id: 1,
    title: "Desvendando a Depressão nas redes sociais: Utilização da Inteligência Artificial para Detecção de Comportamentos Depressivos",
    objective: "Identificar padrões linguísticos e comportamentais em posts de redes sociais que indiquem a presença de sintomas depressivos, com o objetivo de auxiliar na detecção precoce e no tratamento da doença.",
    results: [
      "Modelo de precisão",
      "Identificação de biomarcadores",
      "Protótipo de ferramenta de triagem"
    ],
    icon: Brain,
    color: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    id: 2,
    title: "Inteligência Artificial para a interpretação de Sentenças Trabalhistas",
    objective: "Analisar e interpretar sentenças judiciais trabalhistas, extraindo informações relevantes, como fundamentos jurídicos, decisões e elementos que influenciaram a sentença, com o objetivo de auxiliar juízes, advogados e pesquisadores na compreensão e análise de grandes volumes de dados jurídicos.",
    results: [
      "Protótipo de sistema de classificação de sentenças",
      "Modelo de identificação de padrões e tendências"
    ],
    icon: Scale,
    color: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    id: 3,
    title: "Trilhas de Aprendizagem Personalizadas para o Ensino Médio: Uma Abordagem com Ciência da Informação e Inteligência Artificial",
    objective: "Desenvolver um sistema de recomendação capaz de gerar trilhas de aprendizado personalizadas para estudantes do ensino médio, considerando suas características individuais, interesses e progressos, com o objetivo de otimizar o processo de ensino e aprendizagem.",
    results: [
      "Modelo de reconhecimento de padrões de aprendizagem e de necessidades de ensino para alunos do ensino médio"
    ],
    icon: GraduationCap,
    color: "bg-purple-100 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400"
  }
]

export function ResearchProjectsSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-slate-100 sm:text-4xl">
            Projetos de Pesquisa
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-600 dark:text-slate-300">
            Quer entender como os algoritmos aprendem, como os dados são transformados em conhecimento e como a inteligência artificial está cada vez mais presente no nosso dia a dia? Em nossos projetos de pesquisa buscamos desvendar os detalhes teóricos e técnicos que impulsionam as áreas de Inteligência Artificial, Ciência de Dados e Ciência da Informação.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="space-y-8">
            {researchProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${project.color}`}>
                    <project.icon className={`${ICON_SIZES.lg} ${project.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-slate-100 mb-4">
                      {project.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wide">
                        Objetivo
                      </h4>
                      <p className="text-secondary-600 dark:text-slate-300 leading-relaxed">
                        {project.objective}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wide">
                        Resultados
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            <span className="text-secondary-600 dark:text-slate-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-secondary-500 dark:text-slate-400">
            Projetos desenvolvidos pelo iNuTech em parceria com instituições de pesquisa e universidades
          </p>
        </div>
      </div>
    </section>
  )
}

