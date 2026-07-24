"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { vipTestimonials } from "@/data/vip-page-content";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type VipTestimonialsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipTestimonials({ locale, dictionary }: VipTestimonialsProps) {
  const t = dictionary.vip;
  const [index, setIndex] = useState(0);
  const total = vipTestimonials.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 6500);
    return () => window.clearInterval(id);
  }, [total]);

  const active = vipTestimonials[index];

  return (
    <Section
      id="testimonials"
      eyebrow={t.testimonialsEyebrow}
      title={t.testimonialsTitle}
      description={t.testimonialsSubtitle}
      align="center"
    >
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-border/80 bg-gradient-to-br from-[#161616] via-[#0f0f0f] to-[#1a0a0c] p-8 shadow-[var(--shadow-soft)] md:p-10">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(229,9,20,0.18), transparent 60%)",
          }}
        />

        <div className="relative flex justify-center gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star
              key={starIndex}
              className="h-4 w-4 fill-primary text-primary"
            />
          ))}
        </div>

        <blockquote className="relative mt-6 text-center">
          <p className="text-base leading-relaxed text-white/85 md:text-lg">
            “{active.quote[locale]}”
          </p>
          <footer className="mt-6">
            <cite className="not-italic">
              <span className="block text-lg font-bold text-white">
                {active.name}
              </span>
              <span className="mt-1 block text-sm text-white/55">
                {active.role[locale]}
              </span>
            </cite>
          </footer>
        </blockquote>

        <div className="relative mt-8 flex items-center justify-center gap-3">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="border-white/15 bg-transparent text-white hover:bg-white/10"
            aria-label={locale === "zh" ? "上一条评价" : "Previous testimonial"}
            onClick={() => setIndex((current) => (current - 1 + total) % total)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {vipTestimonials.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`${item.name}`}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  dotIndex === index ? "bg-primary" : "bg-white/25",
                )}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="border-white/15 bg-transparent text-white hover:bg-white/10"
            aria-label={locale === "zh" ? "下一条评价" : "Next testimonial"}
            onClick={() => setIndex((current) => (current + 1) % total)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
