---
name: pattern-drip
description: Publish the next page of a keyword pattern. Use for scheduled runs, or when asked to scale a pattern or duplicate a page.
---
Adapted from Nicholas Dulait's "Chief of SEO" setup. Put it on a daily routine (/schedule or cron).

1. Open `seo/keywords.md`. Take the next pattern keyword with no URL yet, highest volume first
   ("n/a" volumes go last, in file order).
2. Run page-brief on it. If the brief says "optimise", stop and flag it.
3. Duplicate the reference page for this pattern. Replace everything specific: facts, examples,
   use cases, screenshots, FAQ. A page that only swaps the keyword does not ship.
4. Run ship-page. Diff it against the REFERENCE page as well: anything the reference has that this
   one lost gets restored. Add the new URL to `seo/keywords.md`.
5. One page per run. Never more. Forty pages in one afternoon on a young domain screams automation.
