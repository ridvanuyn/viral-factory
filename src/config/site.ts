/**
 * Central site configuration — single source of truth for URLs, brand copy,
 * and app-store links. Imported by both the Astro config and pages/components
 * so there is exactly one place to change.
 */

/**
 * Canonical production origin (no trailing slash, no base path). GitHub
 * Pages project sites are always served at <github-username>.github.io —
 * the authenticated/owning account here is "ridvanuyn" (no second "a"; not
 * to be confused with the developer's name, Rıdvan Uyan), so that's the
 * only origin that will ever actually resolve for this repo.
 */
export const SITE_URL = 'https://ridvanuyn.github.io';

/** GitHub Pages project-site base path (matches the repo name). */
export const BASE_PATH = '/viral-factory';

/** Brand. */
export const BRAND = {
  name: 'Viral Factory',
  appName: 'Viral Factory',
  /** English fallback description — used for <meta description> defaults and JSON-LD. */
  description:
    'Viral Factory turns a prompt, a photo, or a reel you liked into ready-to-post short-form video and carousels for TikTok, Instagram and YouTube.',
  supportEmail: 'ridvan.uyn@gmail.com',
  /** Individual developer — controller of record for privacy purposes. */
  developerName: 'Rıdvan Uyan',
};

/** App Store listing. The app is live — every CTA links here directly. */
export const STORE = {
  appleAppId: '6790560948',
  appStoreUrl: 'https://apps.apple.com/app/id6790560948',
  /** Apple's standard EULA, which governs auto-renewable subscriptions. */
  eulaUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
};

/**
 * Supported locales. The [lang] routing, hreflang alternates, and language
 * switcher all key off this list. English is the DEFAULT locale and lives at
 * the bare (unprefixed) path — see lp() in src/i18n/index.ts — every other
 * locale is prefixed (/de, /fr, ...). English also gets a redundant /en/
 * copy for consistency (see localeParams()).
 */
export const LOCALES = ['en', 'de', 'fr', 'es', 'it', 'pt', 'tr', 'ja', 'ko', 'ar', 'hi'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const ACTIVE_LOCALES: Locale[] = [...LOCALES];

/** Locales with a fully localized set of programmatic keyword landing pages. */
export const KEYWORD_LOCALES: Locale[] = ['en', 'de', 'fr', 'es', 'it'];

/** Native display names for the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  tr: 'Türkçe',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  hi: 'हिन्दी',
};

/** RTL locales (for the <html dir> attribute). */
export const RTL_LOCALES: Locale[] = ['ar'];

/** Effective date shown on the legal pages (privacy, terms). */
export const LEGAL_EFFECTIVE_DATE = '2026-09-26';
