'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Shield, Settings, Trash2, CheckCircle } from 'lucide-react'
import { useLGDP } from '@/lib/use-lgpd'
import { motion } from 'framer-motion'

interface LGDPSSettingsProps {
  className?: string
}

export function LGDPSSettings({ className }: LGDPSSettingsProps) {
  const { hasAccepted, acceptedDate, resetLGDP } = useLGDP()
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleReset = () => {
    resetLGDP()
    setShowResetConfirm(false)
    // Recarrega a página para mostrar o popup novamente
    window.location.reload()
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!hasAccepted) {
    return null
  }

  return (
    <div className={`bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <Shield className="h-5 w-5 text-green-600" />
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            Configurações de Privacidade
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Gerencie suas preferências de dados pessoais
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Status atual */}
        <div className="flex items-center space-x-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-slate-600 dark:text-slate-300">
            LGPD aceito em: <strong>{formatDate(acceptedDate)}</strong>
          </span>
        </div>

        {/* Informações sobre dados */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-sm">
            📊 Dados coletados:
          </h4>
          <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
            <li>• <strong>Visitantes:</strong> Nenhum dado pessoal coletado</li>
            <li>• <strong>Usuários autenticados:</strong> Nome, email e foto do Google</li>
            <li>• <strong>Finalidade:</strong> Acesso à área restrita e funcionalidades premium</li>
          </ul>
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowResetConfirm(true)}
            className="text-slate-600 hover:text-red-600 hover:border-red-300"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Revogar Consentimento
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('mailto:contato@inutech.org.br?subject=Consulta LGPD', '_blank')}
            className="text-slate-600 hover:text-blue-600"
          >
            <Settings className="h-4 w-4 mr-2" />
            Contatar DPO
          </Button>
        </div>

        {/* Confirmação de reset */}
        {showResetConfirm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3"
          >
            <p className="text-sm text-red-800 dark:text-red-200 mb-3">
              Tem certeza que deseja revogar seu consentimento? Isso irá:
            </p>
            <ul className="text-xs text-red-700 dark:text-red-300 space-y-1 mb-3">
              <li>• Remover todos os dados armazenados localmente</li>
              <li>• Mostrar o popup LGPD novamente</li>
              <li>• Limitar acesso a funcionalidades que requerem dados</li>
            </ul>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleReset}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Confirmar Revogação
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowResetConfirm(false)}
                className="text-slate-600"
              >
                Cancelar
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
