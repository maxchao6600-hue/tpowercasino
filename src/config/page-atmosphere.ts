/**
 * Default atmosphere hero images per route family.
 * Games-page visual language — full-bleed, blended, never a hard banner.
 */
export const DEFAULT_ATMOSPHERE_IMAGE = "/images/cta/tpower-lobby-cta.webp";

export const pageAtmosphereImages = {
  home: "/images/hero.webp",
  games: "/images/cta/tpower-lobby-cta.webp",
  promotions: "/images/promotions/tpower-promotions-hero.webp",
  vip: "/images/promotions/tpower-vip-rewards.webp",
  download: "/images/cta/tpower-join-cta.webp",
  apk: "/images/cta/tpower-join-cta.webp",
  providers: "/images/cta/tpower-lobby-cta.webp",
  news: "/images/news/tpower-platform-performance-update.webp",
  blog: "/images/news/tpower-platform-performance-update.webp",
  about: "/images/hero.webp",
  contact: "/images/cta/tpower-join-cta.webp",
  "responsible-gaming": "/images/news/tpower-live-casino-tables.webp",
  "payment-methods": "/images/payments/heroes/payment-methods.webp",
  payments: "/images/payments/heroes/payment-methods.webp",
  "deposit-guide": "/images/payments/heroes/deposit-guide.webp",
  "withdrawal-guide": "/images/payments/heroes/withdrawal-guide.webp",
  "fpx-deposit": "/images/payments/heroes/fpx-deposit.webp",
  "duitnow-deposit": "/images/payments/heroes/duitnow-deposit.webp",
  "touch-n-go": "/images/payments/heroes/touch-n-go.webp",
  grabpay: "/images/payments/heroes/grabpay.webp",
  "online-banking": "/images/payments/heroes/online-banking.webp",
  "instant-deposit": "/images/payments/heroes/instant-deposit.webp",
  "fast-withdrawal": "/images/payments/heroes/fast-withdrawal.webp",
  "payment-security": "/images/payments/heroes/payment-security.webp",
  "deposit-withdrawal-faq":
    "/images/payments/heroes/deposit-withdrawal-faq.webp",
  affiliate: "/images/promotions/tpower-weekly-reload.webp",
  faq: "/images/cta/tpower-lobby-cta.webp",
  help: "/images/cta/tpower-lobby-cta.webp",
  security: "/images/news/tpower-platform-performance-update.webp",
  "fair-gaming": "/images/news/tpower-live-casino-tables.webp",
  "why-choose-tpower": "/images/hero.webp",
  "privacy-and-data-protection": "/images/news/tpower-platform-performance-update.webp",
  "aml-kyc": "/images/news/tpower-platform-performance-update.webp",
  "customer-commitment": "/images/cta/tpower-join-cta.webp",
  "editorial-policy": "/images/news/tpower-platform-performance-update.webp",
  slots: "/images/cta/tpower-lobby-cta.webp",
  "live-casino": "/images/news/tpower-live-casino-tables.webp",
  sports: "/images/hero.webp",
  fishing: "/images/cta/tpower-lobby-cta.webp",
  lottery: "/images/cta/tpower-lobby-cta.webp",
  crash: "/images/cta/tpower-lobby-cta.webp",
  poker: "/images/cta/tpower-lobby-cta.webp",
  arcade: "/images/cta/tpower-lobby-cta.webp",
  login: "/images/cta/tpower-join-cta.webp",
  register: "/images/cta/tpower-join-cta.webp",
} as const;

export type AtmospherePageKey = keyof typeof pageAtmosphereImages;

export function atmosphereImageFor(
  key: AtmospherePageKey | string | undefined,
): string {
  if (!key) return DEFAULT_ATMOSPHERE_IMAGE;
  if (key in pageAtmosphereImages) {
    return pageAtmosphereImages[key as AtmospherePageKey];
  }
  return DEFAULT_ATMOSPHERE_IMAGE;
}
