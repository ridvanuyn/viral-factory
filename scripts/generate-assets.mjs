/**
 * Generate favicon / app icons / per-locale OG images for Viral Factory.
 * Run: node scripts/generate-assets.mjs
 * Self-contained — renders from inline SVG (no source app-icon file), using
 * the `sharp` dependency already in package.json. Run once locally and
 * commit the output; not part of the CI build (font coverage for
 * ja/ko/ar/hi is more reliable on a full desktop OS than a bare CI runner).
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const PUB = 'public';
const BRAND_COLOR = '#6d28d9';
const INK = '#17131f';
const INK_SOFT = '#4a4557';
const GROUND = '#f4f2f8';

await mkdir(`${PUB}/og`, { recursive: true });

// --- Square "VF" mark, used as the source for every icon size + the OG image
const markSvg = (size, { light = false } = {}) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${light ? '#ffffff' : BRAND_COLOR}"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Helvetica, Arial, sans-serif" font-weight="800"
    font-size="${size * 0.46}" fill="${light ? BRAND_COLOR : '#ffffff'}">VF</text>
</svg>`;

const icons = [
  ['favicon.png', 48],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['apple-touch-icon.png', 180],
];
for (const [name, size] of icons) {
  await sharp(Buffer.from(markSvg(size))).png({ quality: 90 }).toFile(`${PUB}/${name}`);
  console.log(`✓ ${name} (${size}px)`);
}

// --- OpenGraph 1200x630, one per locale ------------------------------------
const W = 1200, H = 630;
const iconSize = 120;
const icon = await sharp(Buffer.from(markSvg(iconSize))).png().toBuffer();

// Short kicker line per locale (matches home.heroKicker in src/i18n/ui.ts).
const TAGLINE = {
  en: 'An AI content studio for creators and small brands',
  de: 'Ein KI-Content-Studio für Creator und kleine Marken',
  fr: 'Un studio de contenu IA pour créateurs et petites marques',
  es: 'Un estudio de contenido con IA para creadores y marcas pequeñas',
  it: 'Uno studio di contenuti IA per creator e piccoli brand',
  pt: 'Um estúdio de conteúdo com IA para criadores e pequenas marcas',
  tr: 'İçerik üreticileri ve küçük markalar için yapay zeka stüdyosu',
  ja: 'クリエイターと小規模ブランドのためのAIコンテンツスタジオ',
  ko: '크리에이터와 소규모 브랜드를 위한 AI 콘텐츠 스튜디오',
  ar: 'استوديو محتوى بالذكاء الاصطناعي لصنّاع المحتوى والعلامات الصغيرة',
  hi: 'क्रिएटर्स और छोटे ब्रांड्स के लिए AI कंटेंट स्टूडियो',
};

const FONT_STACK = "'Outfit', 'Noto Sans', 'Noto Sans Arabic', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Devanagari', Helvetica, Arial, sans-serif";

// crude word-wrap for the tagline (SVG has no native wrapping)
function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
  }
  if (cur) lines.push(cur.trim());
  return lines.slice(0, 2);
}

for (const [lang, tagline] of Object.entries(TAGLINE)) {
  const rtl = lang === 'ar';
  const lines = wrap(tagline, 34);
  const textAnchor = rtl ? 'end' : 'start';
  const textX = rtl ? W - 90 : 150;
  const iconX = rtl ? W - 90 - iconSize : 90;

  const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${GROUND}"/>
  <rect x="0" y="0" width="${W}" height="8" fill="${BRAND_COLOR}"/>
  <text x="${textX}" y="290" text-anchor="${textAnchor}" font-family="${FONT_STACK}" font-size="64" font-weight="700" fill="${INK}">Viral Factory</text>
  ${lines
    .map(
      (line, i) =>
        `<text x="${textX}" y="${350 + i * 42}" text-anchor="${textAnchor}" font-family="${FONT_STACK}" font-size="30" font-weight="500" fill="${INK_SOFT}">${line.replace(/&/g, '&amp;')}</text>`,
    )
    .join('\n  ')}
  <text x="${textX}" y="${350 + lines.length * 42 + 46}" text-anchor="${textAnchor}" font-family="${FONT_STACK}" font-size="24" font-weight="700" fill="${BRAND_COLOR}">iOS App Store</text>
</svg>`;

  await sharp(Buffer.from(svg))
    .composite([{ input: icon, left: Math.round(iconX), top: 90 }])
    .png()
    .toFile(`${PUB}/og/${lang}.png`);
  console.log(`✓ og/${lang}.png (1200x630)`);
}
