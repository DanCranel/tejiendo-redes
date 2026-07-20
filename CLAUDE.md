# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **Tejiendo Redes**, a psychopedagogical center in Ecuador (school
homework support, personalized classes, essay creation, editing/proofreading). All
user-facing content is in **Spanish**. The product spec lives in `PRD.md` — read it for
intended scope, decisions, and features not yet built.

## Repository layout

- `web/` — the actual site: a **Next.js 16 / React 19 / TypeScript / Tailwind v4** app
  (App Router, no `src/` dir). All development happens here.
- `Recursos/` — brand source assets (mascot "Teji" otter PNGs, ads, logo material). Not
  part of the app; the images the site uses are copied into `web/public/`. Heavy media
  under `Recursos/Contenido Redes Sociales/` is git-ignored (files exceed GitHub's 100MB
  limit).
- `PRD.md` — product requirements document (source of truth for direction).

## Commands (run from `web/`)

```
npm install        # first time / after pulling dependency changes
npm run dev        # dev server at http://localhost:3000
npm run build      # production build (this is what Vercel runs — use it to catch errors)
npm run lint       # eslint
```

There are **no tests** in this project.

## ⚠️ Next.js version caveat

This uses Next.js 16.2.10, which has breaking changes vs. older training data (see
`web/AGENTS.md`). Before writing non-trivial Next.js code, consult the bundled docs at
`web/node_modules/next/dist/docs/` rather than relying on memory. Default components are
Server Components; anything with state/effects/handlers needs `"use client"`.

## Architecture

The site is currently a **single landing page** (`web/app/page.tsx`) composed of stacked
sections (hero, servicios, nosotros, instagram, testimonios, CTA, footer). Interactive
pieces are extracted into client components under `web/app/components/`:

- `InstagramEmbeds.tsx` — renders official Instagram embeds by injecting Instagram's
  `embed.js` and processing `blockquote.instagram-media` elements. Posts shown are live
  from Instagram, not copies.
- `TestimoniosCarrusel.tsx` — auto-advancing testimonial carousel (pauses on hover).

### Content-as-data (where to edit what)

Content is not in a CMS — it lives in typed arrays/constants inside components. To change
copy, edit these in place:

- Services (title, description, per-service WhatsApp message): `servicios` in `page.tsx`
- WhatsApp number: `WHATSAPP_PHONE` in `page.tsx`; links are built via the `waLink(msg)`
  helper so each button can carry a prefilled message
- Instagram posts displayed: `POSTS` in `InstagramEmbeds.tsx`
- Instagram profile link: `INSTAGRAM_URL` in `page.tsx`
- Testimonials: `TESTIMONIOS` in `TestimoniosCarrusel.tsx` (currently sample text — meant
  to be replaced with real, permissioned client quotes)

### Brand theming

The brand palette is a **pink family** defined as Tailwind v4 `@theme` tokens in
`web/app/globals.css`: `brand` / `brand-dark` / `brand-deep`, `coral` / `coral-dark`,
`cream` / `cream-dark`, `ink` / `ink-soft`. Use these tokens (`bg-brand`, `text-ink`,
etc.) — do not hardcode hex colors. Note the token names are historical: `cream` is a
very light pink, not beige. The requested design constraint is to stay within analogous
pink tones and avoid high-contrast color mixing. Font is Nunito via `next/font`.

## Deploy model

GitHub repo `DanCranel/tejiendo-redes` → **Vercel auto-deploys on push to `main`**. In
Vercel the project **Root Directory is `web`** (the Next app is a subdirectory). A failing
build does not replace the live version. There is no dedicated deploy command — pushing is
the deploy.

## Planned but not yet built (per PRD)

- **Bilingual ES/EN** (intended lib: `next-intl`). Site is Spanish-only today; the "ES · EN"
  navbar element is a placeholder that does not switch languages.
- **Contact form via Web3Forms** submitting to `tejiendo.redes2314@gmail.com` (access key
  in env var `NEXT_PUBLIC_WEB3FORMS_KEY`). Not implemented yet.
- Internal pages (Servicios, Nosotros, FAQ, Contacto) — currently all sections live on the
  one homepage.
