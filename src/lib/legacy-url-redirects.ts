import { locales } from "@/config/i18n";
import type { Locale } from "@/config/site";

/**
 * GSC 404 root cause (2026): React list keys were built as `${href}-${label}` /
 * `${href}-${name}` (breadcrumbs, PremiumCta). Next.js RSC serializes those keys
 * into the Flight payload; crawlers then treat path-shaped keys as real URLs.
 *
 * This module maps those discovered legacy paths (and closely related variants)
 * back to stable official pathnames. Do NOT invent destinations for unrelated 404s.
 */

const OFFICIAL_PAGE_SLUGS = new Set([
  "download",
  "apk",
  "register",
  "login",
  "promotions",
  "games",
  "providers",
  "live-casino",
  "slots",
  "sports",
  "fishing",
  "lottery",
  "poker",
  "arcade",
  "crash",
  "vip",
  "affiliate",
  "about",
  "contact",
  "faq",
  "blog",
  "news",
  "responsible-gaming",
  "fair-gaming",
  "security",
  "editorial-policy",
  "privacy-policy",
  "terms-and-conditions",
  "cookies",
  "payment-methods",
  "deposit-guide",
  "withdrawal-guide",
]);

/** Exact legacy paths Google already discovered → official pathname (no locale). */
const EXACT_LEGACY_REDIRECTS: Record<string, string> = {
  "/$": "/",
  "/zh-首页": "/zh",
  "/en-Home": "/en",
  "/en-home": "/en",
};

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

function looksLikeTitleSuffix(suffix: string): boolean {
  if (!suffix) return false;
  // CJK / fullwidth punctuation / pipes / spaces → page title or CTA label
  if (/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef|\s]/.test(suffix)) {
    return true;
  }
  // English nav/title leftovers: Games, Fishing, Download App, …
  if (/^[A-Z][A-Za-z0-9]+(?:[ -][A-Za-z0-9]+)*$/.test(suffix)) {
    return true;
  }
  return false;
}

/**
 * Returns a locale-prefixed destination pathname when `pathname` is a known
 * legacy bad URL; otherwise null (caller should keep normal routing).
 */
export function resolveLegacyUrlRedirect(pathname: string): string | null {
  const raw = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  if (EXACT_LEGACY_REDIRECTS[raw]) {
    return EXACT_LEGACY_REDIRECTS[raw];
  }

  // /$ after a mistaken locale prefix: /en/$ or /zh/$
  const dollarPrefixed = raw.match(/^\/(en|zh)\/\$$/);
  if (dollarPrefixed) {
    return `/${dollarPrefixed[1]}`;
  }

  // /en/zh-首页 style double-prefix created by old middleware
  const doubleLocaleHome = raw.match(/^\/(en|zh)\/(en|zh)-.+$/);
  if (doubleLocaleHome) {
    return `/${doubleLocaleHome[2].slice(0, 2)}`;
  }

  // /{locale}-{HomeLabel} single-segment (e.g. /zh-首页)
  const localeHome = raw.match(/^\/(en|zh)-.+$/);
  if (localeHome && !raw.slice(1).includes("/")) {
    return `/${localeHome[1]}`;
  }

  // /{locale}/{slug}-{TitleOrLabel}
  const titled = raw.match(/^\/(en|zh)\/([a-z][a-z0-9-]*)-(.+)$/);
  if (titled) {
    const [, locale, slug, suffix] = titled;
    if (
      isLocale(locale) &&
      OFFICIAL_PAGE_SLUGS.has(slug) &&
      looksLikeTitleSuffix(suffix) &&
      // Keep real nested slugs like /blog/how-to-download-tpower intact
      !suffix.includes("/")
    ) {
      return `/${locale}/${slug}`;
    }
  }

  return null;
}
