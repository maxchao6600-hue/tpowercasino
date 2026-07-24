import type { Locale } from "@/config/site";
import { en, type Dictionary } from "@/content/en";
import { zh } from "@/content/zh";

const dictionaries = {
  en,
  zh,
} as const;

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
