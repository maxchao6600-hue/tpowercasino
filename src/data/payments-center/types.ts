import type { LocalizedString } from "@/types";

export type PaymentStat = {
  value: LocalizedString;
  label: LocalizedString;
};

export type PaymentFeature = {
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
    | "banknote";
  title: LocalizedString;
  body: LocalizedString;
};

export type PaymentSection = {
  title: LocalizedString;
  body: LocalizedString;
  imageSrc?: string;
  imageAlt?: LocalizedString;
  reverse?: boolean;
};

export type PaymentStep = {
  title: LocalizedString;
  body: LocalizedString;
};

export type PaymentHowToStep = {
  name: LocalizedString;
  text: LocalizedString;
};

export type PaymentFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type PaymentTrustItem = {
  title: LocalizedString;
  body: LocalizedString;
};

export type PaymentRelatedLink = {
  href: string;
  label: LocalizedString;
};

export type PaymentPageContent = {
  id: string;
  path: string;
  /** Unique hero atmosphere image — never reuse across payment pages */
  heroImage: string;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  heroTitle: LocalizedString;
  heroSubtitle: LocalizedString;
  introduction: LocalizedString;
  stats: PaymentStat[];
  benefitsTitle: LocalizedString;
  benefits: PaymentFeature[];
  howToTitle: LocalizedString;
  howToDescription: LocalizedString;
  howToSteps: PaymentHowToStep[];
  sections: PaymentSection[];
  timelineTitle: LocalizedString;
  timeline: PaymentStep[];
  securityTitle: LocalizedString;
  securityItems: PaymentTrustItem[];
  faqTitle: LocalizedString;
  faqs: PaymentFaq[];
  relatedTitle: LocalizedString;
  relatedLinks: PaymentRelatedLink[];
  ctaTitle: LocalizedString;
  ctaDescription: LocalizedString;
  ctaImage: string;
};
