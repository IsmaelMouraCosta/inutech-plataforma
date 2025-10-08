import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'

/**
 * 🔐 ARQUIVO CRÍTICO - PROTEGIDO PELO SECURITY_PROTOCOL.md
 * 
 * ⚠️ ATENÇÃO:
 * - Este arquivo contém configurações sensíveis de autenticação
 * - NUNCA modifique sem backup prévio
 * - NUNCA commite com credenciais hardcoded
 * - Sempre use variáveis de ambiente
 */

// Domínios permitidos para acesso à plataforma
const ALLOWED_DOMAINS = ['inutech.org.br']

// Emails com permissões de administrador
const ADMIN_EMAILS = [
  'webmaster@inutech.org.br',
  'andrehsiqueira@inutech.org.br',
  'ismael.costa@inutech.org.br'
]

/**
 * Configuração do NextAuth.js v4
 * 
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  // Adapter do Prisma para persistência de sessões e usuários
  adapter: PrismaAdapter(prisma),

  // Providers de autenticação
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      
      // Perfil do usuário retornado pelo Google
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          emailVerified: profile.email_verified ? new Date() : null,
        }
      },
    }),
  ],

  // Páginas customizadas
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },

  // Estratégia de sessão (JWT para melhor performance)
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },

  // Callbacks para controle de acesso e sessão
  callbacks: {
    /**
     * Callback de autorização - Controla quem pode fazer login
     */
    async signIn({ user, account, profile }) {
      // Verificar se o email existe
      if (!user.email) {
        console.log('❌ Login bloqueado: Email não fornecido')
        return false
      }

      // Extrair domínio do email
      const emailDomain = user.email.split('@')[1]
      
      // Verificar se o domínio está na lista de permitidos
      const isAllowedDomain = ALLOWED_DOMAINS.includes(emailDomain)
      
      // Verificar se é um email de admin
      const isAdmin = ADMIN_EMAILS.includes(user.email)

      // Permitir acesso se for domínio permitido OU admin
      if (isAllowedDomain || isAdmin) {
        const roleLabel = isAdmin ? 'ADMIN' : 'MEMBER'
        console.log('✅ Login autorizado: ' + user.email + ' (' + roleLabel + ')')
        return true
      }

      // Bloquear outros domínios
      console.log('❌ Login bloqueado: ' + user.email + ' - Domínio @' + emailDomain + ' não autorizado')
      console.log('   Domínios permitidos: ' + ALLOWED_DOMAINS.join(', '))
      
      return false
    },

    /**
     * Callback JWT - Adiciona informações customizadas ao token
     */
    async jwt({ token, user }) {
      // Na primeira autenticação, adicionar dados do usuário ao token
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.picture = user.image
        
        // Verificar se é admin
        token.isAdmin = ADMIN_EMAILS.includes(user.email || '')
        
        // Verificar se é membro iNuTech
        const emailDomain = user.email?.split('@')[1] || ''
        token.isInutechMember = ALLOWED_DOMAINS.includes(emailDomain)
      }

      return token
    },

    /**
     * Callback Session - Disponibiliza dados do token na sessão
     */
    async session({ session, token }) {
      // Adicionar informações customizadas à sessão
      if (session.user && token) {
        session.user.id = token.id as string
        session.user.email = token.email as string | null
        session.user.name = token.name as string | null
        session.user.image = token.picture as string | null
        
        // Informações adicionais
        // @ts-ignore - Adicionar propriedades customizadas
        session.user.isAdmin = token.isAdmin as boolean
        // @ts-ignore
        session.user.isInutechMember = token.isInutechMember as boolean
      }

      return session
    },
  },

  // Eventos de autenticação (para logging)
  events: {
    async signIn({ user, isNewUser }) {
      if (isNewUser) {
        console.log('🎉 Novo usuário registrado: ' + (user.email || 'unknown'))
      } else {
        console.log('👤 Usuário logado: ' + (user.email || 'unknown'))
      }
    },
    
    async signOut({ token }) {
      console.log('👋 Usuário deslogado: ' + (token?.email || 'unknown'))
    },
  },

  // Configurações de debug (apenas em desenvolvimento)
  debug: process.env.NODE_ENV === 'development',

  // Secret para criptografia de tokens (OBRIGATÓRIO)
  secret: process.env.NEXTAUTH_SECRET,
}

/**
 * Utilitários de autenticação
 */
export const authUtils = {
  /**
   * Verificar se um email é de um domínio permitido
   */
  isAllowedEmail(email: string): boolean {
    const domain = email.split('@')[1]
    return ALLOWED_DOMAINS.includes(domain)
  },

  /**
   * Verificar se um email é de administrador
   */
  isAdminEmail(email: string): boolean {
    return ADMIN_EMAILS.includes(email)
  },

  /**
   * Obter mensagem de erro para domínio não autorizado
   */
  getDomainErrorMessage(email: string): string {
    const domain = email.split('@')[1]
    return 'Apenas emails dos domínios ' + ALLOWED_DOMAINS.join(', ') + ' são permitidos. Seu email (@' + domain + ') não está autorizado.'
  },

  /**
   * Lista de domínios permitidos
   */
  getAllowedDomains(): string[] {
    return [...ALLOWED_DOMAINS]
  },

  /**
   * Lista de emails administradores (sem expor as senhas)
   */
  getAdminCount(): number {
    return ADMIN_EMAILS.length
  }
}
