import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre - iNuTech | Instituto de Pesquisa e Inovação',
  description: 'Conheça o iNuTech, nosso propósito, missão, visão e valores. Uma instituição dedicada à pesquisa aplicada e inovação tecnológica.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white dark:text-white mb-6">
              Sobre o iNuTech
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              O Instituto de Pesquisa e Inovação iNuTech é uma organização dedicada ao desenvolvimento 
              de soluções inovadoras em inteligência artificial, ciência de dados e tecnologia da informação.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white dark:text-white mb-4">Nossa Missão</h3>
              <p className="text-gray-600 dark:text-slate-300 dark:text-slate-300">
                Desenvolver e aplicar tecnologias inovadoras para resolver problemas complexos 
                da sociedade, promovendo o avanço científico e tecnológico através da pesquisa 
                aplicada e do desenvolvimento de soluções práticas.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white dark:text-white mb-4">Nossa Visão</h3>
              <p className="text-gray-600 dark:text-slate-300 dark:text-slate-300">
                Ser uma referência nacional e internacional em pesquisa aplicada e inovação 
                tecnológica, contribuindo para o desenvolvimento sustentável e a melhoria 
                da qualidade de vida das pessoas.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white dark:text-white mb-4">Nossos Valores</h3>
              <p className="text-gray-600 dark:text-slate-300 dark:text-slate-300">
                Excelência, inovação, colaboração, ética, responsabilidade social e 
                compromisso com o desenvolvimento sustentável são os pilares que 
                guiam nossas ações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white dark:text-white mb-12">
            Nossa História
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                O iNuTech nasceu da visão de criar um espaço onde a pesquisa científica 
                pudesse ser aplicada de forma prática e inovadora. Fundado por pesquisadores 
                e profissionais experientes em tecnologia, o instituto rapidamente se 
                estabeleceu como um centro de excelência em inteligência artificial e 
                ciência de dados.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                Ao longo dos anos, desenvolvemos projetos inovadores em diversas áreas, 
                desde saúde mental até educação, sempre com foco em gerar impacto real 
                na sociedade. Nossa abordagem multidisciplinar nos permite abordar 
                problemas complexos de forma abrangente e eficaz.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                Hoje, o iNuTech é reconhecido por sua capacidade de transformar ideias 
                em soluções práticas, sempre mantendo o compromisso com a excelência 
                científica e a inovação responsável.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Nossos Números</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Projetos Concluídos</span>
                  <span className="text-blue-900 font-bold text-xl">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Parceiros</span>
                  <span className="text-blue-900 font-bold text-xl">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Pesquisadores</span>
                  <span className="text-blue-900 font-bold text-xl">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Publicações</span>
                  <span className="text-blue-900 font-bold text-xl">30+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nossa Equipe
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Director */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">GF</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gilberto L. Fernandes</h3>
              <p className="text-blue-600 font-medium mb-3">Diretor Executivo</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Mestre em Ciência da Informação, especialista em inteligência artificial e ciência de dados, 
                com mais de 30 anos de experiência em pesquisa aplicada e desenvolvimento de projetos em tecnologia.
              </p>
            </div>

            {/* Director */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">AS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">André Henrique de Siqueira</h3>
              <p className="text-blue-600 font-medium mb-3">Diretor de Pesquisa e Inovação</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                PhD em Ciência da Informação e especialista em inteligência artificial, 
                com mais de 20 anos de experiência em pesquisa pura e aplicada.
              </p>
            </div>

            {/* Director */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">SM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sérgio Medeiros</h3>
              <p className="text-blue-600 font-medium mb-3">Diretor Administrativo Financeiro</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Mestre em Gestão do Conhecimento e Pós-Graduado em Ciência de Dados, com mais de 30 anos de experiência em projetos de tecnologia.
              </p>
            </div>

            {/* Director */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">IC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ismael de Moura Costa</h3>
              <p className="text-blue-600 font-medium mb-3">Diretor de Desenvolvimento e Ensino</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Mestre em Ciência da Informação e especialista em inteligência artificial e Ciência de Dados, 
                com mais de 10 anos de experiência em pesquisa pura e aplicada.
              </p>
            </div>

            {/* Director */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">AP</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Átila Pessoa Costa</h3>
              <p className="text-blue-600 font-medium mb-3">Diretor de Relacionamento Institucional</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Especialista em Gerência de Projetos em Engenharia de Software, com mais de 20 anos de experiência em projetos de pesquisa aplicada.
              </p>
            </div>

            {/* Conselheiro */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">JM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Jackson Maia</h3>
              <p className="text-blue-600 font-medium mb-3">Conselheiro Presidente do Comitê Científico</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                PhD em Física Aplicada, com mais de 25 anos de experiência em projetos de pesquisa pura aplicada.
              </p>
            </div>

            {/* Research Team */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">AN</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Equipe de Analístas de Negócios</h3>
              <p className="text-purple-600 font-medium mb-3">Especialistas de Domínio e Indústrias</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Equipe multidisciplinar composta por especialistas nas áreas de domínio do conhecimento e indústrias específicas.
              </p>
            </div>

            {/* Research Team */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">PA</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Equipe de Pesquisa</h3>
              <p className="text-purple-600 font-medium mb-3">Pesquisadores e Cientistas</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Equipe multidisciplinar composta por especialistas em machine learning, 
                processamento de linguagem natural e análise de dados.
              </p>
            </div>

            {/* Development Team */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">DT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Equipe de Desenvolvimento</h3>
              <p className="text-green-600 font-medium mb-3">Desenvolvedores e Engenheiros</p>
              <p className="text-gray-600 dark:text-slate-300 text-sm">
                Profissionais experientes em desenvolvimento de software, 
                arquitetura de sistemas e implementação de soluções tecnológicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Áreas de Atuação
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Inteligência Artificial</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Machine Learning, NLP, Visão Computacional</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ciência de Dados</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Análise Preditiva, Big Data, Business Intelligence</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tecnologia da Informação</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Desenvolvimento de Software, Arquitetura de Sistemas</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-900/20 text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Inovação</h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm">Avaliação de Potencial, Empreendedorismo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a nós na missão de transformar o futuro através da tecnologia e inovação.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white dark:bg-slate-800 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  )
}
