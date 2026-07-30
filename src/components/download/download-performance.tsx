import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadPerformancePoints } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";
import { downloadIconMap } from "@/components/download/download-icons";

type DownloadPerformanceProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadPerformance({
  locale,
  dictionary,
}: DownloadPerformanceProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="performance"
      eyebrow={
        t.performanceEyebrow ?? (locale === "zh" ? "性能" : "Performance")
      }
      title={
        t.performanceTitle ??
        (locale === "zh" ? "针对手机调校的体验" : "Tuned for real phones")
      }
      description={
        t.performanceSubtitle ??
        (locale === "zh"
          ? "大厅速度、自适应串流、耗电与收银稳定——面向中端机。"
          : "Lobby speed, adaptive streams, battery, and cashier stability — built for mid-range devices.")
      }
    >
      <div className="df-grid-3">
          {downloadPerformancePoints.map((point, index) => {
            const Icon = downloadIconMap[point.icon];
            return (
              <FadeIn key={point.id} delay={index * 0.03} className="h-full">
                <article className="group flex h-full flex-col rounded-[20px] border border-border/80 bg-gradient-to-br from-[#121212] via-[#0e0e0e] to-[#1a0a0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px] sm:p-5 md:p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary sm:h-12 sm:w-12">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-foreground sm:text-base md:text-lg">
                    {point.title[locale]}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:text-xs md:text-[13px]">
                    {point.body[locale]}
                  </p>
                </article>
              </FadeIn>
            );
          })}
      </div>
    </Section>
  );
}
