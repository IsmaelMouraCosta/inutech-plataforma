import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const revistaDirectory = path.join(process.cwd(), 'content/revista')

export interface RevistaArticle {
  slug: string
  title: string
  subtitle?: string
  date: string
  abstract: string
  content: string
  authors: string[]
  keywords: string[]
  doi?: string
  volume: string
  issue: string
  pages?: string
  category: 'research' | 'review' | 'case-study' | 'editorial'
  status: 'published' | 'in-review' | 'accepted'
  featured?: boolean
  readTime: string
}

export function getAllArticles(): RevistaArticle[] {
  const fileNames = fs.readdirSync(revistaDirectory)
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(revistaDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        subtitle: data.subtitle,
        date: data.date,
        abstract: data.abstract,
        content,
        authors: data.authors || [],
        keywords: data.keywords || [],
        doi: data.doi,
        volume: data.volume,
        issue: data.issue,
        pages: data.pages,
        category: data.category || 'research',
        status: data.status || 'published',
        featured: data.featured || false,
        readTime: calculateReadTime(content),
      }
    })

  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getArticleBySlug(slug: string): RevistaArticle | null {
  try {
    const fullPath = path.join(revistaDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      abstract: data.abstract,
      content,
      authors: data.authors || [],
      keywords: data.keywords || [],
      doi: data.doi,
      volume: data.volume,
      issue: data.issue,
      pages: data.pages,
      category: data.category || 'research',
      status: data.status || 'published',
      featured: data.featured || false,
      readTime: calculateReadTime(content),
    }
  } catch (error) {
    return null
  }
}

export function getPublishedArticles(): RevistaArticle[] {
  return getAllArticles().filter((article) => article.status === 'published')
}

export function getFeaturedArticles(): RevistaArticle[] {
  return getPublishedArticles().filter((article) => article.featured)
}

export function getArticlesByCategory(category: string): RevistaArticle[] {
  return getPublishedArticles().filter((article) => article.category === category)
}

export function getArticlesByAuthor(author: string): RevistaArticle[] {
  return getPublishedArticles().filter((article) => 
    article.authors.some(a => a.toLowerCase().includes(author.toLowerCase()))
  )
}

export function getAllKeywords(): string[] {
  const articles = getPublishedArticles()
  const keywords = articles.flatMap((article) => article.keywords)
  return Array.from(new Set(keywords))
}

export function getAllAuthors(): string[] {
  const articles = getPublishedArticles()
  const authors = articles.flatMap((article) => article.authors)
  return Array.from(new Set(authors))
}

export function getVolumes(): string[] {
  const articles = getPublishedArticles()
  const volumes = articles.map((article) => article.volume)
  return Array.from(new Set(volumes)).sort().reverse()
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 150 // Artigos científicos são mais densos
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min de leitura`
}

export function formatDate(date: string): string {
  return format(new Date(date), 'dd MMMM yyyy', { locale: ptBR })
}

export function getCategoryLabel(category: string): string {
  const labels = {
    'research': 'Pesquisa Original',
    'review': 'Revisão de Literatura',
    'case-study': 'Estudo de Caso',
    'editorial': 'Editorial'
  }
  return labels[category as keyof typeof labels] || category
}
