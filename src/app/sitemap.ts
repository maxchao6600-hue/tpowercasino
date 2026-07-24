import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/config/i18n";
import { blogPosts } from "@/data/blog";
import { promotions } from "@/data/promotions";
import { newsItems } from "@/data/news";
import { providers } from "@/data/providers";
import { games } from "@/data/games";
import { getGameDetailPath } from "@/lib/game-paths";
import { categorySeoContent } from "@/data/category-seo";

/** Stable stamp for non-dated static marketing URLs (avoids fake daily freshness). */
const STATIC_LAST_MODIFIED = new Date("2026-07-01T00:00:00.000Z");

const staticPaths: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "/download", priority: 0.8 },
  { path: "/apk", priority: 0.7 },
  { path: "/promotions", priority: 0.8 },
  { path: "/games", priority: 0.8 },
  { path: "/providers", priority: 0.75 },
  { path: "/live-casino", priority: 0.75 },
  { path: "/slots", priority: 0.75 },
  { path: "/sports", priority: 0.7 },
  { path: "/fishing", priority: 0.7 },
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
  { path: "/vip", priority: 0.75 },
  { path: "/affiliate", priority: 0.6 },
  { path: "/about", priority: 0.7 },
  { path: "/why-choose-tpower", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/blog", priority: 0.75 },
  { path: "/news", priority: 0.75 },
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

function priorityForPath(path: string): number {
  if (path === "") return 1;
  if (path === "/blog" || path === "/news" || path === "/promotions") return 0.75;
  if (path === "/download") return 0.8;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const item of staticPaths) {
      entries.push({
        url: `${siteConfig.url}/${locale}${item.path}`,
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: item.path === "" ? "weekly" : "monthly",
        priority: item.priority,
      });
    }

    for (const category of categorySeoContent) {
      if (!staticPaths.some((item) => item.path === category.path)) {
        entries.push({
          url: `${siteConfig.url}/${locale}${category.path}`,
          lastModified: STATIC_LAST_MODIFIED,
          changeFrequency: "monthly",
          priority: priorityForPath(category.path),
        });
      }
    }

    for (const provider of providers) {
      entries.push({
        url: `${siteConfig.url}/${locale}/providers/${provider.slug}`,
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: `${siteConfig.url}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const item of newsItems) {
      entries.push({
        url: `${siteConfig.url}/${locale}/news/${item.slug}`,
        lastModified: new Date(item.updatedAt ?? item.publishedAt),
        changeFrequency: "weekly",
        priority: 0.65,
      });
    }

    for (const promo of promotions) {
      const stamp = promo.expiresAt
        ? new Date(promo.expiresAt)
        : STATIC_LAST_MODIFIED;
      entries.push({
        url: `${siteConfig.url}/${locale}/promotions/${promo.slug}`,
        lastModified: Number.isNaN(stamp.getTime())
          ? STATIC_LAST_MODIFIED
          : stamp,
        changeFrequency: "weekly",
        priority: 0.65,
      });
    }

    for (const game of games) {
      entries.push({
        url: `${siteConfig.url}/${locale}${getGameDetailPath(game)}`,
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
  }

  return entries;
}
