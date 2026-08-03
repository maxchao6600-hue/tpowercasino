"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadWhyFeatures } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";
import { downloadIconMap } from "@/components/download/download-icons";
import { cn } from "@/lib/utils";

type DownloadWhyProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadWhy({ locale, dictionary }: DownloadWhyProps) {
  const t = asDownloadCopy(dictionary.download);
  const learnMore =
    t.learnMore ?? dictionary.common.learnMore ?? (locale === "zh" ? "了解更多" : "Learn More");
  const showLess = t.showLess ?? (locale === "zh" ? "收起" : "Show Less");

  return (
    <Section
      id="why"
      eyebrow={t.whyEyebrow ?? (locale === "zh" ? "为何下载" : "Why download")}
      title={
        t.whyTitle ??
        (locale === "zh" ? "为什么选择 TPOWER官方APP" : "Why choose the TPOWER App")
      }
      description={
        t.whySubtitle ??
        (locale === "zh"
          ? "八大理由：官方安装、本地支付、完整大厅与安全习惯一次看清。"
          : "Eight reasons: official install, local payments, full lobby, and safer habits.")
      }
    >
      <div className="df-row-4">
      <div className="df-grid-4">
          {downloadWhyFeatures.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.03} className="h-full">
              <WhyCard
                locale={locale}
                item={item}
                learnMoreLabel={learnMore}
                showLessLabel={showLess}
              />
            </FadeIn>
          ))}
      </div>
      </div>
    </Section>
  );
}

type WhyCardProps = {
  locale: Locale;
  item: (typeof downloadWhyFeatures)[number];
  learnMoreLabel: string;
  showLessLabel: string;
};

function WhyCard({
  locale,
  item,
  learnMoreLabel,
  showLessLabel,
}: WhyCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const Icon = downloadIconMap[item.icon];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border/80 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a0a0c] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
        <Image
          src={item.image}
          alt={item.title[locale]}
          title={item.title[locale]}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 45vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(7,7,7,0.55) 100%)",
          }}
        />
        <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-xl bg-black/55 text-primary backdrop-blur-sm sm:h-9 sm:w-9">
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-4 md:p-5">
        <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base md:text-lg">
          {item.title[locale]}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-xs md:text-[13px]">
          {item.summary[locale]}
        </p>

        <ul className="mt-3 space-y-1.5">
          {item.benefits.map((benefit) => (
            <li
              key={benefit.en}
              className="flex gap-2 text-[10px] leading-snug text-white/75 sm:text-[11px] md:text-xs"
            >
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{benefit[locale]}</span>
            </li>
          ))}
        </ul>

        <div
          id={panelId}
          className={cn(
            "mt-3 overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
            open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
          )}
          aria-hidden={!open}
        >
          <p className="border-t border-white/10 pt-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
            {item.body[locale]}
          </p>
        </div>

        {!open ? <p className="sr-only">{item.body[locale]}</p> : null}

        <button
          type="button"
          className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[11px] font-semibold text-primary transition-colors hover:text-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] sm:text-xs"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? showLessLabel : learnMoreLabel}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
