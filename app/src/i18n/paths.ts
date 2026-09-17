import type { Locale } from '../config';

/** Build a locale-prefixed path, e.g. p('en', '/shackle-size-calculator/') -> '/en/shackle-size-calculator/' */
export function p(lang: Locale, path: string): string {
  return `/${lang}${path}`;
}

export const TOOL_PATHS = {
  shackle: '/shackle-size-calculator/',
  sling: '/sling-angle-calculator/',
  rope: '/wire-rope-capacity-calculator/',
  crane: '/crane-load-calculator/',
} as const;

export const CHART_PATHS = {
  shackle: '/charts/shackle-size-chart/',
  wire: '/charts/wire-rope-size-chart/',
  sling: '/charts/sling-capacity-chart/',
  swl: '/charts/swl-chart/',
} as const;

export const LEGAL_PATHS = {
  privacy: '/privacy/',
  terms: '/terms/',
  disclaimer: '/disclaimer/',
} as const;
