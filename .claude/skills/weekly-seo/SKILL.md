---
name: weekly-seo
description: Weekly SEO review from Search Console. Use every Monday, or when asked how SEO is going.
---
Adapted from Nicholas Dulait's "Chief of SEO" setup. Works on top of `seo/BRIEF.md`,
`seo/STATE.json` and the append-only `seo/LOG.md`.

1. In Search Console (`sc-domain:<site>`, Performance, compare last 28 days to the previous 28):
   which pages gained impressions, which lost clicks, which queries entered the top 10?
   Use ChatSEO or Semrush instead when connected. Save the numbers into `seo/STATE.json`.
2. Flag any page whose impressions jumped: it just entered the top 10. Queue it for page-brief.
   Pushing top 10 to top 3 is the cheapest win.
3. Flag pages edited in the last 60 days (`git log -1 --format=%cs -- <file>`, and `seo/LOG.md`)
   as "wait". Do not touch them. A dip after a change is normal for up to two months.
4. Flag pages edited 90+ days ago, still stuck outside the top 3, with a good brief: candidates for
   links (a topical site whose linking page itself ranks; anchors mostly brand/URL, not exact match).
5. Write `seo/reviews/<date>.md` and give me 5 actions, ranked by business value (App Store
   installs), not traffic.
