import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'
import { authConfig } from './auth'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      // Verificar se o email é do domínio permitido
      if (user.email) {
        const domain = user.email.split('@')[1]
        const isAllowedDomain = authConfig.allowedDomains.includes(domain)
        
        if (!isAllowedDomain) {
          console.log(`Tentativa de login com domínio não autorizado: ${domain}`)
          return false // Bloquear login
        }
        
        console.log(`Login autorizado para: ${user.email} (${domain})`)
        return true
      }
      
      return true // Permitir login temporariamente para debug
    },
    redirect: async ({ url, baseUrl }) => {
      // Se a URL de callback for para o dashboard, permitir
      if (url.startsWith('/dashboard')) {
        return url
      }
      // Se for uma URL externa, redirecionar para o dashboard
      if (url.startsWith(baseUrl)) {
        return '/dashboard'
      }
      // Por padrão, redirecionar para o dashboard
      return '/dashboard'
    },
    session: async ({ session, user, token }) => {
      if (session?.user && token) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
        session.user.image = token.picture as string
      }
      return session
    },
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.picture = user.image
      }
      return token
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  events: {
    signIn: async ({ user, account, profile, isNewUser }) => {
      if (isNewUser && user.email) {
        console.log(`Novo usuário registrado: ${user.email}`)
        
        // Aqui você pode adicionar lógica para criar perfil do usuário
        // ou enviar notificação para administradores
      }
    },
    signOut: async ({ session, token }) => {
      console.log('Usuário fez logout')
    }
  }
}
