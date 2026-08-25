# Samia Rafique — Portfolio

Next.js (App Router, TypeScript, Tailwind) portfolio site for Samia Rafique, Graphic Designer.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All page content (About, Portfolio, contact details) is sourced from `src/lib/content.ts` and
`src/lib/site-config.ts`, pulled from the resume PDF and the Behance profile
(https://www.behance.net/samiarafiq). Titles and meta descriptions on each page are currently
provisional, assembled only from that same source material — replace them once the final
content/metadata docs are supplied, per page.

## Indexing

Indexing is controlled by a single flag in `src/lib/site-config.ts` (`indexable`), gated on
`VERCEL_ENV === "production"`. Preview and local builds are `noindex` by default; only a
production deploy on Vercel is indexable.

## Before deploying

- Set the production domain (`https://samiarafiq.com/`) as the primary domain in Vercel so it
  handles the www/https redirects.
- Run `npm run build` and confirm all routes remain static (`○`/`●`), not dynamic (`ƒ`).
