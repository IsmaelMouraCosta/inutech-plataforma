'use client'

import { Button } from '@/components/ui/button'
import { Shield, CheckCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLGDP } from '@/lib/use-lgpd'

interface LGDPPopupProps {
  onAccept?: () => void
  onDecline?: () => void
}

export function LGDPPopup({ onAccept, onDecline }: LGDPPopupProps) {
  const { hasAccepted, isLoading, acceptLGDP, declineLGDP } = useLGDP()

  const handleAccept = () => {
    acceptLGDP()
    onAccept?.()
  }

  const handleDecline = () => {
    declineLGDP()
    onDecline?.()
  }

  // Não mostra o popup se já aceitou ou ainda está carregando
  if (hasAccepted || isLoading) {
    return null
  }

  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        />
        
        {/* Popup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6" />
                      <h2 className="text-xl font-semibold">
                        Aviso de Privacidade - LGPD
                      </h2>
                    </div>
                    <button
                      onClick={handleDecline}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Proteção de Dados Pessoais
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        O iNuTech iCT respeita sua privacidade e está em conformidade com a 
                        <strong> Lei Geral de Proteção de Dados (LGPD)</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      📋 Como utilizamos seus dados:
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• <strong>Visitantes:</strong> Não coletamos dados pessoais de visitantes anônimos</li>
                      <li>• <strong>Usuários autenticados:</strong> Apenas dados do Google OAuth (nome, email, foto)</li>
                      <li>• <strong>Finalidade:</strong> Acesso à área restrita e funcionalidades premium</li>
                      <li>• <strong>Compartilhamento:</strong> Não compartilhamos dados com terceiros</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                      ✅ Seus direitos:
                    </h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• Acesso aos seus dados pessoais</li>
                      <li>• Correção de dados incorretos</li>
                      <li>• Exclusão dos seus dados</li>
                      <li>• Portabilidade dos dados</li>
                      <li>• Revogação do consentimento</li>
                    </ul>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <p>
                      <strong>Importante:</strong> Usuários que fazem login via Google são associados 
                      do iNuTech e já possuem termo de responsabilidade e anuência de dados cadastrais 
                      assinados. Para mais informações, entre em contato: 
                      <a href="mailto:contato@inutech.org.br" className="text-blue-600 hover:underline ml-1">
                        contato@inutech.org.br
                      </a>
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 dark:bg-slate-700 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Ao continuar navegando, você concorda com nossa política de privacidade.
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={handleDecline}
                      className="text-slate-600 hover:text-slate-800"
                    >
                      Recusar
                    </Button>
                    <Button
                      onClick={handleAccept}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Aceitar e Continuar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
    </AnimatePresence>
  )
}
