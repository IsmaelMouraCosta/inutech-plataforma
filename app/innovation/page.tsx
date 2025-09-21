import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NuInnovation - Inovação e Empreendedorismo | iNuTech',
  description: 'Avaliação de potencial de inovação e desenvolvimento de soluções empreendedoras no iNuTech.',
}

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Inovação e Empreendedorismo
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              "A inovação é a chave para o futuro. No iNuTech, não apenas desenvolvemos tecnologias 
              inovadoras, mas também avaliamos o potencial de inovação de ideias e projetos, 
              transformando conceitos em soluções reais que impactam a sociedade."
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nosso Processo de Inovação
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Identificação</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Identificamos oportunidades de inovação através de análise de mercado, 
                tendências tecnológicas e necessidades sociais não atendidas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Desenvolvimento</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Desenvolvemos protótipos e soluções utilizando metodologias ágeis e 
                tecnologias de ponta, sempre focando na viabilidade técnica e comercial.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Validação</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Validamos nossas soluções através de testes com usuários reais, 
                análise de mercado e avaliação de impacto social e econômico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Assessment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Avaliação de Potencial de Inovação
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Como Avaliamos o Potencial de Inovação
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/30">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Viabilidade Técnica</h4>
                  <p className="text-gray-700 dark:text-slate-200 leading-relaxed">
                    Avaliamos se a tecnologia necessária está disponível e se o projeto 
                    pode ser implementado com os recursos atuais.
                  </p>
                </div>

                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/30">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Viabilidade Comercial</h4>
                  <p className="text-gray-700 dark:text-slate-200 leading-relaxed">
                    Analisamos o mercado, a concorrência e o potencial de monetização 
                    da solução proposta.
                  </p>
                </div>

                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/30">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Impacto Social</h4>
                  <p className="text-gray-700 dark:text-slate-200 leading-relaxed">
                    Medimos o potencial de impacto positivo na sociedade e na qualidade 
                    de vida das pessoas.
                  </p>
                </div>

                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20 dark:border-slate-700/30">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Escalabilidade</h4>
                  <p className="text-gray-700 dark:text-slate-200 leading-relaxed">
                    Avaliamos se a solução pode ser expandida para atender um número 
                    maior de usuários e mercados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Critérios de Avaliação</h3>
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 bg-green-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-800 dark:text-slate-200 font-medium">Inovação disruptiva</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-800 dark:text-slate-200 font-medium">Aplicabilidade prática</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-800 dark:text-slate-200 font-medium">Sustentabilidade</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 bg-purple-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-800 dark:text-slate-200 font-medium">Potencial de crescimento</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 bg-pink-500 rounded-full shadow-sm"></div>
                  <span className="text-gray-800 dark:text-slate-200 font-medium">Diferenciação competitiva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Áreas de Inovação
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & ML */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Inteligência Artificial</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Desenvolvimento de soluções inovadoras em machine learning, 
                processamento de linguagem natural e visão computacional.
              </p>
              <ul className="text-sm text-gray-500 dark:text-slate-400 space-y-1">
                <li>• Algoritmos de aprendizado</li>
                <li>• Sistemas de recomendação</li>
                <li>• Automação inteligente</li>
              </ul>
            </div>

            {/* Data Science */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">DS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ciência de Dados</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Análise avançada de dados para extrair insights valiosos e 
                suportar decisões estratégicas.
              </p>
              <ul className="text-sm text-gray-500 dark:text-slate-400 space-y-1">
                <li>• Big Data Analytics</li>
                <li>• Business Intelligence</li>
                <li>• Data Mining</li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">DT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Transformação Digital</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Modernização de processos e sistemas para aumentar eficiência 
                e competitividade.
              </p>
              <ul className="text-sm text-gray-500 dark:text-slate-400 space-y-1">
                <li>• Automação de processos</li>
                <li>• Cloud Computing</li>
                <li>• IoT Solutions</li>
              </ul>
            </div>

            {/* EdTech */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">ET</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tecnologia Educacional</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Soluções inovadoras para educação, incluindo plataformas de 
                aprendizado personalizado.
              </p>
              <ul className="text-sm text-gray-500 dark:text-slate-400 space-y-1">
                <li>• E-learning platforms</li>
                <li>• Adaptive learning</li>
                <li>• Educational analytics</li>
              </ul>
            </div>

            {/* HealthTech */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">HT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tecnologia em Saúde</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Inovações em saúde digital, telemedicina e análise de dados médicos.
              </p>
              <ul className="text-sm text-gray-500 dark:text-slate-400 space-y-1">
                <li>• Telemedicina</li>
                <li>• Health analytics</li>
                <li>• Medical AI</li>
              </ul>
            </div>

            {/* FinTech */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">FT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tecnologia Financeira</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Soluções inovadoras para o setor financeiro, incluindo 
                blockchain e análise de risco.
              </p>
              <ul className="text-sm text-gray-500 dark:text-slate-400 space-y-1">
                <li>• Blockchain</li>
                <li>• Risk analysis</li>
                <li>• Digital payments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tem uma ideia inovadora?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Vamos avaliar o potencial de inovação do seu projeto e transformá-lo em realidade.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white dark:bg-slate-800 text-purple-500 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Avaliar Nível de Inovação
          </Link>
        </div>
      </section>
    </div>
  )
}
