---
name: ship-page
description: Write or update a page from its brief and publish it safely. Use after page-brief, when asked to build, rewrite or publish a page.
---
Adapted from Nicholas Dulait's "Chief of SEO" setup.

1. Read `seo/briefs/<keyword-slug>.md`. Write or rewrite the page to cover every section the top 3
   share, plus the one thing they do not have.
2. One H1 containing the primary keyword. Title and meta from the brief.
3. JSON-LD that fits the page type and a rich result Google still shows (the rules in
   `seo/BRIEF.md`). Never invent ratings, reviews, prices or stats.
4. At least 5 internal links TO this page from the most related existing pages, inside body text,
   exact-match anchors are fine internally. Money pages belong in the header, long tail in the footer.
5. DIFF GATE. Build before and after (`npm run build`, or the static files), then list every element
   present in the old version and missing from the new one: tables, rankings, forms, quizzes, embeds,
   images, internal links, JSON-LD blocks, CTAs, sections. Show me that list. An empty list is a
   result, not a skipped step.
6. Run the repo's checks (`npm run check:seo` where it exists). Publish only after I say yes: commit
   on a branch (or main when I said so), deploy the way `seo/BRIEF.md` says, curl the live URL to
   confirm title/H1/canonical, and append the change to `seo/LOG.md`.
