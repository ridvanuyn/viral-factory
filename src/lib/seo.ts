/**
 * Reusable schema.org JSON-LD builders. Centralized so every page emits
 * consistent, GEO-friendly structured data that LLMs and rich results can read.
 */
import { SITE_URL, BASE_PATH, BRAND, STORE, ACTIVE_LOCALES } from '../config/site';

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.name,
  url: `${SITE_URL}${BASE_PATH}/`,
  logo: `${SITE_URL}${BASE_PATH}/icon-512.png`,
  email: BRAND.supportEmail,
  founder: { '@type': 'Person', name: BRAND.developerName },
  sameAs: [STORE.appStoreUrl],
});

/** The site itself (all locales share one WebSite entity). */
export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND.name,
  url: `${SITE_URL}${BASE_PATH}/`,
  inLanguage: [...ACTIVE_LOCALES],
  publisher: { '@type': 'Organization', name: BRAND.name },
});

/** A ranked/curated list of apps (comparison pages). Names + store URLs only —
 *  no ratings, reviews or offers for third-party apps. */
export const itemListLd = (name: string, items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    url: it.url,
  })),
});

/** The app itself — anchors "AI video generator" / "AI carousel app" queries.
 *  `offers` is deliberately omitted: exact prices aren't published here, and
 *  schema.org offers must not be guessed. */
export const softwareAppLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: BRAND.appName,
  operatingSystem: 'iOS',
  applicationCategory: 'MultimediaApplication',
  description: BRAND.description,
  url: `${SITE_URL}${BASE_PATH}/`,
  sameAs: [STORE.appStoreUrl],
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: new URL(it.path, SITE_URL).href,
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const howToLd = (name: string, steps: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name,
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    text: s,
  })),
});
