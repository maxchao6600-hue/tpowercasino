import fs from "node:fs";
import path from "node:path";

const map = {
  "vip/page.tsx": "vip",
  "download/page.tsx": "download",
  "apk/page.tsx": "apk",
  "about/page.tsx": "about",
  "contact/page.tsx": "contact",
  "responsible-gaming/page.tsx": "responsible-gaming",
  "providers/page.tsx": "providers",
  "news/page.tsx": "news",
  "blog/page.tsx": "blog",
  "payment-methods/page.tsx": "payment-methods",
  "affiliate/page.tsx": "affiliate",
  "faq/page.tsx": "faq",
  "security/page.tsx": "security",
  "login/page.tsx": "login",
  "register/page.tsx": "register",
  "help/page.tsx": "help",
};

const root = path.join("src", "app", "[locale]");

for (const [file, key] of Object.entries(map)) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) {
    console.log("MISS", p);
    continue;
  }
  let src = fs.readFileSync(p, "utf8");
  if (src.includes("atmosphere=")) {
    console.log("skip", file);
    continue;
  }

  const needle = "breadcrumbs={breadcrumbs}";
  const idx = src.indexOf(needle);
  if (idx < 0) {
    console.log("NO MATCH", file);
    continue;
  }

  const insert = `${needle}\n        atmosphere="${key}"\n        brand={dictionary.common.brand}`;
  src = src.slice(0, idx) + insert + src.slice(idx + needle.length);
  fs.writeFileSync(p, src);
  console.log("updated", file);
}
