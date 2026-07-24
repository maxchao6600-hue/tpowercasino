import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadSecurityPoints } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";
import { downloadIconMap } from "@/components/download/download-icons";

type DownloadSecurityProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadSecurity({
  locale,
  dictionary,
}: DownloadSecurityProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="security"
      eyebrow={t.securityEyebrow ?? (locale === "zh" ? "安全" : "Security")}
      title={
        t.securityTitle ??
        (locale === "zh" ? "下载与会话安全要点" : "Download & session security")
      }
      description={
        t.securitySubtitle ??
        (locale === "zh"
          ? "官方来源、设备锁屏、拒绝破解包——保护每一次会话。"
          : "Official sources, lock screens, refuse patched packages — protect every session.")
      }
    >
      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-[960px] grid-cols-4 gap-3 sm:gap-4 md:min-w-0 md:gap-5">
          {downloadSecurityPoints.map((point, index) => {
            const Icon = downloadIconMap[point.icon];
            return (
              <FadeIn key={point.id} delay={index * 0.03}>
                <article className="group flex h-full flex-col rounded-[20px] border border-border/80 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a0a0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px] sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary sm:h-11 sm:w-11">
                      <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-primary sm:text-[10px]">
                      {locale === "zh" ? "安全" : "Secure"}
                    </span>
                  </div>
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
      </div>
    </Section>
  );
}
