type Feature = {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Metas com prazo',
    description: 'Defina objetivos com data e veja o quanto guardar por mês pra chegar lá.',
    icon: <IconTarget />,
  },
  {
    title: 'Recorrências',
    description: 'Salário, aluguel, Netflix — lance uma vez e o app registra mês a mês.',
    icon: <IconRepeat />,
  },
  {
    title: 'Orçamento 50/30/20',
    description: 'Divida em Essenciais, Desejos e Investimentos e acompanhe a cada gasto.',
    icon: <IconPie />,
  },
  {
    title: 'Múltiplas carteiras',
    description: 'Separe carteira, conta corrente e cartão. Faça transferências entre elas.',
    icon: <IconWallet />,
  },
  {
    title: 'Relatório PDF mensal',
    description: 'Exporte um resumo bonito de cada mês com gastos, categorias e saldo.',
    icon: <IconPdf />,
  },
  {
    title: 'Conquistas',
    description: 'Ganhe badges ao bater metas, fechar meses no azul e formar hábitos.',
    icon: <IconAward />,
  },
  {
    title: 'Tags e busca',
    description: 'Marque transações por contexto (viagem-x, projeto-y) e encontre depois.',
    icon: <IconTag />,
  },
  {
    title: 'Privacidade real',
    description: 'Tudo fica no seu celular. Sem cadastro, sem servidor, sem rastreador.',
    icon: <IconShield />,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider">
            Recursos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Tudo que você precisa pra organizar a vida financeira
          </h2>
          <p className="text-slate-600">
            Pensado pra quem quer controle real sem virar tarefa. Aprenda em 5 minutos, use por anos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-brand-50 transition group">
              <div className="w-11 h-11 rounded-xl bg-brand-500 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconRepeat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function IconPie() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}

function IconWallet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 14h2" />
      <path d="M2 11h20" />
    </svg>
  )
}

function IconPdf() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

function IconAward() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  )
}

function IconTag() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
