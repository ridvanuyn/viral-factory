---
name: money-keywords
description: Find the commercial keyword patterns for this site. Use when asked which keywords to target, for an SEO strategy, or "where is the money".
---
Adapted from Nicholas Dulait's "Chief of SEO" setup (x.com/NicholasDulait/status/2104488222575190439).
The analyst layer is whatever is connected, in this order: ChatSEO MCP (https://api.chatseo.app/mcp),
Semrush MCP (keyword_research → execute_report), Google Search Console (`sc-domain:<site>`, read in
the browser), Google Suggest, and the live SERP via `firecrawl search`. Business facts: `seo/BRIEF.md`.

1. Read `seo/BRIEF.md` and `seo/STATE.json`. List the seeds: what the app does + who buys it
   ("screen time app", "pregnancy tracker app", ...), per locale the site serves.
2. Expand each seed with Google Suggest, three passes: `<seed>`, `<seed> *`, `* <seed>`:
   `curl -s "https://suggestqueries.google.com/complete/search?client=firefox&hl=<lang>&q=<urlencoded>"`
3. Group the results into patterns, not keywords: app + platform ("for iPhone"), app + audience,
   app + job, alternative + competitor, best + category + year. A pattern is a page machine.
4. For each candidate, check intent on the live SERP: `firecrawl search "<keyword>" --limit 10`.
   Keep it only if the top 3 are landing, product, app-store, category or listicle pages.
   Blog posts and definition boxes on top = informational: drop it for now.
5. Write `seo/keywords.md`: pattern, keyword, monthly volume, page type Google ranks, and the URL
   on our site that targets it (or "none").
6. Never invent a volume. Only Semrush/ChatSEO/Keyword Planner numbers count. GSC impressions go in
   their own column and are not volumes. If nothing returned it, write "n/a".
