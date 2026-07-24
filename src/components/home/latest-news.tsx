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
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05}>
            <Card className="h-full overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={item.image}
                  alt={item.imageAlt[locale]}
                  title={item.title[locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{item.category[locale]}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(item.publishedAt, locale)}
                  </span>
                </div>
                <CardTitle>{item.title[locale]}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.excerpt[locale]}
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href={localePath(locale, `/news/${item.slug}`)}>
                    {locale === "zh"
                      ? `阅读：${item.title[locale]}`
                      : `Read: ${item.title.en}`}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
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
