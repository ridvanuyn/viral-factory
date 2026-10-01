# Money keywords — Viral Factory site (2026-10-01)

Sources: Google Suggest (three passes per seed: `seed`, `seed *`, `* seed`, per `hl`/`gl`), live SERP
via `firecrawl search` (US unless noted). **No search volumes are available** (no ChatSEO, Semrush has
no API units, no GSC data) — every volume cell is "n/a". Never fill these in from memory.

SERP page type = what Google ranks top 3 for the query on 2026-10-01. "commercial" = product/tool
landing pages, App Store / Play listings or listicles; informational queries were dropped.

Rejected on purpose: every "free", "kostenlos", "gratis", "gratuit", "ücretsiz", "無料" modifier
(generation uses credits — a "free" promise would be false), "no restrictions / uncensored", "apk /
mod", "github", Android-only queries, and LinkedIn carousels (the app sizes for Instagram/TikTok).

## 1. App + platform (money page = home, one per locale)

| Pattern | Keyword | Volume | SERP page type (top 3) | Our URL | Locale |
|---|---|---|---|---|---|
| app + platform | ai video maker app for iphone | n/a | App Store listing (invideo AI), Reddit thread, Zapier listicle — commercial | `/` (home) | en |
| app + platform | ai video maker for iphone / ai video generator for iphone | n/a | same SERP family — commercial | `/` (secondary) | en |
| app + platform | ai video maker app | n/a | not checked (same family) | `/` (secondary) | en |
| app + platform | ki video app (iphone) / ki video erstellen app | n/a | App Store listings (InShot), YouTube, App Store chart — commercial (DE) | `/de/` | de |
| app + platform | application vidéo ia | n/a | Play listing, Zapier listicle, Runway product page — commercial (FR) | `/fr/` | fr |
| app + platform | app para hacer videos con ia | n/a | invideo, Canva, Play listing — commercial (ES) | `/es/` | es |
| app + platform | app per creare video con ia / app video ia | n/a | not checked (same family as de/fr/es) | `/it/` | it |
| app + platform | app para fazer vídeo com ia / app de vídeo ia | n/a | not checked (same family) | `/pt/` | pt |
| app + platform | yapay zeka video uygulaması | n/a | Play listing (YearCam), Canva, Gemini — commercial (TR) | `/tr/` | tr |
| app + platform | AI 動画 作成 アプリ / AI 動画生成 アプリ | n/a | not checked | `/ja/` | ja |
| app + platform | AI 영상 만들기 앱 | n/a | not checked | `/ko/` | ko |
| app + platform | تطبيق صنع فيديو بالذكاء الاصطناعي | n/a | not checked | `/ar/` | ar |
| app + platform | AI वीडियो बनाने वाला ऐप / ai video banane wala app | n/a | not checked | `/hi/` | hi |

## 2. Best + category + year (GEO / ranking pages)

| Pattern | Keyword | Volume | SERP page type (top 3) | Our URL | Locale |
|---|---|---|---|---|---|
| best + category | best ai video generator for iphone (2026) | n/a | Zapier listicle, App Store (VideoGPT), YouTube — listicle | `/best-ai-video-generator-apps-iphone/` (new 2026-10-01) | en |
| best + category | best ai video apps for iphone | n/a | not checked (Suggest only) | same page (secondary) | en |
| best + category | best faceless video app (2026) | n/a | HeyGen blog listicle, invideo tool page, Canva tool page — listicle/tool | none | en |
| best + category | best ai ugc video generator (2026) | n/a | YouTube ×2, Hyper listicle — listicle | none | en |
| best + category | best photo to video ai app (2026) | n/a | Zapier, HeyGen, Shhots listicles — listicle | none | en |
| best + category | best ai reel maker app (2026) | n/a | Canva tool page, Reddit, HeyGen listicle — listicle/tool | none | en |

## 3. App + job (the guide-page pattern machine, `src/i18n/keywords.ts`)

Existing pages (8 topics × en/de/fr/es/it = 40 URLs). English slug shown; localized slugs live in
`keywords.ts`.

| Pattern | Keyword | Volume | SERP page type (top 3) | Our URL | Locale |
|---|---|---|---|---|---|
| app + job | faceless video generator | n/a | Canva, invideo, faceless.video tool pages — commercial | `/faceless-video-generator/` | en (+de/fr/es/it) |
| app + job | faceless video app / faceless video generator app | n/a | not checked (Suggest) | `/faceless-video-generator/` (secondary) | en |
| app + job | faceless reels maker | n/a | not checked | `/faceless-reels-maker/` | en (+4) |
| app + job | ugc ad maker / ai ugc video generator | n/a | CreateUGC, UGCVideo.ai, Bandy tool pages — commercial | `/ugc-ad-maker/` | en (+4) |
| app + job | ai video ad generator (for small business) / ai video ad maker | n/a | not checked | `/ai-video-ad-generator-for-small-business/` | en (+4) |
| app + job | photo to video ai app / ai video maker from photo | n/a | not checked (Suggest strong in every locale) | `/photo-to-video-ai/` | en (+4) |
| app + job | ai carousel maker (for instagram) | n/a | not checked | `/ai-carousel-maker/` | en (+4) |
| app + job | tiktok hook generator | n/a | not checked | `/tiktok-hook-ideas-generator/` | en (+4) |
| app + job | ai character video | n/a | not checked | `/ai-character-video/` | en (+4) |

### Pattern-drip queue (no URL yet — ONE page per run, never in bulk)

Volumes are all n/a, so file order decides. Run page-brief on each first.

| # | Pattern | Keyword | Volume | SERP page type | Our URL | Locale | Note |
|---|---|---|---|---|---|---|---|
| 1 | app + job | ai reel maker (app) | n/a | Canva tool page + listicles — commercial | none | en | matches Cinematic short / daily hooks |
| 2 | app + job | viral video maker (ai / app) | n/a | not checked | none | en | brand-adjacent ("Viral Factory") |
| 3 | app + job | ai tiktok video generator / tiktok video maker ai | n/a | not checked | none | en | |
| 4 | app + job | yapay zeka reels oluşturma | n/a | not checked | none | tr | TR has no guide pages yet (KEYWORD_LOCALES) |
| 5 | app + job | ugc video mit ki erstellen | n/a | not checked | none (de UGC page is `/de/ugc-werbevideo-ki/`) | de | check cannibalisation first |

## 4. Alternative + competitor (candidates only — intent not verified)

| Pattern | Keyword | Volume | SERP page type | Our URL | Locale |
|---|---|---|---|---|---|
| alternative | capcut alternative (ai video) | n/a | not checked | none | en |
| alternative | invideo ai alternative | n/a | not checked | none | en |

Do not build these until the app is live on the App Store and has a real listing to compare.
