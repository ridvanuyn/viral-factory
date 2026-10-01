# SEO log — Viral Factory site (append-only)

## 2026-10-01 — Chief-of-SEO pass (money keywords, homepage titles, ranking page, GEO plan)

Context: first SEO pass on this site; `seo/` created (BRIEF, STATE, LOG, keywords, briefs, geo, App Store
data snapshot). No GSC data, so the 60-day rule blocked nothing. Skills from Nicholas Dulait's "Chief of
SEO" setup added under `.claude/skills/`.

**Blocking finding:** the App Store listing id6790560948 is not live (iTunes lookup = 0 results in 18
storefronts, apps.apple.com = 404). Every CTA on the site points there. Nothing in this pass depends on it,
but outreach must wait and no rating can be shown anywhere until it is live.

Changes:
- Money keywords mapped per locale (`seo/keywords.md`, all volumes n/a — no volume source connected).
- Home titles/meta/H1 rewritten in all 11 locales around each locale's money keyword (EN: "AI Video Maker
  App for iPhone: Reels & UGC Ads"). Before/after in `seo/STATE.json`. H1s keep the existing hero, with the
  keyword inserted.
- JSON-LD: WebSite added on the home pages. SoftwareApplication stays without offers/rating.
- Internal links: each guide page (40) now has an in-body link to its locale's home with the money keyword
  as anchor; the 8 English guides also link to the new ranking page; English footer + llms.txt list it.
- New page `/best-ai-video-generator-apps-iphone/` — "Best AI Video Generator Apps for iPhone (2026)":
  7 competitor apps from the current listicles + Viral Factory (disclosed, "no rating yet"); every
  rating/count/price/min-iOS from the iTunes API (US) on 2026-10-01 (`seo/data/appstore-2026-10-01.json`);
  comparison table, pick-by-job table, how we picked, per-app sections, how to choose, FAQ. Unique angle:
  minimum iOS per app + App Store-dated data. Schema: BreadcrumbList, ItemList (names + URLs only), FAQPage.
- GEO plan in `seo/geo.md`: 5 queries, 33 unique listicles, mentioned in 0; drafts written, nothing sent.

Diff gate: 100 pages before / 101 after, 60 pages changed, 0 elements lost (tables, forms, images,
sections, links, JSON-LD blocks, CTAs, h2/h3).

60-day decisions: everything changed today → "wait" until 2026-11-30 for titles/H1 (no edits to the home
or guide titles before then unless GSC shows a problem).

Not done / follow-ups:
- Re-check the App Store listing; when live: add the real rating to the ranking page row + STATE, then send
  the independent outreach drafts first.
- Language switcher on guide pages links to `/<lang>/<english-slug>/`, which does not exist for localized
  slugs (pre-existing; not touched in this pass).
- `robots.txt` is served at `/viral-factory/robots.txt`, which crawlers never read on a project subpath
  (pre-existing; robots files are out of scope for this pass).
- No `check:seo` script exists; checks = `npm run build` + built-HTML spot checks.

Next check: 2026-10-29 (weekly-seo; GSC property for the subpath first).
