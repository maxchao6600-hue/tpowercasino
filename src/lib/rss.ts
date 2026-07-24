import { siteConfig, type Locale } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export type RssItem = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  author?: string;
};

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildRssFeed(input: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  items: RssItem[];
}): string {
  const channelUrl = absoluteUrl(`/${input.locale}${input.path}`);
  const itemsXml = input.items
    .map((item) => {
      const itemUrl = absoluteUrl(item.url);
      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${itemUrl}</link>
      <guid isPermaLink="true">${itemUrl}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(item.publishedAt).toUTCString()}</pubDate>
      ${item.author ? `<author>${escapeXml(item.author)}</author>` : ""}
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(input.title)}</title>
    <link>${channelUrl}</link>
    <description>${escapeXml(input.description)}</description>
    <language>${input.locale === "zh" ? "zh-cn" : "en-my"}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>${escapeXml(siteConfig.name)}</generator>
    ${itemsXml}
  </channel>
</rss>`;
}
