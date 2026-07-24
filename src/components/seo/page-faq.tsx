"use client";

import type { Locale } from "@/config/site";
import type { ContentFaq } from "@/types";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/common/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PageFaqProps = {
  locale: Locale;
  title: string;
  items: ContentFaq[];
  withSchema?: boolean;
};

export function PageFaq({
  locale,
  title,
  items,
  withSchema = true,
}: PageFaqProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      {withSchema ? (
        <JsonLd
          data={faqSchema(
            items.map((item) => ({
              question: item.question[locale],
              answer: item.answer[locale],
            })),
          )}
        />
      ) : null}
      <h2 className="h2-display text-foreground">{title}</h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={undefined}
        className="mt-8 rounded-[24px] border border-border bg-card px-6 shadow-[var(--shadow-soft)] md:px-8"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={`${item.question.en}-${index}`}
            value={`faq-${index}`}
          >
            <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
            <AccordionContent>{item.answer[locale]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
