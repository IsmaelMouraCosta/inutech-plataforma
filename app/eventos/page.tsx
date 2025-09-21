import { Metadata } from 'next'
import { Calendar, Clock, MapPin, Users, ExternalLink, Plus, Filter, Search } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eventos - iNuTech iCT',
  description: 'Participe dos nossos eventos, webinars e conferências sobre inovação e tecnologia.',
  keywords: 'eventos, webinars, conferências, inovação, tecnologia, inutech',
}

const eventos = [
  {
    id: 1,
    titulo: 'Workshop: Introdução à Inteligência Artificial',
    descricao: 'Aprenda os fundamentos da IA e Machine Learning com hands-on práticos.',
    data: '2024-02-15',
    hora: '14:00',
    duracao: '3 horas',
    local: 'Online (Zoom)',
    tipo: 'workshop',
    categoria: 'Tecnologia',
    status: 'inscricoes-abertas',
    vagas: 50,
    inscritos: 32,
    preco: 'Gratuito',
    palestrantes: ['Dr. Carlos Silva', 'Dra. Ana Costa'],
    tags: ['IA', 'Machine Learning', 'Workshop']
  },
  {
    id: 2,
    titulo: 'Conferência: Futuro da Computação Quântica',
    descricao: 'Discussão sobre os avanços e aplicações práticas da computação quântica.',
    data: '2024-02-22',
    hora: '19:00',
    duracao: '2 horas',
    local: 'Auditório Principal - Campus iNuTech',
    tipo: 'conferencia',
    categoria: 'Tecnologia',
    status: 'inscricoes-abertas',
    vagas: 200,
    inscritos: 156,
    preco: 'R$ 50,00',
    palestrantes: ['Prof. Dr. Roberto Santos', 'Dr. Maria Oliveira'],
    tags: ['Computação Quântica', 'Física', 'Tecnologia']
  },
  {
    id: 3,
    titulo: 'Webinar: Biotecnologia e Sustentabilidade',
    descricao: 'Como a biotecnologia pode contribuir para um futuro mais sustentável.',
    data: '2024-02-28',
    hora: '16:00',
    duracao: '1.5 horas',
    local: 'Online (YouTube Live)',
    tipo: 'webinar',
    categoria: 'Ciências',
    status: 'inscricoes-abertas',
    vagas: 500,
    inscritos: 423,
    preco: 'Gratuito',
    palestrantes: ['Dra. Fernanda Lima', 'Dr. Pedro Almeida'],
    tags: ['Biotecnologia', 'Sustentabilidade', 'Ciências']
  },
  {
    id: 4,
    titulo: 'Hackathon: Inovação em Saúde Digital',
    descricao: '48 horas de desenvolvimento para soluções inovadoras em saúde digital.',
    data: '2024-03-08',
    hora: '09:00',
    duracao: '48 horas',
    local: 'Centro de Inovação iNuTech',
    tipo: 'hackathon',
    categoria: 'Saúde',
    status: 'em-breve',
    vagas: 100,
    inscritos: 0,
    preco: 'R$ 25,00',
    palestrantes: ['Equipe iNuTech', 'Mentores da Indústria'],
    tags: ['Hackathon', 'Saúde Digital', 'Inovação']
  },
  {
    id: 5,
    titulo: 'Meetup: Comunidade de Desenvolvedores',
    descricao: 'Networking e troca de experiências entre desenvolvedores da região.',
    data: '2024-03-15',
    hora: '18:30',
    duracao: '2 horas',
    local: 'Espaço Coworking iNuTech',
    tipo: 'meetup',
    categoria: 'Desenvolvimento',
    status: 'inscricoes-abertas',
    vagas: 80,
    inscritos: 67,
    preco: 'Gratuito',
    palestrantes: ['Comunidade Local'],
    tags: ['Desenvolvimento', 'Networking', 'Comunidade']
  },
  {
    id: 6,
    titulo: 'Curso: Data Science para Negócios',
    descricao: 'Curso intensivo de 5 dias sobre aplicação de Data Science em empresas.',
    data: '2024-03-25',
    hora: '09:00',
    duracao: '40 horas',
    local: 'Sala de Treinamento iNuTech',
    tipo: 'curso',
    categoria: 'Negócios',
    status: 'inscricoes-abertas',
    vagas: 30,
    inscritos: 28,
    preco: 'R$ 800,00',
    palestrantes: ['Dr. João Pereira', 'Dra. Carla Mendes'],
    tags: ['Data Science', 'Negócios', 'Análise']
  }
]

