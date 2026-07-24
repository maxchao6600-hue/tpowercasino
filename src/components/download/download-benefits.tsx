import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadAppBenefits } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";
import { downloadIconMap } from "@/components/download/download-icons";

type DownloadBenefitsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadBenefits({
  locale,
  dictionary,
}: DownloadBenefitsProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="benefits"
      eyebrow={
        t.benefitsEyebrow ?? (locale === "zh" ? "APP 优势" : "App benefits")
      }
      title={
        t.benefitsTitle ??
        (locale === "zh"
          ? "为什么 APP 比手机网页更好用"
          : "Why the app beats mobile web")
      }
      description={
        t.benefitsSubtitle ??
        (locale === "zh"
          ? "一键回大厅、可选通知、独立界面——规则不变，体验更顺。"
          : "One-tap lobby, optional alerts, dedicated chrome — same rules, smoother habit.")
      }
    >
      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-[960px] grid-cols-4 gap-3 sm:gap-4 md:min-w-0 md:gap-5">
          {downloadAppBenefits.map((item, index) => {
            const Icon = downloadIconMap[item.icon];
            return (
              <FadeIn key={item.id} delay={index * 0.03}>
                <article className="group flex h-full flex-col rounded-[20px] border border-border/80 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a0a0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px] sm:p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:text-xs md:text-[13px]">
                    {item.body[locale]}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
