"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/config/site";
import { stripLocaleFromPath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { ProvidersMarquee } from "@/components/common/providers-marquee";

/** Auth / dense legal flows where a brand marquee is noise. */
const HIDDEN_PREFIXES = ["/login", "/register"];

type ProvidersMarqueeSlotProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProvidersMarqueeSlot({
  locale,
  dictionary,
}: ProvidersMarqueeSlotProps) {
  const pathname = usePathname() ?? "";
  const path = stripLocaleFromPath(pathname);

  if (HIDDEN_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))) {
    return null;
  }

  return <ProvidersMarquee locale={locale} dictionary={dictionary} />;
}
