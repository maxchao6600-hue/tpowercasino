import type { Locale } from "@/config/site";
import type { BlogPost, NewsItem } from "@/types";

export type TocItem = {
  id: string;
  text: string;
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractToc(content: string): TocItem[] {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      return { id: slugifyHeading(text), text };
    });
}

export function getRelatedBlogPosts(
  post: BlogPost,
  all: BlogPost[],
  limit = 3,
): BlogPost[] {
  const bySlug = post.relatedSlugs
    .map((slug) => all.find((item) => item.slug === slug))
    .filter((item): item is BlogPost => Boolean(item));

  if (bySlug.length >= limit) return bySlug.slice(0, limit);

  const remainder = all.filter(
    (item) =>
      item.slug !== post.slug &&
      !bySlug.some((related) => related.slug === item.slug) &&
      (item.categoryKey === post.categoryKey ||
        item.tags.some((tag) => post.tags.includes(tag))),
  );

  return [...bySlug, ...remainder].slice(0, limit);
}

export function getRelatedNews(
  item: NewsItem,
  all: NewsItem[],
  limit = 3,
): NewsItem[] {
  const bySlug = item.relatedSlugs
    .map((slug) => all.find((entry) => entry.slug === slug))
    .filter((entry): entry is NewsItem => Boolean(entry));

  const remainder = all.filter(
    (entry) =>
      entry.slug !== item.slug &&
      !bySlug.some((related) => related.slug === entry.slug) &&
      entry.categoryKey === item.categoryKey,
  );

  const filler = all.filter(
    (entry) =>
      entry.slug !== item.slug &&
      !bySlug.some((related) => related.slug === entry.slug) &&
      !remainder.some((related) => related.slug === entry.slug),
  );

  return [...bySlug, ...remainder, ...filler].slice(0, limit);
}

export function readingLabel(minutes: number, locale: Locale): string {
  return locale === "zh" ? `${minutes} 分钟阅读` : `${minutes} min read`;
}
