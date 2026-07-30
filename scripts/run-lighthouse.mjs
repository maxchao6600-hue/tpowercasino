import fs from "fs";
import { spawnSync } from "child_process";

const headersPath = ".lighthouse-headers.json";
fs.writeFileSync(headersPath, JSON.stringify({ Cookie: "tpower_age_confirmed=1" }));

const out = ".lighthouse-sprint3.json";
const args = [
  "lighthouse@12.6.0",
  "http://localhost:3456/en",
  "--only-categories=performance,accessibility,best-practices,seo",
  "--form-factor=mobile",
  "--screenEmulation.mobile=true",
  "--throttling-method=simulate",
  "--chrome-flags=--headless --no-sandbox --disable-gpu",
  `--output=json`,
  `--output-path=${out}`,
  "--quiet",
  `--extra-headers=${headersPath}`,
];

const result = spawnSync("npx", ["--yes", ...args], {
  cwd: process.cwd(),
  encoding: "utf8",
  shell: true,
  stdio: "inherit",
});

if (!fs.existsSync(out)) {
  console.error("Lighthouse did not write report");
  process.exit(1);
}

const r = JSON.parse(fs.readFileSync(out, "utf8"));
const cats = r.categories;
const a = r.audits;
const net = a["network-requests"]?.details?.items || [];
const js = net
  .filter((i) => i.resourceType === "Script")
  .reduce((s, i) => s + (i.transferSize || 0), 0);
const css = net
  .filter((i) => i.resourceType === "Stylesheet")
  .reduce((s, i) => s + (i.transferSize || 0), 0);

const failedA11y = cats.accessibility.auditRefs
  .filter((ref) => a[ref.id]?.score === 0)
  .map((ref) => ref.id);
const failedSeo = cats.seo.auditRefs
  .filter((ref) => a[ref.id]?.score === 0)
  .map((ref) => ref.id);

console.log(
  JSON.stringify(
    {
      Performance: Math.round(cats.performance.score * 100),
      Accessibility: Math.round(cats.accessibility.score * 100),
      BestPractices: Math.round(cats["best-practices"].score * 100),
      SEO: Math.round(cats.seo.score * 100),
      LCP: a["largest-contentful-paint"].displayValue,
      CLS: a["cumulative-layout-shift"].displayValue,
      INP:
        (a["interaction-to-next-paint"] ||
          a["experimental-interaction-to-next-paint"])?.displayValue ?? "n/a",
      JSkiB: Math.round(js / 1024),
      CSSkiB: Math.round(css / 1024),
      failedA11y,
      failedSeo,
      clsNumeric: a["cumulative-layout-shift"].numericValue,
      lcpNumeric: a["largest-contentful-paint"].numericValue,
      metaDesc: a["meta-description"]?.score,
      title: a["document-title"]?.score,
    },
    null,
    2,
  ),
);

process.exit(result.status ?? 0);
