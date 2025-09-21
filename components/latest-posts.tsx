import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'
import { getAllPosts, formatDate } from '@/lib/blog'

const posts = getAllPosts().slice(0, 3)

export function LatestPosts() {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            Últimas Publicações
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Fique por dentro das últimas descobertas e insights da nossa comunidade científica.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className={ICON_SIZES.xs} />
                  {formatDate(post.date)}
                </time>
                <span className="text-gray-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className={ICON_SIZES.xs} />
                  {post.readTime}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-slate-100 group-hover:text-gray-600 dark:group-hover:text-slate-300">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
                  {post.excerpt}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:text-slate-100">
                    <span className="absolute inset-0" />
                    {post.author}
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">{post.tags[0] || 'Geral'}</p>
                </div>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
              >
                Ler mais <ArrowRight className={ICON_SIZES.xs} />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Ver todas as publicações
            <ArrowRight className={ICON_SIZES.sm} />
          </Link>
        </div>
      </div>
    </div>
  )
}
