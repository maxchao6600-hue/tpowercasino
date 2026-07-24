import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadChangelog } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";
import { cn } from "@/lib/utils";

type DownloadChangelogProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadChangelog({
  locale,
  dictionary,
}: DownloadChangelogProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="changelog"
      eyebrow={
        t.changelogEyebrow ?? (locale === "zh" ? "更新日志" : "Changelog")
      }
      title={
        t.changelogTitle ??
        (locale === "zh" ? "版本历史" : "Version history")
      }
      description={
        t.changelogSubtitle ??
        (locale === "zh"
          ? "公开构建说明，方便你核对更新短信是否属实。"
          : "Published build notes so you can verify update messages.")
      }
    >
      <div className="relative space-y-4 sm:space-y-5">
        <div
          className="pointer-events-none absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent sm:left-[19px]"
          aria-hidden="true"
        />
        {downloadChangelog.map((entry, index) => (
          <FadeIn key={entry.version} delay={index * 0.04}>
            <article
              className={cn(
                "relative grid grid-cols-[40px_1fr] gap-3 sm:grid-cols-[48px_1fr] sm:gap-5",
              )}
            >
              <div className="relative z-[1] flex justify-center pt-5">
                <span
                  className={cn(
                    "h-3 w-3 rounded-full border-2 border-primary bg-[#070707] sm:h-3.5 sm:w-3.5",
                    index === 0 && "bg-primary shadow-[0_0_12px_rgba(229,9,20,0.55)]",
                  )}
                />
              </div>
              <div className="rounded-[20px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 sm:rounded-[24px] sm:p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="text-base font-bold text-foreground sm:text-lg md:text-xl">
                    v{entry.version}
                  </h3>
                  {index === 0 ? (
                    <span className="rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-primary sm:text-[10px]">
                      {locale === "zh" ? "最新" : "Latest"}
                    </span>
                  ) : null}
                  <span className="text-[11px] text-muted-foreground sm:text-xs">
                    {entry.date[locale]}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 sm:mt-4">
                  {entry.notes.map((note) => (
                    <li
                      key={note.en}
                      className="flex gap-2 text-[11px] leading-relaxed text-muted-foreground sm:text-xs md:text-sm"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{note[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
