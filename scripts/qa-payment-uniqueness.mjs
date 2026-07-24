import fs from "node:fs";
import path from "node:path";

const dir = "src/data/payments-center";
const files = fs
  .readdirSync(dir)
  .filter(
    (f) =>
      f.endsWith(".ts") && !["types.ts", "shared.ts", "index.ts"].includes(f),
  );

function extractEn(s) {
  const m = [...s.matchAll(/en:\s*`([^`]*)`/gs)];
  return m.map((x) => x[1]).join("\n");
}

const texts = {};
for (const f of files) {
  texts[f] = extractEn(fs.readFileSync(path.join(dir, f), "utf8"));
}

function tokens(t) {
  return new Set(
    t
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 4),
  );
}

const names = Object.keys(texts);
console.log("--- word counts ---");
for (const f of names) {
  const words = texts[f].trim().split(/\s+/).filter(Boolean).length;
  console.log(f, "EN words~", words, words < 1800 ? "LOW" : "ok");
}

console.log("--- pairwise overlap ---");
for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    const a = tokens(texts[names[i]]);
    const b = tokens(texts[names[j]]);
    let inter = 0;
    for (const w of a) if (b.has(w)) inter++;
    const score = inter / Math.max(1, Math.min(a.size, b.size));
    if (score > 0.4) {
      console.log(
        "HIGH",
        names[i],
        names[j],
        score.toFixed(2),
        "inter",
        inter,
      );
    }
  }
}
