import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadCompatibilityRows } from "@/data/download-page-content";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";
import { cn } from "@/lib/utils";

type DownloadCompatibilityProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadCompatibility({
  locale,
  dictionary,
}: DownloadCompatibilityProps) {
  const t = asDownloadCopy(dictionary.download);

  const headers = [
    locale === "zh" ? "项目" : "Requirement",
    "Android",
    "iPhone",
    locale === "zh" ? "平板" : "Tablet",
    locale === "zh" ? "桌面" : "Desktop",
  ];

  return (
    <Section
      id="compatibility"
      eyebrow={
        t.compatEyebrow ?? (locale === "zh" ? "兼容性" : "Compatibility")
      }
      title={
        t.compatTitle ??
        (locale === "zh" ? "设备与系统要求" : "Device & system requirements")
      }
      description={
        t.compatSubtitle ??
        (locale === "zh"
          ? "内存、存储、网络与系统版本——装前先对照你家的设备。"
          : "RAM, storage, network, and OS — check your household devices before install.")
      }
    >
      <div className="max-w-full w-full overflow-x-auto rounded-[24px] border border-border/80 bg-card/60 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:rounded-[28px]" data-qa-scroll="true">
        <table className="w-full table-fixed border-collapse text-left text-[10px] sm:text-xs md:text-sm">
          <thead>
            <tr className="border-b border-border/80 bg-white/[0.03]">
              {headers.map((header, index) => (
                <th
                  key={header}
                  className={cn(
                    "px-2.5 py-2 font-semibold sm:px-4 sm:py-3 md:px-5 md:py-3.5",
                    index === 0
                      ? "text-muted-foreground"
                      : "text-foreground",
                    index === 1 && "bg-primary/10 text-primary",
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {downloadCompatibilityRows.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  "border-b border-border/60 last:border-b-0",
                  index % 2 === 1 && "bg-white/[0.02]",
                )}
              >
                <th className="px-2.5 py-2 font-semibold text-foreground sm:px-4 sm:py-3 md:px-5 md:py-3.5">
                  {row.label[locale]}
                </th>
                <td className="bg-primary/[0.04] px-2.5 py-2 font-medium text-foreground sm:px-4 sm:py-3 md:px-5 md:py-3.5">
                  {row.android[locale]}
                </td>
                <td className="px-2.5 py-2 text-muted-foreground sm:px-4 sm:py-3 md:px-5 md:py-3.5">
                  {row.iphone[locale]}
                </td>
                <td className="px-2.5 py-2 text-muted-foreground sm:px-4 sm:py-3 md:px-5 md:py-3.5">
                  {row.tablet[locale]}
                </td>
                <td className="px-2.5 py-2 text-muted-foreground sm:px-4 sm:py-3 md:px-5 md:py-3.5">
                  {row.desktop[locale]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
