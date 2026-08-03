import Image from "next/image";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { BreadcrumbItem, Game } from "@/types";
import {
  displayGameSpec,
  resolveGameFaqs,
  resolveGameFeatures,
  resolveGameHowToPlay,
} from "@/lib/game-detail-content";
import { getProviderById } from "@/data/providers";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { Container } from "@/components/common/container";
import { PremiumCta } from "@/components/common/premium-cta";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { GameCard } from "@/components/games/game-card";
import { ProviderLogoMark } from "@/components/games/provider-logo-mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/common/site-link";

function categoryHubPath(category: Game["category"]): string {
  switch (category) {
    case "live-casino":
      return "/live-casino";
    case "slots":
    case "sports":
    case "fishing":
    case "lottery":
    case "poker":
    case "arcade":
    case "crash":
      return `/${category}`;
    default:
      return "/games";
  }
}

type GameDetailProps = {
  locale: Locale;
  dictionary: Dictionary;
  game: Game;
  similarGames: Game[];
  breadcrumbs: BreadcrumbItem[];
};

export function GameDetail({
  locale,
  dictionary,
  game,
  similarGames,
  breadcrumbs,
}: GameDetailProps) {
  const t = dictionary.games.detail;
  const provider = getProviderById(game.providerId);
  const providerName = game.providerName || provider?.name || game.providerId;
  const categoryLabel = dictionary.games.categories[game.category];
  const comingSoon = t.comingSoon;
  const features = resolveGameFeatures(game);
  const howToPlay = resolveGameHowToPlay(game);
  const faqs = resolveGameFaqs(game);

  const specs = [
    { label: t.providerLabel, value: providerName },
    { label: t.categoryLabel, value: categoryLabel },
    { label: t.rtpLabel, value: displayGameSpec(game.rtp, comingSoon) },
    {
      label: t.volatilityLabel,
      value: displayGameSpec(game.volatility, comingSoon),
    },
    {
      label: t.minBetLabel,
      value: displayGameSpec(game.minBet, comingSoon),
    },
    {
      label: t.maxBetLabel,
      value: displayGameSpec(game.maxBet, comingSoon),
    },
  ];

  return (
    <>
      <AtmosphereHero
        title={game.name[locale]}
        description={game.description[locale]}
        breadcrumbs={breadcrumbs}
        eyebrow={t.heroEyebrow}
        brand={dictionary.common.brand}
        imageSrc={game.image}
        imageAlt={game.name[locale]}
        overlay="cinematic"
        actions={
          <div className="df-actions">
            <Button asChild size="lg">
              <SiteLink href={localePath(locale, "/register")}>{t.playNow}</SiteLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <SiteLink href={localePath(locale, "/register")}>
                {dictionary.common.ctaRegister}
              </SiteLink>
            </Button>
          </div>
        }
        aside={
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[var(--shadow-lift)] md:max-w-[320px]">
            <Image
              src={game.image}
              alt={game.name[locale]}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 70vw, 320px"
            />
          </div>
        }
      />

      <section className="section-y">
        <Container className="max-w-5xl space-y-14">
          <div className="grid grid-cols-[auto_1fr] items-center gap-6 rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="flex h-[60px] w-[120px] items-center justify-center rounded-2xl border border-border bg-muted/40 px-3">
              <ProviderLogoMark
                name={providerName}
                logo={provider?.logo ?? null}
                variant="card"
                className="h-full w-full [&_img]:h-10 [&_img]:max-h-10 [&_img]:max-w-[100px]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{providerName}</Badge>
              <Badge variant="outline">{categoryLabel}</Badge>
              {game.new ? <Badge variant="outline">{t.newBadge}</Badge> : null}
              {game.featured ? (
                <Badge variant="outline">{t.hotBadge}</Badge>
              ) : null}
            </div>
          </div>

          <article>
            <h2 className="h2-display text-foreground">{t.specsTitle}</h2>
            <dl className="df-grid-3 mt-6">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-[20px] border border-border bg-surface px-5 py-4"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-foreground">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article>
            <h2 className="h2-display text-foreground">{t.descriptionTitle}</h2>
            <p className="mt-5 text-body leading-relaxed text-muted-foreground">
              {game.description[locale]}
            </p>
          </article>

          <article>
            <h2 className="h2-display text-foreground">{t.featuresTitle}</h2>
            <ul className="df-grid-2 mt-6">
              {features.map((feature) => (
                <li
                  key={feature.en}
                  className="rounded-[24px] border border-border bg-surface px-5 py-4 text-sm font-semibold text-foreground"
                >
                  {feature[locale]}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="h2-display text-foreground">{t.howToPlayTitle}</h2>
            <ol className="mt-6 space-y-3">
              {howToPlay.map((step, index) => (
                <li
                  key={step.en}
                  className="flex gap-4 rounded-[24px] border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {step[locale]}
                  </p>
                </li>
              ))}
            </ol>
          </article>

          {similarGames.length > 0 ? (
            <article>
              <h2 className="h2-display text-foreground">{t.similarTitle}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {t.similarSubtitle}
              </p>
              <div className="df-scroll mt-8">
                <div className="grid min-w-[1080px] grid-cols-6 gap-2.5 xl:min-w-0 md:gap-3">
                  {similarGames.map((item, index) => (
                    <GameCard
                      key={item.id}
                      locale={locale}
                      dictionary={dictionary}
                      game={item}
                      priority={index < 4}
                    />
                  ))}
                </div>
              </div>
            </article>
          ) : null}

          <PageFaq locale={locale} title={t.faqTitle} items={faqs} />

          <RelatedLinks
            locale={locale}
            title={t.relatedTitle}
            items={[
              {
                href: "/games",
                label: dictionary.nav.games,
              },
              {
                href: provider
                  ? `/providers/${provider.slug}`
                  : "/providers",
                label: providerName,
              },
              {
                href: categoryHubPath(game.category),
                label: categoryLabel,
              },
              {
                href: "/register",
                label: dictionary.common.ctaRegister,
              },
            ]}
          />

          <PremiumCta
            eyebrow={t.ctaEyebrow}
            title={t.ctaTitle.replace("{game}", game.name[locale])}
            description={t.ctaDescription}
            imageSrc="/images/cta/tpower-join-cta.webp"
            imageAlt={t.ctaImageAlt}
            actions={[
              {
                href: localePath(locale, "/register"),
                label: t.playNow,
              },
              {
                href: localePath(locale, "/register"),
                label: dictionary.common.ctaRegister,
                variant: "outline",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
