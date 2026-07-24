import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  collectionPageSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/schema";
import { getRealGameCountByProvider } from "@/data/games";
import { providers } from "@/data/providers";
import { JsonLd } from "@/components/common/json-ld";
import { Container } from "@/components/common/container";
import { ProvidersHero } from "@/components/providers/providers-hero";
import { ProvidersPlatformStats } from "@/components/providers/providers-platform-stats";
import { ProvidersLobby } from "@/components/providers/providers-lobby";
import { ProvidersTrust } from "@/components/providers/providers-trust";
import { ProvidersSeo } from "@/components/providers/providers-seo";
import { ProvidersFinalCta } from "@/components/providers/providers-final-cta";
import { ProvidersRelated } from "@/components/providers/providers-related";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const keywords =
    locale === "zh"
      ? [
          "TPOWER线上博彩",
          "TPOWER官方游戏平台",
          "官方合作游戏厂商",
          "PG电子",
          "Pragmatic Play",
          "Evolution",
          "JILI",
          "真人视讯",
          "老虎机",
          "体育博彩",
          "捕鱼游戏",
        ]
      : [
          "TPOWER Online Casino",
          "TPOWER providers",
          "Malaysia Online Casino",
          "Official Game Providers",
          "PG Soft",
          "Pragmatic Play",
          "Evolution",
          "JILI",
          "slots",
          "live casino",
          "sports betting",
          "fishing games",
        ];

  return buildMetadata({
    locale,
    title: dictionary.providers.metaTitle,
    description: dictionary.providers.metaDescription,
    path: "/providers",
    image: "/images/cta/tpower-lobby-cta.webp",
    imageAlt: dictionary.providers.heroImageAlt,
    keywords,
  });
}

export default async function ProvidersPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const providerGameCounts = Object.fromEntries(
    providers.map((provider) => [
      provider.slug,
      getRealGameCountByProvider(provider.slug),
    ]),
  );
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.providers.heroH1,
      href: localePath(locale, "/providers"),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: dictionary.providers.heroH1,
            description: dictionary.providers.metaDescription,
            path: "/providers",
          }),
          collectionPageSchema({
            name: dictionary.providers.heroH1,
            description: dictionary.providers.metaDescription,
            url: localePath(locale, "/providers"),
          }),
        ]}
      />

      <ProvidersHero
        locale={locale}
        dictionary={dictionary}
        breadcrumbs={breadcrumbs}
        providerCount={providers.length}
      />

      <section className="section-y pt-10 md:pt-14">
        <Container>
          <ProvidersPlatformStats dictionary={dictionary} />
        </Container>
      </section>

      <section className="section-y pt-0" aria-labelledby="providers-directory-heading">
        <Container>
          <div className="mb-8 max-w-2xl">
            <h2
              id="providers-directory-heading"
              className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {dictionary.providers.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {dictionary.providers.subtitle}
            </p>
          </div>
          <ProvidersLobby
            locale={locale}
            dictionary={dictionary}
            providers={providers}
            gameCounts={providerGameCounts}
          />
        </Container>
      </section>

      <ProvidersTrust dictionary={dictionary} />
      <ProvidersSeo locale={locale} dictionary={dictionary} />
      <ProvidersFinalCta locale={locale} dictionary={dictionary} />
      <ProvidersRelated locale={locale} dictionary={dictionary} />
    </>
  );
}
