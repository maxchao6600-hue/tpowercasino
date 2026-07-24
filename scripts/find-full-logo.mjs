import fs from "node:fs";
import path from "node:path";

const SITE = "https://www.tpower3.com";
const html = fs.readFileSync(path.join("scripts", "_home.html"), "utf8");
const scripts = [...html.matchAll(/src=(?:["']?)([^"'>\s]+\.js)/g)].map(
  (m) => m[1],
);

console.log("scripts found", scripts);

const hits = new Set();

for (const script of scripts) {
  const url = script.startsWith("http") ? script : new URL(script, SITE).href;
  try {
    const jr = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0" },
    });
    if (!jr.ok) {
      console.log("fail", jr.status, url);
      continue;
    }
    const js = await jr.text();
    for (const m of js.matchAll(
      /(?:static\/img\/|\/img\/)[^"'\\\s>]+\.(?:png|svg|webp|jpg)/gi,
    )) {
      hits.add(m[0]);
    }
    for (const m of js.matchAll(/["']([^"']*logo[^"']*\.(?:png|svg|webp))["']/gi)) {
      hits.add(m[1]);
    }
    console.log("ok", url, "bytes", js.length);
  } catch (e) {
    console.log("err", url, e.message);
  }
}

const filtered = [...hits].filter((a) =>
  /logo|tpower|brand|header|icon|nav/i.test(a),
);
console.log("logo-ish", filtered.slice(0, 80));
console.log("all img hits", [...hits].slice(0, 100));
