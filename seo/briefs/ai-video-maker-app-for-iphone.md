# Brief — "ai video maker app for iphone" (money page)

Date: 2026-10-01 · Locale: en (+ local equivalents, see bottom)

## 1. Who already ranks on our site
- No GSC data exists for this site (`seo/STATE.json`), so no page has known clicks/impressions.
- `grep -ril "ai video maker" src/` → no page uses the phrase. No guide page targets it (guides are
  job-specific: faceless, UGC, carousel...). → **Optimise the home page** (`/`), do not create a page.

## 2. Decision
Optimise `https://ridvanuyn.github.io/viral-factory/` (`src/sections/HomeBody.astro` + `src/i18n/ui.ts`).

## 3. SERP (firecrawl, US, 2026-10-01)
1. apps.apple.com — invideo AI: AI Video Generator (App Store listing)
2. reddit.com/r/aiArt — "Which iOS AI app ... worth the subscription"
3. zapier.com/blog/best-ai-video-generator/ — "The 16 best AI video generators in 2026"
4. apps.apple.com — Filmora; 6. apps.apple.com — VideoGPT; 5/7/10 YouTube roundups; 8. Wideframe listicle

Page type: product (App Store listings) + listicles → commercial. Our home page competes as the
product page; the listicle intent is served by the new ranking page (separate brief).

- Primary keyword: **AI video maker app for iPhone**
- Secondary (shared across the top results' titles + Suggest): AI video generator (for iPhone),
  AI video maker app, AI video creator for iPhone, Reels / TikTok / Shorts, UGC ads, faceless.
- What the top product pages all show: what it makes (format list), how it works (steps), who it is
  for, social proof (ratings), a download CTA above the fold, FAQ.
- What our home page already has: hero + CTA, 8 features, workflow card, 3-step how-to, FAQ, final CTA.
- One thing none of the top 3 has: a storyboard you approve **before** anything renders + 10 fresh
  hooks every morning (already on the page — keep them prominent; do not add new claims).
- Social proof: none can be shown honestly — the App Store listing is not live (no rating). Add a
  rating only after the iTunes API returns one.

## 4. Title / meta / H1
- Title (≤ ~60): `AI Video Maker App for iPhone: Reels & UGC Ads · Viral Factory` (62 chars with brand)
  — was `Viral Factory — AI short-form content studio for iOS`.
- Meta (140–160): `Viral Factory is an AI video maker app for iPhone: turn a prompt, a photo or a reel you
  liked into faceless reels, UGC ads and carousels. Free to download.`
- H1: `AI video maker for faceless reels, UGC ads and swipe carousels — from one idea.`
  (keeps the existing human hero; inserts the primary keyword).

## 5. Local money keywords (from Suggest, same page type) → home title per locale
| Locale | Primary keyword | New title (brand appended by Seo.astro) |
|---|---|---|
| de | KI-Video-App (iPhone) | KI-Video-App fürs iPhone: Reels & UGC-Ads |
| fr | application vidéo IA | Application vidéo IA : Reels et pubs UGC |
| es | app para hacer vídeos con IA | App para hacer vídeos con IA: Reels y anuncios |
| it | app per creare video con IA | App per creare video con IA: Reel e annunci |
| pt | app para fazer vídeos com IA | App para fazer vídeos com IA: Reels e anúncios |
| tr | yapay zeka video uygulaması | Yapay Zeka Video Uygulaması: Reels ve Reklam |
| ja | AI動画作成アプリ | AI動画作成アプリ｜リールとUGC広告をiPhoneで |
| ko | AI 영상 만들기 앱 | AI 영상 만들기 앱 — 릴스·UGC 광고를 iPhone에서 |
| ar | تطبيق صنع فيديو بالذكاء الاصطناعي | تطبيق صنع فيديو بالذكاء الاصطناعي: ريلز وإعلانات |
| hi | AI वीडियो बनाने वाला ऐप | AI वीडियो बनाने वाला ऐप: रील्स और UGC विज्ञापन |

Each locale's H1 now opens with (or contains) its keyword; meta descriptions were rewritten around it
(Latin 154–160 chars; ja/ko/ar/hi shorter per script).

## 6. Internal links
In-body link to `/` with anchor "AI video maker app for iPhone" (localized) from every guide page
(KeywordBody, 8 EN + 32 de/fr/es/it) and from the new ranking page.

## 7. Schema
Keep Organization, SoftwareApplication (no offers, no rating), HowTo, FAQPage. Add WebSite.
