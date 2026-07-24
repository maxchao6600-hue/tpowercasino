import fs from "node:fs";
import path from "node:path";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const BASE = "https://www.tpower3.com";

async function get(p) {
  const url = p.startsWith("http") ? p : `${BASE}${p}`;
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "*/*", referer: `${BASE}/` },
  });
  const text = await res.text();
  return { status: res.status, ct: res.headers.get("content-type"), len: text.length, text, url: res.url };
}

const files = [
  "/static/js/firebase-config.js",
  "/static/js/telegram-web-app.js",
  "/static/js/manifest.d50f4ac43dbedf25fff5.js",
  "/static/js/vendor.a144d440594fe1e8e06c.js",
  "/static/js/app.77bb835a63600bc9d583.js",
  "/static/css/app.0ae64e49aed5f591a32ee9c70f59b3b5.css",
];

fs.mkdirSync("scripts/.tmp-tpower3", { recursive: true });

for (const file of files) {
  const r = await get(file);
  console.log(file, r.status, r.ct, r.len, r.url);
  const out = path.join(
    "scripts/.tmp-tpower3",
    file.split("/").pop().replace(/[^\w.-]+/g, "_"),
  );
  if (r.status === 200 && !r.ct?.includes("text/html")) {
    fs.writeFileSync(out, r.text);
  } else {
    fs.writeFileSync(out + ".htmlfallback", r.text.slice(0, 2000));
  }
}

const app = await get("/static/js/app.77bb835a63600bc9d583.js");
if (app.status === 200 && app.len > 5000) {
  const text = app.text;
  const patterns = [
    /https?:\\\/\\\/[^"'\\\s]+/g,
    /https?:\/\/[^"'\\\s]+/g,
    /["'`](\/(?:api|gw|member|game|lobby|v\d|static\/img)[^"'`]{0,160})["'`]/g,
    /["'`]((?:get|post|put)[^"'`]{0,40}(?:game|lobby|provider|slot)[^"'`]{0,80})["'`]/gi,
    /game[_/-]?list|getGame|GameList|providerList|lobby/gi,
  ];
  for (const re of patterns) {
    const hits = [...text.matchAll(re)].map((m) => m[0] || m[1]).slice(0, 50);
    console.log("\npattern", String(re).slice(0, 60), "count~", hits.length);
    console.log([...new Set(hits)].slice(0, 40));
  }

  // Extract likely endpoint string literals containing game
  const literals = [...text.matchAll(/["'`]([^"'`]{6,120})["'`]/g)]
    .map((m) => m[1])
    .filter((s) => /game|lobby|provider|slot|fish|sport|casino|img|cdn|api/i.test(s))
    .slice(0, 200);
  console.log("\nliterals sample");
  console.log([...new Set(literals)].slice(0, 100));
}
