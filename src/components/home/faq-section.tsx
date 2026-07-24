"use client";

import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { faqItems } from "@/data/faq";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/common/json-ld";
import { Section } from "@/components/common/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  limit?: number;
  withSchema?: boolean;
};

export function FaqSection({
  locale,
  dictionary,
  limit = 6,
  withSchema = true,
}: FaqSectionProps) {
  const items = faqItems.slice(0, limit);

  return (
    <Section
      title={dictionary.home.faqTitle}
      description={dictionary.home.faqSubtitle}
    >
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
      <Accordion
        type="single"
        collapsible
        defaultValue={undefined}
        className="rounded-[24px] border border-border bg-card px-6 shadow-[var(--shadow-soft)] md:px-8"
      >
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
            <AccordionContent>{item.answer[locale]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
