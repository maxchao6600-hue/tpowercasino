import type { Locale } from "@/config/site";
import type { NewsBadge, NewsItem } from "@/types";
import { readingLabel } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export type NewsUiCopy = {
  metaTitle: string;
  metaDescription?: string;
  title: string;
  subtitle: string;
  featuredBadge?: string;
  readStory?: string;
  readMore?: string;
  latestArticles?: string;
  trendingArticles?: string;
  editorsPicks?: string;
  recommended?: string;
  timelineTitle?: string;
  timelineEyebrow?: string;
  statsTitle?: string;
  statsEyebrow?: string;
  newsletterTitle?: string;
  newsletterSubtitle?: string;
  newsletterPlaceholder?: string;
  newsletterCta?: string;
  newsletterNote?: string;
  breakingLabel?: string;
  sidebarLatest?: string;
  sidebarTrending?: string;
  sidebarPopular?: string;
  sidebarUpdates?: string;
  sidebarCategories?: string;
  sidebarSearch?: string;
  sidebarDownload?: string;
  sidebarPromo?: string;
  sidebarVip?: string;
  sidebarStatus?: string;
  importantLinks?: string;
  updatedPrefix?: string;
  byAuthor?: string;
  contents?: string;
  share?: string;
  relatedArticles?: string;
  previousArticle?: string;
  nextArticle?: string;
  progressLabel?: string;
};

export function asNewsCopy(raw: unknown): NewsUiCopy {
  return raw as NewsUiCopy;
}

export function badgeLabel(badge: NewsBadge | undefined, locale: Locale): string {
  if (locale === "zh") {
    switch (badge) {
      case "vip":
        return "VIP 动态";
      case "platform":
        return "平台消息";
      case "trending":
        return "热门";
      case "official":
      default:
        return "官方新闻";
    }
  }
  switch (badge) {
    case "vip":
      return "VIP Update";
    case "platform":
      return "Platform News";
    case "trending":
      return "Trending";
    case "official":
    default:
      return "Official News";
  }
}

export function updatedLabel(date: string, locale: Locale): string {
  const then = new Date(date);
  const now = new Date("2026-07-23T12:00:00+08:00");
  const diffDays = Math.floor(
    (now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (locale === "zh") {
    if (diffDays <= 0) return "今日更新";
    if (diffDays === 1) return "昨日更新";
    if (diffDays < 7) return `${diffDays} 天前更新`;
    return `${formatDate(date, locale)} 更新`;
  }
  if (diffDays <= 0) return "Updated today";
  if (diffDays === 1) return "Updated yesterday";
  if (diffDays < 7) return `Updated ${diffDays} days ago`;
  return `Updated ${formatDate(date, locale)}`;
}

export function articleMetaLine(item: NewsItem, locale: Locale): string {
  return [
    readingLabel(item.readingMinutes, locale),
    updatedLabel(item.updatedAt, locale),
    badgeLabel(item.badge, locale),
  ].join(" · ");
}
