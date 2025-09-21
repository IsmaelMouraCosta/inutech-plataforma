"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight, BookOpen, FlaskConical, Users, TrendingUp } from 'lucide-react'
import { ICON_SIZES } from '@/lib/constants'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900">
      {/* Hero GIF */}
      <img 
        src="/images/hero_01_iNuTech.gif" 
        alt="iNuTech Hero Animation" 
        className="w-full h-auto object-cover -mt-20 -mb-40"
      />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-2 sm:pb-32 lg:flex lg:items-end lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#eventos" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                Novidades
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-secondary-600 dark:text-slate-400">
                <span>Eventos e Agenda Científica</span>
                <ArrowRight className={ICON_SIZES.sm} />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-secondary-900 dark:text-slate-100 sm:text-6xl">
            Plataforma de{' '}
            <span className="gradient-text">Pesquisa Científica</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-600 dark:text-slate-300">
            O iNuTech oferece uma metodologia completa para pesquisa aplicada, divulgação científica, 
            laboratórios de tratamento da informação em múltiplos contextos, prototipação evolutiva e 
            processo de evolução de Startups focadas em Ciência de Dados, Inteligência Artificial e 
            e Ciência da Informação. Conecte-se com a nosssa comunidade científica e explore as fronteiras 
            da tecnologia e inovação.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/laboratorios">
              <Button className="btn-primary btn-lg">
                Explorar Laboratórios
                <ArrowRight className={`ml-2 ${ICON_SIZES.sm}`} />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="btn-outline btn-lg">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:flex-1 lg:flex lg:items-end">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <Link href="/blog" className="card p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-slate-700 rounded-lg">
                    <BookOpen className={`${ICON_SIZES.lg} text-primary-600 dark:text-slate-300`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-slate-100">Blog Científico</h3>
                    <p className="text-sm text-secondary-600 dark:text-slate-400">Artigos e Pesquisas</p>
                  </div>
                </div>
              </Link>
              <Link href="/laboratorios" className="card p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-100 dark:bg-slate-700 rounded-lg">
                    <FlaskConical className={`${ICON_SIZES.lg} text-accent-600 dark:text-slate-300`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-slate-100">Laboratórios Virtuais</h3>
                    <p className="text-sm text-secondary-600 dark:text-slate-400">Prototipação com IA</p>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard" className="card p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary-100 dark:bg-slate-700 rounded-lg">
                    <Users className={`${ICON_SIZES.lg} text-secondary-600 dark:text-slate-300`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-slate-100">Comunidade</h3>
                    <p className="text-sm text-secondary-600 dark:text-slate-400">Networking científico</p>
                  </div>
                </div>
              </Link>
              <Link href="/innovation" className="card p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-slate-700 rounded-lg">
                    <TrendingUp className={`${ICON_SIZES.lg} text-green-600 dark:text-slate-300`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-slate-100">Visão de Inovação</h3>
                    <p className="text-sm text-secondary-600 dark:text-slate-400">Viabilidade e Escalabilidade</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
