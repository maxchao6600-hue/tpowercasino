"use client";

import { useParams } from "next/navigation";
import { isValidLocale } from "@/config/i18n";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/lib/dictionary";

export default function LocaleLoading() {
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : "en";
  const locale: Locale = isValidLocale(raw) ? raw : "en";
  const dictionary = getDictionary(locale);

  return (
    <div
      className="container-page section-y"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="mx-auto max-w-3xl space-y-6 animate-pulse">
        <div className="h-4 w-40 rounded-full bg-muted" />
        <div className="h-12 w-3/4 rounded-2xl bg-muted" />
        <div className="h-6 w-full rounded-2xl bg-muted" />
        <div className="h-6 w-5/6 rounded-2xl bg-muted" />
        <div className="mt-10 h-64 w-full rounded-[24px] bg-muted" />
      </div>
      <span className="sr-only">{dictionary.common.loading}</span>
    </div>
  );
}
