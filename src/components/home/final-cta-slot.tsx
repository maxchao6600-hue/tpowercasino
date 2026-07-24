"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/config/site";
import { stripLocaleFromPath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { FinalCta } from "@/components/home/final-cta";

/** Routes where a conversion band is inappropriate or redundant. */
const HIDDEN_PREFIXES = [
  "/login",
  "/register",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookies",
  "/responsible-gaming",
  "/security",
  "/editorial-policy",
];

type FinalCtaSlotProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function FinalCtaSlot({ locale, dictionary }: FinalCtaSlotProps) {
  const pathname = usePathname() ?? "";
  const path = stripLocaleFromPath(pathname);

  if (HIDDEN_PREFIXES.some((prefix) => path === prefix)) {
    return null;
  }

  return <FinalCta locale={locale} dictionary={dictionary} />;
}
