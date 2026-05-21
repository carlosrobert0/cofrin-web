import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME, CONTACT_EMAIL } from '../_data/config'

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="Cofrin" width={32} height={32} className="rounded-lg" />
            <span className="text-white font-semibold">{APP_NAME}</span>
          </div>
          <p className="text-sm text-brand-200 max-w-xs">
            Controle financeiro pessoal, local e em português. Sem cadastro, sem servidor.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-white font-semibold text-sm uppercase tracking-wider">Links</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacidade" className="hover:text-white transition">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition">
                Recursos
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-white font-semibold text-sm uppercase tracking-wider">Contato</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm hover:text-white transition break-all">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-brand-800 text-xs text-brand-200 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Cofrin. Todos os direitos reservados.</span>
        <span>Feito com cuidado em pt-BR.</span>
      </div>
    </footer>
  )
}
