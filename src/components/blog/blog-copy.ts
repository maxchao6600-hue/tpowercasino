import type { Locale } from "@/config/site";
import type { BlogDifficulty, BlogPost } from "@/types";
import { readingLabel } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function difficultyLabel(
  difficulty: BlogDifficulty,
  locale: Locale,
): string {
  if (locale === "zh") {
    switch (difficulty) {
      case "intermediate":
        return "进阶";
      case "advanced":
        return "进阶深度";
      default:
        return "新手友好";
    }
  }
  switch (difficulty) {
    case "intermediate":
      return "Intermediate";
    case "advanced":
      return "Advanced";
    default:
      return "Beginner";
  }
}

export function guideCta(slug: string, locale: Locale): string {
  const map: Record<string, { en: string; zh: string }> = {
    "tpower-login-guide": { en: "Read Guide →", zh: "阅读指南 →" },
    "how-to-register-tpower": { en: "View Tutorial →", zh: "查看教程 →" },
    "how-to-download-tpower": { en: "Official Guide →", zh: "官方指南 →" },
    "tpower-mobile-app": { en: "Learn More →", zh: "了解更多 →" },
    "how-to-deposit-tpower": { en: "View Walkthrough →", zh: "查看流程 →" },
    "how-to-withdraw-tpower": { en: "Read Guide →", zh: "阅读指南 →" },
    "responsible-play-basics-malaysia": {
      en: "Official Guide →",
      zh: "官方指南 →",
    },
    "malaysia-payment-rails-explained": {
      en: "Learn More →",
      zh: "了解更多 →",
    },
    "how-tpower-selects-game-providers": {
      en: "View Tutorial →",
      zh: "查看教程 →",
    },
    "vip-service-without-noise": {
      en: "View Walkthrough →",
      zh: "查看流程 →",
    },
  };
  return (map[slug] ?? { en: "Read Guide →", zh: "阅读指南 →" })[locale];
}

export function statusBadges(post: BlogPost, locale: Locale) {
  const badges: string[] = [];
  if (post.isNew) badges.push(locale === "zh" ? "NEW" : "NEW");
  if (post.hot) badges.push(locale === "zh" ? "HOT" : "HOT");
  if (post.trending) badges.push(locale === "zh" ? "TRENDING" : "TRENDING");
  badges.push(locale === "zh" ? "UPDATED" : "UPDATED");
  return badges;
}

export function metaLine(post: BlogPost, locale: Locale): string {
  return [
    `${locale === "zh" ? "更新" : "Updated"} ${formatDate(post.updatedAt, locale)}`,
    readingLabel(post.readingMinutes, locale),
    difficultyLabel(post.difficulty, locale),
  ].join(" · ");
}
