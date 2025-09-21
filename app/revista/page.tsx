import { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedArticles, getFeaturedArticles, getVolumes, formatDate, getCategoryLabel } from '@/lib/revista'
import { Calendar, Clock, Users, BookOpen, ArrowRight, Search, Filter } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'
import { AuthRequired } from '@/components/auth-required'

export const metadata: Metadata = {
  title: 'Revista Científica - iNuTech | Publicações Revisadas por Pares',
  description: 'Revista científica do iNuTech com artigos revisados por pares sobre inteligência artificial, ciência de dados e inovação tecnológica.',
}

export default function RevistaPage() {
  const articles = getPublishedArticles()
  const featuredArticles = getFeaturedArticles()
  const volumes = getVolumes()

  return (
    <AuthRequired>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Revista Científica iNuTech
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Publicações revisadas por pares sobre as últimas descobertas em inteligência artificial, 
              ciência de dados e inovação tecnológica. Contribuindo para o avanço da pesquisa científica.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <BookOpen className={ICON_SIZES.xs} />
                ISSN: 1234-5678
              </span>
              <span className="flex items-center gap-1">
                <Calendar className={ICON_SIZES.xs} />
                Publicação Trimestral
              </span>
              <span className="flex items-center gap-1">
                <Users className={ICON_SIZES.xs} />
                Revisão por Pares
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Artigos em Destaque
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.slug} className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full">
                        {getCategoryLabel(article.category)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-slate-400">
                        Vol. {article.volume}, Iss. {article.issue}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      <Link href={`/revista/${article.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                        {article.title}
                      </Link>
                    </h3>
                    
                    {article.subtitle && (
                      <p className="text-sm text-gray-600 dark:text-slate-300 italic">
                        {article.subtitle}
                      </p>
                    )}
                    
                    <p className="text-gray-600 dark:text-slate-300 line-clamp-3 text-sm">
                      {article.abstract}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-400">
                      <time dateTime={article.date} className="flex items-center gap-1">
                        <Calendar className={ICON_SIZES.xs} />
                        {formatDate(article.date)}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock className={ICON_SIZES.xs} />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-slate-400">
                        {article.authors.slice(0, 2).join(', ')}
                        {article.authors.length > 2 && ' et al.'}
                      </div>
                      <Link 
                        href={`/revista/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        Ler artigo <ArrowRight className={ICON_SIZES.xs} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${ICON_SIZES.sm} text-gray-400`} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700">
                <Filter className={ICON_SIZES.sm} />
                Filtrar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Volumes
                  </h3>
                  <div className="space-y-2">
                    {volumes.map((volume) => (
                      <button
                        key={volume}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
                      >
                        Volume {volume}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Categorias
                  </h3>
                  <div className="space-y-2">
                    {['research', 'review', 'case-study', 'editorial'].map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
                      >
                        {getCategoryLabel(category)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Articles List */}
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Todos os Artigos
              </h2>
              <div className="space-y-6">
                {articles.map((article) => (
                  <article key={article.slug} className="border-b border-gray-200 dark:border-slate-700 pb-6 last:border-b-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full">
                          {getCategoryLabel(article.category)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-slate-400">
                          Vol. {article.volume}, Iss. {article.issue}
                        </span>
                        {article.doi && (
                          <span className="text-xs text-gray-500 dark:text-slate-400">
                            DOI: {article.doi}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        <Link href={`/revista/${article.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                          {article.title}
                        </Link>
                      </h3>
                      
                      {article.subtitle && (
                        <p className="text-sm text-gray-600 dark:text-slate-300 italic">
                          {article.subtitle}
                        </p>
                      )}
                      
                      <p className="text-gray-600 dark:text-slate-300 line-clamp-2">
                        {article.abstract}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-gray-500 dark:text-slate-400">
                          <span>{article.authors.join(', ')}</span>
                          <time dateTime={article.date} className="flex items-center gap-1">
                            <Calendar className={ICON_SIZES.xs} />
                            {formatDate(article.date)}
                          </time>
                        </div>
                        <Link 
                          href={`/revista/${article.slug}`}
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          Ler artigo <ArrowRight className={ICON_SIZES.xs} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Submeta seu Artigo
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contribua para o avanço da ciência e tecnologia. Submeta seu artigo para publicação em nossa revista científica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/revista/submissao"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Submeter Artigo
            </Link>
            <Link
              href="/revista/diretrizes"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Diretrizes para Autores
            </Link>
          </div>
        </div>
      </section>
      </div>
    </AuthRequired>
  )
}

