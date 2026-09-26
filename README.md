# Viral Factory — public site

Marketing, legal and support site for the [Viral Factory](https://apps.apple.com/app/id6790560948) iOS app.
Built with [Astro](https://astro.build) 5 + Tailwind 4, fully static, deployed to **GitHub Pages** at
**https://ridvanuyan.github.io/viral-factory/**.

## What's here

- `src/pages/` — routes. English lives at the bare path (`/`, `/privacy/`, ...); every other
  locale is prefixed (`/de/`, `/fr/...`). `index.astro`, `privacy/`, `terms/`, `support/` and
  `delete-account/` at the root are thin wrappers that render the same shared body components
  as their `[lang]/...` counterparts — see `src/i18n/index.ts`'s `lp()` for how a locale's
  canonical URL is decided.
- `src/i18n/ui.ts` — nav/hero/feature copy for all 11 locales.
- `src/i18n/legal.ts` — Privacy Policy, Terms of Use, Support FAQ and the Delete Account page,
  for all 11 locales. **This is the file to edit for any legal/support copy change.**
- `src/i18n/keywords.ts` — the programmatic SEO "guide" pages (faceless video generator, UGC ad
  maker, etc.), for English + German + French + Spanish + Italian, with localized slugs.
- `src/sections/` — shared page bodies (`HomeBody`, `LegalDocBody`, `SupportBody`,
  `KeywordBody`) rendered by both the bare and `[lang]`-prefixed route files.
- `src/config/site.ts` — brand name, App Store URL, supported locales, effective date. Change
  the App Store id/URL or add a locale here first.
- `src/styles/global.css` — design tokens (Direction A: light, flat, one brand color `#6D28D9`).
- `scripts/generate-assets.mjs` — regenerates the favicon/app-icon set and the per-locale
  1200×630 OG images in `public/og/`. Run it locally (not part of CI) after changing the brand
  mark or a locale's tagline: `npm run generate-assets`.

## Editing content

- **Copy a locale's home/nav text** → `src/i18n/ui.ts`.
- **Copy a legal page, Support FAQ, or Delete Account instructions** → `src/i18n/legal.ts`.
  Bump `LEGAL_EFFECTIVE_DATE` (and each locale's `effectiveDateLabel`) when you make a
  substantive change.
- **Add a language**: add its code to `LOCALES` in `src/config/site.ts`, add a `Dict` block to
  `ui.ts` and a `LegalPack` to `legal.ts`. It's automatically picked up by the `[lang]` routes,
  the language switcher, and hreflang tags.
- **Add a keyword/guide page**: add a topic id to `KEYWORD_TOPICS` and a `KeywordPage` entry per
  locale in `src/i18n/keywords.ts`.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321/viral-factory/
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploying

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which builds
with the official `withastro/action` and publishes via `actions/deploy-pages`. GitHub Pages is
configured with **Build and deployment: GitHub Actions** (Settings → Pages) — no manual
`gh-pages` branch involved. To redeploy without a code change, run the workflow manually from
the Actions tab (`workflow_dispatch`).

## Notes

- `astro.config.mjs` sets `site` + `base` for the GitHub Pages project-site URL. If this repo is
  ever renamed, update `BASE_PATH` in `src/config/site.ts` and `base` in `astro.config.mjs` to
  match.
- `public/.nojekyll` is required so GitHub Pages serves the `_astro/` (leading-underscore) asset
  folder instead of having Jekyll ignore it.
- No secrets are used anywhere in this repo or workflow.
