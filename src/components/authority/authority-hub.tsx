import type { ReactNode } from "react";
import {
  BadgeCheck,
  Building2,
  Eye,
  FileText,
  Globe2,
  HeartHandshake,
  Lock,
  Scale,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { AuthorityPageContent } from "@/data/authority/types";
import {
  aboutPageSchema,
  breadcrumbSchema,
  contactPageSchema,
  faqSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { AtmosphereMedia } from "@/components/common/atmosphere-media";
import { PremiumCta } from "@/components/common/premium-cta";
import { RelatedLinks } from "@/components/seo/related-links";
import { PageFaq } from "@/components/seo/page-faq";
import { MarkdownArticle } from "@/components/seo/markdown-article";

const iconMap = {
  shield: ShieldCheck,
  lock: Lock,
  scale: Scale,
  heart: HeartHandshake,
  users: Users,
  eye: Eye,
  file: FileText,
  badge: BadgeCheck,
  zap: Zap,
  globe: Globe2,
  check: BadgeCheck,
  building: Building2,
} as const;

type AuthorityHubProps = {
  locale: Locale;
  dictionary: Dictionary;
  content: AuthorityPageContent;
  /** Optional node rendered between hero and intro (e.g. SupportCenter) */
  afterHero?: ReactNode;
};

export function AuthorityHub({
  locale,
  dictionary,
  content,
  afterHero,
}: AuthorityHubProps) {
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: content.metaTitle[locale],
      href: localePath(locale, content.path),
    },
  ];

  const pageSchema =
    content.schemaType === "AboutPage"
      ? aboutPageSchema({
          locale,
          name: content.metaTitle[locale],
          description: content.metaDescription[locale],
          path: content.path,
        })
      : content.schemaType === "ContactPage"
        ? contactPageSchema({
            locale,
            name: content.metaTitle[locale],
            description: content.metaDescription[locale],
            path: content.path,
          })
        : webPageSchema({
            locale,
            name: content.metaTitle[locale],
            description: content.metaDescription[locale],
            path: content.path,
          });

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          pageSchema,
          faqSchema(
            content.faqs.map((item) => ({
              question: item.question[locale],
              answer: item.answer[locale],
            })),
          ),
        ]}
      />
      <PageHeader
        title={content.heroTitle[locale]}
        description={content.heroSubtitle[locale]}
        breadcrumbs={breadcrumbs}
        atmosphere={content.atmosphere}
        brand={dictionary.common.brand}
      />

      {afterHero}

      <section className="bg-[#070707] py-10 sm:py-12 md:py-16">
        <Container className="space-y-14 sm:space-y-16 md:space-y-20">
          {/* Introduction */}
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
                {locale === "zh" ? "官方说明" : "Official brief"}
              </p>
              <div className="mt-4 prose-tpower">
                <MarkdownArticle
                  content={content.introduction[locale]}
                  locale={locale}
                />
              </div>
            </div>
          </FadeIn>

          {/* Statistics */}
          <div className="df-grid-4">
            {content.stats.map((stat, index) => (
              <FadeIn key={stat.label.en} delay={index * 0.04}>
                <div className="rounded-[18px] border border-border/80 bg-gradient-to-br from-[#161010] to-[#0c0c0c] p-4 text-center shadow-[var(--shadow-soft)] sm:rounded-[22px] sm:p-6">
                  <p className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                    {stat.value[locale]}
                  </p>
                  <p className="mt-2 text-[11px] text-muted-foreground sm:text-sm">
                    {stat.label[locale]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Features */}
          <div>
            <h2 className="text-center text-lg font-bold text-foreground sm:text-2xl md:text-3xl">
              {content.featuresTitle[locale]}
            </h2>
            <div className="df-grid-3 mt-6 sm:mt-8">
              {content.features.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <FadeIn key={feature.title.en} delay={index * 0.03}>
                    <article className="flex h-full flex-col rounded-[18px] border border-border/80 bg-[#101010] p-4 shadow-[var(--shadow-soft)] sm:rounded-[22px] sm:p-6">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                        {feature.title[locale]}
                      </h3>
                      <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                        {feature.body[locale]}
                      </p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Long-form sections with illustrations */}
          {content.sections.map((section, index) => (
            <FadeIn key={section.title.en} delay={0.02}>
              <div
                className={
                  section.imageSrc
                    ? "grid grid-cols-[1.15fr_0.85fr] items-center gap-4 sm:gap-8 lg:gap-12"
                    : ""
                }
              >
                <div
                  className={
                    section.reverse && section.imageSrc
                      ? "order-2 min-w-0"
                      : "min-w-0"
                  }
                >
                  <h2 className="text-lg font-bold text-foreground sm:text-2xl">
                    {section.title[locale]}
                  </h2>
                  <div className="mt-4 prose-tpower">
                    <MarkdownArticle
                      content={section.body[locale]}
                      locale={locale}
                    />
                  </div>
                </div>
                {section.imageSrc ? (
                  <div
                    className={
                      section.reverse ? "order-1 min-w-0" : "min-w-0"
                    }
                  >
                    <AtmosphereMedia
                      src={section.imageSrc}
                      alt={
                        section.imageAlt?.[locale] ?? section.title[locale]
                      }
                      title={section.title[locale]}
                      aspectClassName="aspect-[4/3]"
                      sizes="(max-width: 768px) 42vw, 40vw"
                    />
                  </div>
                ) : null}
              </div>
              {index < content.sections.length - 1 ? (
                <div
                  className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  aria-hidden="true"
                />
              ) : null}
            </FadeIn>
          ))}

          {/* Timeline */}
          <div>
            <h2 className="text-lg font-bold text-foreground sm:text-2xl md:text-3xl">
              {content.timelineTitle[locale]}
            </h2>
            <ol className="df-grid-4 mt-6">
              {content.timeline.map((step, index) => (
                <li key={step.title.en}>
                  <div className="h-full rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] sm:rounded-[22px] sm:p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-foreground sm:text-base">
                      {step.title[locale]}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                      {step.body[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Trust */}
          <div>
            <h2 className="text-lg font-bold text-foreground sm:text-2xl">
              {content.trustTitle[locale]}
            </h2>
            <div className="df-grid-3 mt-6">
              {content.trustItems.map((item) => (
                <article
                  key={item.title.en}
                  className="rounded-[18px] border border-border/80 bg-[#101010] p-4 sm:rounded-[22px] sm:p-5"
                >
                  <h3 className="text-sm font-bold text-foreground sm:text-base">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                    {item.body[locale]}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <PageFaq
            locale={locale}
            title={content.faqTitle[locale]}
            items={content.faqs}
            withSchema={false}
          />

          {/* Related links */}
          <RelatedLinks
            locale={locale}
            title={content.relatedTitle[locale]}
            items={content.relatedLinks.map((link) => ({
              href: link.href,
              label: link.label[locale],
            }))}
          />

          {/* CTA */}
          <PremiumCta
            eyebrow={dictionary.common.brand}
            title={content.ctaTitle[locale]}
            description={content.ctaDescription[locale]}
            imageSrc={content.ctaImage}
            imageAlt={content.ctaTitle[locale]}
            actions={[
              {
                href: localePath(locale, "/register"),
                label: dictionary.nav.register,
              },
              {
                href: localePath(locale, "/contact"),
                label: dictionary.common.contactSupport,
                variant: "outline",
              },
              {
                href: localePath(locale, "/download"),
                label: dictionary.nav.download,
                variant: "secondary",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
