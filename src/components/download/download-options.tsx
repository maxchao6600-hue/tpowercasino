import Link from "next/link";
import { Apple, Monitor, Smartphone } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { downloadMeta } from "@/data/download-page-content";
import { DownloadQr } from "@/components/common/download-qr";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { asDownloadCopy } from "@/components/download/download-copy";

type DownloadOptionsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export async function DownloadOptions({
  locale,
  dictionary,
}: DownloadOptionsProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="options"
      eyebrow={
        t.optionsEyebrow ?? (locale === "zh" ? "下载选项" : "Download options")
      }
      title={
        t.optionsTitle ??
        (locale === "zh" ? "选择你的安装方式" : "Choose your install path")
      }
      description={
        t.optionsSubtitle ??
        (locale === "zh"
          ? "Android APK、iOS 指引与桌面扫码，三条官方路径一次看清。"
          : "Android APK, iOS guidance, and desktop QR — three official paths in one row.")
      }
    >
      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-[860px] grid-cols-3 gap-3 sm:gap-5 md:min-w-0 md:gap-6">
          <FadeIn>
            <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-border/80 bg-gradient-to-br from-[#1a0a0c] via-[#121212] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[26px] sm:p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary sm:h-12 sm:w-12">
                  <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                  Android
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg md:text-xl">
                {locale === "zh" ? "Android APK" : "Android APK"}
              </h3>
              <ul className="mt-3 space-y-1.5 text-[11px] text-muted-foreground sm:text-xs md:text-sm">
                <li>
                  {locale === "zh" ? "版本" : "Version"}:{" "}
                  <span className="font-semibold text-foreground">
                    {downloadMeta.version}
                  </span>
                </li>
                <li>
                  {locale === "zh" ? "体积" : "Size"}:{" "}
                  <span className="font-semibold text-foreground">
                    {downloadMeta.apkSize}
                  </span>
                </li>
                <li>
                  {locale === "zh" ? "更新" : "Updated"}:{" "}
                  <span className="font-semibold text-foreground">
                    {downloadMeta.updatedAt[locale]}
                  </span>
                </li>
                <li>
                  {locale === "zh" ? "系统" : "Min OS"}:{" "}
                  <span className="font-semibold text-foreground">
                    {downloadMeta.androidMin}
                  </span>
                </li>
                <li className="break-all">
                  SHA256:{" "}
                  <span className="font-semibold text-foreground">
                    {downloadMeta.sha256}
                  </span>
                </li>
              </ul>
              <div className="mt-auto pt-5">
                <Button asChild className="w-full">
                  <Link href={localePath(locale, "/apk")}>{t.android}</Link>
                </Button>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.04}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-border/80 bg-gradient-to-br from-[#141418] via-[#101014] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[26px] sm:p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white sm:h-12 sm:w-12">
                  <Apple className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                  iOS
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg md:text-xl">
                {locale === "zh" ? "iOS 安装指引" : "iOS install guide"}
              </h3>
              <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs md:text-sm">
                {locale === "zh"
                  ? `支持 ${downloadMeta.iosMin}。按官方步骤完成安装，避免非官方描述文件与陌生链接。`
                  : `Supports ${downloadMeta.iosMin}. Follow the official steps — skip unofficial profiles and stranger links.`}
              </p>
              <div className="mt-auto pt-5">
                <Button asChild variant="secondary" className="w-full">
                  <Link href="#install">{t.ios}</Link>
                </Button>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-border/80 bg-gradient-to-br from-[#121212] via-[#0f0f0f] to-[#1a0a0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[26px] sm:p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary sm:h-12 sm:w-12">
                  <Monitor className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                  Desktop
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg md:text-xl">
                {locale === "zh" ? "桌面扫码下载" : "Scan on desktop"}
              </h3>
              <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs md:text-sm">
                {locale === "zh"
                  ? "用手机扫描官方二维码，直达安装入口。"
                  : "Scan the official QR with your phone to open the install entry."}
              </p>
              <div className="mt-auto pt-4">
                <DownloadQr
                  label={t.qrLabel}
                  href={localePath(locale, "/apk")}
                />
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
