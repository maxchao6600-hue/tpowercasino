import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { paymentMethods } from "@/data/payments";
import { paymentMethodsHub } from "@/data/payments-center/payment-methods";
import { PaymentHub } from "@/components/payments/payment-hub";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PageProps = { params: Promise<{ locale: string }> };

const methodDeepLinks: Record<string, string> = {
  fpx: "/fpx-deposit",
  "touch-n-go": "/touch-n-go",
  grabpay: "/grabpay",
  duitnow: "/duitnow-deposit",
  "bank-transfer": "/online-banking",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    title: paymentMethodsHub.metaTitle[locale],
    description: paymentMethodsHub.metaDescription[locale],
    path: paymentMethodsHub.path,
  });
}

export default async function PaymentMethodsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <PaymentHub
      locale={locale}
      dictionary={dictionary}
      content={paymentMethodsHub}
      afterHero={
        <section className="bg-[#070707] pb-4 pt-8 sm:pt-10">
          <Container>
            <FadeIn>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
                    {locale === "zh" ? "通道一览" : "Method cards"}
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
                    {locale === "zh"
                      ? "选择熟悉的大马支付通道"
                      : "Pick a Malaysia rail you recognise"}
                  </h2>
                </div>
              </div>
            </FadeIn>
            <div className="overflow-x-auto pb-2">
              <div className="grid min-w-[720px] grid-cols-3 gap-3 md:min-w-0 md:gap-5 lg:grid-cols-3">
                {paymentMethods.map((method, index) => {
                  const href = methodDeepLinks[method.id];
                  const card = (
                    <Card className="h-full transition-colors hover:border-primary/40">
                      <CardHeader>
                        <div className="mb-4 flex h-14 items-center">
                          <Image
                            src={method.logo}
                            alt={`${method.name} logo`}
                            width={120}
                            height={48}
                            className="h-10 w-auto max-w-[140px] object-contain"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <CardTitle>{method.name}</CardTitle>
                          <Badge variant="outline">{method.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p className="leading-relaxed">
                          {method.description[locale]}
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">
                            {locale === "zh" ? "最低存款" : "Min deposit"}:
                          </span>{" "}
                          {method.minDeposit}
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">
                            {locale === "zh" ? "处理时效" : "Processing"}:
                          </span>{" "}
                          {method.processing[locale]}
                        </p>
                        {href ? (
                          <p className="pt-1 text-xs font-semibold text-primary">
                            {locale === "zh" ? "查看深度指南 →" : "Open deep guide →"}
                          </p>
                        ) : null}
                      </CardContent>
                    </Card>
                  );

                  return (
                    <FadeIn key={method.id} delay={index * 0.04}>
                      {href ? (
                        <Link
                          href={localePath(locale, href)}
                          className="block h-full"
                        >
                          {card}
                        </Link>
                      ) : (
                        card
                      )}
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      }
    />
  );
}
