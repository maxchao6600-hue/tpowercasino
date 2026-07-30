import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Smartphone } from "lucide-react";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { InternalCta } from "@/components/seo/internal-cta";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PageProps = { params: Promise<{ locale: string }> };

const apkFaqs = [
  {
    question: {
      en: "Is the TPOWER APK the same as the official app?",
      zh: "TPOWER APK 与官方应用相同吗？",
    },
    answer: {
      en: "The APK path is the Android package route documented for players who install outside certain store channels. Always use the official Download or APK guidance on this website.",
      zh: "APK 路径是为在特定商店渠道外安装的玩家记录的 Android 安装包路线。请始终使用本网站上的官方下载或 APK 指引。",
    },
  },
  {
    question: {
      en: "How do I install the TPOWER APK safely?",
      zh: "如何安全安装 TPOWER APK？",
    },
    answer: {
      en: "Enable install permission only for the trusted source you choose, download from the official TPOWER path, verify the package source, then open the installer and complete login after install.",
      zh: "仅为您选择的可信来源启用安装权限，从官方 TPOWER 路径下载，核实安装包来源，然后打开安装程序并在安装后完成登录。",
    },
  },
  {
    question: {
      en: "Should iOS users use the APK page?",
      zh: "iOS 用户应使用 APK 页面吗？",
    },
    answer: {
      en: "No. iOS players should follow the Download page for Apple-compatible installation guidance.",
      zh: "不应。iOS 玩家应遵循下载页面中的 Apple 兼容安装指引。",
    },
  },
  {
    question: {
      en: "What if Android blocks unknown installs?",
      zh: "如果 Android 阻止未知来源安装怎么办？",
    },
    answer: {
      en: "Open system settings for the browser or file manager you used, allow installs from that source temporarily, complete installation, then review permissions again.",
      zh: "打开您使用的浏览器或文件管理器的系统设置，临时允许该来源安装，完成安装后再复查权限。",
    },
  },
  {
    question: {
      en: "Where can I learn the full install walkthrough?",
      zh: "在哪里可以学习完整安装流程？",
    },
    answer: {
      en: "Read How to Download TPOWER and the TPOWER Mobile App guide in the Blog, then return here or to Download for the official entry points.",
      zh: "请阅读博客中的如何下载 TPOWER 与 TPOWER 移动应用指南，然后回到此处或下载页面获取官方入口。",
    },
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.apk.metaTitle,
    description: dictionary.apk.metaDescription,
    path: "/apk",
  });
}

export default async function ApkPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.apk.metaTitle, href: localePath(locale, "/apk") },
  ];

  const steps = dictionary.apk.steps;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: dictionary.apk.metaTitle,
            description: dictionary.apk.metaDescription,
            path: "/apk",
          }),
          softwareApplicationSchema(locale),
        ]}
      />
      <PageHeader
        title={dictionary.apk.title}
        description={dictionary.apk.subtitle}
        breadcrumbs={breadcrumbs}
        atmosphere="apk"
        brand={dictionary.common.brand}
      />
      <section className="section-y">
        <Container className="max-w-4xl space-y-12">
          <div className="rounded-[24px] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Smartphone className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-body leading-relaxed text-muted-foreground">
              {dictionary.apk.intro}
            </p>
            <div className="df-actions mt-8">
              <Button asChild size="lg" className="h-auto max-w-full px-4 py-3 text-sm">
                <Link href={localePath(locale, "/contact")}>
                  {dictionary.apk.ctaDownload}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-auto max-w-full px-4 py-3 text-sm">
                <Link href={localePath(locale, "/blog/how-to-download-tpower")}>
                  {dictionary.apk.ctaGuide}
                </Link>
              </Button>
            </div>
          </div>

          <div className="df-grid-3">
              {steps.map((step, index) => (
                <Card key={step.title} className="h-full">
                  <CardHeader>
                    <p className="text-small font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {dictionary.seo.step} {index + 1}
                    </p>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>

          <PageFaq
            locale={locale}
            title={dictionary.seo.faqHeading}
            items={apkFaqs}
          />

          <RelatedLinks
            locale={locale}
            title={dictionary.seo.relatedPages}
            items={[
              {
                href: "/download",
                label: dictionary.download.title,
                description: dictionary.download.subtitle,
              },
              {
                href: "/blog/how-to-download-tpower",
                label:
                  locale === "zh" ? "如何下载 TPOWER" : "How to download TPOWER",
              },
              {
                href: "/blog/tpower-mobile-app",
                label:
                  locale === "zh" ? "TPOWER 移动应用" : "TPOWER mobile app",
              },
              {
                href: "/login",
                label: dictionary.nav.login,
              },
              {
                href: "/register",
                label: dictionary.nav.register,
              },
            ]}
          />

          <InternalCta
            locale={locale}
            title={dictionary.apk.ctaTitle}
            description={dictionary.apk.ctaDescription}
            primaryHref="/register"
            primaryLabel={dictionary.common.ctaRegister}
            secondaryHref="/login"
            secondaryLabel={dictionary.common.ctaLogin}
          />
        </Container>
      </section>
    </>
  );
}
