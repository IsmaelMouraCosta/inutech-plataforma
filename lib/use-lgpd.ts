'use client'

import { useState, useEffect } from 'react'

interface LGDPState {
  hasAccepted: boolean
  acceptedDate: string | null
  isLoading: boolean
}

export function useLGDP() {
  const [lgpdState, setLgpdState] = useState<LGDPState>({
    hasAccepted: false,
    acceptedDate: null,
    isLoading: true
  })

  useEffect(() => {
    // Verifica se estamos no cliente
    if (typeof window === 'undefined') return

    try {
      const hasAccepted = localStorage.getItem('lgpd-accepted') === 'true'
      const acceptedDate = localStorage.getItem('lgpd-accepted-date')
      
      setLgpdState({
        hasAccepted,
        acceptedDate,
        isLoading: false
      })
    } catch (error) {
      console.error('Erro ao verificar estado LGPD:', error)
      setLgpdState({
        hasAccepted: false,
        acceptedDate: null,
        isLoading: false
      })
    }
  }, [])

  const acceptLGDP = () => {
    try {
      const now = new Date().toISOString()
      localStorage.setItem('lgpd-accepted', 'true')
      localStorage.setItem('lgpd-accepted-date', now)
      
      setLgpdState({
        hasAccepted: true,
        acceptedDate: now,
        isLoading: false
      })
    } catch (error) {
      console.error('Erro ao aceitar LGPD:', error)
    }
  }

  const declineLGDP = () => {
    try {
      localStorage.removeItem('lgpd-accepted')
      localStorage.removeItem('lgpd-accepted-date')
      
      setLgpdState({
        hasAccepted: false,
        acceptedDate: null,
        isLoading: false
      })
    } catch (error) {
      console.error('Erro ao recusar LGPD:', error)
    }
  }

  const resetLGDP = () => {
    try {
      localStorage.removeItem('lgpd-accepted')
      localStorage.removeItem('lgpd-accepted-date')
      
      setLgpdState({
        hasAccepted: false,
        acceptedDate: null,
        isLoading: false
      })
    } catch (error) {
      console.error('Erro ao resetar LGPD:', error)
    }
  }

  return {
    ...lgpdState,
    acceptLGDP,
    declineLGDP,
    resetLGDP
  }
}
