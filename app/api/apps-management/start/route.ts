import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { ProcessManager } from '@/lib/process-manager'

export async function POST(request: NextRequest) {
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

    const { appId } = await request.json()

    if (!appId) {
      return NextResponse.json({ error: 'App ID é obrigatório' }, { status: 400 })
    }

    // Usar o gerenciador de processos
    const result = await ProcessManager.startApp(appId)
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: result.message,
        appId,
        pid: result.pid
      })
    } else {
      return NextResponse.json({ 
        success: false, 
        error: result.message 
      }, { status: 400 })
    }

  } catch (error) {
    console.error('Erro ao iniciar aplicação:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' }, 
      { status: 500 }
    )
  }
}
