import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'

export interface UserProfile {
  id: string
  name: string
  email: string
  image?: string
  domain: string
  role: 'admin' | 'researcher' | 'student' | 'guest'
  permissions: string[]
  isInutechMember: boolean
}

export interface AuthConfig {
  allowedDomains: string[]
  adminEmails: string[]
  defaultRole: 'researcher' | 'student' | 'guest'
}

// Configuração de autenticação para iNuTech
export const authConfig: AuthConfig = {
  allowedDomains: ['inutech.org.br'],
  adminEmails: [
    'webmaster@inutech.org.br',
    'andrehsiqueira@inutech.org.br',
    'ismael.costa@inutech.org.br'
  ],
  defaultRole: 'researcher'
}

export class AuthService {
  private config: AuthConfig

  constructor(config: AuthConfig = authConfig) {
    this.config = config
  }

  // Verificar se o usuário está autenticado
  async isAuthenticated(): Promise<boolean> {
    const session = await getServerSession(authOptions)
    return !!session?.user
  }

  // Obter perfil do usuário
  async getUserProfile(): Promise<UserProfile | null> {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return null
    }

    const email = session.user.email
    if (!email) {
      return null
    }

    const domain = this.extractDomain(email)
    const isInutechMember = this.isInutechMember(email, domain)
    const role = this.determineRole(email, isInutechMember)
    const permissions = this.getPermissions(role)

    return {
      id: session.user.id || email,
      name: session.user.name || 'Usuário',
      email,
      image: session.user.image || undefined,
      domain,
      role,
      permissions,
      isInutechMember
    }
  }

  // Verificar se o usuário é membro do iNuTech
  isInutechMember(email: string, domain: string): boolean {
    return this.config.allowedDomains.includes(domain)
  }

  // Determinar role do usuário
  determineRole(email: string, isInutechMember: boolean): UserProfile['role'] {
    if (this.config.adminEmails.includes(email)) {
      return 'admin'
    }

    if (isInutechMember) {
      return 'researcher'
    }

    return this.config.defaultRole
  }

  // Obter permissões baseadas no role
  getPermissions(role: UserProfile['role']): string[] {
    const permissions = {
      admin: [
        'dashboard:full',
        'obsidian:full',
        'labs:full',
        'events:full',
        'users:manage',
        'content:manage',
        'settings:manage'
      ],
      researcher: [
        'dashboard:read',
        'obsidian:full',
        'labs:full',
        'events:read',
        'content:read'
      ],
      student: [
        'dashboard:read',
        'obsidian:read',
        'labs:read',
        'events:read',
        'content:read'
      ],
      guest: [
        'dashboard:read',
        'content:read'
      ]
    }

    return permissions[role] || permissions.guest
  }

  // Verificar se o usuário tem permissão específica
  hasPermission(userProfile: UserProfile, permission: string): boolean {
    return userProfile.permissions.includes(permission) || 
           userProfile.permissions.includes('dashboard:full')
  }

  // Extrair domínio do email
  private extractDomain(email: string): string {
    return email.split('@')[1] || ''
  }

  // Verificar acesso à área restrita
  async canAccessRestrictedArea(): Promise<boolean> {
    const profile = await this.getUserProfile()
    return profile?.isInutechMember || false
  }

  // Verificar se é admin
  async isAdmin(): Promise<boolean> {
    const profile = await this.getUserProfile()
    return profile?.role === 'admin'
  }

  // Verificar se é pesquisador
  async isResearcher(): Promise<boolean> {
    const profile = await this.getUserProfile()
    return profile?.role === 'researcher' || profile?.role === 'admin'
  }
}

// Instância global do serviço de autenticação
export const authService = new AuthService()

// Hooks e utilitários para componentes
export const authUtils = {
  // Verificar se o email é válido para iNuTech
  isValidInutechEmail(email: string): boolean {
    return authConfig.allowedDomains.some(domain => 
      email.toLowerCase().endsWith(`@${domain}`)
    )
  },

  // Obter mensagem de erro para domínio não autorizado
  getDomainErrorMessage(email: string): string {
    const domain = email.split('@')[1]
    return `Apenas emails do domínio @inutech.org.br são permitidos. Seu email (@${domain}) não está autorizado.`
  },

  // Obter role display name
  getRoleDisplayName(role: UserProfile['role']): string {
    const names = {
      admin: 'Administrador',
      researcher: 'Pesquisador',
      student: 'Estudante',
      guest: 'Visitante'
    }
    return names[role] || 'Visitante'
  },

  // Obter cor do role
  getRoleColor(role: UserProfile['role']): string {
    const colors = {
      admin: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      researcher: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      student: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      guest: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
    return colors[role] || colors.guest
  }
}
