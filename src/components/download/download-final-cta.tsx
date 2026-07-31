import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { DownloadQr } from "@/components/common/download-qr";
import { PremiumCta } from "@/components/common/premium-cta";
import { asDownloadCopy } from "@/components/download/download-copy";
import { PhoneMockup } from "@/components/download/phone-mockup";

type DownloadFinalCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export async function DownloadFinalCta({
  locale,
  dictionary,
}: DownloadFinalCtaProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <section className="section-y pt-0 md:pt-2" id="final-cta">
      <Container>
        <PremiumCta
          eyebrow={dictionary.common.brand}
          title={
            t.finalCtaTitle ??
            (locale === "zh"
              ? "立即下载 TPOWER官方APP"
              : "Download the TPOWER App now")
          }
          description={
            t.finalCtaDescription ??
            (locale === "zh"
              ? "走官方路径安装，注册账号，几分钟进入大厅。"
              : "Install via the official path, register, and reach the lobby in minutes.")
          }
          imageSrc="/images/cta/tpower-join-cta.webp"
          imageAlt={
            t.finalCtaImageAlt ??
            (locale === "zh"
              ? "TPOWER官方APP 下载与加入视觉"
              : "TPOWER App download and join artwork")
          }
          beforeActions={
            <div className="mt-3 sm:mt-5">
              <DownloadQr
                label={t.qrLabel}
                href={localePath(locale, "/apk")}
              />
            </div>
          }
          media={
            <PhoneMockup
              alt={
                t.finalCtaImageAlt ??
                (locale === "zh"
                  ? "TPOWER官方APP 手机预览"
                  : "TPOWER App phone preview")
              }
              title={
                t.finalCtaTitle ??
                (locale === "zh"
                  ? "立即下载 TPOWER官方APP"
                  : "Download the TPOWER App now")
              }
            />
          }
          actions={[
            {
              href: localePath(locale, "/register"),
              label: dictionary.nav.register,
            },
            {
              href: localePath(locale, "/apk"),
              label:
                t.finalCtaDownload ??
                t.android ??
                (locale === "zh" ? "下载 APK" : "Download APK"),
              variant: "outline",
            },
          ]}
        />
      </Container>
    </section>
  );
}
