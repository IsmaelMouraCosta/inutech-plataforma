'use client'

import { signIn, getSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { LogoSvg } from '@/components/logo-svg'
import { AuthError } from '@/components/auth-error'
import { AlertCircle, Mail, Lock, ArrowRight } from 'lucide-react'

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [configError, setConfigError] = useState(false)

  useEffect(() => {
    // Verificar se há erro de configuração na URL
    const urlParams = new URLSearchParams(window.location.search)
    const errorParam = urlParams.get('error')
    
    if (errorParam === 'Configuration' || errorParam === 'OAuthCallback') {
      setConfigError(true)
    }
  }, [])

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('google', {
        callbackUrl: '/dashboard',
        redirect: false
      })

      if (result?.error) {
        if (result.error === 'Configuration') {
          setConfigError(true)
        } else {
          setError('Erro de autenticação. Verifique suas credenciais.')
        }
      }
    } catch (error) {
      setError('Erro inesperado. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  // Se há erro de configuração, mostrar componente de erro
  if (configError) {
    return <AuthError error="Configuration" />
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <LogoSvg className="h-16 w-auto" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          Área Restrita iNuTech
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-slate-300">
          Acesse sua conta para continuar
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-800 py-8 px-4 shadow-xl rounded-lg border border-gray-200 dark:border-slate-700 sm:px-10">
          {/* Informações sobre domínio */}
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
              <div>
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Acesso Restrito
                </h3>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  Apenas emails do domínio <strong>@inutech.org.br</strong> são permitidos para acessar a área restrita.
                </p>
              </div>
            </div>
          </div>

          {/* Botão de Login */}
          <div>
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Entrando...
                </div>
              ) : (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Entrar com Google
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>
          </div>

          {/* Mensagem de Erro */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                    Acesso Negado
                  </h3>
                  <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                    {error}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Informações Adicionais */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-slate-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-400">
                  Informações Importantes
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-slate-300">
              <div className="flex items-start">
                <Lock className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                <span>Seu email será verificado automaticamente</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                <span>Apenas contas @inutech.org.br têm acesso</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                <span>Após o login, você será redirecionado para o dashboard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-slate-400">
            Problemas com o acesso?{' '}
            <a
              href="mailto:admin@inutech.org.br"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
