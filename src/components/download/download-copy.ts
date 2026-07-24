/**
 * Extended download dictionary keys (wired when en/zh dictionaries are updated).
 * Cast keeps components type-safe before those keys land.
 */
export type DownloadUiCopy = {
  metaTitle: string;
  metaDescription?: string;
  title: string;
  subtitle: string;
  heroImageAlt?: string;
  android: string;
  ios: string;
  qrLabel: string;
  optionsEyebrow?: string;
  optionsTitle?: string;
  optionsSubtitle?: string;
  whyEyebrow?: string;
  whyTitle?: string;
  whySubtitle?: string;
  learnMore?: string;
  showLess?: string;
  installEyebrow?: string;
  installTitle?: string;
  installSubtitle?: string;
  compatEyebrow?: string;
  compatTitle?: string;
  compatSubtitle?: string;
  securityEyebrow?: string;
  securityTitle?: string;
  securitySubtitle?: string;
  performanceEyebrow?: string;
  performanceTitle?: string;
  performanceSubtitle?: string;
  faqTitle?: string;
  troubleEyebrow?: string;
  troubleTitle?: string;
  troubleSubtitle?: string;
  benefitsEyebrow?: string;
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  changelogEyebrow?: string;
  changelogTitle?: string;
  changelogSubtitle?: string;
  reviewsEyebrow?: string;
  reviewsTitle?: string;
  reviewsSubtitle?: string;
  statsEyebrow?: string;
  statsTitle?: string;
  statsSubtitle?: string;
  relatedTitle?: string;
  newsEyebrow?: string;
  newsTitle?: string;
  newsSubtitle?: string;
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaDownload?: string;
  finalCtaImageAlt?: string;
  seoEyebrow?: string;
  keywords?: string[];
};

export function asDownloadCopy(download: unknown): DownloadUiCopy {
  return download as DownloadUiCopy;
}
