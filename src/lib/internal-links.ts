import type { Dictionary } from "@/lib/dictionary";

const PATH_LABELS: Record<string, (dictionary: Dictionary) => string> = {
  "/": (d) => d.common.home,
  "/login": (d) => d.nav.login,
  "/register": (d) => d.nav.register,
  "/download": (d) => d.nav.download,
  "/apk": (d) => d.apk.title,
  "/promotions": (d) => d.nav.promotions,
  "/providers": (d) => d.providers.title,
  "/games": (d) => d.games.title,
  "/vip": (d) => d.vip.title,
  "/faq": (d) => d.faqPage.title,
  "/blog": (d) => d.blog.title,
  "/news": (d) => d.news.title,
  "/payment-methods": (d) => d.payments.title,
  "/responsible-gaming": (d) => d.responsible.title,
  "/slots": (d) => d.categoryPages.slots.title,
  "/live-casino": (d) => d.categoryPages.live.title,
  "/sports": (d) => d.categoryPages.sports.title,
  "/fishing": (d) => d.categoryPages.fishing.title,
  "/lottery": (d) => d.categoryPages.lottery.title,
  "/poker": (d) => d.categoryPages.poker.title,
  "/arcade": (d) => d.categoryPages.arcade.title,
  "/crash": (d) => d.categoryPages.crash.title,
  "/about": (d) => d.about.metaTitle,
  "/contact": (d) => d.contact.title,
  "/editorial-policy": (d) => d.editorial.title,
};

export function labelForPath(path: string, dictionary: Dictionary): string {
  const resolver = PATH_LABELS[path];
  if (resolver) return resolver(dictionary);
  if (path.startsWith("/providers/")) {
    return path.replace("/providers/", "").replaceAll("-", " ");
  }
  if (path.startsWith("/blog/")) {
    return path.replace("/blog/", "").replaceAll("-", " ");
  }
  return path.replace(/^\//, "").replaceAll("-", " ");
}
