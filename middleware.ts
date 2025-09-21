import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isDashboardPage = req.nextUrl.pathname.startsWith('/dashboard')
    const isObsidianPage = req.nextUrl.pathname.startsWith('/obsidian')
    const isRevistaPage = req.nextUrl.pathname.startsWith('/revista')
    const isBlogPage = req.nextUrl.pathname.startsWith('/blog')
    const isLaboratoriosPage = req.nextUrl.pathname.startsWith('/laboratorios')

    // Se está tentando acessar área restrita e não está logado, redireciona para login
    if ((isDashboardPage || isObsidianPage || isRevistaPage || isBlogPage || isLaboratoriosPage) && !isAuth) {
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/obsidian/:path*',
    '/revista/:path*',
    '/blog/:path*',
    '/laboratorios/:path*'
  ]
}
