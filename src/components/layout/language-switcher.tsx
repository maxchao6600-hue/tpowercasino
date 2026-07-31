"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath, stripLocaleFromPath } from "@/config/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const barePath = stripLocaleFromPath(pathname);
  const nextLocale: Locale = locale === "en" ? "zh" : "en";
  const href = localePath(nextLocale, barePath);

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-2xl border border-border/80 bg-surface/80 px-2.5 text-xs font-semibold text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground sm:h-10 sm:gap-2 sm:px-4 sm:text-sm",
      )}
      aria-label={`${label}: ${nextLocale === "zh" ? "中文" : "English"}`}
      hrefLang={nextLocale === "zh" ? "zh-CN" : "en"}
    >
      <Languages className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
      <span>{nextLocale === "zh" ? "中文" : "EN"}</span>
    </Link>
  );
}
