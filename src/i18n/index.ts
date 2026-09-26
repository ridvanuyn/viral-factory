/** i18n helpers: translations, base+locale-aware paths, hreflang alternates. */
import { ui, type Dict } from './ui';
import { ACTIVE_LOCALES, DEFAULT_LOCALE, RTL_LOCALES, type Locale } from '../config/site';

export type { Locale };
export { ACTIVE_LOCALES, DEFAULT_LOCALE };

/** Translation dictionary for a locale (falls back to English). */
export const t = (lang: Locale): Dict => ui[lang] ?? ui[DEFAULT_LOCALE];

/** Text direction for the <html dir> attribute. */
export const dir = (lang: Locale): 'rtl' | 'ltr' => (RTL_LOCALES.includes(lang) ? 'rtl' : 'ltr');

/**
 * Prefix a root-relative path ('/x') with the configured Astro `base`
 * (import.meta.env.BASE_URL, e.g. '/viral-factory/'). Needed for anything
 * that isn't already base-aware — hardcoded links to public/ assets,
 * hand-built canonical/OG URLs, etc.
 */
export function withBase(path: string = '/'): string {
  const base = import.meta.env.BASE_URL || '/';
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path === '/' || path === '' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}` || '/';
}

/**
 * Locale- and base-prefixed path. The default locale (English) lives at the
 * bare path — no `/en` segment — every other locale is prefixed with its
 * code. This is the single place that decides "where does language X live".
 *   lp('en', '/privacy') → '/viral-factory/privacy'
 *   lp('de', '/privacy') → '/viral-factory/de/privacy'
 */
export function lp(lang: Locale, path: string = '/'): string {
  const clean = path === '/' || path === '' ? '' : path.startsWith('/') ? path : `/${path}`;
  const localePath = lang === DEFAULT_LOCALE ? clean || '/' : `/${lang}${clean}`;
  const based = withBase(localePath);
  // Every page route uses a trailing slash (see astro.config.mjs
  // trailingSlash: 'always') — unlike withBase(), which is also used for
  // asset paths (favicon, OG images) that must NOT get one.
  return based.endsWith('/') ? based : `${based}/`;
}

/**
 * hreflang alternates for a locale-agnostic path (e.g. '/privacy'), across a
 * given set of locales (defaults to every active locale). Pass a restricted
 * `locales` list for content that isn't translated into every language
 * (e.g. the programmatic keyword pages).
 */
export function alternates(
  path: string = '/',
  locales: Locale[] = ACTIVE_LOCALES,
): { lang: Locale; href: string }[] {
  return locales.map((l) => ({ lang: l, href: lp(l, path) }));
}

/** Interpolate {name}/{desc} style placeholders. */
export const format = (s: string, vars: Record<string, string | number>): string =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));

/**
 * getStaticPaths helper for `[lang]` routes. English is served at the bare
 * path (its own page file), so `[lang]` routes normally exclude it —
 * `includeDefault: true` additionally publishes a redundant `/en/...` copy
 * (used for the 5 pages App Store Connect / Google Play link to, which must
 * exist both bare and locale-prefixed).
 */
export function localeParams(includeDefault = false) {
  const locales = includeDefault ? ACTIVE_LOCALES : ACTIVE_LOCALES.filter((l) => l !== DEFAULT_LOCALE);
  return locales.map((lang) => ({ params: { lang }, props: { lang } }));
}
