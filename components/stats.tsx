import { Users, FileText, FlaskConical, TrendingUp } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'

const stats = [
  { id: 1, name: 'Pesquisadores Ativos', value: '50+', icon: Users },
  { id: 2, name: 'Publicações Científicas', value: '100+', icon: FileText },
  { id: 3, name: 'Projetos em Andamento', value: '25+', icon: FlaskConical },
  { id: 4, name: 'Taxa de Inovação', value: '85%', icon: TrendingUp },
]

export function Stats() {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
              Números que Inspiram
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-slate-300">
              Nossa contribuição para o avanço da ciência e tecnologia
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 dark:bg-slate-800/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-slate-400 flex items-center justify-center gap-2">
                  <stat.icon className={`${ICON_SIZES.md} text-primary-600 dark:text-slate-300`} />
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
