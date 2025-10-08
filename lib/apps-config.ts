// Configuração das aplicações do iNuTech
// Sistema multi-ambiente: DEV e PROD

export interface AppConfig {
  id: string
  name: string
  description: string
  url: string
  port: number
  path: string
  command: string
  healthCheck?: string
}

export interface EnvironmentConfig {
  dev: AppConfig[]
  prod: AppConfig[]
}

// Detectar ambiente atual
export function getCurrentEnvironment(): 'dev' | 'prod' {
  // Verificar variáveis de ambiente
  if (process.env.NODE_ENV === 'production') {
    return 'prod'
  }
  
  // Verificar se está rodando localmente
  if (process.env.NEXTAUTH_URL?.includes('localhost')) {
    return 'dev'
  }
  
  // Padrão: desenvolvimento
  return 'dev'
}

// Configuração por ambiente
export const environmentConfig: EnvironmentConfig = {
  dev: [
    {
      id: 'innovation',
      name: 'Área de Inovação',
      description: 'Ferramentas de avaliação de inovação',
      url: 'http://localhost:1647',
      port: 1647,
      path: '/Users/ismael/Documents/05 - DEV/05.6 - Lab/web/inutech_innovation_advice',
      command: 'npm run dev -- -p 1647',
      healthCheck: '/api/health'
    },
    {
      id: 'assessment',
      name: 'Área Assessment',
      description: 'Sistema de avaliação de projetos',
      url: 'http://localhost:1887',
      port: 1887,
      path: '/Users/ismael/Library/CloudStorage/GoogleDrive-ismael.costa@inutech.org.br/Drives compartilhados/Diretoria de Desenvolvimento/Iniciativas/Assessment',
      command: 'npm run dev -- -p 1887',
      healthCheck: '/api/health'
    },
    {
      id: 'projects',
      name: 'Área de Projetos',
      description: 'Sistema de adesão a projetos',
      url: 'http://localhost:2000',
      port: 2000,
      path: '/Users/ismael/Library/CloudStorage/GoogleDrive-ismael.costa@inutech.org.br/Drives compartilhados/Diretoria Executiva/Clientes : Oportunidades : Projetos',
      command: 'npm run dev -- -p 2000',
      healthCheck: '/api/health'
    },
    {
      id: 'themis',
      name: 'Aplicativo Themis',
      description: 'Sistema de gestão Themis',
      url: 'http://localhost:327',
      port: 327,
      path: '/Users/ismael/Library/CloudStorage/GoogleDrive-ismael.costa@inutech.org.br/Drives compartilhados/Diretoria de Desenvolvimento/Iniciativas/Themis',
      command: 'npm run dev -- -p 327',
      healthCheck: '/api/health'
    }
  ],
  prod: [
    {
      id: 'innovation',
      name: 'Área de Inovação',
      description: 'Ferramentas de avaliação de inovação',
      url: 'https://innovation.inutech.org.br',
      port: 1647,
      path: '/var/www/inutech/innovation/advice',
      command: 'npm run start',
      healthCheck: '/api/health'
    },
    {
      id: 'assessment',
      name: 'Área Assessment',
      description: 'Sistema de avaliação de projetos',
      url: 'https://assessment.inutech.org.br',
      port: 1887,
      path: '/var/www/inutech/assessment',
      command: 'npm run start',
      healthCheck: '/api/health'
    },
    {
      id: 'projects',
      name: 'Área de Projetos',
      description: 'Sistema de adesão a projetos',
      url: 'https://projects.inutech.org.br',
      port: 2000,
      path: '/var/www/inutech/projects/promotion',
      command: 'npm run start',
      healthCheck: '/api/health'
    },
    {
      id: 'themis',
      name: 'Aplicativo Themis',
      description: 'Sistema de gestão Themis',
      url: 'https://themis.inutech.org.br',
      port: 327,
      path: '/var/www/inutech/themis',
      command: 'npm run start',
      healthCheck: '/api/health'
    }
  ]
}

// Obter configuração atual baseada no ambiente
export function getAppsConfig(): AppConfig[] {
  const env = getCurrentEnvironment()
  return environmentConfig[env]
}

// Função para obter configuração de uma aplicação
export function getAppConfig(appId: string): AppConfig | undefined {
  const apps = getAppsConfig()
  return apps.find(app => app.id === appId)
}

// Função para obter comando de inicialização
export function getStartCommand(appId: string): string | undefined {
  const app = getAppConfig(appId)
  if (!app) return undefined
  
  return `cd "${app.path}" && ${app.command}`
}

// Função para obter comando de parada específico
export function getStopCommand(appId: string): string | undefined {
  const app = getAppConfig(appId)
  if (!app) return undefined
  
  // Comando mais específico que não afeta outras aplicações
  return `pkill -f "npm run dev.*-p ${app.port}" || pkill -f "node.*${app.port}" || echo "Nenhum processo específico encontrado para ${appId}"`
}

// Função para obter informações do ambiente atual
export function getEnvironmentInfo() {
  const env = getCurrentEnvironment()
  const apps = getAppsConfig()
  
  return {
    environment: env,
    totalApps: apps.length,
    apps: apps.map(app => ({
      id: app.id,
      name: app.name,
      url: app.url,
      path: app.path
    }))
  }
}
