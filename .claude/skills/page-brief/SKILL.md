---
name: page-brief
description: Build the SEO brief for one target keyword. Use when asked to rank for a keyword, optimise a page, or before creating any new page.
---
Adapted from Nicholas Dulait's "Chief of SEO" setup. Analyst layer: see the money-keywords skill.

1. One keyword, one page. In Search Console (Performance → filter the exact query → Pages tab), or
   from `seo/STATE.json` when the browser is not available, find who already ranks for it:
   - a page already gets clicks for it: optimise that page
   - a page gets impressions but few clicks: it is already in the top 10, optimise it
   - nothing: create a new page
   Also `grep -ril "<keyword>" src/` so we never write a page we already have.
2. If an existing URL already gets clicks or impressions for the keyword, STOP any plan to create a
   new page. We optimise. Two pages on one query = cannibalisation (7th and 8th instead of 3rd).
3. `firecrawl search "<keyword>" --limit 10`, then `firecrawl scrape` the top 3. Extract:
   - create or optimise, and which URL
   - primary keyword and every secondary keyword (the other queries the #1 URL also ranks for:
     Semrush organic_research on that URL when units are available, else the shared terms in the
     top 3 titles and H2s)
   - the page type and the sections the top 3 all have, in the order the SERP answers them
   - one thing none of them has (quiz, calculator, face + credentials, real numbers, video)
4. Write the title: primary keyword first, secondary modifiers where they fit, under ~60 chars /
   580 px so it does not truncate. Spare pixels go to the click (a real rating, the year, "free").
   The meta description sells the click; it barely moves rankings.
5. Save the brief to `seo/briefs/<keyword-slug>.md`. Do not edit the site yet.
