import Image from 'next/image'
import { DownloadButton } from './DownloadButton'

export function Hero() {
  return (
    <section className="relative bg-brand-gradient text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-300 blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-brand-500 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-7">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="Cofrin"
              width={44}
              height={44}
              className="rounded-xl shadow-lg shadow-brand-900/40"
            />
            <span className="text-lg font-semibold tracking-tight">Cofrin</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Suas metas financeiras,{' '}
            <span className="text-brand-100">sem complicação.</span>
          </h1>

          <p className="text-lg text-brand-100 max-w-xl">
            Controle pessoal em pt-BR, 100% local. Crie metas, registre gastos por categoria, automatize
            assinaturas e veja relatórios mensais — sem cadastro, sem servidor, sem anúncio.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <DownloadButton />
            <a
              href="#features"
              className="font-medium text-brand-100 hover:text-white transition">
              Ver recursos →
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-brand-200">
            <Badge text="100% local" />
            <Badge text="Sem cadastro" />
            <Badge text="Pt-BR" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  )
}

function Badge({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12l5 5 9-11"
          stroke="#4AE124"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </span>
  )
}

function PhoneMock() {
  return (
    <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[44px] bg-brand-900/40 backdrop-blur-md border border-white/10 shadow-2xl p-3">
      <div className="w-full h-full rounded-[36px] overflow-hidden bg-brand-gradient relative flex flex-col">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/80" />

        <div className="pt-14 px-6 pb-6">
          <p className="text-[11px] text-brand-100">Total que você possui</p>
          <p className="text-[28px] font-bold">R$ 4.380,00</p>
        </div>

        <div className="mx-6 h-px bg-white/15" />

        <div className="flex justify-between px-6 py-4 text-sm">
          <div>
            <p className="text-brand-100 text-xs">Entradas</p>
            <p className="text-accent-green font-semibold">R$ 5.200,00</p>
          </div>
          <div className="text-right">
            <p className="text-brand-100 text-xs">Saídas</p>
            <p className="text-accent-red font-semibold">R$ 820,00</p>
          </div>
        </div>

        <div className="flex-1 bg-white/95 mx-3 mt-2 rounded-3xl p-4 text-slate-800 space-y-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Metas</p>
          <Goal name="Viagem Bariloche" pct={68} value="R$ 3.400" />
          <Goal name="Reserva 6 meses" pct={42} value="R$ 8.400" />
          <Goal name="MacBook" pct={20} value="R$ 2.000" />
        </div>
      </div>
    </div>
  )
}

function Goal({ name, pct, value }: { name: string; pct: number; value: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="font-medium">{name}</span>
        <span className="text-slate-500">{value}</span>
      </div>
      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-500 rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
