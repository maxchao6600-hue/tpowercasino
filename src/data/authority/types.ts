import type { LocalizedString } from "@/types";
import type { AtmospherePageKey } from "@/config/page-atmosphere";

export type AuthorityStat = {
  value: LocalizedString;
  label: LocalizedString;
};

export type AuthorityFeature = {
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
    | "building";
  title: LocalizedString;
  body: LocalizedString;
};

export type AuthoritySection = {
  title: LocalizedString;
  /** Long-form markdown with optional [[/path|Label]] wiki links */
  body: LocalizedString;
  imageSrc?: string;
  imageAlt?: LocalizedString;
  reverse?: boolean;
};

export type AuthorityTimelineStep = {
  title: LocalizedString;
  body: LocalizedString;
};

export type AuthorityFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type AuthorityTrustItem = {
  title: LocalizedString;
  body: LocalizedString;
};

export type AuthorityRelatedLink = {
  href: string;
  label: LocalizedString;
};

export type AuthorityPageContent = {
  id: string;
  path: string;
  schemaType: "AboutPage" | "WebPage" | "ContactPage";
  atmosphere: AtmospherePageKey | string;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  heroTitle: LocalizedString;
  heroSubtitle: LocalizedString;
  /** Opening long-form (markdown) */
  introduction: LocalizedString;
  stats: AuthorityStat[];
  featuresTitle: LocalizedString;
  features: AuthorityFeature[];
  sections: AuthoritySection[];
  timelineTitle: LocalizedString;
  timeline: AuthorityTimelineStep[];
  trustTitle: LocalizedString;
  trustItems: AuthorityTrustItem[];
  faqTitle: LocalizedString;
  faqs: AuthorityFaq[];
  relatedTitle: LocalizedString;
  relatedLinks: AuthorityRelatedLink[];
  ctaTitle: LocalizedString;
  ctaDescription: LocalizedString;
  ctaImage: string;
};
