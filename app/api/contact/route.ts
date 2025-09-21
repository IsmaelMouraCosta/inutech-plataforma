import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validação básica
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Preparar o conteúdo do email
    const emailContent = `
Nova mensagem de contato recebida através do site iNuTech:

DADOS DO CONTATO:
Nome: ${firstName} ${lastName}
Email: ${email}
Telefone: ${phone || 'Não informado'}
Assunto: ${subject || 'Não especificado'}

MENSAGEM:
${message}

---
Enviado em: ${new Date().toLocaleString('pt-BR')}
IP: ${request.ip || 'Não disponível'}
User Agent: ${request.headers.get('user-agent') || 'Não disponível'}
    `.trim()

    // Enviar email usando a API do Resend (ou outro serviço)
    // Por enquanto, vamos simular o envio e retornar sucesso
    // Em produção, você precisará configurar um serviço de email como Resend, SendGrid, etc.
    
    console.log('Email que seria enviado:')
    console.log('Para: contato@inutech.org.br, ismael.costa@inutech.org.br')
    console.log('Assunto: Nova mensagem de contato - iNuTech')
    console.log('Conteúdo:', emailContent)

    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