const categorias = ['Todos', 'Tecnologia', 'Ciências', 'Saúde', 'Desenvolvimento', 'Negócios']
const tipos = ['Todos', 'Workshop', 'Conferência', 'Webinar', 'Hackathon', 'Meetup', 'Curso']

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 sm:text-5xl md:text-6xl">
              Eventos iNuTech
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Participe dos nossos eventos, webinars e conferências sobre inovação, 
              tecnologia e ciência. Conecte-se com especialistas e expanda seu conhecimento.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                href="#eventos"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Ver Eventos
              </Link>
              <Link
                href="/eventos/calendario"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Calendário
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <select className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 text-sm">
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <select className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 text-sm">
                {tipos.map((tipo) => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
              
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                <Plus className="mr-2 h-4 w-4" />
                Criar Evento
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Eventos */}
      <div id="eventos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
            Próximos Eventos
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-300">
            Encontre o evento perfeito para expandir seus conhecimentos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
            >
              {/* Header do Card */}
              <div className={`p-6 ${
                evento.tipo === 'workshop' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                evento.tipo === 'conferencia' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                evento.tipo === 'webinar' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                evento.tipo === 'hackathon' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                evento.tipo === 'meetup' ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
                'bg-gradient-to-r from-gray-500 to-slate-500'
              } text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20`}>
                    {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    evento.status === 'inscricoes-abertas' 
                      ? 'bg-green-500 text-white' 
                      : evento.status === 'em-breve'
                      ? 'bg-yellow-500 text-yellow-900'
                      : 'bg-red-500 text-white'
                  }`}>
                    {evento.status === 'inscricoes-abertas' ? 'Inscrições Abertas' : 
                     evento.status === 'em-breve' ? 'Em Breve' : 'Inscrições Encerradas'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{evento.titulo}</h3>
                <p className="text-sm opacity-90">{evento.descricao}</p>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500 dark:text-slate-400" />
                    <span className="text-sm text-gray-600 dark:text-slate-300">
                      {new Date(evento.data).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500 dark:text-slate-400" />
                    <span className="text-sm text-gray-600 dark:text-slate-300">
                      {evento.hora} ({evento.duracao})
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500 dark:text-slate-400" />
                    <span className="text-sm text-gray-600 dark:text-slate-300">
                      {evento.local}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500 dark:text-slate-400" />
                    <span className="text-sm text-gray-600 dark:text-slate-300">
                      {evento.inscritos}/{evento.vagas}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Palestrantes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {evento.palestrantes.map((palestrante) => (
                      <span
                        key={palestrante}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-xs text-blue-800 dark:text-blue-200 rounded"
                      >
                        {palestrante}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {evento.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs text-gray-600 dark:text-slate-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-100">
                    {evento.preco}
                  </div>
                  
                  <div className="flex space-x-3">
                    {evento.status === 'inscricoes-abertas' ? (
                      <Link
                        href={`/eventos/${evento.id}/inscricao`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors"
                      >
                        Inscrever-se
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center px-4 py-2 bg-gray-300 dark:bg-slate-600 text-gray-500 dark:text-slate-400 text-sm font-medium rounded-md cursor-not-allowed"
                      >
                        Em Breve
                      </button>
                    )}
                    
                    <Link
                      href={`/eventos/${evento.id}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-200 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Quer organizar um evento?
            </h3>
            <p className="text-gray-600 dark:text-slate-300 mb-6">
              Entre em contato conosco para discutir como podemos ajudar a organizar 
              seu evento na plataforma iNuTech.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
            >
              <Plus className="mr-2 h-5 w-5" />
              Solicitar Evento
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
