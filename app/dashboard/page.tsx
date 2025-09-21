import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { authService, authUtils } from '@/lib/auth'
import { 
  BarChart3, 
  FileText, 
  FlaskConical, 
  Calendar, 
  Settings, 
  Users, 
  BookOpen,
  TrendingUp,
  Activity,
  Clock,
  Star,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard - iNuTech iCT',
  description: 'Painel de controle da plataforma iNuTech para pesquisadores e colaboradores.',
  robots: 'noindex, nofollow'
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  const userProfile = await authService.getUserProfile()
  
  if (!userProfile?.isInutechMember) {
    redirect('/auth/signin?error=unauthorized')
  }

  const stats = {
    notes: 24,
    labs: 6,
    events: 8,
    projects: 12
  }

  const recentActivity = [
    {
      id: 1,
      type: 'note',
      title: 'Pesquisa em IA Generativa',
      description: 'Nota sincronizada do Obsidian',
      time: '2 minutos atrás',
      icon: FileText
    },
    {
      id: 2,
      type: 'lab',
      title: 'Laboratório IA/ML',
      description: 'Novo experimento iniciado',
      time: '15 minutos atrás',
      icon: FlaskConical
    },
    {
      id: 3,
      type: 'event',
      title: 'Workshop de IA',
      description: 'Inscrição confirmada',
      time: '1 hora atrás',
      icon: Calendar
    }
  ]

  const quickActions = [
    {
      title: 'Sincronizar Obsidian',
      description: 'Atualizar notas do vault',
      icon: BookOpen,
      href: '/obsidian',
      color: 'bg-blue-500'
    },
    {
      title: 'Laboratórios',
      description: 'Acessar experimentos',
      icon: FlaskConical,
      href: '/laboratorios',
      color: 'bg-green-500'
    },
    {
      title: 'Eventos',
      description: 'Ver próximos eventos',
      icon: Calendar,
      href: '/eventos',
      color: 'bg-purple-500'
    },
    {
      title: 'Configurações',
      description: 'Gerenciar perfil',
      icon: Settings,
      href: '/dashboard/settings',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
                Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-slate-300">
                Bem-vindo, {userProfile.name}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${authUtils.getRoleColor(userProfile.role)}`}>
                  {authUtils.getRoleDisplayName(userProfile.role)}
                </span>
              </div>
              {userProfile.image && (
                <img
                  src={userProfile.image}
                  alt={userProfile.name}
                  className="h-10 w-10 rounded-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Notas Sincronizadas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{stats.notes}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <FlaskConical className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Laboratórios Ativos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{stats.labs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Eventos Próximos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{stats.events}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Projetos Ativos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{stats.projects}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ações Rápidas */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">
                  Ações Rápidas
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action) => (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="group p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-gray-300 dark:hover:border-slate-600 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ${action.color} text-white`}>
                          <action.icon className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {action.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-slate-400">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Atividade Recente */}
          <div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">
                  Atividade Recente
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="p-1 bg-gray-100 dark:bg-slate-700 rounded">
                          <activity.icon className="h-4 w-4 text-gray-600 dark:text-slate-400" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-slate-100">
                          {activity.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-slate-400">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Funcionalidades Premium */}
        {userProfile.role === 'admin' && (
          <div className="mt-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Funcionalidades Administrativas
                  </h3>
                  <p className="text-purple-100 mt-1">
                    Gerencie usuários, conteúdo e configurações da plataforma
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Link
                    href="/dashboard/users"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Usuários
                  </Link>
                  <Link
                    href="/dashboard/content"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Conteúdo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
