# TPOWER Casino

Premium bilingual (English / Chinese) online gaming brand website for Malaysia.

Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and OpenNext for Cloudflare deployment.

## Stack

- Next.js 15 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Shadcn-style UI primitives (Radix)
- Lucide Icons
- `@opennextjs/cloudflare` + Wrangler

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Locale routing redirects to `/en` or `/zh`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local Next.js development |
| `npm run build` | Production Next.js build |
| `npm run lint` | ESLint |
| `npm run assets` | Regenerate SVG brand/content assets |
| `npm run preview` | Build + preview on Cloudflare Workers runtime |
| `npm run deploy` | Build + deploy with OpenNext / Wrangler |

## Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://www.tpower.my
```

## Architecture

```
src/
  app/[locale]/     Locale-aware routes (EN/ZH)
  components/       UI, layout, home, common
  config/           Site, navigation, i18n
  content/          Dictionaries
  data/             Games, providers, promotions, blog, FAQ
  lib/              SEO, schema, utils
  types/            Shared TypeScript types
public/             Images, icons, logos, OG assets
```

## Deployment (Cloudflare)

1. Set `NEXT_PUBLIC_SITE_URL` in your Cloudflare project environment.
2. Run `npm run deploy` (requires Wrangler auth).
3. Attach a custom domain in the Cloudflare dashboard.

This project is configured with `wrangler.jsonc` and `open-next.config.ts` for OpenNext on Cloudflare Workers / Pages-compatible hosting.
