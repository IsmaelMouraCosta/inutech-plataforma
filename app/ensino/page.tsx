import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Users, FileText, Calendar, Microscope, Lightbulb, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ensino - Educação Científica e Tecnológica | iNuTech',
  description: 'Planejamento estratégico para projetos de ensino e aprendizagem em tecnologias relacionadas com inteligência artificial, ciência de dados e inovação.',
}

export default function EnsinoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Ensino
            </h1>
            <p className="text-xl text-gray-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Educação científica e tecnológica de excelência, formando profissionais 
              preparados para os desafios da era digital e da inovação.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nossas Atividades de Ensino
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Planejamento Estratégico */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-blue-200 dark:border-slate-600">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
                  Planejamento Estratégico
                </h3>
              </div>
              <p className="text-blue-700 dark:text-slate-300 leading-relaxed">
                Planejamento estratégico para projetos de ensino e aprendizagem em tecnologias 
                relacionadas com inteligência artificial, ciência de dados, ciência da informação 
                e outras áreas interdisciplinares em relação à tecnologia e à inovação.
              </p>
            </div>

            {/* Cursos e Eventos */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-green-200 dark:border-slate-600">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">
                  Cursos e Eventos
                </h3>
              </div>
              <p className="text-green-700 dark:text-slate-300 leading-relaxed mb-4">
                Realização de Cursos, Seminários, Congressos e outros eventos voltados à educação 
                científica e tecnológica, proporcionando aprendizado prático e networking profissional.
              </p>
              <Link 
                href="/cursos"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Contrate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Publicações */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-purple-200 dark:border-slate-600">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">
                  Publicações
                </h3>
              </div>
              <p className="text-purple-700 dark:text-slate-300 leading-relaxed">
                Edição e publicação de materiais de caráter científico, tecnológico e de inovação, 
                contribuindo para a disseminação do conhecimento e formação de profissionais.
              </p>
            </div>

            {/* Eventos Científicos */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-orange-200 dark:border-slate-600">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-orange-600 dark:text-orange-400 mr-3" />
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100">
                  Eventos Científicos
                </h3>
              </div>
              <p className="text-orange-700 dark:text-slate-300 leading-relaxed">
                Promoção, produção e realização de eventos científicos de cunho prático, 
                ensejando a cooperação e o cooperativismo científico e tecnológico.
              </p>
            </div>

            {/* Laboratórios */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm dark:shadow-slate-900/20 border border-teal-200 dark:border-slate-600 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Microscope className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" />
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-100">
                  Laboratórios Especializados
                </h3>
              </div>
              <p className="text-teal-700 dark:text-slate-300 leading-relaxed">
                Desenvolver atividades científicas e tecnológicas em laboratórios especializados 
                em inteligência artificial, ciência de dados e áreas correlatas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa Metodologia de Ensino
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Combinamos teoria e prática para formar profissionais preparados para os desafios 
              da era digital e da inovação tecnológica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Teoria Aplicada</h3>
              <p className="text-blue-100 text-sm">
                Fundamentos teóricos sólidos com aplicação prática
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Microscope className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Laboratórios</h3>
              <p className="text-blue-100 text-sm">
                Ambientes especializados para experimentação
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Colaboração</h3>
              <p className="text-blue-100 text-sm">
                Trabalho em equipe e networking profissional
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Lightbulb className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Inovação</h3>
              <p className="text-blue-100 text-sm">
                Foco em soluções criativas e inovadoras
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Interessado em nossos programas de ensino?
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 mb-8">
            Entre em contato conosco para conhecer mais sobre nossos cursos, eventos e oportunidades de aprendizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Entre em Contato
            </Link>
            <Link 
              href="/eventos"
              className="inline-block bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Eventos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
