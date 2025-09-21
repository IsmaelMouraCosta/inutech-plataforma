'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { Menu, X, User, LogOut, LogIn, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ThemeToggle } from './theme-toggle'
import { useTheme } from '@/contexts/theme-context'
import { LogoSvg } from './logo-svg'
import { ICON_SIZES } from '@/lib/constants'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const getNavigation = (isAuthenticated: boolean) => [
  { name: 'Início', href: '/' },
  { 
    name: 'NuScience', 
    href: '/science',
    submenu: isAuthenticated ? [
      { name: 'Ensino', href: '/ensino' },
      { name: 'Cursos', href: '/cursos' },
      { name: 'Revista', href: '/revista' },
      { name: 'Laboratórios', href: '/laboratorios' }
    ] : [
      { name: 'Ensino', href: '/ensino' },
      { name: 'Cursos', href: '/cursos' }
    ]
  },
  { name: 'NuTechnology', href: '/tech' },
  { 
    name: 'NuInnovation', 
    href: '/innovation',
    submenu: isAuthenticated ? [
      { name: 'Blog', href: '/blog' },
      { name: 'Eventos', href: '/eventos' }
    ] : [
      { name: 'Eventos', href: '/eventos' }
    ]
  },
  { name: 'Sobre', href: '/about' },
  { name: 'Contato', href: '/contact' },
]

export function Header() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  
  const navigation = getNavigation(!!session)

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-secondary-200 dark:border-slate-700 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">iNuTech iCT</span>
            <LogoSvg size="md" />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
                      <button
              type="button"
                                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(true)}
            >
            <span className="sr-only">Abrir menu principal</span>
            <Menu className={ICON_SIZES.lg} aria-hidden="true" />
          </button>
        </div>
        
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 text-sm font-semibold leading-6 text-secondary-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {item.name}
                        <ChevronDown className={ICON_SIZES.xs} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 bg-white dark:bg-slate-900 border border-secondary-200 dark:border-slate-700 shadow-lg" align="start">
                      <DropdownMenuItem asChild>
                        <Link href={item.href} className="text-secondary-900 dark:text-slate-100 hover:bg-secondary-50 dark:hover:bg-slate-800">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-secondary-200 dark:bg-slate-700" />
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link href={subItem.href} className="text-secondary-900 dark:text-slate-100 hover:bg-secondary-50 dark:hover:bg-slate-800">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-secondary-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <ThemeToggle />
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                    <AvatarFallback>
                      <User className={ICON_SIZES.sm} />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white dark:bg-slate-900 border border-secondary-200 dark:border-slate-700 shadow-lg" align="end" forceMount>
                <DropdownMenuLabel className="font-normal text-secondary-900 dark:text-slate-100">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                    <p className="text-xs leading-none text-secondary-600 dark:text-slate-400">{session.user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-secondary-200 dark:bg-slate-700" />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="text-secondary-900 dark:text-slate-100 hover:bg-secondary-50 dark:hover:bg-slate-800">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/perfil" className="text-secondary-900 dark:text-slate-100 hover:bg-secondary-50 dark:hover:bg-slate-800">
                    Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-secondary-200 dark:bg-slate-700" />
                <DropdownMenuItem onClick={() => signOut()} className="text-secondary-900 dark:text-slate-100 hover:bg-secondary-50 dark:hover:bg-slate-800">
                  <LogOut className={`mr-2 ${ICON_SIZES.sm}`} />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth/signin">
              <Button className="btn-primary">
                <LogIn className={`mr-2 ${ICON_SIZES.sm}`} />
                Entrar
              </Button>
            </Link>
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
                            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10 dark:ring-slate-700/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">iNuTech iCT</span>
                <LogoSvg size="sm" />
              </Link>
              <button
                type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-secondary-700 dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className={ICON_SIZES.lg} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-900 dark:text-slate-100 hover:bg-secondary-50 dark:hover:bg-slate-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium leading-7 text-secondary-600 dark:text-slate-300 hover:bg-secondary-50 dark:hover:bg-slate-800"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center justify-center mb-4">
                    <ThemeToggle />
                  </div>
                  {session ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                          <AvatarFallback>
                            <User className={ICON_SIZES.sm} />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{session.user?.name}</p>
                          <p className="text-xs text-secondary-600">{session.user?.email}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Link
                          href="/dashboard"
                          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-900 hover:bg-secondary-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            signOut()
                            setMobileMenuOpen(false)
                          }}
                          className="flex w-full items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-900 hover:bg-secondary-50"
                        >
                          <LogOut className={`mr-2 ${ICON_SIZES.sm}`} />
                          Sair
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href="/auth/signin"
                      className="flex w-full items-center justify-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <LogIn className={`mr-2 ${ICON_SIZES.sm}`} />
                      Entrar
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
