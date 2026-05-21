import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cofrin — Suas metas financeiras no controle',
  description:
    'App de controle financeiro pessoal em português. 100% local, sem cadastro, com metas, recorrências, orçamento 50/30/20 e relatórios mensais.',
  openGraph: {
    title: 'Cofrin',
    description: 'Controle suas metas financeiras sem complicação.',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: { icon: '/icon.png' },
}

export const viewport: Viewport = {
  themeColor: '#3d44cd',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-inter bg-white text-slate-900 antialiased">{children}</body>
    </html>
  )
}
