export const SITE = {
  url: 'https://riggingcalculators.com',
  name: 'Rigging Calculators',
  email: 'sales@riggingcalculators.com',
  /** Google Analytics 4 measurement ID. Leave empty to disable. Replace with your real ID, e.g. 'G-ABC123DEF'. */
  gaId: 'G-ML37SZQEZN',
  /**
   * RFQ form endpoint. Set to a Formspree / Web3Forms endpoint URL to enable direct submission.
   * When empty, the form falls back to opening a pre-filled email to SITE.email.
   * Example: 'https://formspree.io/f/xxxxxxx'
   */
  rfqEndpoint: 'https://formspree.io/f/xaenyjzq',
};

export const LOCALES = ['en', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function htmlLang(lang: Locale) {
  return lang === 'zh' ? 'zh-CN' : 'en';
}

/** Swap the locale prefix of a path, e.g. /en/shackle-size-calculator/ -> /zh/shackle-size-calculator/ */
export function altLocalePath(path: string, target: Locale) {
  return path.replace(/^\/(en|zh)(\/|$)/, `/${target}$2`);
}
