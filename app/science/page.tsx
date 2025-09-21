import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NuScience - Ciência Aplicada | iNuTech',
  description: 'Pesquisa aplicada em Inteligência Artificial, Ciência de Dados e Ciência da Informação no iNuTech.',
}

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Ciência Aplicada
            </h1>
            <p className="text-xl text-gray-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed">
              "A tecnologia pode moldar o nosso futuro? A Pesquisa Aplicada em Inteligência Artificial, 
              Ciência de Dados e Ciência da Informação impulsionam inovações que transformam todos os 
              campos da vida humana. Aqui no iNuTech estudamos como essas áreas de pesquisa estão 
              revolucionando setores como educação, comportamento, bancos, direito e transportes. 
              O mais importante é que estamos em uma era em que todos podem participar."
            </p>
            <div className="mt-8">
              <p className="text-lg font-medium text-gray-800 dark:text-slate-100">
                André Henrique de Siqueira
              </p>
              <p className="text-gray-700 dark:text-slate-300">Diretor de Pesquisa e Inovação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projetos de Pesquisa
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 text-center max-w-4xl mx-auto mb-16">
            Quer entender como os algoritmos aprendem, como os dados são transformados em conhecimento 
            e como a inteligência artificial está cada vez mais presente no nosso dia a dia? Em nossos 
            projetos de pesquisa buscamos desvendar os detalhes teóricos e técnicos que impulsionam as 
            áreas de Inteligência Artificial, Ciência de Dados e Ciência da Informação.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-blue-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Desvendando a Depressão nas redes sociais: Utilização da Inteligência Artificial para Detecção de Comportamentos Depressivos
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Objetivo</h4>
                  <p className="text-blue-700 dark:text-slate-300 leading-relaxed">
                    Identificar padrões linguísticos e comportamentais em posts de redes sociais que 
                    indiquem a presença de sintomas depressivos, com o objetivo de auxiliar na detecção 
                    precoce e no tratamento da doença.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Resultados</h4>
                  <ul className="text-blue-700 dark:text-slate-300 space-y-1">
                    <li>• Modelo de precisão</li>
                    <li>• Identificação de biomarcadores</li>
                    <li>• Protótipo de ferramenta de triagem</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-blue-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Inteligência Artificial para a interpretação de Sentenças Trabalhistas
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Objetivo</h4>
                  <p className="text-blue-700 dark:text-slate-300 leading-relaxed">
                    Analisar e interpretar sentenças judiciais trabalhistas, extraindo informações 
                    relevantes, como fundamentos jurídicos, decisões e elementos que influenciaram a 
                    sentença, com o objetivo de auxiliar juízes, advogados e pesquisadores na 
                    compreensão e análise de grandes volumes de dados jurídicos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Resultados</h4>
                  <ul className="text-blue-700 dark:text-slate-300 space-y-1">
                    <li>• Protótipo de sistema de classificação de sentenças</li>
                    <li>• Modelo de identificação de padrões e tendências</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-blue-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Trilhas de Aprendizagem Personalizadas para o Ensino Médio: Uma Abordagem com Ciência da Informação e Inteligência Artificial
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Objetivo</h4>
                  <p className="text-blue-700 dark:text-slate-300 leading-relaxed">
                    Desenvolver um sistema de recomendação capaz de gerar trilhas de aprendizado 
                    personalizadas para estudantes do ensino médio, considerando suas características 
                    individuais, interesses e progressos, com o objetivo de otimizar o processo de 
                    ensino e aprendizagem.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Resultados</h4>
                  <ul className="text-blue-700 dark:text-slate-300 space-y-1">
                    <li>• Modelo de reconhecimento de padrões de aprendizagem e de necessidades de ensino para alunos do ensino médio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Index Section */}
      {/* 
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Índice Global de Inovação 2024
          </h2>
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto shadow-lg border border-white/20 dark:border-slate-700/30">
            <p className="text-lg text-gray-800 dark:text-slate-200 leading-relaxed">
              Em 2024, O Brasil oscilou, caindo uma posição no índice global de inovação (IGI), 
              figurando agora na 50ª posição do ranking global de iniciativas de inovação. No ano 
              passado, o Brasil tinha avançado cinco posições, em relação ao ano de 2022.
            </p>
            <p className="text-lg text-gray-800 dark:text-slate-200 mt-4 leading-relaxed">
              No cenário da América Latina e Caribe, o Brasil lidera o ranking seguido por Chile e México.
            </p>
            <p className="text-lg text-gray-800 dark:text-slate-200 mt-4 leading-relaxed">
              Mesmo com o ganho relevante de posições nos últimos 3 anos, o Brasil ainda é considerado 
              aquém das suas potencialidades. A melhor colocação que o país já alcançou foi em 2011, 
              quando figurou na 47ª posição.
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-400 mt-6">
              Fonte: <a href="https://www.wipo.int/web-publications/global-innovation-index-2024/en/gii-2024-at-a-glance.html#h2-global-leaders-in-innovation-2024" 
                        className="underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        Global Innovation Index 2024
                      </a>
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conheça nossos projetos de pesquisa?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Invista em ciência e tecnologia e participe da criação de um futuro com mais inovação.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white dark:bg-slate-800 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
          >
            Conhecer Projetos
          </Link>
        </div>
      </section>

    </div>
  )
}
