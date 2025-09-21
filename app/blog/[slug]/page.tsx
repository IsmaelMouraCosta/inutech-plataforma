import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog'
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'
import { AuthRequired } from '@/components/auth-required'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado - iNuTech',
    }
  }

  return {
    title: `${post.title} - iNuTech Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
    },
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <AuthRequired>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
            >
              <ArrowLeft className={ICON_SIZES.sm} />
              Voltar ao blog
            </Link>
          </div>
          
          <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400 mb-4">
                <time dateTime={post.date} className="flex items-center gap-1">
                  <Calendar className={ICON_SIZES.xs} />
                  {formatDate(post.date)}
                </time>
                <span className="flex items-center gap-1">
                  <Clock className={ICON_SIZES.xs} />
                  {post.readTime}
                </span>
                <span>Por {post.author}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-slate-300 mb-6">
                {post.excerpt}
              </p>
              
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      <Tag className={ICON_SIZES.xs} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>
            
            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-700 dark:text-slate-300 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 dark:text-slate-300">
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-900 dark:text-white">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-700 dark:text-slate-300">
                      {children}
                    </em>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-slate-400 my-6">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-slate-200">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto my-6">
                      {children}
                    </pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            
            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-slate-400">
                  Publicado em {formatDate(post.date)} por {post.author}
                </div>
                <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <Share2 className={ICON_SIZES.sm} />
                  Compartilhar
                </button>
              </div>
            </footer>
          </article>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Artigos Relacionados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aqui você pode adicionar posts relacionados baseados em tags */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
              <p className="text-gray-600 dark:text-slate-400">
                Em breve: posts relacionados baseados em tags e conteúdo similar.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </AuthRequired>
  )
}

