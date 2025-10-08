"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight, BookOpen, FlaskConical, Users, TrendingUp, Brain, Database, Cpu, Zap } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'

// CSS customizado para animações das linhas
const waveAnimation = `
  @keyframes waveFlow {
    0%, 100% { 
      transform: translateX(0) scaleY(1);
      opacity: 0.3;
    }
    25% { 
      transform: translateX(10px) scaleY(1.1);
      opacity: 0.6;
    }
    50% { 
      transform: translateX(0) scaleY(0.9);
      opacity: 0.8;
    }
    75% { 
      transform: translateX(-10px) scaleY(1.1);
      opacity: 0.6;
    }
  }
  
  .wavy-line {
    animation: waveFlow 6s ease-in-out infinite;
  }
  
  .wavy-line:nth-child(1) { animation-delay: 0s; animation-duration: 4s; }
  .wavy-line:nth-child(2) { animation-delay: 0.5s; animation-duration: 5s; }
  .wavy-line:nth-child(3) { animation-delay: 1s; animation-duration: 6s; }
  .wavy-line:nth-child(4) { animation-delay: 1.5s; animation-duration: 4.5s; }
  .wavy-line:nth-child(5) { animation-delay: 2s; animation-duration: 5.5s; }
  .wavy-line:nth-child(6) { animation-delay: 2.5s; animation-duration: 6.5s; }
  .wavy-line:nth-child(7) { animation-delay: 3s; animation-duration: 4s; }
  .wavy-line:nth-child(8) { animation-delay: 3.5s; animation-duration: 5s; }
  .wavy-line:nth-child(9) { animation-delay: 4s; animation-duration: 6s; }
  .wavy-line:nth-child(10) { animation-delay: 4.5s; animation-duration: 5.5s; }
`

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <style jsx>{waveAnimation}</style>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Animated Wavy Lines */}
          <g className="wavy-lines">
            {/* Line 1 */}
            <path 
              d="M0,80 Q200,40 400,80 T800,80 T1200,80" 
              stroke="url(#lineGradient1)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 2 */}
            <path 
              d="M0,120 Q150,80 300,120 T600,120 T900,120 T1200,120" 
              stroke="url(#lineGradient2)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 3 */}
            <path 
              d="M0,160 Q250,120 500,160 T1000,160 T1200,160" 
              stroke="url(#lineGradient3)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 4 */}
            <path 
              d="M0,200 Q180,160 360,200 T720,200 T1080,200 T1200,200" 
              stroke="url(#lineGradient1)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 5 */}
            <path 
              d="M0,240 Q220,200 440,240 T880,240 T1200,240" 
              stroke="url(#lineGradient2)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 6 */}
            <path 
              d="M0,280 Q300,240 600,280 T1200,280" 
              stroke="url(#lineGradient3)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 7 */}
            <path 
              d="M0,320 Q160,280 320,320 T640,320 T960,320 T1200,320" 
              stroke="url(#lineGradient1)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 8 */}
            <path 
              d="M0,360 Q280,320 560,360 T1120,360 T1200,360" 
              stroke="url(#lineGradient2)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 9 */}
            <path 
              d="M0,400 Q200,360 400,400 T800,400 T1200,400" 
              stroke="url(#lineGradient3)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
            
            {/* Line 10 */}
            <path 
              d="M0,440 Q240,400 480,440 T960,440 T1200,440" 
              stroke="url(#lineGradient1)" 
              strokeWidth="1" 
              fill="none"
              className="wavy-line"
            />
          </g>
          
          {/* Additional floating elements */}
          <g className="floating-dots">
            <circle cx="100" cy="100" r="2" fill="#3b82f6" opacity="0.3" className="animate-ping" style={{ animationDelay: '0s' }} />
            <circle cx="300" cy="150" r="1.5" fill="#8b5cf6" opacity="0.4" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="500" cy="200" r="2.5" fill="#06b6d4" opacity="0.2" className="animate-ping" style={{ animationDelay: '2s' }} />
            <circle cx="700" cy="120" r="1" fill="#3b82f6" opacity="0.5" className="animate-ping" style={{ animationDelay: '3s' }} />
            <circle cx="900" cy="180" r="2" fill="#8b5cf6" opacity="0.3" className="animate-ping" style={{ animationDelay: '4s' }} />
            <circle cx="1100" cy="140" r="1.5" fill="#06b6d4" opacity="0.4" className="animate-ping" style={{ animationDelay: '5s' }} />
          </g>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
              <Zap className="w-4 h-4 mr-2" />
              Nova Plataforma Científica
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Plataforma de{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Pesquisa Científica
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conecte-se com a comunidade científica, explore laboratórios virtuais de IA e 
            participe da revolução da pesquisa aplicada em Ciência de Dados, Inteligência 
            Artificial e Ciência da Informação.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/laboratorios">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Explorar Laboratórios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/blog" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Blog Científico
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Artigos e Pesquisas
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/laboratorios" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Laboratórios Virtuais
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Prototipação com IA
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/dashboard" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Comunidade
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Networking científico
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/innovation" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Inovação
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Viabilidade e Escalabilidade
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
              Tecnologias que impulsionam a pesquisa
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">IA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="h-6 w-6 text-purple-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="h-6 w-6 text-cyan-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ML</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-green-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Inovação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
