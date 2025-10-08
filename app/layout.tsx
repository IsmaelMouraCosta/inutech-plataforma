import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { ThemeProvider } from '@/contexts/theme-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LGDPPopup } from '@/components/lgpd-popup'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iNuTech iCT - Plataforma de Pesquisa Científica',
  description: 'Plataforma de divulgação científica, blog, revista científica e laboratórios virtuais do iNuTech iCT de Pesquisa Aplicada em Ciência, Tecnologia e Inovação.',
  keywords: 'pesquisa científica, tecnologia, inovação, IA, laboratórios virtuais, revista científica',
  authors: [{ name: 'iNuTech iCT' }],
  openGraph: {
    title: 'iNuTech iCT - Plataforma de Pesquisa Científica',
    description: 'Plataforma de divulgação científica, blog, revista científica e laboratórios virtuais.',
    url: 'https://inutech.org.br',
    siteName: 'iNuTech iCT',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iNuTech iCT - Plataforma de Pesquisa Científica',
    description: 'Plataforma de divulgação científica, blog, revista científica e laboratórios virtuais.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} h-full`}>
        <Providers>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
            <LGDPPopup />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
