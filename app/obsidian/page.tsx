import { Metadata } from 'next'
import { BookOpen, Download, Search, Tag, Link as LinkIcon, FileText, Settings, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integração Obsidian - iNuTech iCT',
  description: 'Sincronize suas notas do Obsidian com a plataforma iNuTech e acesse seu conhecimento de qualquer lugar.',
  keywords: 'obsidian, sincronização, notas, conhecimento, integração, inutech',
}

const obsidianNotes = [
  {
    id: 'note-1',
    title: 'Pesquisa em IA Generativa',
    content: '# Pesquisa em IA Generativa\n\nEste é um exemplo de nota do Obsidian sincronizada com a plataforma iNuTech...',
    tags: ['ia', 'pesquisa', 'generativa'],
    links: ['note-2', 'note-3'],
    created: new Date('2024-01-15'),
    modified: new Date('2024-01-20'),
    path: '/pesquisa/ia-generativa.md'
  },
  {
    id: 'note-2',
    title: 'Metodologia CRISP-DM',
    content: '# Metodologia CRISP-DM\n\nProcesso de mineração de dados e análise preditiva...',
    tags: ['metodologia', 'crisp-dm', 'data-science'],
    links: ['note-1'],
    created: new Date('2024-01-10'),
    modified: new Date('2024-01-18'),
    path: '/metodologia/crisp-dm.md'
  },
  {
    id: 'note-3',
    title: 'Laboratórios Virtuais',
    content: '# Laboratórios Virtuais\n\nImplementação de ambientes virtuais para experimentação...',
    tags: ['laboratórios', 'virtual', 'experimentação'],
    links: ['note-1'],
    created: new Date('2024-01-12'),
    modified: new Date('2024-01-19'),
    path: '/laboratórios/virtuais.md'
  }
]

const allTags = ['ia', 'pesquisa', 'generativa', 'metodologia', 'crisp-dm', 'data-science', 'laboratórios', 'virtual', 'experimentação']

export default function ObsidianPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 sm:text-5xl md:text-6xl">
              Integração Obsidian
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Sincronize suas notas do Obsidian com a plataforma iNuTech. 
              Acesse seu conhecimento de qualquer lugar e mantenha tudo conectado.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                <RefreshCw className="mr-2 h-5 w-5" />
                Sincronizar Agora
              </button>
              <Link
                href="/obsidian/config"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600"
              >
                <Settings className="mr-2 h-5 w-5" />
                Configurar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Notas Sincronizadas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{obsidianNotes.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <Tag className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Tags Únicas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{allTags.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <LinkIcon className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Links Ativos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center">
              <RefreshCw className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">Última Sincronização</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">2min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notas Sincronizadas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
            Notas Sincronizadas
          </h2>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar notas..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 text-sm">
              <option value="">Todas as tags</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {obsidianNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">
                    {note.title}
                  </h3>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300">
                      <BookOpen className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {note.content.substring(0, 150)}...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-xs text-blue-800 dark:text-blue-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-slate-400">
                  <span>Modificado: {note.modified.toLocaleDateString('pt-BR')}</span>
                  <span>{note.links.length} links</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Funcionalidades */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 text-center mb-12">
          Funcionalidades da Integração
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <RefreshCw className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">
                Sincronização Automática
              </h3>
            <p className="text-gray-600 dark:text-slate-300">
              Suas notas são sincronizadas automaticamente a cada 5 minutos, mantendo tudo atualizado.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">
              Busca Avançada
            </h3>
            <p className="text-gray-600 dark:text-slate-300">
              Encontre suas notas rapidamente usando tags, texto ou links internos.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Download className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">
              Exportação Flexível
            </h3>
            <p className="text-gray-600 dark:text-slate-300">
              Exporte suas notas em Markdown, HTML ou PDF para uso em outros sistemas.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-slate-700 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Comece a Sincronizar Hoje
          </h3>
          <p className="text-gray-600 dark:text-slate-300 mb-6">
            Configure sua integração com o Obsidian e tenha acesso ao seu conhecimento 
            em qualquer lugar, a qualquer momento.
          </p>
          <Link
            href="/obsidian/config"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <Settings className="mr-2 h-5 w-5" />
            Configurar Integração
          </Link>
        </div>
      </div>
    </div>
  )
}
