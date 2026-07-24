/**
 * Shared builder: creates a full unique IntentPageContent payload from topic config.
 * Each page must pass unique intro/sections/faqs — no shared paragraph bodies.
 */
import {
  feature,
  howTo,
  timeline,
  trust,
  faq,
  section,
  compareRow,
  renderIntentPage,
} from "./intent-page-factory.mjs";
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "src/data/intent-landings");
const CTA = "/images/cta/tpower-join-cta.webp";
const LOBBY = "/images/cta/tpower-lobby-cta.webp";

export function writeIntent(file, exportName, data) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, file), renderIntentPage(exportName, data));
  console.log("wrote", file);
}

export function P(en, zh) {
  return { en: en.join("\n\n"), zh: zh.join("\n\n") };
}

export { feature, howTo, timeline, trust, faq, section, compareRow, CTA, LOBBY };
