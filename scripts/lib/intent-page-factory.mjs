/** Factory helpers for Sprint 3 intent landing TypeScript modules. */
export function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
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

export function compareRow(labelEn, labelZh, aEn, aZh, bEn, bZh) {
  return `{ label: ${L(labelEn, labelZh)}, a: ${L(aEn, aZh)}, b: ${L(bEn, bZh)} }`;
}

export function renderIntentPage(exportName, data) {
  const extras = (data.extraLinks || [])
    .map(
      (l) =>
        `    { href: "${l.href}", label: { en: "${l.label.en}", zh: "${l.label.zh}" } },`,
    )
    .join("\n");

  const comparison =
    data.comparisonTitle && data.comparisonHeaders && data.comparisonRows
      ? `  comparisonTitle: ${L(data.comparisonTitle.en, data.comparisonTitle.zh)},
  comparisonHeaders: [
    ${L(data.comparisonHeaders[0].en, data.comparisonHeaders[0].zh)},
    ${L(data.comparisonHeaders[1].en, data.comparisonHeaders[1].zh)},
    ${L(data.comparisonHeaders[2].en, data.comparisonHeaders[2].zh)},
  ],
  comparisonRows: [
${data.comparisonRows.join(",\n")}
  ],`
      : "";

  return `import type { IntentPageContent } from "./types";
import { withIntentRelated } from "./shared";

export const ${exportName}: IntentPageContent = {
  id: "${data.id}",
  path: "${data.path}",
  heroImage: "${data.heroImage}",
  schemaExtra: "${data.schemaExtra || "none"}",
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
${comparison}
  timelineTitle: ${L(data.timelineTitle.en, data.timelineTitle.zh)},
  timeline: [
${data.timeline.join(",\n")}
  ],
  trustTitle: ${L(data.trustTitle.en, data.trustTitle.zh)},
  trustItems: [
${data.trustItems.join(",\n")}
  ],
  faqTitle: ${L(data.faqTitle.en, data.faqTitle.zh)},
  faqs: [
${data.faqs.join(",\n")}
  ],
  relatedTitle: ${L(data.relatedTitle.en, data.relatedTitle.zh)},
  relatedLinks: withIntentRelated([
${extras}
  ]),
  ctaTitle: ${L(data.ctaTitle.en, data.ctaTitle.zh)},
  ctaDescription: ${L(data.ctaDescription.en, data.ctaDescription.zh)},
  ctaImage: "/images/cta/tpower-join-cta.webp",
  primaryCtaHref: "${data.primaryCtaHref || "/register"}",
};
`;
}
