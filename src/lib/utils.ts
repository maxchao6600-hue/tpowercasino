import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = ""): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tpower.my";
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
