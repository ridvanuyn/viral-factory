---
name: geo-rankings
description: Plan GEO for this site. Use when asked about ChatGPT, AI Overviews, Perplexity, GEO, or getting cited by AI.
---
Adapted from Nicholas Dulait's "Chief of SEO" setup. GEO is mostly SEO: the assistant does not search
the user's prompt, it searches Google for something like "best <money keyword> <year>".

1. From `seo/keywords.md`, take the top 5 commercial keywords.
2. For each, form the AI query: "best <keyword> <current year>".
3. `firecrawl search "<best keyword year>" --limit 10`. Which results are rankings or listicles,
   and does each one mention our app? (`firecrawl scrape <url>` and grep for the app name.)
4. Build `seo/geo.md`: query, the listicles ranking, whether we are in them, the site behind each
   one, and the public contact route (contact page / editor page URL). No scraped personal emails.
5. Suggest title edits adding "best" and the year to our matching commercial pages. Run them through
   page-brief and ship-page. Never edit directly.
6. Draft one short, personal outreach email per listicle we are missing from: what the app does,
   one real differentiator, a link, and the offer to list them in return. I send them myself.
