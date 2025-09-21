import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NuTechnology - Tecnologia com Metodologia | iNuTech',
  description: 'Soluções em inteligência artificial com metodologias robustas e técnicas avançadas no iNuTech.',
}

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Tecnologia com Metodologia
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A construção de soluções em inteligência artificial é um processo complexo que exige a 
              integração de diversos elementos. Imagine uma árvore; podemos visualizar de forma clara 
              como cada parte contribui para o sucesso da geração de bons frutos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Nossas Soluções
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Projects */}
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Projetos</h3>
              <ul className="text-gray-700 dark:text-slate-300 space-y-2">
                <li>• Ontologias para AI</li>
                <li>• Análise preditiva e prescritiva</li>
                <li>• Inteligência Artificial Generativa (GenAI) com fontes contextualizadas</li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soluções</h3>
              <ul className="text-gray-700 dark:text-slate-300 space-y-2">
                <li>• Planos estratégicos de inovação</li>
                <li>• Otimização de processos</li>
                <li>• Análise de cenários</li>
                <li>• Aumento de eficiência com o emprego de GenAI</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Consultoria</h3>
              <p className="text-gray-700 dark:text-slate-300">
                Oferecemos consultoria especializada em inteligência artificial, 
                ajudando empresas a implementar soluções de AI de forma eficiente 
                e estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Tecnologias e Ferramentas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">AI</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Algoritmos avançados de aprendizado</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">NLP</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Processamento de Linguagem Natural</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Análise e compreensão de texto</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">DB</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Engenharia de Dados</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Infraestrutura e pipelines de dados</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">API</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">APIs e Integração</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Sistemas conectados e escaláveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Avalie seu projeto
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nossa metodologia de avaliação de projetos incorpora elementos de inovação e tecnologia com metodologias robustas que visam reduzir riscos e aumentar a probabilidade de sucesso.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white dark:bg-slate-800 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
          >
            Avaliar Projetos
          </a>
        </div>
      </section>

    </div>
  )
}
