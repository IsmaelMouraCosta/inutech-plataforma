import { Metadata } from 'next'
import { Beaker, Code, Database, FlaskConical, Lightbulb, Microscope, Rocket, TestTube } from 'lucide-react'
import Link from 'next/link'
import { AuthRequired } from '@/components/auth-required'

export const metadata: Metadata = {
  title: 'Laboratórios Virtuais - iNuTech iCT',
  description: 'Experimente sem limites com nossos laboratórios virtuais interativos para pesquisa e desenvolvimento.',
  keywords: 'laboratórios virtuais, experimentação, prototipação, pesquisa, desenvolvimento, inutech',
}

const laboratorios = [
  {
    id: 'ai-ml',
    nome: 'Inteligência Artificial & Machine Learning',
    descricao: 'Desenvolva e teste algoritmos de IA, modelos de ML e redes neurais.',
    categoria: 'Tecnologia',
    status: 'disponivel',
    icon: Brain,
    cor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    ferramentas: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter'],
    nivel: 'Intermediário'
  },
  {
    id: 'data-science',
    nome: 'Ciência de Dados',
    descricao: 'Análise exploratória, visualização e modelagem estatística avançada.',
    categoria: 'Análise',
    status: 'disponivel',
    icon: Database,
    cor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    ferramentas: ['R', 'Python', 'Tableau', 'Power BI'],
    nivel: 'Básico'
  },
  {
    id: 'biotech',
    nome: 'Biotecnologia',
    descricao: 'Simulações de processos biológicos e experimentos virtuais.',
    categoria: 'Ciências',
    status: 'em-desenvolvimento',
    icon: TestTube,
    cor: 'bg-gradient-to-br from-green-500 to-emerald-500',
    ferramentas: ['BioPython', 'PyMOL', 'RasMol'],
    nivel: 'Avançado'
  },
  {
    id: 'quantum',
    nome: 'Computação Quântica',
    descricao: 'Experimentos com algoritmos quânticos e simulações quânticas.',
    categoria: 'Tecnologia',
    status: 'em-desenvolvimento',
    icon: Atom,
    cor: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    ferramentas: ['Qiskit', 'Cirq', 'PennyLane'],
    nivel: 'Avançado'
  },
  {
    id: 'robotics',
    nome: 'Robótica & Automação',
    descricao: 'Simulação de robôs, controle de movimento e visão computacional.',
    categoria: 'Engenharia',
    status: 'disponivel',
    icon: Robot,
    cor: 'bg-gradient-to-br from-orange-500 to-red-500',
    ferramentas: ['ROS', 'Gazebo', 'OpenCV', 'Arduino'],
    nivel: 'Intermediário'
  },
  {
    id: 'cybersecurity',
    nome: 'Cibersegurança',
    descricao: 'Teste de vulnerabilidades, análise forense e pentesting.',
    categoria: 'Segurança',
    status: 'disponivel',
    icon: Shield,
    cor: 'bg-gradient-to-br from-red-500 to-pink-500',
    ferramentas: ['Kali Linux', 'Wireshark', 'Metasploit'],
    nivel: 'Avançado'
  }
]

function Brain({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function Atom({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function Robot({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

export default function LaboratoriosPage() {
  return (
    <AuthRequired>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 sm:text-5xl md:text-6xl">
              Laboratórios Virtuais
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Experimente sem limites com nossos laboratórios virtuais interativos. 
              Desenvolva, teste e valide suas ideias em ambientes seguros e controlados.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                href="#laboratorios"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <Beaker className="mr-2 h-5 w-5" />
                Explorar Laboratórios
              </Link>
              <Link
                href="/docs/laboratorios"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600"
              >
                <Code className="mr-2 h-5 w-5" />
                Documentação
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Laboratórios Grid */}
      <div id="laboratorios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
            Nossos Laboratórios
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-300">
            Escolha o laboratório que melhor se adapta ao seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laboratorios.map((lab) => (
            <div
              key={lab.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
            >
              {/* Header do Card */}
              <div className={`${lab.cor} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <lab.icon className="h-12 w-12" />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    lab.status === 'disponivel' 
                      ? 'bg-white bg-opacity-20 text-white' 
                      : 'bg-yellow-500 text-yellow-900'
                  }`}>
                    {lab.status === 'disponivel' ? 'Disponível' : 'Em Desenvolvimento'}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{lab.nome}</h3>
                <p className="mt-2 text-sm opacity-90">{lab.descricao}</p>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-slate-400">
                    {lab.categoria}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                    {lab.nivel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Ferramentas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lab.ferramentas.map((ferramenta) => (
                      <span
                        key={ferramenta}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs text-gray-600 dark:text-slate-300 rounded"
                      >
                        {ferramenta}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {lab.status === 'disponivel' ? (
                    <Link
                      href={`/laboratorios/${lab.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md font-medium transition-colors"
                    >
                      Acessar
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-gray-300 dark:bg-slate-600 text-gray-500 dark:text-slate-400 text-center py-2 px-4 rounded-md font-medium cursor-not-allowed"
                    >
                      Em Breve
                    </button>
                  )}
                  <Link
                    href={`/laboratorios/${lab.id}/docs`}
                    className="px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-200 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    Docs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Quer criar seu próprio laboratório?
            </h3>
            <p className="text-gray-600 dark:text-slate-300 mb-6">
              Entre em contato conosco para discutir como podemos ajudar a implementar 
              seu laboratório virtual personalizado.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Solicitar Laboratório
            </Link>
          </div>
        </div>
      </div>
      </div>
    </AuthRequired>
  )
}
