"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import type { FaqItem } from "@/types";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FaqBrowserProps = {
  locale: Locale;
  dictionary: Dictionary;
  items: FaqItem[];
};

const categories = [
  "all",
  "account",
  "payments",
  "games",
  "security",
  "vip",
  "download",
] as const;

export function FaqBrowser({ locale, dictionary, items }: FaqBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<(typeof categories)[number]>("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesQuery =
        !normalized ||
        item.question[locale].toLowerCase().includes(normalized) ||
        item.answer[locale].toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, items, locale, query]);

  return (
    <div className="space-y-6">
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={dictionary.faqPage.searchPlaceholder}
        aria-label={dictionary.common.search}
      />
      <div className="flex flex-wrap gap-2" role="navigation" aria-label="FAQ categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              category === item
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {dictionary.faqPage.categories[item]}
          </button>
        ))}
      </div>
      <Accordion
        type="single"
        collapsible
        className="rounded-[24px] border border-border bg-card px-6 shadow-[var(--shadow-soft)] md:px-8"
      >
        {filtered.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
            <AccordionContent>{item.answer[locale]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          {locale === "zh" ? "未找到匹配问题。" : "No matching questions found."}
        </p>
      ) : null}
    </div>
  );
}
