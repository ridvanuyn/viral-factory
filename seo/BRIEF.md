# SEO brief — ridvanuyn.github.io/viral-factory

## Business
Viral Factory ("Viral Factory: AI Video Maker", subtitle "Faceless Reels & UGC Ads" in the App Store
metadata draft) is an iOS app that turns a prompt, a photo, or a reel you liked into ready-to-post
short-form content: faceless reels, UGC-style ads (Creator testimonial), swipe carousels, cinematic
shorts, a reusable AI character, Cameo (your photo in a generated scene), "Remake a hit", "Swap into
your video", 10 fresh hooks a day, a storyboard review before rendering, and scheduling to TikTok,
Instagram and YouTube. Feature truth = the copy in `src/i18n/ui.ts` / `src/config/site.ts`
(`ai_video_app/README.md` is outdated — do not use it for features).

- App Store: https://apps.apple.com/app/id6790560948 — **as of 2026-10-01 the listing is NOT live**
  (iTunes lookup returns 0 results in every storefront checked; apps.apple.com returns 404).
  Every CTA on the site links there. Re-check before any outreach.
- Site: https://ridvanuyn.github.io/viral-factory/ — Astro 5 static site on GitHub Pages (base path
  `/viral-factory`), 11 locales (en at bare paths; de, fr, es, it, pt, tr, ja, ko, ar, hi prefixed).
  Guide (keyword) pages exist in en/de/fr/es/it only (`src/i18n/keywords.ts`).
- Support/contact: /support/ and the support email in `src/config/site.ts`.

## Offer
Free to download. Generating content uses credits: subscriptions include a monthly credit allowance,
credit packs can be bought separately. Do not print prices or "free" generation claims — prices are
not published on the site and must come from the live App Store listing.

## Buyer
Creators, solo founders and small brands who want to post short-form video daily without filming:
faceless-account creators, small businesses / DTC shops testing ad angles, app makers needing ad
creative, people who want UGC-style ads without booking creators.

## What counts as a conversion
A click on an App Store link (header "Get the app", hero/CTA badges, footer badge) followed by an
install. **No web analytics on the site**, so clicks are not tracked; installs only show in App Store
Connect. There is no Search Console data in this repo yet (`seo/STATE.json` has no GSC numbers).

## Money page + main query hypothesis
- Money page: the English home page, https://ridvanuyn.github.io/viral-factory/
- Main query: "AI video maker app for iPhone" (+ "ai video generator for iphone"). Local money keywords
  per locale are in `seo/keywords.md`.
- Long tail: the guide pages (faceless video generator, UGC ad maker, AI video ad generator for small
  business, photo to video AI, AI carousel maker, TikTok hook generator, AI character video, faceless
  Reels maker) = the pattern machine. New guide pages go one per day via pattern-drip, never in bulk.
- GEO page: /best-ai-video-generator-apps-iphone/ ("Best AI Video Generator Apps for iPhone (2026)").

## Rules
- Never invent volumes, ratings, review counts, prices or test results. Competitor facts only from
  the iTunes API, dated. Our own app gets no rating in schema until the iTunes API returns one.
- JSON-LD in use: Organization, WebSite, SoftwareApplication (no offers/rating), HowTo, FAQPage,
  BreadcrumbList, ItemList (ranking page). Keep visible FAQ and FAQPage in sync (`Faq.astro` + `faqLd`).
- Titles ≤ ~60 chars for Latin scripts (Seo.astro appends " · Viral Factory" unless the brand is
  already in the title); descriptions 140–160 chars Latin; one H1 with the primary keyword.
- Every internal link must go through `lp()` / `withBase()` (base path `/viral-factory`).

## Deploy
`git pull --rebase && git push origin main` → GitHub Actions (`.github/workflows/deploy.yml`) →
GitHub Pages. Watch with `gh run list -R ridvanuyn/viral-factory --limit 3` / `gh run watch`, then curl
the live URL. Checks: `npm run build` (no `check:seo` script exists).
