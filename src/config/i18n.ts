import { siteConfig, type Locale } from "@/config/site";

export const locales = siteConfig.locales;
export const defaultLocale = siteConfig.defaultLocale;

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleLabel(locale: Locale): string {
  return locale === "zh" ? "中文" : "English";
}

export function getHtmlLang(locale: Locale): string {
  return locale === "zh" ? "zh-CN" : "en";
}

export function getOgLocale(locale: Locale): string {
  return locale === "zh" ? "zh_CN" : "en_MY";
}

/** Build a locale-aware path. Home returns `/en` or `/zh`. */
export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/" || normalized === "") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (isValidLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}
