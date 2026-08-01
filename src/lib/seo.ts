import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/config/site";
import { getOgLocale, localePath } from "@/config/i18n";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  locale: Locale;
  /** Unique page title — homepage may be longer for SEO; clamp soft-limits at ~110. */
  title: string;
  /** Unique description — aim for ~140–220 characters. */
  description: string;
  path?: string;
  image?: string;
  /** Distinct OG/Twitter image alt when the share image is article-specific. */
  imageAlt?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

function clampTitle(title: string): string {
  // Allow intentional long SEO titles (SERP may truncate; browser tab keeps full string).
  if (title.length <= 110) return title;
  return `${title.slice(0, 107).trimEnd()}...`;
}

function ensureBrandTitle(title: string): string {
  if (/tpower/i.test(title)) return clampTitle(title);
  return clampTitle(`${title} | TPOWER`);
}

function rssAlternates(locale: Locale, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const isBlogSurface =
    normalized === "/blog" || normalized.startsWith("/blog/");
  const isNewsSurface =
    normalized === "/news" || normalized.startsWith("/news/");

  if (!isBlogSurface && !isNewsSurface) return undefined;

  const feeds = [];
  if (isBlogSurface) {
    feeds.push({
      url: absoluteUrl(`/${locale}/blog/rss.xml`),
      title: "TPOWER Blog RSS",
    });
  }
  if (isNewsSurface) {
    feeds.push({
      url: absoluteUrl(`/${locale}/news/rss.xml`),
      title: "TPOWER News RSS",
    });
  }
  return feeds.length > 0
    ? { "application/rss+xml": feeds }
    : undefined;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
  image = siteConfig.ogImage,
  imageAlt,
  noIndex = false,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: BuildMetadataInput): Metadata {
  const localizedPath = localePath(locale, path);
  const canonical = absoluteUrl(localizedPath);
  // Social crawlers often reject SVG; never emit SVG as the share image.
  const safeImage =
    image.toLowerCase().endsWith(".svg") ? siteConfig.ogImage : image;
  const ogImage = absoluteUrl(safeImage);
  const fullTitle = ensureBrandTitle(title);
  const metaDescription =
    description.length > 220
      ? `${description.slice(0, 217).trimEnd()}...`
      : description;

  const languages = Object.fromEntries(
    siteConfig.locales.map((loc) => [loc, absoluteUrl(localePath(loc, path))]),
  );

  const feedTypes = rssAlternates(locale, path);

  return {
    // Absolute title prevents root layout template from double-appending the brand.
    title: { absolute: fullTitle },
    description: metaDescription,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    authors: (authors ?? [siteConfig.name]).map((name) => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": absoluteUrl(localePath(siteConfig.defaultLocale, path)),
      },
      ...(feedTypes ? { types: feedTypes } : {}),
    },
    openGraph: {
      type,
      locale: getOgLocale(locale),
      url: canonical,
      siteName: siteConfig.name,
      title: fullTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? fullTitle,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: authors ?? [siteConfig.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
