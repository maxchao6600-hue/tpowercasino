"use client";

import { useEffect } from "react";
import type { Locale } from "@/config/site";
import { getHtmlLang } from "@/config/i18n";

type HtmlLangProps = {
  locale: Locale;
};

/** Keeps the document language in sync with the active locale route. */
export function HtmlLang({ locale }: HtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = getHtmlLang(locale);
  }, [locale]);

  return null;
}
