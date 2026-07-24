import type { Locale } from "@/config/site";
import { newsPlatformTimeline } from "@/data/news-page-content";
import { formatDate } from "@/lib/utils";
import { FadeIn } from "@/components/common/fade-in";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsTimelineProps = {
  locale: Locale;
  dictionary: { news: unknown };
};

export function NewsTimeline({ locale, dictionary }: NewsTimelineProps) {
  const t = asNewsCopy(dictionary.news);

  return (
    <section className="space-y-5 sm:space-y-6">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {t.timelineEyebrow ??
            (locale === "zh" ? "更新轨迹" : "Platform timeline")}
        </p>
        <h2 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-2xl">
          {t.timelineTitle ??
            (locale === "zh" ? "平台时间线" : "Latest platform updates")}
        </h2>
      </div>
      <ol className="relative space-y-0 border-l border-primary/30 pl-5 sm:pl-8">
        {newsPlatformTimeline.map((entry, index) => (
          <li key={entry.id} className="relative pb-6 last:pb-0 sm:pb-8">
            <span
              className="absolute -left-[1.4rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary/50 bg-[#120808] sm:-left-[2.15rem] sm:h-5 sm:w-5"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(229,9,20,0.8)]" />
            </span>
            <FadeIn delay={index * 0.05}>
              <article className="rounded-[16px] border border-border/70 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-3.5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/30 sm:rounded-[20px] sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground sm:text-xs">
                  <span className="font-semibold text-primary">
                    {entry.month[locale]}
                  </span>
                  <span>·</span>
                  <span>{formatDate(entry.date, locale)}</span>
                  <span>·</span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-foreground/80">
                    {entry.version}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-foreground sm:text-lg">
                  {entry.title[locale]}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                  {entry.body[locale]}
                </p>
              </article>
            </FadeIn>
          </li>
        ))}
      </ol>
    </section>
  );
}
