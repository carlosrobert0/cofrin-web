export function Showcase() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider">
            Privacidade primeiro
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Seus dados nunca saem do seu celular.
          </h2>
          <p className="text-lg text-slate-600">
            Cofrin não tem servidor, não pede e-mail, não usa analytics. Tudo é armazenado localmente
            no SQLite do seu dispositivo. Quando você quer levar pra outro lugar, exporta CSV ou PDF
            no toque de um botão.
          </p>

          <ul className="space-y-3 pt-2">
            <Bullet>Sem cadastro nem login</Bullet>
            <Bullet>Sem internet obrigatória — funciona offline</Bullet>
            <Bullet>Sem coleta de dados, sem publicidade</Bullet>
            <Bullet>Backup automático opcional pelo Android</Bullet>
            <Bullet>Trava do app por biometria/PIN se quiser</Bullet>
          </ul>
        </div>

        <div className="space-y-4">
          <ShowcaseCard
            label="Relatório do mês"
            value="R$ 4.380,42"
            delta="+12% em relação a abril"
            color="brand"
          />
          <div className="grid grid-cols-2 gap-4">
            <ShowcaseCard label="Essenciais" value="R$ 1.890" delta="46%" color="green" />
            <ShowcaseCard label="Desejos" value="R$ 1.220" delta="32%" color="yellow" />
          </div>
          <ShowcaseCard
            label="Investimentos"
            value="R$ 880"
            delta="22% · meta batida"
            color="brand"
          />
        </div>
      </div>
    </section>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-slate-700">
      <svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#4AE124" opacity="0.15" />
        <path
          d="M7 12.5l3 3 7-8"
          stroke="#4AE124"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </li>
  )
}

function ShowcaseCard({
  label,
  value,
  delta,
  color,
}: {
  label: string
  value: string
  delta: string
  color: 'brand' | 'green' | 'yellow'
}) {
  const accent =
    color === 'brand'
      ? 'bg-brand-gradient text-white'
      : color === 'green'
        ? 'bg-white text-slate-900 border-l-4 border-accent-green'
        : 'bg-white text-slate-900 border-l-4 border-accent-yellow'
  const sub = color === 'brand' ? 'text-brand-100' : 'text-slate-500'
  return (
    <div className={`p-5 rounded-2xl shadow-sm ${accent}`}>
      <p className={`text-xs uppercase tracking-wider ${sub}`}>{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p className={`text-sm mt-1 ${sub}`}>{delta}</p>
    </div>
  )
}
