/**
 * Generate public/sitemap.xml as a static asset (Cloudflare edge).
 * Do NOT use Next.js app/sitemap.ts — that reintroduces Worker execution.
 *
 * Usage: node scripts/generate-sitemap.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SITE = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://tpowermycasino.com"
).replace(/\/$/, "");

if (!/^https:\/\/tpowermycasino\.com$/i.test(SITE)) {
  console.warn(
    `[sitemap] Warning: generating with SITE=${SITE} (expected https://tpowermycasino.com)`,
  );
}

const LOCALES = ["en", "zh"];
const STATIC_LASTMOD = "2026-07-01T00:00:00.000Z";

/** Indexable marketing hubs — intentionally excludes login/register (noindex). */
const staticPaths = [
  { path: "", priority: "1", changefreq: "weekly" },
  { path: "/download", priority: "0.9", changefreq: "weekly" },
  { path: "/apk", priority: "0.8", changefreq: "monthly" },
  { path: "/promotions", priority: "0.85", changefreq: "weekly" },
  { path: "/games", priority: "0.85", changefreq: "weekly" },
  { path: "/providers", priority: "0.8", changefreq: "monthly" },
  { path: "/live-casino", priority: "0.8", changefreq: "monthly" },
  { path: "/slots", priority: "0.8", changefreq: "monthly" },
  { path: "/sports", priority: "0.75", changefreq: "monthly" },
  { path: "/fishing", priority: "0.75", changefreq: "monthly" },
  { path: "/lottery", priority: "0.7", changefreq: "monthly" },
  { path: "/poker", priority: "0.65", changefreq: "monthly" },
  { path: "/arcade", priority: "0.65", changefreq: "monthly" },
  { path: "/crash", priority: "0.65", changefreq: "monthly" },
  { path: "/payment-methods", priority: "0.8", changefreq: "monthly" },
  { path: "/deposit-guide", priority: "0.75", changefreq: "monthly" },
  { path: "/withdrawal-guide", priority: "0.75", changefreq: "monthly" },
  { path: "/fpx-deposit", priority: "0.7", changefreq: "monthly" },
  { path: "/duitnow-deposit", priority: "0.7", changefreq: "monthly" },
  { path: "/touch-n-go", priority: "0.7", changefreq: "monthly" },
  { path: "/grabpay", priority: "0.7", changefreq: "monthly" },
  { path: "/online-banking", priority: "0.7", changefreq: "monthly" },
  { path: "/instant-deposit", priority: "0.7", changefreq: "monthly" },
  { path: "/fast-withdrawal", priority: "0.7", changefreq: "monthly" },
  { path: "/payment-security", priority: "0.7", changefreq: "monthly" },
  { path: "/deposit-withdrawal-faq", priority: "0.7", changefreq: "monthly" },
  { path: "/vip", priority: "0.8", changefreq: "monthly" },
  { path: "/affiliate", priority: "0.6", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/why-choose-tpower", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.75", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.75", changefreq: "weekly" },
  { path: "/news", priority: "0.75", changefreq: "weekly" },
  { path: "/responsible-gaming", priority: "0.7", changefreq: "monthly" },
  { path: "/fair-gaming", priority: "0.65", changefreq: "monthly" },
  { path: "/security", priority: "0.65", changefreq: "monthly" },
  { path: "/privacy-and-data-protection", priority: "0.6", changefreq: "monthly" },
  { path: "/aml-kyc", priority: "0.6", changefreq: "monthly" },
  { path: "/customer-commitment", priority: "0.6", changefreq: "monthly" },
  { path: "/editorial-policy", priority: "0.55", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
  { path: "/terms-and-conditions", priority: "0.5", changefreq: "monthly" },
  { path: "/cookies", priority: "0.5", changefreq: "monthly" },
];

function loadTsDataArray(relPath, exportName) {
  const abs = path.join(root, relPath);
  const src = fs.readFileSync(abs, "utf8");
  // Lightweight extractors for slug fields in TS data modules (no TS transpile).
  if (exportName === "providers") {
    const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
    // providers.ts also has catalogue ids; keep unique ordered provider page slugs only
    // by reading objects that include metaTitle (provider pages).
    const blocks = src.split(/{\s*id:\s*"/).slice(1);
    const out = [];
    for (const block of blocks) {
      const slug = block.match(/slug:\s*"([^"]+)"/)?.[1];
      if (slug && block.includes("metaTitle")) out.push({ slug });
    }
    return out.length ? out : [...new Set(slugs)].map((slug) => ({ slug }));
  }
  if (exportName === "blogPosts" || exportName === "newsItems") {
    const items = [];
    const re =
      /slug:\s*"([^"]+)"[\s\S]*?(?:updatedAt|publishedAt):\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(src))) {
      items.push({ slug: m[1], lastmod: m[2] });
    }
    // Fallback: all slugs
    if (!items.length) {
      const slugs = [...src.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map(
        (x) => x[1],
      );
      return slugs.map((slug) => ({ slug, lastmod: STATIC_LASTMOD }));
    }
    return items;
  }
  if (exportName === "promotions") {
    const items = [];
    const chunks = src.split(/{\s*id:\s*"/).slice(1);
    for (const chunk of chunks) {
      const slug = chunk.match(/slug:\s*"([^"]+)"/)?.[1];
      if (!slug) continue;
      const expires = chunk.match(/expiresAt:\s*"([^"]+)"/)?.[1];
      items.push({
        slug,
        lastmod: expires && !Number.isNaN(Date.parse(expires))
          ? new Date(expires).toISOString()
          : STATIC_LASTMOD,
      });
    }
    return items;
  }
  throw new Error(`Unsupported export ${exportName} from ${relPath}`);
}

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function entry(loc, lastmod, changefreq, priority) {
  return `<url><loc>${xmlEscape(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const providers = loadTsDataArray("src/data/providers.ts", "providers");
const blogPosts = loadTsDataArray("src/data/blog.ts", "blogPosts");
const newsItems = loadTsDataArray("src/data/news.ts", "newsItems");
const promotions = loadTsDataArray("src/data/promotions.ts", "promotions");

const lines = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
];

const seen = new Set();

function push(loc, lastmod, changefreq, priority) {
  if (seen.has(loc)) return;
  seen.add(loc);
  lines.push(entry(loc, lastmod, changefreq, priority));
}

for (const locale of LOCALES) {
  for (const item of staticPaths) {
    push(
      `${SITE}/${locale}${item.path}`,
      STATIC_LASTMOD,
      item.changefreq,
      item.priority,
    );
  }

  for (const provider of providers) {
    push(
      `${SITE}/${locale}/providers/${provider.slug}`,
      STATIC_LASTMOD,
      "monthly",
      "0.65",
    );
    // Provider library hubs (not individual game detail URLs).
    push(
      `${SITE}/${locale}/providers/${provider.slug}/games`,
      STATIC_LASTMOD,
      "monthly",
      "0.55",
    );
  }

  for (const post of blogPosts) {
    const lastmod = post.lastmod
      ? new Date(post.lastmod).toISOString()
      : STATIC_LASTMOD;
    push(
      `${SITE}/${locale}/blog/${post.slug}`,
      Number.isNaN(Date.parse(lastmod)) ? STATIC_LASTMOD : lastmod,
      "monthly",
      "0.6",
    );
  }

  for (const item of newsItems) {
    const lastmod = item.lastmod
      ? new Date(item.lastmod).toISOString()
      : STATIC_LASTMOD;
    push(
      `${SITE}/${locale}/news/${item.slug}`,
      Number.isNaN(Date.parse(lastmod)) ? STATIC_LASTMOD : lastmod,
      "weekly",
      "0.65",
    );
  }

  for (const promo of promotions) {
    push(
      `${SITE}/${locale}/promotions/${promo.slug}`,
      promo.lastmod || STATIC_LASTMOD,
      "weekly",
      "0.65",
    );
  }
}

// Intentionally omitted until game-detail indexability policy is approved:
// - /{locale}/games/{provider}/{slug} (~4.7k × 2 locales)
// - /{locale}/login, /{locale}/register (noindex)
// - redirect aliases: help, payments, privacy, terms

lines.push(`</urlset>`, ``);

const outPath = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(
  `[sitemap] Wrote ${seen.size} URLs → ${path.relative(root, outPath)} (site=${SITE})`,
);
