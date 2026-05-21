# Cofrin — Web

Landing page e política de privacidade do app Cofrin. Necessária para publicação na Google Play Store.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3 + `@tailwindcss/typography`
- Inter (Google Fonts)
- TypeScript

## Rodando local

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Páginas

- `/` — landing principal com hero, recursos, showcase e CTA.
- `/privacidade` — política de privacidade. **Esta é a URL que vai no campo da Play Console.**

## Configuração

Edite [`app/_data/config.ts`](app/_data/config.ts) para atualizar:

- `PLAY_STORE_URL` — link da Play Store (ainda placeholder até o app ser publicado).
- `CONTACT_EMAIL` — e-mail mostrado na landing e na política.
- `LAST_UPDATED` — data da última revisão da política (atualize quando editar a política).

## Deploy

### Vercel (mais simples — recomendado)

1. Faça push deste projeto pra um repositório no GitHub.
2. Acesse https://vercel.com → **Import Project** → selecione o repo.
3. Mantenha as configurações padrão e clique em **Deploy**.
4. Vercel atribui uma URL do tipo `cofrin-web.vercel.app`. Adicione um domínio próprio depois se quiser (Settings → Domains).

### Cloudflare Pages, Netlify

Funcionam igualmente bem. Configurações padrão (`npm run build` + `out` diretório para static export, ou usar adaptador). Vercel é o caminho de menor atrito.

## Como usar na Play Console

1. Faça o deploy.
2. Copie a URL final da política, ex.: `https://cofrin-web.vercel.app/privacidade`.
3. Na Play Console: **Configurações → Página da loja → Política de Privacidade** → cole a URL.
4. Salve.

## Editando a política

A política mora em [`app/privacidade/page.tsx`](app/privacidade/page.tsx). Mantenha em pt-BR e atualize `LAST_UPDATED` no `config.ts` sempre que alterar o texto.

## Atualizando o link da Play Store

Quando o app for publicado, troque `PLAY_STORE_URL` em [`app/_data/config.ts`](app/_data/config.ts). O link do botão "Baixar no Google Play" e o link da página fechada na footer atualizam automaticamente.
