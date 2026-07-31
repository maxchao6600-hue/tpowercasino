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
        "inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border/80 bg-surface/80 text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground sm:h-9 sm:w-auto sm:gap-1.5 sm:rounded-2xl sm:px-3 sm:text-xs md:h-10 md:gap-2 md:px-4 md:text-sm",
      )}
      aria-label={`${label}: ${nextLocale === "zh" ? "中文" : "English"}`}
      hrefLang={nextLocale === "zh" ? "zh-CN" : "en"}
    >
      <Languages className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" aria-hidden="true" />
      <span className="hidden sm:inline">
        {nextLocale === "zh" ? "中文" : "EN"}
      </span>
    </Link>
  );
}
