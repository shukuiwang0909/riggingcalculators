import { SITE, htmlLang, type Locale } from '../config';

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description:
      'Free online rigging calculators for industrial lifting and crane operations — shackle sizing, sling angle tension, wire rope WLL, and crane load analysis.',
  };
}

export function webSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: ['en', 'zh-CN'],
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function webSiteWithSearch() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: ['en', 'zh-CN'],
    publisher: { '@id': `${SITE.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/en/shackle-size-calculator/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function softwareApp(name: string, description: string, path: string, lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `${SITE.url}${path}`,
    applicationCategory: 'EngineeringApplication',
    operatingSystem: 'Any',
    inLanguage: htmlLang(lang),
    isPartOf: { '@id': `${SITE.url}/#website` },
    provider: { '@id': `${SITE.url}/#organization` },
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  };
}

export function collectionPage(name: string, description: string, path: string, lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE.url}${path}`,
    inLanguage: htmlLang(lang),
    isPartOf: { '@id': `${SITE.url}/#website` },
  };
}
