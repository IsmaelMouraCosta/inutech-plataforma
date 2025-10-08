// Gerenciador de processos para aplicações iNuTech
import { exec } from 'child_process'
import { promisify } from 'util'
import { getAppConfig } from './apps-config'

const execAsync = promisify(exec)

export interface ProcessInfo {
  pid: number
  port: number
  appId: string
  command: string
  startTime: Date
}

export class ProcessManager {
  private static processes: Map<string, ProcessInfo> = new Map()

  // Iniciar aplicação
  static async startApp(appId: string): Promise<{ success: boolean; message: string; pid?: number }> {
    try {
      const appConfig = getAppConfig(appId)
      if (!appConfig) {
        return { success: false, message: 'Aplicação não encontrada' }
      }

      // Verificar se já está rodando
      if (this.processes.has(appId)) {
        return { success: false, message: 'Aplicação já está rodando' }
      }

      // Verificar se a porta está em uso
      const portInUse = await this.isPortInUse(appConfig.port)
      if (portInUse) {
        return { success: false, message: `Porta ${appConfig.port} já está em uso` }
      }

      // Iniciar aplicação
      const command = `cd "${appConfig.path}" && ${appConfig.command}`
      const child = exec(command, {
        detached: true,
        stdio: 'ignore',
        cwd: appConfig.path
      })

      // Desconectar do processo pai
      child.unref()

      // Aguardar um pouco para verificar se iniciou
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Verificar se realmente iniciou
      const isRunning = await this.isPortInUse(appConfig.port)
      if (isRunning) {
        // Obter PID do processo
        const pid = await this.getProcessPid(appConfig.port)
        
        // Salvar informações do processo
        this.processes.set(appId, {
          pid: pid || 0,
          port: appConfig.port,
          appId,
          command,
          startTime: new Date()
        })

        return { 
          success: true, 
          message: `Aplicação ${appId} iniciada com sucesso`,
          pid: pid || 0
        }
      } else {
        return { success: false, message: 'Falha ao iniciar aplicação' }
      }

    } catch (error) {
      console.error(`Erro ao iniciar ${appId}:`, error)
      return { success: false, message: 'Erro interno do servidor' }
    }
  }

  // Parar aplicação
  static async stopApp(appId: string): Promise<{ success: boolean; message: string }> {
    try {
      const appConfig = getAppConfig(appId)
      if (!appConfig) {
        return { success: false, message: 'Aplicação não encontrada' }
      }

      // Verificar se está rodando
      if (!this.processes.has(appId)) {
        return { success: false, message: 'Aplicação não está rodando' }
      }

      // Parar processo específico
      const processInfo = this.processes.get(appId)!
      
      // Tentar parar por PID primeiro
      if (processInfo.pid > 0) {
        try {
          await execAsync(`kill -TERM ${processInfo.pid}`)
          await new Promise(resolve => setTimeout(resolve, 1000))
        } catch (error) {
          // Se falhar, tentar por porta
          await execAsync(`pkill -f "npm run dev.*-p ${appConfig.port}"`)
        }
      } else {
        // Parar por porta
        await execAsync(`pkill -f "npm run dev.*-p ${appConfig.port}"`)
      }

      // Remover do registro
      this.processes.delete(appId)

      return { success: true, message: `Aplicação ${appId} parada com sucesso` }

    } catch (error) {
      console.error(`Erro ao parar ${appId}:`, error)
      return { success: false, message: 'Erro interno do servidor' }
    }
  }

  // Verificar se porta está em uso
  static async isPortInUse(port: number): Promise<boolean> {
    try {
      const { stdout } = await execAsync(`lsof -ti:${port}`)
      return stdout.trim().length > 0
    } catch (error) {
      return false
    }
  }

  // Obter PID do processo na porta
  static async getProcessPid(port: number): Promise<number | null> {
    try {
      const { stdout } = await execAsync(`lsof -ti:${port}`)
      const pid = parseInt(stdout.trim())
      return isNaN(pid) ? null : pid
    } catch (error) {
      return null
    }
  }

  // Obter status de todas as aplicações
  static async getAppsStatus(): Promise<Map<string, { status: 'running' | 'stopped'; pid?: number; startTime?: Date }>> {
    const status = new Map()
    
    for (const [appId, processInfo] of this.processes) {
      const isRunning = await this.isPortInUse(processInfo.port)
      status.set(appId, {
        status: isRunning ? 'running' : 'stopped',
        pid: processInfo.pid,
        startTime: processInfo.startTime
      })
    }

    return status
  }

  // Limpar processos órfãos
  static async cleanupOrphanedProcesses(): Promise<void> {
    for (const [appId, processInfo] of this.processes) {
      const isRunning = await this.isPortInUse(processInfo.port)
      if (!isRunning) {
        this.processes.delete(appId)
      }
    }
  }

  // Obter informações do processo
  static getProcessInfo(appId: string): ProcessInfo | undefined {
    return this.processes.get(appId)
  }

  // Listar todos os processos
  static getAllProcesses(): ProcessInfo[] {
    return Array.from(this.processes.values())
  }
}


