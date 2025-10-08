import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { ProcessManager } from '@/lib/process-manager'
import { getAppsConfig } from '@/lib/apps-config'

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    // Verificar se é admin
    const userEmail = session.user.email
    if (!userEmail || !userEmail.includes('@inutech.org.br')) {
      return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
    }

    // Limpar processos órfãos
    await ProcessManager.cleanupOrphanedProcesses()

    // Obter status de todas as aplicações
    const appsStatus = await ProcessManager.getAppsStatus()
    const appsConfig = getAppsConfig()

    // Montar resposta com status de cada aplicação
    const status = appsConfig.map(app => {
      const processStatus = appsStatus.get(app.id)
      return {
        id: app.id,
        name: app.name,
        description: app.description,
        url: app.url,
        port: app.port,
        status: processStatus?.status || 'stopped',
        pid: processStatus?.pid,
        startTime: processStatus?.startTime,
        lastChecked: new Date()
      }
    })

    return NextResponse.json({ 
      success: true, 
      apps: status,
      total: status.length,
      running: status.filter(app => app.status === 'running').length,
      stopped: status.filter(app => app.status === 'stopped').length
    })

  } catch (error) {
    console.error('Erro ao obter status das aplicações:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' }, 
      { status: 500 }
    )
  }
}


