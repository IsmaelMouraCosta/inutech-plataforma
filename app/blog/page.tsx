import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/blog'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'
import { AuthRequired } from '@/components/auth-required'

export const metadata: Metadata = {
  title: 'Blog - iNuTech | Artigos sobre Ciência e Tecnologia',
  description: 'Artigos e publicações sobre as últimas descobertas em ciência, tecnologia e inovação. Conteúdo científico de qualidade do iNuTech.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPosts = posts.filter(post => post.featured)
  const recentPosts = posts.filter(post => !post.featured).slice(0, 6)

  return (
    <AuthRequired>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Blog Científico
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Artigos e publicações sobre as últimas descobertas em ciência, tecnologia e inovação. 
              Conteúdo científico de qualidade para pesquisadores, profissionais e entusiastas.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Artigos em Destaque
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400">
                      <time dateTime={post.date} className="flex items-center gap-1">
                        <Calendar className={ICON_SIZES.xs} />
                        {formatDate(post.date)}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock className={ICON_SIZES.xs} />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-slate-300 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-slate-400">
                        Por {post.author}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        Ler mais <ArrowRight className={ICON_SIZES.xs} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Artigos Recentes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400">
                    <time dateTime={post.date} className="flex items-center gap-1">
                      <Calendar className={ICON_SIZES.xs} />
                      {formatDate(post.date)}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className={ICON_SIZES.xs} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-slate-300 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full"
                        >
                          <Tag className={ICON_SIZES.xs} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-slate-400">
                      Por {post.author}
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Ler mais <ArrowRight className={ICON_SIZES.xs} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fique por dentro das novidades
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Assine nossa newsletter para receber os artigos mais recentes sobre ciência e tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Assinar
            </button>
          </div>
        </div>
      </section>
      </div>
    </AuthRequired>
  )
}

