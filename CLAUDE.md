# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

FaroHQ Static Site — marketing website (landing pages, pricing) for FaroHQ. Vite 7, React 18, TypeScript, Tailwind CSS. SPA deployed to Cloudflare Pages at `farohq.com` and `staging.farohq.com`. Supports three languages: Spanish (default), Portuguese, English.

## Commands

```bash
npm run dev          # Vite dev server on port 3000
npm run build        # Production build to dist/
npm run lint         # ESLint (flat config)
npm run typecheck    # tsc --noEmit
npm run preview      # Preview production build locally
```

No test runner is configured.

## Project Structure

```
src/
├── main.tsx              # Entry: ThemeProvider + LanguageProvider wrapping App
├── App.tsx               # BrowserRouter routes
├── index.css             # Tailwind directives + CSS variables + Google Fonts (Inter)
├── components/           # Landing page sections (Hero, Problem, Solution, Features, Pricing, etc.)
├── pages/                # Full pages (PricingPageV2)
├── contexts/             # LanguageContext, ThemeContext
├── i18n/translations.ts  # All copy in ES/PT/EN (single typed file)
└── utils/pricingConfig.ts # Pricing values per region (LATAM vs NA)
```

## Routes

React Router v7 (`react-router-dom`):

- `/` — Landing page (all sections assembled inline in App.tsx)
- `/pricing` — Redirects to `/pricing-v2`
- `/pricing-v2` — Dedicated pricing page with region toggle, wholesale table, FAQ

## I18n

Custom implementation, no third-party library. All copy in `src/i18n/translations.ts` as a typed object with keys for `es`, `pt`, `en`.

- **Context:** `LanguageContext` provides `language`, `setLanguage`, and `t` (translations object)
- **Hook:** `useLanguage()` — every component accesses copy via `const { t } = useLanguage()`
- **Default:** Spanish (`'es'`). Persisted in `localStorage` key `'faro-language'`

## Theme

Custom dark/light mode via `ThemeContext`. Adds `'dark'`/`'light'` class to `document.documentElement`; Tailwind uses `darkMode: 'class'`. Persisted in `localStorage` key `'faro-theme'`. Defaults to system preference.

## Styling

Tailwind CSS v3 with custom design tokens in `tailwind.config.js`:
- **Brand colors:** `navy` (#0F172A), `grape` (#4B48ED), `hq-accent` (#7C27C2), `teal` (#00D9FF), plus semantic tokens (`text-dark`, `text-light`, `surface-light`, `surface-dark`)
- **Fonts:** Inter (sans), JetBrains Mono (mono) — Inter loaded from Google Fonts
- All styling via Tailwind utility classes in JSX, no CSS modules
- Icons from `lucide-react`
- Container pattern: `max-w-7xl mx-auto`

## Pricing Config

`src/utils/pricingConfig.ts` centralizes plan prices:
- **LATAM:** Starter $49, Pro $100, Scale $199 (MXN, COP, BRL, CLP, ARS)
- **NA:** Starter $79, Pro $149, Scale $299
- `getPricing(lang)` resolves region from language (EN → NA, ES/PT → LATAM)

## Deployment

- **Primary:** Cloudflare Pages — `wrangler.toml` defines routes for `farohq.com` (prod) and `staging.farohq.com` (staging)
- **Docker available:** Multi-stage Dockerfile (node:20-alpine build + nginx:alpine runtime, port 3000)
