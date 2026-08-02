import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import {
  downloadFaqs,
  downloadRelated,
} from "@/data/download-page-content";
import { Container } from "@/components/common/container";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { asDownloadCopy } from "@/components/download/download-copy";
import { DownloadBenefits } from "@/components/download/download-benefits";
import { DownloadChangelog } from "@/components/download/download-changelog";
import { DownloadCompatibility } from "@/components/download/download-compatibility";
import { DownloadFinalCta } from "@/components/download/download-final-cta";
import { DownloadHero } from "@/components/download/download-hero";
import { DownloadInstall } from "@/components/download/download-install";
import { DownloadNews } from "@/components/download/download-news";
import { DownloadOptions } from "@/components/download/download-options";
import { DownloadPerformance } from "@/components/download/download-performance";
import { DownloadReviews } from "@/components/download/download-reviews";
import { DownloadSecurity } from "@/components/download/download-security";
import { DownloadSeoArticle } from "@/components/download/download-seo-article";
import { DownloadStats } from "@/components/download/download-stats";
import { DownloadTroubleshooting } from "@/components/download/download-troubleshooting";
import { DownloadWhy } from "@/components/download/download-why";

type DownloadPageContentProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export async function DownloadPageContent({
  locale,
  dictionary,
}: DownloadPageContentProps) {
  const t = asDownloadCopy(dictionary.download);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.nav.download,
      href: localePath(locale, "/download"),
    },
  ];

  return (
    <>
      <DownloadHero
        locale={locale}
        dictionary={dictionary}
        breadcrumbs={breadcrumbs}
      />
      <DownloadOptions locale={locale} dictionary={dictionary} />
      <DownloadWhy locale={locale} dictionary={dictionary} />
      <DownloadInstall locale={locale} dictionary={dictionary} />
      <DownloadCompatibility locale={locale} dictionary={dictionary} />
      <DownloadSecurity locale={locale} dictionary={dictionary} />
      <DownloadPerformance locale={locale} dictionary={dictionary} />

      <section className="section-y pt-0 md:pt-0">
        <Container>
          <div className="[&>section]:mt-0">
            <PageFaq
              locale={locale}
              title={
                t.faqTitle ??
                (locale === "zh" ? "下载常见问题" : "Download FAQ")
              }
              items={downloadFaqs}
              withSchema={false}
            />
          </div>
        </Container>
      </section>

      <DownloadTroubleshooting locale={locale} dictionary={dictionary} />
      <DownloadBenefits locale={locale} dictionary={dictionary} />
      <DownloadChangelog locale={locale} dictionary={dictionary} />
      <DownloadReviews locale={locale} dictionary={dictionary} />
      <DownloadStats locale={locale} dictionary={dictionary} />

      <section className="section-y pt-0 md:pt-0">
        <Container>
          <RelatedLinks
            locale={locale}
            title={
              t.relatedTitle ??
              dictionary.seo.relatedPages ??
              (locale === "zh" ? "相关页面" : "Related pages")
            }
            items={downloadRelated.map((item) => ({
              href: item.href,
              label: item.title[locale],
              description: item.description[locale],
            }))}
          />
        </Container>
      </section>

      <DownloadNews locale={locale} dictionary={dictionary} />
      <DownloadFinalCta locale={locale} dictionary={dictionary} />
      <DownloadSeoArticle locale={locale} dictionary={dictionary} />
    </>
  );
}
