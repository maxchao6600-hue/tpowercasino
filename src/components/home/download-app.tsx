import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { PremiumCta } from "@/components/common/premium-cta";
import { DownloadQr } from "@/components/common/download-qr";
import { PhoneMockup } from "@/components/download/phone-mockup";

type DownloadAppProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export async function DownloadApp({ locale, dictionary }: DownloadAppProps) {
  const phoneAlt =
    locale === "zh"
      ? "TPOWER官方APP 手机预览"
      : "TPOWER official app phone preview";

  return (
    <section className="section-y">
      <Container>
        <PremiumCta
          eyebrow={dictionary.common.brand}
          title={dictionary.home.downloadTitle}
          description={dictionary.home.downloadSubtitle}
          imageSrc="/images/cta/tpower-join-cta.webp"
          imageAlt={phoneAlt}
          media={<PhoneMockup alt={phoneAlt} title={dictionary.home.downloadTitle} />}
          beforeActions={
            <div className="mt-3 sm:mt-5">
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
