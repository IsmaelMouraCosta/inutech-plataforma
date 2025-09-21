import Link from 'next/link'
import { Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { LogoFooter } from './logo-footer'
import { ICON_SIZES } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-secondary-900 dark:bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <LogoFooter size="md" />
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              Plataforma de pesquisa aplicada em Ciência, Tecnologia e Inovação. 
              Conectando conhecimento científico com soluções práticas para o futuro.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/institutonutech/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors">
                <Linkedin className={ICON_SIZES.md} />
              </Link>
              <Link href="http://wa.me/5561981282855" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors">
                <MessageCircle className={ICON_SIZES.md} />
              </Link>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/science" className="text-secondary-300 hover:text-white transition-colors">
                  NuScience
                </Link>
              </li>
              <li>
                <Link href="/tech" className="text-secondary-300 hover:text-white transition-colors">
                  NuTechnology
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="text-secondary-300 hover:text-white transition-colors">
                  NuInnovation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-secondary-300">
                <Mail className={ICON_SIZES.sm} />
                <Link href="mailto:contato@inutech.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  contato@inutech.org.br
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <Phone className={ICON_SIZES.sm} />
                <Link href="tel:+5561981282855" className="hover:text-white transition-colors">
                  +55 61 9 8128 2855
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <MapPin className={ICON_SIZES.sm} />
                <span>SCRS 502, LOJA 37 - Asa Sul<br />Brasília - DF CEP: 70330-530</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
            Instituto Nutech de Pesquisa Aplicada em Ciência, Tecnologia e Inovação Brasília/DF 🇧🇷 Copyright © 2025-2026 - All rights reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidade" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
