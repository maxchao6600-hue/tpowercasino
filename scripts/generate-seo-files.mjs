/**
 * Writes lightweight static SEO files into public/ so Cloudflare Workers
 * Static Assets can serve /sitemap.xml and /robots.txt WITHOUT invoking
 * the OpenNext Worker (avoids 1102 + keeps Googlebot on a static path).
 *
 * No games catalogue, image indexes, DB, or network I/O.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const BASE_URL = "https://tpowermycasino.com";
const LOCALES = ["en", "zh"];
const LASTMOD = "2026-07-01T00:00:00.000Z";

/** @type {Array<{ path: string; priority: number; changefreq?: string }>} */
const STATIC_PAGES = [
  { path: "", priority: 1, changefreq: "weekly" },
  { path: "/download", priority: 0.9, changefreq: "weekly" },
  { path: "/apk", priority: 0.8 },
  { path: "/register", priority: 0.85 },
  { path: "/login", priority: 0.7 },
  { path: "/promotions", priority: 0.85, changefreq: "weekly" },
  { path: "/games", priority: 0.85, changefreq: "weekly" },
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
  { path: "/blog", priority: 0.75, changefreq: "weekly" },
  { path: "/news", priority: 0.75, changefreq: "weekly" },
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
];

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
];

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
];

const PROMO_SLUGS = [
  "welcome-package",
  "weekly-reload",
  "cashback-calm",
  "vip-accelerated",
  "merdeka-seasonal",
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry(loc, { priority, changefreq = "monthly" }) {
  return [
    "<url>",
    `<loc>${escapeXml(loc)}</loc>`,
    `<lastmod>${LASTMOD}</lastmod>`,
    `<changefreq>${changefreq}</changefreq>`,
    `<priority>${priority}</priority>`,
    "</url>",
  ].join("");
}

function buildSitemap() {
  /** @type {string[]} */
  const urls = [];

  for (const locale of LOCALES) {
    for (const page of STATIC_PAGES) {
      urls.push(
        urlEntry(`${BASE_URL}/${locale}${page.path}`, {
          priority: page.priority,
          changefreq: page.changefreq ?? "monthly",
        }),
      );
    }

    for (const slug of PROVIDER_SLUGS) {
      urls.push(
        urlEntry(`${BASE_URL}/${locale}/providers/${slug}`, {
          priority: 0.65,
        }),
      );
      urls.push(
        urlEntry(`${BASE_URL}/${locale}/providers/${slug}/games`, {
          priority: 0.6,
          changefreq: "weekly",
        }),
      );
    }

    for (const slug of BLOG_SLUGS) {
      urls.push(
        urlEntry(`${BASE_URL}/${locale}/blog/${slug}`, { priority: 0.6 }),
      );
    }

    for (const slug of NEWS_SLUGS) {
      urls.push(
        urlEntry(`${BASE_URL}/${locale}/news/${slug}`, {
          priority: 0.65,
          changefreq: "weekly",
        }),
      );
    }

    for (const slug of PROMO_SLUGS) {
      urls.push(
        urlEntry(`${BASE_URL}/${locale}/promotions/${slug}`, {
          priority: 0.65,
          changefreq: "weekly",
        }),
      );
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

function buildRobots() {
  return [
    "User-Agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /_next/",
    "Disallow: /cdn-cgi/",
    "Disallow: /*/help",
    "Disallow: /*/payments",
    "Disallow: /*/privacy",
    "Disallow: /*/terms",
    "",
    `Host: ${BASE_URL}`,
    `Sitemap: ${BASE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

mkdirSync(PUBLIC, { recursive: true });
const sitemapPath = path.join(PUBLIC, "sitemap.xml");
const robotsPath = path.join(PUBLIC, "robots.txt");
const sitemap = buildSitemap();
const robots = buildRobots();
writeFileSync(sitemapPath, sitemap, "utf8");
writeFileSync(robotsPath, robots, "utf8");

const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(
  `[seo] wrote ${path.relative(ROOT, sitemapPath)} (${urlCount} urls, ${sitemap.length} bytes)`,
);
console.log(`[seo] wrote ${path.relative(ROOT, robotsPath)}`);
