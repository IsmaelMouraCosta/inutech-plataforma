import Link from 'next/link'
import { FlaskConical, Brain, Code, Database, ArrowRight } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'

const labs = [
  {
    id: 1,
    name: 'IA Generativa',
    description: 'Experimente com LLMs e modelos de linguagem avançados.',
    icon: Brain,
    status: 'Ativo',
    users: '150+',
    href: '/labs/ai'
  },
  {
    id: 2,
    name: 'Prototipação Web',
    description: 'Desenvolva e teste aplicações web em tempo real.',
    icon: Code,
    status: 'Ativo',
    users: '200+',
    href: '/labs/web'
  },
  {
    id: 3,
    name: 'Análise de Dados',
    description: 'Ferramentas para análise e visualização de dados científicos.',
    icon: Database,
    status: 'Em breve',
    users: '50+',
    href: '/labs/data'
  },
  {
    id: 4,
    name: 'Experimentos Químicos',
    description: 'Simulações de laboratório para experimentos químicos.',
    icon: FlaskConical,
    status: 'Em desenvolvimento',
    users: '25+',
    href: '/labs/chemistry'
  }
]

export function LabsPreview() {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Laboratórios Virtuais
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            Experimente sem limites
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Acesse nossos laboratórios virtuais para prototipação, experimentação 
            e desenvolvimento de soluções inovadoras.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {labs.map((lab) => (
              <div key={lab.id} className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <lab.icon className={`${ICON_SIZES.xl} flex-none text-primary-600 dark:text-slate-300`} aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 dark:text-slate-100">
                      {lab.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                        lab.status === 'Ativo' 
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20 dark:ring-green-400/20'
                          : lab.status === 'Em breve'
                          ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 ring-1 ring-inset ring-yellow-600/20 dark:ring-yellow-400/20'
                          : 'bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-slate-300 ring-1 ring-inset ring-gray-600/20 dark:ring-slate-500/20'
                      }`}>
                        {lab.status}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-slate-400">{lab.users} usuários</span>
                    </div>
                  </div>
                </div>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-slate-300">
                  <p className="flex-auto">{lab.description}</p>
                  <p className="mt-6">
                    <Link 
                      href={lab.href} 
                      className="inline-flex items-center gap-1 text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
                    >
                      Acessar laboratório <ArrowRight className={ICON_SIZES.xs} />
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Ver todos os laboratórios
            <ArrowRight className={ICON_SIZES.sm} />
          </Link>
        </div>
      </div>
    </div>
  )
}
