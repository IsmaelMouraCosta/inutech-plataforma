import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cursos - Formação Profissional | iNuTech',
  description: 'Cursos de formação profissional em Ciência de Dados, Inteligência Artificial e áreas correlatas. Técnico e Avançado.',
}

export default function CursosPage() {
  const disciplinas = [
    'Introdução à Ciência de Dados',
    'Fundamentos em Ciência de Dados',
    'Governança de Dados',
    'Estatística Instrumental',
    'Programação Instrumental em Python',
    'Big Data e Data Lake',
    'Machine Learning e Mineração de Dados',
    'NLP – Processamento de Linguagem Natural',
    'Teoria de Redes Complexas',
    'Elastic Search',
    'Tensor Flow',
    'Deep Learning'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Cursos
            </h1>
            <p className="text-xl text-gray-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Formação profissional de excelência em Ciência de Dados, 
              Inteligência Artificial e áreas correlatas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200 dark:border-slate-600">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Ciência de Dados
              </h2>
              <p className="text-lg text-blue-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Curso de formação profissional, focado na fundamentação epistemológica e metodológica 
                e nos aspectos praxiológicos da Ciência de Dados e das principais disciplinas correlatas. 
                Oferece ferramental didático/pedagógico para capacitar os alunos no desenvolvimento de 
                soluções tecnológicas no âmbito da Ciência de Dados.
              </p>
            </div>

            {/* Course Levels */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-blue-200 dark:border-slate-600">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
                    Técnico
                  </h3>
                </div>
                <div className="flex items-center text-blue-700 dark:text-slate-300">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">120 horas</span>
                </div>
                <p className="text-blue-600 dark:text-slate-400 mt-3">
                  Formação básica em Ciência de Dados com foco em fundamentos e aplicações práticas.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-blue-200 dark:border-slate-600">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                    Avançado
                  </h3>
                </div>
                <div className="flex items-center text-indigo-700 dark:text-slate-300">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">462 horas</span>
                </div>
                <p className="text-indigo-600 dark:text-slate-400 mt-3">
                  Formação completa com aprofundamento em técnicas avançadas e projetos práticos.
                </p>
              </div>
            </div>

            {/* Disciplinas */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
                Disciplinas Oferecidas
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {disciplinas.map((disciplina, index) => (
                  <div key={index} className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-blue-800 dark:text-slate-200 text-sm font-medium">
                      {disciplina}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Contrate Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-blue-600 dark:text-slate-400 mt-4 text-sm">
                Entre em contato para mais informações sobre valores, cronograma e inscrições
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200 dark:border-slate-600">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Engenharia de Dados
              </h2>
              <p className="text-lg text-blue-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Compreender os fundamentos da Engenharia de Dados: Proporcionar aos estudantes uma compreensão sólida dos conceitos, 
              princípios e técnicas fundamentais relacionados à Engenharia de Dados, incluindo modelagem de dados, processamento
              de dados em larga escala, armazenamento e recuperação de dados, e sistemas de gerenciamento de banco de dados.
              </p>
            </div>

            {/* Course Levels */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-blue-200 dark:border-slate-600">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
                    Especialização
                  </h3>
                </div>
                <div className="flex items-center text-blue-700 dark:text-slate-300">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">1200 horas</span>
                </div>
                <p className="text-blue-600 dark:text-slate-400 mt-3">
                  Formação básica em Engenharia de Dados com foco em conectar teorias com e aplicações práticas.
                </p>
              </div>
            </div>

            {/* Disciplinas */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
                Disciplinas Oferecidas
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {disciplinas.map((disciplina, index) => (
                  <div key={index} className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-blue-800 dark:text-slate-200 text-sm font-medium">
                      {disciplina}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Contrate Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-blue-600 dark:text-slate-400 mt-4 text-sm">
                Entre em contato para mais informações sobre valores, cronograma e inscrições
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que escolher nossos cursos?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Formação completa e atualizada com as melhores práticas do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Conteúdo Atualizado</h3>
              <p className="text-blue-100 text-sm">
                Currículo alinhado com as demandas do mercado atual
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Professores Especialistas</h3>
              <p className="text-blue-100 text-sm">
                Docentes com experiência prática na área
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Projetos Práticos</h3>
              <p className="text-blue-100 text-sm">
                Aplicação prática dos conceitos aprendidos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <ArrowRight className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Certificação</h3>
              <p className="text-blue-100 text-sm">
                Certificado reconhecido pelo mercado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 mb-8">
            Transforme sua carreira com conhecimento em Ciência de Dados e Inteligência Artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Entre em Contato
            </Link>
            <Link 
              href="/ensino"
              className="inline-block bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Conheça Nossos Programas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
