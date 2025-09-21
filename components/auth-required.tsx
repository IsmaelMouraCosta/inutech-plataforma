'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Loader2, Lock, ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

interface AuthRequiredProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  redirectTo?: string
}

export function AuthRequired({ 
  children, 
  fallback,
  redirectTo = '/auth/signin'
}: AuthRequiredProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(redirectTo)
    }
  }, [status, router, redirectTo])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600 dark:text-slate-300">Verificando autenticação...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-8 w-8 text-red-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Acesso Restrito
          </h1>
          
          <p className="text-gray-600 dark:text-slate-300 mb-6">
            Esta área é restrita apenas para usuários logados. 
            Faça login para continuar.
          </p>
          
          <div className="space-y-3">
            <Link href="/auth/signin">
              <Button className="w-full">
                Fazer Login
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

