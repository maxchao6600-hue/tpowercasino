import type { Locale } from "@/config/site";

export type LocalizedString = Record<Locale, string>;

export type LocalizedSlug = Record<Locale, string>;

export type GameCategory =
  | "slots"
  | "live-casino"
  | "sports"
  | "fishing"
  | "table"
  | "crash"
  | "lottery"
  | "poker"
  | "arcade";

export type PromotionCategory =
  | "welcome"
  | "reload"
  | "cashback"
  | "vip"
  | "seasonal";

export type BlogCategoryKey =
  | "casino-guides"
  | "tpower-guides"
  | "live-casino"
  | "slots"
  | "sports"
  | "fishing"
  | "lottery"
  | "vip"
  | "payment-guides"
  | "promotions"
  | "responsible-gaming";

export type NewsCategoryKey =
  | "promotion"
  | "games"
  | "vip"
  | "payments"
  | "guide"
  | "security"
  | "sports"
  | "download"
  | "android"
  | "ios"
  | "news"
  | "update";

export type NewsBadge = "official" | "vip" | "platform" | "trending";

/** Priority 1 = TPOWER API crawl; 2 = curated provider library; 3 = image pipeline asset. */
export type GameSource = "crawler" | "reference" | "image";

export type Game = {
  id: string;
  slug: string;
  sourceId?: number;
  name: LocalizedString;
  description: LocalizedString;
  category: GameCategory;
  providerId: string;
  providerName?: string;
  providerFolder?: string;
  rtp?: string;
  featured?: boolean;
  new?: boolean;
  jackpot?: boolean;
  image: string;
  sourceImage?: string;
  /** Defaults to crawler when sourced from games-catalogue.json */
  gameSource?: GameSource;
  /** Optional studio specs — never invent values when absent */
  volatility?: string;
  minBet?: string;
  maxBet?: string;
  features?: LocalizedString[];
  howToPlay?: LocalizedString[];
  faqs?: Array<{ question: LocalizedString; answer: LocalizedString }>;
};

export type ProviderFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type Provider = {
  id: string;
  slug: string;
  name: string;
  description: LocalizedString;
  introduction: LocalizedString;
  features: LocalizedString[];
  gameTypes: LocalizedString[];
  compatibility: LocalizedString;
  /** Local path under /images/providers, or null for typography fallback */
  logo: string | null;
  categories: GameCategory[];
  popularGameIds: string[];
  faqs: ProviderFaq[];
  featured?: boolean;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
};

export type Promotion = {
  id: string;
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  overview: LocalizedString;
  eligibility: LocalizedString[];
  bonusDetails: LocalizedString[];
  howToClaim: LocalizedString[];
  terms: LocalizedString;
  bonusAmount: LocalizedString;
  minDeposit: LocalizedString;
  badge: LocalizedString;
  cta: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  category: PromotionCategory;
  expiresAt: string;
  featured?: boolean;
  faqs: ContentFaq[];
};

export type ContentFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type BlogDifficulty = "beginner" | "intermediate" | "advanced";

export type BlogPost = {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  summary: LocalizedString;
  content: LocalizedString;
  category: LocalizedString;
  categoryKey: BlogCategoryKey;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  difficulty: BlogDifficulty;
  image: string;
  imageAlt: LocalizedString;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  hot?: boolean;
  isNew?: boolean;
  editorsPick?: boolean;
  mostRead?: boolean;
  faqs: ContentFaq[];
  relatedSlugs: string[];
  relatedPaths: string[];
};

export type NewsItem = {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  /** Optional SEO title override (falls back to title). */
  seoTitle?: LocalizedString;
  /** Optional meta description override (falls back to excerpt). */
  seoDescription?: LocalizedString;
  keywords?: string[];
  content: LocalizedString;
  category: LocalizedString;
  categoryKey: NewsCategoryKey;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  image: string;
  imageAlt: LocalizedString;
  featured?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
  popular?: boolean;
  recommended?: boolean;
  badge?: NewsBadge;
  faqs: ContentFaq[];
  relatedSlugs: string[];
};

export type FaqItem = {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: "account" | "payments" | "games" | "security" | "vip" | "download";
};

export type VipTier = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  benefits: LocalizedString[];
  monthlyRewards: LocalizedString;
  withdrawalSpeed: LocalizedString;
  cashback: LocalizedString;
  supportLevel: LocalizedString;
  exclusiveGifts: LocalizedString;
  highlight?: boolean;
};

export type PaymentMethod = {
  id: string;
  name: string;
  description: LocalizedString;
  type: "ewallet" | "bank" | "crypto" | "card";
  minDeposit: string;
  processing: LocalizedString;
  logo: string;
};

export type GameCategoryCard = {
  id: string;
  href: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type CategorySeoContent = {
  path: string;
  category: GameCategory | "all";
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  intro: LocalizedString;
  benefits: LocalizedString[];
  gameTypes: LocalizedString[];
  responsibleNote: LocalizedString;
  faqs: ContentFaq[];
  relatedPaths: Array<{ href: string; label: LocalizedString }>;
};
