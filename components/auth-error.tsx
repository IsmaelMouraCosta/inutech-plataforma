'use client'

import { AlertTriangle, ExternalLink, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface AuthErrorProps {
  error?: string
}

export function AuthError({ error }: AuthErrorProps) {
  const isGoogleConfigError = error === 'Configuration' || 
    error === 'OAuthCallback' || 
    error === 'OAuthCreateAccount'

  if (!isGoogleConfigError) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-red-200 dark:border-red-800 overflow-hidden">
          {/* Header */}
          <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-200 dark:border-red-800">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              <div>
                <h1 className="text-xl font-semibold text-red-900 dark:text-red-100">
                  Erro de Configuração Google OAuth
                </h1>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  As credenciais do Google não estão configuradas corretamente
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                🚨 Problema Identificado
              </h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                O erro 500 está ocorrendo porque as variáveis de ambiente 
                <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded text-xs ml-1">
                  GOOGLE_CLIENT_ID
                </code> e 
                <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded text-xs ml-1">
                  GOOGLE_CLIENT_SECRET
                </code> 
                não estão configuradas.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-slate-900 dark:text-slate-100">
                🔧 Como Resolver:
              </h3>
              
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start space-x-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</span>
                  <span>Acesse o <strong>Google Cloud Console</strong></span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</span>
                  <span>Crie um projeto ou selecione existente</span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
                  <span>Ative a <strong>Google+ API</strong></span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">4</span>
                  <span>Crie credenciais <strong>OAuth 2.0</strong></span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">5</span>
                  <span>Configure as URIs de redirecionamento</span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">6</span>
                  <span>Atualize o arquivo <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">.env.local</code></span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
              <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
                📋 URIs de Redirecionamento Necessárias:
              </h4>
              <div className="space-y-1 text-sm font-mono text-slate-600 dark:text-slate-300">
                <div>• <code>http://localhost:17011/api/auth/callback/google</code></div>
                <div>• <code>https://seu-dominio.vercel.app/api/auth/callback/google</code></div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                📖 Documentação Completa:
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Instruções detalhadas estão disponíveis na documentação do projeto.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Link href="/docs/deployment/CONFIGURACAO_GOOGLE_AUTH.md">
                    <Settings className="h-4 w-4 mr-2" />
                    Ver Documentação
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-blue-600 hover:text-blue-700"
                >
                  <a
                    href="https://console.cloud.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Google Cloud Console
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 dark:bg-slate-700 px-6 py-4 border-t border-slate-200 dark:border-slate-600">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Após configurar, reinicie a aplicação com <code className="bg-slate-100 dark:bg-slate-600 px-1 rounded">npm run dev</code>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.reload()}
              >
                Tentar Novamente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
