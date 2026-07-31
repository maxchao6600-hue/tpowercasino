import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { getLatestNews } from "@/data/news";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/common/section";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type LatestNewsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function LatestNews({ locale, dictionary }: LatestNewsProps) {
  const items = getLatestNews(3);

  return (
    <Section
      className="bg-card"
      title={dictionary.home.newsTitle}
      description={dictionary.home.newsSubtitle}
    >
      <div className="df-row-3">
        <div className="df-grid-3">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <Card className="flex h-full min-w-0 flex-col overflow-hidden">
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={item.image}
                    alt={item.imageAlt[locale]}
                    title={item.title[locale]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 33vw, 420px"
                  />
                </div>
                <CardHeader className="space-y-1.5 p-3 sm:space-y-2 sm:p-5 md:space-y-3 md:p-8">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <Badge variant="accent">{item.category[locale]}</Badge>
                    <span className="text-[10px] text-muted-foreground sm:text-xs">
                      {formatDate(item.publishedAt, locale)}
                    </span>
                  </div>
                  <CardTitle className="text-balance text-sm sm:text-base md:text-[inherit]">
                    {item.title[locale]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-auto space-y-2 p-3 pt-0 sm:space-y-3 sm:p-5 sm:pt-0 md:space-y-4 md:px-8 md:pb-8">
                  <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                    {item.excerpt[locale]}
                  </p>
                  <Button asChild variant="link" className="px-0 text-xs sm:text-sm">
                    <Link href={localePath(locale, `/news/${item.slug}`)}>
                      {locale === "zh" ? "阅读全文" : "Read article"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Button asChild variant="outline">
          <Link href={localePath(locale, "/news")}>
            {locale === "zh" ? "查看全部新闻" : "View all news"}
          </Link>
        </Button>
      </div>
    </Section>
  );
}
