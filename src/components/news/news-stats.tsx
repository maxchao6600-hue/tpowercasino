import type { Locale } from "@/config/site";
import { newsPlatformStats } from "@/data/news-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { AnimatedCounter } from "@/components/news/animated-counter";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsStatsProps = {
  locale: Locale;
  dictionary: { news: unknown };
};

export function NewsStats({ locale, dictionary }: NewsStatsProps) {
  const t = asNewsCopy(dictionary.news);

  return (
    <section className="overflow-hidden rounded-[22px] border border-border/80 bg-gradient-to-br from-[#141010] via-[#0c0c0c] to-[#120808] p-5 shadow-[var(--shadow-soft)] sm:rounded-[28px] sm:p-8">
      <div className="mb-5 sm:mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {t.statsEyebrow ?? (locale === "zh" ? "平台数据" : "Platform stats")}
        </p>
        <h2 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-2xl">
          {t.statsTitle ??
            (locale === "zh" ? "可信赖的运营规模" : "Trusted platform scale")}
        </h2>
      </div>
      <div className="df-scroll">
        <div className="grid min-w-[720px] grid-cols-5 gap-2 xl:min-w-0 sm:gap-4 md:gap-4">
          {newsPlatformStats.map((stat, index) => (
            <FadeIn key={stat.id} delay={index * 0.04} className="h-full">
              <div className="flex h-full flex-col rounded-[12px] border border-white/8 bg-black/30 px-1.5 py-3 text-center sm:rounded-[20px] sm:px-4 sm:py-6">
                <AnimatedCounter
                  value={stat.value}
                  className="block text-sm font-bold tracking-tight text-primary sm:text-3xl md:text-4xl"
                />
                <p className="mt-1.5 text-[8px] font-medium leading-snug text-muted-foreground sm:mt-2 sm:text-sm">
                  {stat.label[locale]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
