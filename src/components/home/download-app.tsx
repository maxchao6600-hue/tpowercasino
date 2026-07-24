import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { PremiumCta } from "@/components/common/premium-cta";
import { DownloadQr } from "@/components/common/download-qr";

type DownloadAppProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export async function DownloadApp({ locale, dictionary }: DownloadAppProps) {
  return (
    <section className="section-y">
      <Container>
        <PremiumCta
          eyebrow={dictionary.common.brand}
          title={dictionary.home.downloadTitle}
          description={dictionary.home.downloadSubtitle}
          imageSrc="/images/cta/tpower-join-cta.webp"
          imageAlt={
            locale === "zh"
              ? "TPOWER App 下载与欢迎红利视觉"
              : "TPOWER app download and welcome bonus artwork"
          }
          beforeActions={
            <div className="mt-5">
              <DownloadQr
                label={dictionary.download.qrLabel}
                href={localePath(locale, "/download")}
              />
            </div>
          }
          actions={[
            {
              href: localePath(locale, "/apk"),
              label: dictionary.download.android,
            },
            {
              href: localePath(locale, "/download"),
              label: dictionary.download.ios,
              variant: "secondary",
            },
          ]}
        />
      </Container>
    </section>
  );
}
