import fs from "node:fs";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const BASE = "https://www.tpower3.com";

async function get(path, init = {}) {
  const url = path.startsWith("http") ? path : `${BASE}${path}`;
  const res = await fetch(url, {
    headers: {
      "user-agent": UA,
      accept: "*/*",
      referer: `${BASE}/`,
      ...(init.headers || {}),
    },
    redirect: "follow",
  });
  const buf = Buffer.from(await res.arrayBuffer());
  const ct = res.headers.get("content-type") || "";
  const text = buf.toString("utf8");
  return { url: res.url, status: res.status, ct, len: buf.length, text, buf };
}

const home = await get("/");
fs.writeFileSync("scripts/.tmp-tpower3-home.html", home.text);
console.log("home", home.status, home.len);
console.log(home.text);

// Common SPA asset paths
const candidates = [
  "/static/js/main.js",
  "/static/js/app.js",
  "/static/js/index.js",
  "/assets/index.js",
  "/main.js",
  "/app.js",
  "/static/config.js",
  "/static/js/config.js",
  "/config.js",
  "/manifest.json",
  "/static/manifest.json",
  "/version.json",
  "/api/config",
  "/api/v1/config",
  "/api/game/list",
  "/api/games",
  "/api/lobby/games",
  "/gw/game/list",
  "/member/game/list",
  "/_nuxt/",
  "/static/img/v_world/custom_icon.png",
];

for (const path of candidates) {
  try {
    const r = await get(path);
    console.log(
      "\n",
      path,
      "->",
      r.status,
      r.ct,
      r.len,
      r.text.slice(0, 200).replace(/\s+/g, " "),
    );
  } catch (e) {
    console.log("\n", path, "ERR", e.message);
  }
}

// Parse home for modulepreload / script / link
const refs = [
  ...home.text.matchAll(/(?:src|href)=["']([^"']+)["']/gi),
].map((m) => m[1]);
console.log("\nrefs", refs);

for (const ref of refs) {
  if (!/\.(js|json|css)(\?|$)/i.test(ref) && !ref.includes("static")) continue;
  try {
    const r = await get(ref);
    console.log("asset", ref, r.status, r.ct, r.len);
    if (/\.js(\?|$)/i.test(ref) && r.status === 200) {
      fs.writeFileSync(
        `scripts/.tmp-asset-${ref.replace(/[^\w.-]+/g, "_").slice(0, 80)}.js`,
        r.text.slice(0, 500000),
      );
      const apiHits = [
        ...r.text.matchAll(
          /["'`](\/(?:api|gw|member|game|lobby|v\d)[^"'`]{0,120})["'`]/g,
        ),
      ].map((m) => m[1]);
      const hostHits = [
        ...r.text.matchAll(
          /https?:\/\/[a-z0-9.-]+(?:api|cdn|img|static)[a-z0-9./_-]*/gi,
        ),
      ].map((m) => m[0]);
      console.log("  api paths", [...new Set(apiHits)].slice(0, 40));
      console.log("  hosts", [...new Set(hostHits)].slice(0, 40));
    }
  } catch (e) {
    console.log("asset ERR", ref, e.message);
  }
}
