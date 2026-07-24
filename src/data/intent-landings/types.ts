import type { LocalizedString } from "@/types";

export type IntentStat = {
  value: LocalizedString;
  label: LocalizedString;
};

export type IntentFeature = {
  icon:
    | "shield"
    | "lock"
    | "scale"
    | "heart"
    | "users"
    | "eye"
    | "file"
    | "badge"
    | "zap"
    | "globe"
    | "check"
    | "building"
    | "wallet"
    | "banknote"
    | "smartphone"
    | "gift"
    | "dice"
    | "trophy";
  title: LocalizedString;
  body: LocalizedString;
};

export type IntentSection = {
  title: LocalizedString;
  body: LocalizedString;
  imageSrc?: string;
  imageAlt?: LocalizedString;
  reverse?: boolean;
};

export type IntentStep = {
  title: LocalizedString;
  body: LocalizedString;
};

export type IntentHowToStep = {
  name: LocalizedString;
  text: LocalizedString;
};

export type IntentFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type IntentTrustItem = {
  title: LocalizedString;
  body: LocalizedString;
};

export type IntentRelatedLink = {
  href: string;
  label: LocalizedString;
};

export type IntentCompareRow = {
  label: LocalizedString;
  a: LocalizedString;
  b: LocalizedString;
};

export type IntentPageContent = {
  id: string;
  path: string;
  heroImage: string;
  /** Extra schema beyond WebPage/FAQ/HowTo/Breadcrumb/Org */
  schemaExtra?: "SoftwareApplication" | "CollectionPage" | "none";
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  heroTitle: LocalizedString;
  heroSubtitle: LocalizedString;
  introduction: LocalizedString;
  stats: IntentStat[];
  benefitsTitle: LocalizedString;
  benefits: IntentFeature[];
  howToTitle: LocalizedString;
  howToDescription: LocalizedString;
  howToSteps: IntentHowToStep[];
  sections: IntentSection[];
  comparisonTitle?: LocalizedString;
  comparisonHeaders?: [LocalizedString, LocalizedString, LocalizedString];
  comparisonRows?: IntentCompareRow[];
  timelineTitle: LocalizedString;
  timeline: IntentStep[];
  trustTitle: LocalizedString;
  trustItems: IntentTrustItem[];
  faqTitle: LocalizedString;
  faqs: IntentFaq[];
  relatedTitle: LocalizedString;
  relatedLinks: IntentRelatedLink[];
  ctaTitle: LocalizedString;
  ctaDescription: LocalizedString;
  ctaImage: string;
  primaryCtaHref?: string;
};
