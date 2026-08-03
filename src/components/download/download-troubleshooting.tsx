import { Wrench } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadTroubleshooting } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";

type DownloadTroubleshootingProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadTroubleshooting({
  locale,
  dictionary,
}: DownloadTroubleshootingProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="troubleshooting"
      eyebrow={
        t.troubleEyebrow ?? (locale === "zh" ? "排障" : "Troubleshooting")
      }
      title={
        t.troubleTitle ??
        (locale === "zh" ? "安装卡住时怎么处理" : "When install stalls")
      }
      description={
        t.troubleSubtitle ??
        (locale === "zh"
          ? "常见报错、原因说明与可执行修复步骤。"
          : "Common errors, why they happen, and concrete fixes.")
      }
    >
      <div className="df-row-3">
      <div className="df-grid-3">
          {downloadTroubleshooting.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.03} className="h-full">
              <article className="group flex h-full flex-col rounded-[20px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px] sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Wrench className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-foreground sm:text-base">
                    {item.title[locale]}
                  </h3>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs md:text-[13px]">
                  {item.body[locale]}
                </p>
                <div className="mt-auto border-t border-white/10 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary sm:text-[11px]">
                    {locale === "zh" ? "修复" : "Fix"}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-white/80 sm:text-xs md:text-[13px]">
                    {item.fix[locale]}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
      </div>
      </div>
    </Section>
  );
}
