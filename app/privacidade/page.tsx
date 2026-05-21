import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME, CONTACT_EMAIL, LAST_UPDATED } from '../_data/config'

export const metadata: Metadata = {
  title: `Política de Privacidade — ${APP_NAME}`,
  description: 'Como o Cofrin trata seus dados — resumo: tudo fica local, nada é coletado.',
}

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-brand-gradient text-white">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-100 hover:text-white text-sm mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/icon.png" alt="Cofrin" width={36} height={36} className="rounded-xl" />
            <span className="text-base font-semibold">{APP_NAME}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Política de Privacidade</h1>
          <p className="text-brand-100 mt-2 text-sm">Última atualização: {LAST_UPDATED}</p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-14 prose prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-brand-500 prose-a:no-underline hover:prose-a:underline">
        <Summary />

        <h2>1. Quem somos</h2>
        <p>
          O <strong>{APP_NAME}</strong> é um aplicativo de controle financeiro pessoal desenvolvido
          para uso individual. Ele é oferecido gratuitamente na Google Play Store e não exige
          cadastro, login ou conexão com qualquer serviço externo para funcionar.
        </p>

        <h2>2. Dados que o aplicativo armazena no seu dispositivo</h2>
        <p>
          Tudo que você registra no Cofrin é gravado no banco de dados SQLite local do seu dispositivo
          (arquivo <code>cofrin.db</code>). Os dados armazenados incluem:
        </p>
        <ul>
          <li>Metas financeiras (nome, valor, datas, prazo, status).</li>
          <li>Transações lançadas (valor, descrição, categoria, data, tags, carteira).</li>
          <li>Recorrências configuradas (frequência, datas, próximos lançamentos).</li>
          <li>Carteiras criadas e transferências entre elas.</li>
          <li>Configurações de orçamento e personalização (50/30/20 e variações).</li>
          <li>Conquistas e marcos desbloqueados.</li>
          <li>Preferências de notificação e de aparência.</li>
          <li>Comprovantes (fotos) que você optou por anexar a uma transação.</li>
        </ul>
        <p>
          Esses dados <strong>nunca</strong> são enviados a nenhum servidor — nosso ou de terceiros.
          O aplicativo não possui infraestrutura de coleta de dados.
        </p>

        <h2>3. Dados pessoais que o aplicativo NÃO coleta</h2>
        <ul>
          <li>Nome, e-mail, telefone, CPF ou qualquer identificador pessoal.</li>
          <li>Localização (GPS ou rede).</li>
          <li>Lista de contatos, agenda, SMS ou registros de chamada.</li>
          <li>Identificadores publicitários (AAID/IDFA).</li>
          <li>Dados de uso ou analytics (não usamos Firebase Analytics, Google Analytics ou similar).</li>
        </ul>

        <h2>4. Permissões solicitadas pelo aplicativo</h2>
        <p>O Cofrin solicita as seguintes permissões somente quando você utiliza recursos específicos:</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Notificações</h3>
        <p>
          Pedida na primeira vez que você ativa lembretes em Configurações. Usada para enviar
          lembretes diários, alertas de orçamento e conquistas. Todas as notificações são agendadas
          localmente — não há uso de push remoto, FCM ou serviços de mensageria.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Armazenamento (ler / gravar arquivos)</h3>
        <p>
          Pedida quando você utiliza &ldquo;Exportar CSV&rdquo;, &ldquo;Exportar PDF&rdquo; ou
          &ldquo;Importar CSV&rdquo;. O app abre o seletor de arquivos do sistema operacional —
          ele não acessa nenhum arquivo do seu dispositivo sem ação explícita sua. Os arquivos
          gerados são salvos localmente e compartilhados pelo seletor do Android.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Câmera e galeria de fotos</h3>
        <p>
          Pedida quando você toca em &ldquo;Anexar comprovante&rdquo; ao registrar uma transação.
          A imagem fica armazenada localmente no diretório de dados do aplicativo. Em nenhuma
          hipótese ela é enviada para um servidor.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Biometria e PIN do dispositivo</h3>
        <p>
          Solicitada somente se você habilitar a trava do app em Configurações &gt; Segurança.
          A autenticação é processada inteiramente pelo sistema operacional (Android Keystore) —
          o aplicativo nunca tem acesso à sua digital, face ID ou ao PIN. Apenas recebe um sinal
          binário de sucesso ou falha.
        </p>

        <h2>5. Backup automático</h2>
        <p>
          O Android pode incluir o banco de dados do Cofrin no backup automático associado à sua
          conta Google, caso essa função esteja habilitada nas configurações do seu dispositivo.
          Isso é uma funcionalidade do Android — o Cofrin não controla o que acontece com o backup.
          Você pode desativar essa inclusão em Configurações do Android &gt; Sistema &gt; Backup.
        </p>

        <h2>6. Compartilhamento com terceiros</h2>
        <p>
          Não compartilhamos seus dados com ninguém porque não temos acesso a eles. O Cofrin não
          possui SDKs de terceiros para analytics, publicidade, marketing ou monetização.
        </p>

        <h2>7. Crianças</h2>
        <p>
          O Cofrin não é direcionado a menores de 13 anos. Não coletamos intencionalmente dados de
          crianças, e como o app não coleta dados em geral, essa restrição existe principalmente
          para cumprir a política de classificação da Google Play.
        </p>

        <h2>8. Direitos do titular dos dados (LGPD)</h2>
        <p>
          Como todos os dados ficam no seu dispositivo e nunca são enviados para servidores nossos,
          você tem controle direto sobre eles:
        </p>
        <ul>
          <li>
            <strong>Acesso:</strong> todos os dados estão visíveis no próprio aplicativo.
          </li>
          <li>
            <strong>Portabilidade:</strong> use &ldquo;Exportar CSV&rdquo; para obter um arquivo
            estruturado de todas as suas transações.
          </li>
          <li>
            <strong>Exclusão:</strong> desinstalar o aplicativo apaga permanentemente todos os dados
            do seu dispositivo. Você também pode usar &ldquo;Limpar dados&rdquo; nas configurações
            do Android, ou excluir registros individuais dentro do app.
          </li>
        </ul>

        <h2>9. Segurança</h2>
        <p>
          O Cofrin usa o armazenamento padrão do Android, isolado por aplicativo. Quando você
          habilita a trava biométrica, o acesso ao app exige autenticação via Android Keystore.
          Recomendamos manter o sistema operacional do dispositivo atualizado e usar uma trava
          de tela.
        </p>

        <h2>10. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada ocasionalmente para refletir mudanças no aplicativo.
          A data de &ldquo;Última atualização&rdquo; no topo desta página será revisada quando isso
          ocorrer. Mudanças significativas serão comunicadas dentro do próprio aplicativo.
        </p>

        <h2>11. Contato</h2>
        <p>
          Para dúvidas, sugestões ou solicitações relacionadas a esta política, envie um e-mail
          para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <hr className="my-12" />
        <p className="text-sm text-slate-500">
          Este documento foi escrito em linguagem simples para ser claro a qualquer usuário.
          Se você é um auditor da Google Play e identifica qualquer ambiguidade, entre em contato
          pelo e-mail acima.
        </p>
      </article>
    </main>
  )
}

function Summary() {
  return (
    <aside className="not-prose rounded-2xl bg-brand-50 border border-brand-100 p-6 mb-10">
      <p className="text-sm font-semibold text-brand-800 uppercase tracking-wider mb-3">
        Resumo em 4 linhas
      </p>
      <ul className="space-y-2 text-slate-700">
        <SummaryItem>Não coletamos nenhum dado pessoal.</SummaryItem>
        <SummaryItem>Seus dados ficam no seu celular — não há servidor.</SummaryItem>
        <SummaryItem>Sem analytics, sem rastreamento, sem publicidade.</SummaryItem>
        <SummaryItem>Permissões só são pedidas quando você usa o recurso correspondente.</SummaryItem>
      </ul>
    </aside>
  )
}

function SummaryItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg className="mt-1 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12l5 5 9-11"
          stroke="#3d44cd"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </li>
  )
}
