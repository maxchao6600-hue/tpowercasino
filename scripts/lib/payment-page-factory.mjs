/** Shared helpers for generating payment-center TypeScript modules. */
export function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

export function L(en, zh) {
  return `{ en: \`${esc(en)}\`, zh: \`${esc(zh)}\` }`;
}

export function feature(icon, titleEn, titleZh, bodyEn, bodyZh) {
  return `{ icon: "${icon}", title: ${L(titleEn, titleZh)}, body: ${L(bodyEn, bodyZh)} }`;
}

export function howTo(nameEn, nameZh, textEn, textZh) {
  return `{ name: ${L(nameEn, nameZh)}, text: ${L(textEn, textZh)} }`;
}

export function timeline(titleEn, titleZh, bodyEn, bodyZh) {
  return `{ title: ${L(titleEn, titleZh)}, body: ${L(bodyEn, bodyZh)} }`;
}

export function trust(titleEn, titleZh, bodyEn, bodyZh) {
  return `{ title: ${L(titleEn, titleZh)}, body: ${L(bodyEn, bodyZh)} }`;
}

export function faq(qEn, qZh, aEn, aZh) {
  return `{ question: ${L(qEn, qZh)}, answer: ${L(aEn, aZh)} }`;
}

export function section(titleEn, titleZh, bodyEn, bodyZh, imageSrc, reverse) {
  return `{
    title: ${L(titleEn, titleZh)},
    body: ${L(bodyEn, bodyZh)},
    imageSrc: "${imageSrc}",
    imageAlt: ${L(titleEn, titleZh)},
    reverse: ${reverse ? "true" : "false"},
  }`;
}

export function renderPage(exportName, data) {
  const extras = (data.extraLinks || [])
    .map(
      (l) =>
        `    { href: "${l.href}", label: { en: "${l.label.en}", zh: "${l.label.zh}" } },`,
    )
    .join("\n");

  return `import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const ${exportName}: PaymentPageContent = {
  id: "${data.id}",
  path: "${data.path}",
  heroImage: "${data.heroImage}",
  metaTitle: ${L(data.metaTitle.en, data.metaTitle.zh)},
  metaDescription: ${L(data.metaDescription.en, data.metaDescription.zh)},
  heroTitle: ${L(data.heroTitle.en, data.heroTitle.zh)},
  heroSubtitle: ${L(data.heroSubtitle.en, data.heroSubtitle.zh)},
  introduction: ${L(data.introduction.en, data.introduction.zh)},
  stats: [
${data.stats
  .map(
    (s) =>
      `    { value: ${L(s.vEn, s.vZh)}, label: ${L(s.lEn, s.lZh)} },`,
  )
  .join("\n")}
  ],
  benefitsTitle: ${L(data.benefitsTitle.en, data.benefitsTitle.zh)},
  benefits: [
${data.benefits.join(",\n")}
  ],
  howToTitle: ${L(data.howToTitle.en, data.howToTitle.zh)},
  howToDescription: ${L(data.howToDescription.en, data.howToDescription.zh)},
  howToSteps: [
${data.howToSteps.join(",\n")}
  ],
  sections: [
${data.sections.join(",\n")}
  ],
  timelineTitle: ${L(data.timelineTitle.en, data.timelineTitle.zh)},
  timeline: [
${data.timeline.join(",\n")}
  ],
  securityTitle: ${L(data.securityTitle.en, data.securityTitle.zh)},
  securityItems: [
${data.securityItems.join(",\n")}
  ],
  faqTitle: ${L(data.faqTitle.en, data.faqTitle.zh)},
  faqs: [
${data.faqs.join(",\n")}
  ],
  relatedTitle: ${L(data.relatedTitle.en, data.relatedTitle.zh)},
  relatedLinks: withPaymentRelated([
${extras}
  ]),
  ctaTitle: ${L(data.ctaTitle.en, data.ctaTitle.zh)},
  ctaDescription: ${L(data.ctaDescription.en, data.ctaDescription.zh)},
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
`;
}
