import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'

const events = [
  {
    id: 1,
    title: 'Conferência de IA e Inovação 2024',
    description: 'Evento anual que reúne especialistas em inteligência artificial para discutir as últimas tendências e inovações.',
    date: '2024-03-15',
    time: '09:00 - 18:00',
    location: 'São Paulo, SP',
    attendees: '500+',
    type: 'Conferência',
    href: '/eventos/conferencia-ia-2024'
  },
  {
    id: 2,
    title: 'Workshop: Prototipação com IA Generativa',
    description: 'Workshop prático sobre como utilizar ferramentas de IA generativa para prototipação rápida.',
    date: '2024-02-28',
    time: '14:00 - 17:00',
    location: 'Online',
    attendees: '100',
    type: 'Workshop',
    href: '/eventos/workshop-ia-generativa'
  },
  {
    id: 3,
    title: 'Meetup: Comunidade de Pesquisadores',
    description: 'Encontro mensal da comunidade para networking e compartilhamento de experiências.',
    date: '2024-02-15',
    time: '19:00 - 21:00',
    location: 'São Paulo, SP',
    attendees: '50',
    type: 'Meetup',
    href: '/eventos/meetup-pesquisadores'
  }
]

export function EventsSection() {
  return (
    <div id="eventos" className="bg-gray-50 dark:bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Eventos e Agendas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            Participe dos nossos eventos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Conecte-se com a comunidade científica, participe de workshops 
            e conferências sobre as últimas inovações em tecnologia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      event.type === 'Conferência' 
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                        : event.type === 'Workshop'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                        : 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
                    }`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-slate-400 flex items-center gap-1">
                      <Users className={ICON_SIZES.sm} />
                      {event.attendees}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className={ICON_SIZES.sm} />
                      <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className={ICON_SIZES.sm} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className={ICON_SIZES.sm} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link 
                    href={event.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
                  >
                    Saiba mais <ArrowRight className={ICON_SIZES.xs} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Ver todos os eventos
            <ArrowRight className={ICON_SIZES.sm} />
          </Link>
        </div>
      </div>
    </div>
  )
}
