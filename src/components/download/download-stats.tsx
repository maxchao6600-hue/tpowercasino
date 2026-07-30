"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadStats } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";

type DownloadStatsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type ParsedStat = {
  prefix: string;
  numeric: number | null;
  decimals: number;
  suffix: string;
  raw: string;
};

function parseStatValue(value: string): ParsedStat {
  const match = value.match(/^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { prefix: "", numeric: null, decimals: 0, suffix: "", raw: value };
  }
  const [, prefix, numberPart, suffix] = match;
  const cleaned = numberPart.replace(/,/g, "");
  const decimals = cleaned.includes(".") ? cleaned.split(".")[1].length : 0;
  const numeric = Number(cleaned);
  if (!Number.isFinite(numeric)) {
    return { prefix: "", numeric: null, decimals: 0, suffix: "", raw: value };
  }
  return { prefix, numeric, decimals, suffix, raw: value };
}

function formatAnimated(parsed: ParsedStat, progress: number): string {
  if (parsed.numeric === null) return parsed.raw;
  const current = parsed.numeric * progress;
  const formatted =
    parsed.decimals > 0
      ? current.toFixed(parsed.decimals)
      : Math.round(current).toLocaleString("en-US");
  return `${parsed.prefix}${formatted}${parsed.suffix}`;
}

export function DownloadStats({ locale, dictionary }: DownloadStatsProps) {
  const t = asDownloadCopy(dictionary.download);
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const ratio = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(eased);
      if (ratio < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <Section
      id="stats"
      eyebrow={t.statsEyebrow ?? (locale === "zh" ? "数据一览" : "At a glance")}
      title={
        t.statsTitle ??
        (locale === "zh" ? "TPOWER App 关键数字" : "TPOWER App key numbers")
      }
      description={
        t.statsSubtitle ??
        (locale === "zh"
          ? "下载量、评分、安装时长与平台覆盖。"
          : "Downloads, ratings, install time, and platform coverage.")
      }
    >
      <div
        ref={ref}
        className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 xl:grid-cols-4 xl:gap-4"
      >
          {downloadStats.map((stat, index) => {
            const parsed = parseStatValue(stat.value);
            const display =
              parsed.numeric === null
                ? stat.value
                : formatAnimated(parsed, progress);
            return (
              <FadeIn key={stat.id} delay={index * 0.03} className="h-full">
                <article className="flex h-full flex-col items-center justify-center rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a0a0c] px-2 py-4 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 sm:rounded-[22px] sm:px-3 sm:py-5 md:py-6">
                  <p className="text-base font-bold tracking-tight text-primary sm:text-lg md:text-xl lg:text-2xl">
                    {display}
                  </p>
                  <p className="mt-1.5 text-[9px] leading-snug text-muted-foreground sm:mt-2 sm:text-[10px] md:text-xs">
                    {stat.label[locale]}
                  </p>
                </article>
              </FadeIn>
            );
          })}
      </div>
    </Section>
  );
}
