'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAppsConfig, getEnvironmentInfo } from '@/lib/apps-config'
import { 
  Play, 
  Square, 
  RefreshCw, 
  ExternalLink, 
  Server, 
  Activity,
  Globe,
  Settings,
  Monitor,
  Code,
  Database
} from 'lucide-react'

interface AppStatus {
  id: string
  name: string
  description: string
  url: string
  port: number
  status: 'running' | 'stopped' | 'error' | 'unknown'
  lastChecked: Date
  healthCheck?: string
}

export default function AppsManagementPage() {
  const [apps, setApps] = useState<AppStatus[]>([])
  const [environmentInfo, setEnvironmentInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Carregar configuração inicial
  useEffect(() => {
    const envInfo = getEnvironmentInfo()
    setEnvironmentInfo(envInfo)
    
    // Converter configuração para formato da interface
    const appsConfig = getAppsConfig()
    const initialApps: AppStatus[] = appsConfig.map(app => ({
      id: app.id,
      name: app.name,
      description: app.description,
      url: app.url,
      port: app.port,
      status: 'unknown',
      lastChecked: new Date(),
      healthCheck: app.healthCheck
    }))
    
    setApps(initialApps)
  }, [])

  // Função para verificar status das aplicações
  const checkAppStatus = async (app: AppStatus) => {
    try {
      const response = await fetch(`${app.url}${app.healthCheck || '/'}`, {
        method: 'GET',
        mode: 'no-cors', // Para evitar CORS
        cache: 'no-cache'
      })
      return 'running'
    } catch (error) {
      // Verificar se a porta está em uso
      try {
        const response = await fetch(app.url, {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-cache'
        })
        return 'running'
      } catch {
        return 'stopped'
      }
    }
  }

  // Verificar status de todas as aplicações
  const checkAllStatus = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/apps-management/status')
      const data = await response.json()
      
      if (data.success) {
        setApps(data.apps)
      } else {
        console.error('Erro ao obter status:', data.error)
      }
    } catch (error) {
      console.error('Erro ao verificar status:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Iniciar aplicação
  const startApp = async (appId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/apps-management/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ appId })
      })
      
      if (response.ok) {
        // Atualizar status local
        setApps(prev => prev.map(app => 
          app.id === appId 
            ? { ...app, status: 'running', lastChecked: new Date() }
            : app
        ))
      }
    } catch (error) {
      console.error('Erro ao iniciar aplicação:', error)
    }
    setIsLoading(false)
  }

  // Parar aplicação
  const stopApp = async (appId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/apps-management/stop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ appId })
      })
      
      if (response.ok) {
        // Atualizar status local
        setApps(prev => prev.map(app => 
          app.id === appId 
            ? { ...app, status: 'stopped', lastChecked: new Date() }
            : app
        ))
      }
    } catch (error) {
      console.error('Erro ao parar aplicação:', error)
    }
    setIsLoading(false)
  }

  // Verificar status na montagem do componente
  useEffect(() => {
    checkAllStatus()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'stopped':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'running':
        return 'Em Execução'
      case 'stopped':
        return 'Parado'
      case 'error':
        return 'Erro'
      default:
        return 'Desconhecido'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <Monitor className="h-8 w-8 text-blue-600" />
                Gerenciamento de Aplicações
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Monitore e controle todas as aplicações da plataforma iNuTech
              </p>
              {environmentInfo && (
                <div className="mt-2 flex items-center gap-4 text-sm">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Code className="h-3 w-3 mr-1" />
                    Ambiente: {environmentInfo.environment.toUpperCase()}
                  </Badge>
                  <span className="text-gray-500 dark:text-gray-400">
                    {environmentInfo.totalApps} aplicações configuradas
                  </span>
                </div>
              )}
            </div>
            <Button 
              onClick={checkAllStatus} 
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Atualizar Status
            </Button>
          </div>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Em Execução</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {apps.filter(app => app.status === 'running').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Square className="h-6 w-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Paradas</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {apps.filter(app => app.status === 'stopped').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Com Erro</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {apps.filter(app => app.status === 'error').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {apps.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Aplicações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {apps.map((app) => (
            <Card key={app.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-blue-600" />
                      {app.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {app.description}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(app.status)}>
                    {getStatusText(app.status)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Informações da Aplicação */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">URL:</p>
                      <p className="text-gray-600 dark:text-gray-300 break-all">{app.url}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Porta:</p>
                      <p className="text-gray-600 dark:text-gray-300">{app.port}</p>
                    </div>
                  </div>

                  {/* Última Verificação */}
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Última verificação: {app.lastChecked.toLocaleString('pt-BR')}
                  </div>

                  {/* Ações */}
                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={() => startApp(app.id)}
                      disabled={isLoading || app.status === 'running'}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      Iniciar
                    </Button>
                    
                    <Button
                      onClick={() => stopApp(app.id)}
                      disabled={isLoading || app.status === 'stopped'}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Square className="h-4 w-4" />
                      Parar
                    </Button>
                    
                    <Button
                      onClick={() => window.open(app.url, '_blank')}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Abrir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informações Adicionais */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-600" />
              Informações do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Scripts Disponíveis</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• <code>npm run start:innovation</code> - Iniciar Área de Inovação</li>
                  <li>• <code>npm run start:assessment</code> - Iniciar Área Assessment</li>
                  <li>• <code>npm run start:projects</code> - Iniciar Área de Projetos</li>
                  <li>• <code>npm run start:themis</code> - Iniciar Themis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Comandos de Parada</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• <code>npm run stop:innovation</code> - Parar Área de Inovação</li>
                  <li>• <code>npm run stop:assessment</code> - Parar Área Assessment</li>
                  <li>• <code>npm run stop:projects</code> - Parar Área de Projetos</li>
                  <li>• <code>npm run stop:themis</code> - Parar Themis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
