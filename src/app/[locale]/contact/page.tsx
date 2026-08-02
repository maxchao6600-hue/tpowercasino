import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/common/container";
import { SupportCenter } from "@/components/contact/support-center";
import { AuthorityHub } from "@/components/authority/authority-hub";
import { authoritySupportCenter } from "@/data/authority/support-center";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    title: authoritySupportCenter.metaTitle[locale],
    description: authoritySupportCenter.metaDescription[locale],
    path: "/contact",
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <AuthorityHub
      locale={locale}
      dictionary={dictionary}
      content={authoritySupportCenter}
      afterHero={
        <section className="bg-[#070707] py-8 sm:py-10">
          <Container className="min-w-0 max-w-full">
            <SupportCenter
              locale={locale}
              dictionary={dictionary}
              hideFinalCta
            />
          </Container>
        </section>
      }
    />
  );
}
