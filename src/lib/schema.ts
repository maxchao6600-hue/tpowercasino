import { siteConfig, type Locale } from "@/config/site";
import type { JsonLdObject } from "@/components/common/json-ld";
import { absoluteUrl } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types";

export function organizationSchema(locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: [
      "TPOWER",
      "TPOWER Online Casino",
      "TPOWER Casino Malaysia",
    ],
    url: siteConfig.url,
    logo: absoluteUrl("/logo/tpower-logo.png"),
    description: siteConfig.description[locale],
    email: siteConfig.supportEmail,
    telephone: siteConfig.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.supportEmail,
      telephone: siteConfig.phone,
      areaServed: "MY",
      availableLanguage: ["English", "Chinese"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    sameAs: Object.values(siteConfig.social),
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
  };
}

export function websiteSchema(locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description[locale],
    inLanguage: locale === "zh" ? "zh-CN" : "en-MY",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function webPageSchema(input: {
  locale: Locale;
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(
      input.path.startsWith(`/${input.locale}`)
        ? input.path
        : `/${input.locale}${input.path === "/" ? "" : input.path}`,
    ),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: input.locale === "zh" ? "zh-CN" : "en-MY",
  };
}

export function aboutPageSchema(input: {
  locale: Locale;
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    ...webPageSchema(input),
    "@type": "AboutPage",
  };
}

export function contactPageSchema(input: {
  locale: Locale;
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    ...webPageSchema(input),
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      email: siteConfig.supportEmail,
      telephone: siteConfig.phone,
      url: siteConfig.url,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.supportEmail,
        telephone: siteConfig.phone,
        areaServed: "MY",
        availableLanguage: ["English", "Chinese"],
      },
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  type?: "Article" | "NewsArticle";
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "Article",
    headline: input.title,
    description: input.description,
    image: absoluteUrl(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo/tpower-logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(input.url),
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function softwareApplicationSchema(locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TPOWER App",
    operatingSystem: "Android 8.0+, iOS 14.0+",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Online Casino",
    softwareVersion: "3.2.1",
    fileSize: "48.6MB",
    downloadUrl: absoluteUrl(`/${locale}/apk`),
    installUrl: absoluteUrl(`/${locale}/download`),
    description:
      locale === "zh"
        ? "TPOWER线上博彩官方移动应用，支持 Android 与 iOS，提供安全登录、本地支付与完整游戏大厅。"
        : "Official TPOWER mobile app for Android and iOS with secure login, local Malaysia payments, and the full casino lobby.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MYR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1280",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image ? { image: absoluteUrl(step.image) } : {}),
    })),
  };
}

export function reviewSchemaList(
  reviews: Array<{
    author: string;
    reviewBody: string;
    ratingValue: number;
  }>,
): JsonLdObject[] {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.ratingValue),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "TPOWER App",
    },
  }));
}

export function offerSchema(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  validThrough: string;
  category: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    image: absoluteUrl(input.image),
    category: input.category,
    availability: "https://schema.org/InStock",
    validThrough: input.validThrough,
    priceCurrency: "MYR",
    seller: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function offerItemListSchema(
  items: Array<{
    name: string;
    description: string;
    url: string;
    image: string;
    validThrough: string;
    category: string;
  }>,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.url),
        image: absoluteUrl(item.image),
        category: item.category,
        availability: "https://schema.org/InStock",
        validThrough: item.validThrough,
        priceCurrency: "MYR",
        seller: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    })),
  };
}

export function gameSchema(input: {
  locale: Locale;
  name: string;
  description: string;
  image: string;
  url: string;
  providerName: string;
  category: string;
  rtp?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Game",
    name: input.name,
    description: input.description,
    image: absoluteUrl(input.image),
    url: absoluteUrl(input.url),
    genre: input.category,
    gamePlatform: ["Desktop", "Mobile", "Android", "iOS"],
    author: {
      "@type": "Organization",
      name: input.providerName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: input.locale === "zh" ? "zh-CN" : "en-MY",
    ...(input.rtp
      ? {
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "RTP",
              value: input.rtp,
            },
          ],
        }
      : {}),
  };
}
