"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";

type ProvidersPlatformStatsProps = {
  dictionary: Dictionary;
};

function parseStatValue(raw: string): {
  prefix: string;
  target: number | null;
  suffix: string;
  display: string;
} {
  const match = raw.match(/^([^0-9]*)([0-9][\d,]*)(.*)$/);
  if (!match) {
    return { prefix: "", target: null, suffix: "", display: raw };
  }
  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/,/g, ""));
  if (Number.isNaN(target)) {
    return { prefix: "", target: null, suffix: "", display: raw };
  }
  return { prefix: prefix ?? "", target, suffix: suffix ?? "", display: raw };
}

function AnimatedValue({
  value,
  visible,
}: {
  value: string;
  visible: boolean;
}) {
  const parsed = parseStatValue(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible || parsed.target === null) return;
    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(parsed.target! * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, parsed.target]);

  if (parsed.target === null) {
    return <>{parsed.display}</>;
  }

  const formatted = current.toLocaleString("en-US");
  return (
    <>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </>
  );
}

export function ProvidersPlatformStats({
  dictionary,
}: ProvidersPlatformStatsProps) {
  const t = dictionary.providers;
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      key: "providers",
      value: t.platformStats.providersValue,
      label: t.platformStats.providersLabel,
      description: t.platformStats.providersDescription,
    },
    {
      key: "games",
      value: t.platformStats.gamesValue,
      label: t.platformStats.gamesLabel,
      description: t.platformStats.gamesDescription,
    },
    {
      key: "access",
      value: t.platformStats.accessValue,
      label: t.platformStats.accessLabel,
      description: t.platformStats.accessDescription,
    },
    {
      key: "plays",
      value: t.platformStats.playsValue,
      label: t.platformStats.playsLabel,
      description: t.platformStats.playsDescription,
    },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden rounded-[28px] border border-border/70 bg-[#0a0a0a]"
      aria-labelledby="providers-platform-stats-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(229,9,20,0.12), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%)",
        }}
      />

      <div className="relative px-5 py-10 md:px-8 md:py-12">
        <div
          className={cn(
            "mx-auto mb-8 max-w-2xl text-center transition-all duration-500 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          )}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            {t.platformStatsEyebrow}
          </p>
          <h2
            id="providers-platform-stats-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            {t.platformStatsTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.platformStatsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={stat.key}
              className={cn(
                "rounded-[18px] border border-border/80 bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-6 transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_36px_-12px_rgba(229,9,20,0.45)]",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{
                transitionDelay: visible ? `${80 + index * 70}ms` : "0ms",
              }}
            >
              <p className="text-[2.75rem] font-bold leading-none tracking-tight text-foreground tabular-nums md:text-[3.25rem]">
                <AnimatedValue value={stat.value} visible={visible} />
              </p>
              <h3 className="mt-4 text-base font-semibold text-foreground md:text-lg">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
