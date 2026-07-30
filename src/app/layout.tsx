import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { defaultLocale, getHtmlLang, isValidLocale } from "@/config/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // optional avoids late font swaps that shift homepage text (CLS)
  display: "optional",
  weight: ["400", "600", "700", "800"],
  preload: true,
  adjustFontFallback: true,
  fallback: ["PingFang SC", "Microsoft YaHei", "Noto Sans SC", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline.en}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description.en,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const rawLocale = headerList.get("x-locale") ?? defaultLocale;
  const locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale;

  return (
    <html
      lang={getHtmlLang(locale)}
      className={`${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Ensures meta description is present for crawlers / Lighthouse MetaElements */}
        <meta name="description" content={siteConfig.description.en} />
        <link
          rel="preload"
          as="image"
          href="/images/hero-lcp-xs.webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
