import {
  OFFICIAL_LOGIN_URL,
  OFFICIAL_REGISTER_URL,
} from "@/config/auth";

/** True when href is an absolute http(s) URL. */
export function isHttpUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

/**
 * Map site `/login` and `/register` paths (with or without locale prefix)
 * to the official live auth destination. Leaves all other hrefs unchanged.
 */
export function resolveAuthHref(href: string): string {
  if (!href || isHttpUrl(href)) return href;

  const pathOnly = href.split(/[?#]/)[0] ?? href;
  const normalized = pathOnly.replace(/\/+$/, "") || "/";
  const match = normalized.match(/^\/(?:(?:en|zh)\/)?(register|login)$/);

  if (!match) return href;
  return match[1] === "login" ? OFFICIAL_LOGIN_URL : OFFICIAL_REGISTER_URL;
}
