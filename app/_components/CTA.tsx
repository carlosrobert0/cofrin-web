import { DownloadButton } from './DownloadButton'

export function CTA() {
  return (
    <section className="py-20 px-6 bg-brand-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-80 h-80 rounded-full bg-white blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Comece a controlar suas finanças hoje.
        </h2>
        <p className="text-brand-100 text-lg">
          Grátis, em pt-BR, sem cadastro. Baixe e abra — em 30 segundos você já lança a primeira meta.
        </p>
        <div className="flex justify-center pt-2">
          <DownloadButton />
        </div>
      </div>
    </section>
  )
}
