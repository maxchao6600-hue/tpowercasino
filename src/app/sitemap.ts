import type { MetadataRoute } from "next";

/**
 * Build-time static sitemap — must stay lightweight for Cloudflare Workers.
 * Do NOT import games catalogue, image indexes, or artwork filters here.
 */
export const dynamic = "force-static";

/** Canonical production origin (sitemap + robots). */
const BASE_URL = "https://tpowermycasino.com";

const LOCALES = ["en", "zh"] as const;

/** Stable stamp for static marketing URLs. */
const STATIC_LAST_MODIFIED = new Date("2026-07-01T00:00:00.000Z");

type Entry = {
  path: string;
  priority: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/** Locale-prefixed marketing + hub pages (no per-game URLs). */
const STATIC_PAGES: Entry[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/download", priority: 0.9, changeFrequency: "weekly" },
  { path: "/apk", priority: 0.8 },
  { path: "/register", priority: 0.85, changeFrequency: "monthly" },
  { path: "/login", priority: 0.7, changeFrequency: "monthly" },
  { path: "/promotions", priority: 0.85, changeFrequency: "weekly" },
  { path: "/games", priority: 0.85, changeFrequency: "weekly" },
  { path: "/providers", priority: 0.8 },
  { path: "/live-casino", priority: 0.8 },
  { path: "/slots", priority: 0.8 },
  { path: "/sports", priority: 0.75 },
  { path: "/fishing", priority: 0.75 },
  { path: "/lottery", priority: 0.7 },
  { path: "/poker", priority: 0.65 },
  { path: "/arcade", priority: 0.65 },
  { path: "/crash", priority: 0.65 },
  { path: "/payment-methods", priority: 0.8 },
  { path: "/deposit-guide", priority: 0.75 },
  { path: "/withdrawal-guide", priority: 0.75 },
  { path: "/fpx-deposit", priority: 0.7 },
  { path: "/duitnow-deposit", priority: 0.7 },
  { path: "/touch-n-go", priority: 0.7 },
  { path: "/grabpay", priority: 0.7 },
  { path: "/online-banking", priority: 0.7 },
  { path: "/instant-deposit", priority: 0.7 },
  { path: "/fast-withdrawal", priority: 0.7 },
  { path: "/payment-security", priority: 0.7 },
  { path: "/deposit-withdrawal-faq", priority: 0.7 },
  { path: "/vip", priority: 0.8 },
  { path: "/affiliate", priority: 0.6 },
  { path: "/about", priority: 0.7 },
  { path: "/why-choose-tpower", priority: 0.7 },
  { path: "/contact", priority: 0.75 },
  { path: "/faq", priority: 0.7 },
  { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
  { path: "/news", priority: 0.75, changeFrequency: "weekly" },
  { path: "/responsible-gaming", priority: 0.7 },
  { path: "/fair-gaming", priority: 0.65 },
  { path: "/security", priority: 0.65 },
  { path: "/privacy-and-data-protection", priority: 0.6 },
  { path: "/aml-kyc", priority: 0.6 },
  { path: "/customer-commitment", priority: 0.6 },
  { path: "/editorial-policy", priority: 0.55 },
  { path: "/privacy-policy", priority: 0.5 },
  { path: "/terms-and-conditions", priority: 0.5 },
  { path: "/cookies", priority: 0.5 },
];

/** Inline slugs only — avoids pulling content modules into the Worker bundle. */
const PROVIDER_SLUGS = [
  "pragmatic-play",
  "pg-soft",
  "evolution",
  "jili",
  "jdb",
  "sexy-gaming",
  "dream-gaming",
  "microgaming",
  "playn-go",
  "spribe",
  "spadegaming",
  "habanero",
  "sbo",
] as const;

const BLOG_SLUGS = [
  "tpower-login-guide",
  "how-to-register-tpower",
  "how-to-download-tpower",
  "tpower-mobile-app",
  "how-to-deposit-tpower",
  "how-to-withdraw-tpower",
  "responsible-play-basics-malaysia",
  "malaysia-payment-rails-explained",
  "how-tpower-selects-game-providers",
  "vip-service-without-noise",
] as const;

const NEWS_SLUGS = [
  "platform-performance-update-july-2026",
  "new-live-casino-tables",
  "vip-host-coverage-expanded",
  "duitnow-and-ewallet-tips",
  "welcome-bonus-refresh-july",
  "weekly-reload-how-to-claim",
  "account-security-best-practices",
  "weekend-sports-odds-boost",
  "official-download-checklist-2026",
  "android-apk-safe-install-guide",
  "ios-login-and-web-access-tips",
  "malaysia-online-betting-brief-june",
  "cashback-programme-clarified",
  "vip-rewards-calendar-q3-2026",
  "new-slot-titles-june-lobby",
  "support-desk-hours-extended",
] as const;

const PROMO_SLUGS = [
  "welcome-package",
  "weekly-reload",
  "cashback-calm",
  "vip-accelerated",
  "merdeka-seasonal",
] as const;

function urlFor(locale: string, path: string): string {
  return `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of STATIC_PAGES) {
      entries.push({
        url: urlFor(locale, page.path),
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: page.changeFrequency ?? "monthly",
        priority: page.priority,
      });
    }

    for (const slug of PROVIDER_SLUGS) {
      entries.push({
        url: urlFor(locale, `/providers/${slug}`),
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.65,
      });
      entries.push({
        url: urlFor(locale, `/providers/${slug}/games`),
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }

    for (const slug of BLOG_SLUGS) {
      entries.push({
        url: urlFor(locale, `/blog/${slug}`),
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const slug of NEWS_SLUGS) {
      entries.push({
        url: urlFor(locale, `/news/${slug}`),
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "weekly",
        priority: 0.65,
      });
    }

    for (const slug of PROMO_SLUGS) {
      entries.push({
        url: urlFor(locale, `/promotions/${slug}`),
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "weekly",
        priority: 0.65,
      });
    }
  }

  return entries;
}
