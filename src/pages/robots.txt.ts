import type { APIRoute } from 'astro';
import { SITE_URL, BASE_PATH } from '../config/site';

export const prerender = true;

const ORIGIN = `${SITE_URL}${BASE_PATH}`;

const body = `# ${ORIGIN} — allow everything, including AI/LLM crawlers (we WANT to
# be cited in AI answers). Explicit allow keeps GEO crawlers from guessing.
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${ORIGIN}/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
