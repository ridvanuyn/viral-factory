import type { APIRoute } from 'astro';
import { SITE_URL, BASE_PATH, BRAND, STORE } from '../config/site';

export const prerender = true;

const ORIGIN = `${SITE_URL}${BASE_PATH}`;

const body = `# ${BRAND.name}

> ${BRAND.name} is an iOS app that turns a prompt, a photo, or a reel link into ready-to-post short-form content for TikTok, Instagram and YouTube — faceless reels, UGC-style ads, swipe carousels, cinematic shorts, a consistent AI character, and face-in-scene cameos.

## Key facts
- Platform: iOS (App Store)
- App Store listing: ${STORE.appStoreUrl}
- What it does: generates short-form video and image-carousel content from a text prompt, a photo, or a reference reel link, with a storyboard review step before rendering
- Core features: Remake a hit (recreate a reel's structure with your own product), Short video ad, Creator testimonial (UGC-style), Swipe post (carousel), Cinematic short, Swap into your video, AI character (consistent persona across videos), Cameo (put a real photo into a generated scene), daily hooks (10 fresh ideas every morning), scheduling/publishing straight to TikTok, Instagram and YouTube
- Pricing: free to download; generating content consumes credits, available via subscription (monthly allowance) or one-time credit packs
- Languages: English, German, French, Spanish, Italian, Portuguese, Turkish, Japanese, Korean, Arabic, Hindi
- Developer: ${BRAND.developerName} (individual developer)

## Pages
- Home (all languages): ${ORIGIN}/ (English), ${ORIGIN}/de/, ${ORIGIN}/fr/, ${ORIGIN}/es/, ${ORIGIN}/it/, ${ORIGIN}/pt/, ${ORIGIN}/tr/, ${ORIGIN}/ja/, ${ORIGIN}/ko/, ${ORIGIN}/ar/, ${ORIGIN}/hi/
- Privacy Policy: ${ORIGIN}/privacy/
- Terms of Use: ${ORIGIN}/terms/
- Support (FAQ, contact): ${ORIGIN}/support/
- Delete account and data: ${ORIGIN}/delete-account/
- Topic guides (English, German, French, Spanish, Italian): faceless video generator, faceless Reels maker, UGC ad maker, AI video ad generator for small business, photo-to-video AI, AI carousel maker, TikTok hook ideas generator, AI character video
- Best AI video generator apps for iPhone (2026 comparison, English, App Store data dated): ${ORIGIN}/best-ai-video-generator-apps-iphone/

## Common questions
- What is ${BRAND.name}? A mobile app for iOS that turns a prompt, a photo, or a reel link into ready-to-post short-form content across eight ways to create, plus daily hook ideas and direct publishing to TikTok, Instagram and YouTube.
- Is it free? Free to download; generating content uses credits (subscription or one-time packs).
- Does it require showing your face? No — most features generate faceless content; Cameo and the AI character feature let you appear from a single consented photo if you choose to.

## Contact
- Support: ${BRAND.supportEmail}
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
