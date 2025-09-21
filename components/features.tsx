import { BookOpen, FlaskConical, Users, TrendingUp, Brain, FileText, Calendar, Shield } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'

const features = [
  {
    name: 'Blog Científico',
    description: 'Artigos e publicações sobre as últimas descobertas em ciência e tecnologia.',
    icon: BookOpen,
    href: '/blog'
  },
  {
    name: 'Revista Científica',
    description: 'Publicações revisadas por pares com foco em inovação e pesquisa aplicada.',
    icon: FileText,
    href: '/revista'
  },
  {
    name: 'Laboratórios Virtuais',
    description: 'Ambientes online para prototipação de aplicativos e experimentos com IA.',
    icon: FlaskConical,
    href: '/labs'
  },
  {
    name: 'IA Generativa',
    description: 'Ferramentas e recursos para desenvolvimento e experimentação com LLMs.',
    icon: Brain,
    href: '/labs/ai'
  },
  {
    name: 'Avaliação de Inovação',
    description: 'Metodologias e ferramentas para avaliar o potencial de inovação de soluções.',
    icon: TrendingUp,
    href: '/avaliacao'
  },
  {
    name: 'Comunidade',
    description: 'Conecte-se com pesquisadores e profissionais da área de tecnologia.',
    icon: Users,
    href: '/comunidade'
  },
  {
    name: 'Eventos',
    description: 'Participação em conferências, workshops e eventos científicos.',
    icon: Calendar,
    href: '/eventos'
  },
  {
    name: 'Área Restrita',
    description: 'Acesso exclusivo a conteúdo premium e ferramentas avançadas.',
    icon: Shield,
    href: '/dashboard'
  }
]

export function Features() {
  return (
    <div className="py-24 sm:py-32 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Plataforma Completa
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            Tudo que você precisa para pesquisa científica
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Nossa plataforma oferece ferramentas integradas para divulgação científica, 
            experimentação e colaboração em projetos de inovação.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                  <feature.icon className={`${ICON_SIZES.md} flex-none text-primary-600 dark:text-slate-300`} aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-slate-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400">
                      Saiba mais <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
