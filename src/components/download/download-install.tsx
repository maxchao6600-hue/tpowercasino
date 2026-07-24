import Image from "next/image";
import { ArrowDown } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadInstallSteps } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";

type DownloadInstallProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadInstall({ locale, dictionary }: DownloadInstallProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="install"
      eyebrow={
        t.installEyebrow ?? (locale === "zh" ? "安装步骤" : "Install steps")
      }
      title={
        t.installTitle ??
        (locale === "zh" ? "官方安装五步走" : "Five official install steps")
      }
      description={
        t.installSubtitle ??
        (locale === "zh"
          ? "从下载 APK 到领取欢迎礼，每一步都保持图文并排。"
          : "From APK download to welcome bonus — image and text stay side by side.")
      }
    >
      <ol className="space-y-0">
        {downloadInstallSteps.map((step, index) => (
          <li key={step.id} className="relative">
            <FadeIn delay={index * 0.04}>
              <div className="flex gap-3 sm:gap-5 md:gap-6">
                <div className="flex w-10 shrink-0 flex-col items-center sm:w-12 md:w-14">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-xs font-bold text-primary sm:h-12 sm:w-12 sm:text-sm md:h-14 md:w-14 md:text-base">
                    {index + 1}
                  </span>
                  {index < downloadInstallSteps.length - 1 ? (
                    <ArrowDown
                      className="my-2 h-4 w-4 text-primary/50 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>

                <article className="group mb-5 grid flex-1 grid-cols-[0.85fr_1.15fr] items-center gap-3 overflow-hidden rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-2.5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:mb-6 sm:gap-5 sm:rounded-[24px] sm:p-4 md:mb-8 md:gap-8 md:p-5 lg:gap-10 lg:p-6">
                  <div className="relative overflow-hidden rounded-[14px] border border-white/8 bg-[#0a0a0a] sm:rounded-[18px]">
                    <div className="relative aspect-[5/4] w-full">
                      <Image
                        src={step.image}
                        alt={step.title[locale]}
                        title={step.title[locale]}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 40vw, 38vw"
                        className="object-cover"
                      />
                      <div
                        className="pointer-events-none absolute inset-0"
                        aria-hidden="true"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(7,7,7,0.12) 0%, rgba(7,7,7,0.55) 100%), radial-gradient(ellipse 65% 60% at 50% 30%, rgba(229,9,20,0.16), transparent 62%)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="min-w-0 px-0.5 sm:px-1 md:px-2">
                    <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-lg md:text-xl lg:text-2xl">
                      {step.title[locale]}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-xs md:mt-3 md:text-sm lg:text-[15px]">
                      {step.body[locale]}
                    </p>
                  </div>
                </article>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
