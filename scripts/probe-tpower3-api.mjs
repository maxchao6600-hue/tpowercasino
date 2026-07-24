import fs from "node:fs";
import crypto from "node:crypto";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const APP_JS = "scripts/.tmp-tpower3/app.77bb835a63600bc9d583.js";
const text = fs.readFileSync(APP_JS, "utf8");

// Pull API constants near $API_URL
const apiBlock = text.match(/\$API_MD5_KEY:[\s\S]{0,800}?\$CHATAPI_IV:[^,]+/);
console.log("apiBlock\n", apiBlock?.[0]?.slice(0, 800));

const apiUrlMatch = text.match(/\$API_URL:\s*["']([^"']+)["']/);
const md5Match = text.match(/\$API_MD5_KEY:\s*["']([^"']+)["']/);
const aesMatch = text.match(/\$API_AES_KEY:\s*["']([^"']+)["']/);
const ivMatch = text.match(/\$API_IV:\s*["']([^"']+)["']/);
console.log({
  apiUrl: apiUrlMatch?.[1],
  md5: md5Match?.[1],
  aes: aesMatch?.[1],
  iv: ivMatch?.[1],
});

// Find game-related endpoint strings more carefully
const gameBits = [...text.matchAll(/[^"'`]{0,40}(?:game\/list|getGame|GameList|vendor|thumbnail|iconUrl|imgUrl|hotGame|newGame)[^"'`]{0,80}/gi)]
  .map((m) => m[0])
  .slice(0, 80);
console.log("\ngameBits\n", [...new Set(gameBits)].join("\n"));

// Fetch public configs
const configs = [
  "https://storage.googleapis.com/cdn-betmonsters-com-cdn-bucket-online/gff/config/apis.json",
  "https://storage.googleapis.com/cdn-betmonsters-com-cdn-bucket-online/TPower/event/lottery/lottery_button_en.png",
];

for (const url of configs) {
  try {
    const res = await fetch(url + (url.endsWith("json") ? `?t=${Date.now()}` : ""), {
      headers: { "user-agent": UA },
    });
    const buf = Buffer.from(await res.arrayBuffer());
    console.log("\nCFG", url, res.status, res.headers.get("content-type"), buf.length);
    if ((res.headers.get("content-type") || "").includes("json")) {
      console.log(buf.toString("utf8").slice(0, 3000));
      fs.writeFileSync("scripts/.tmp-tpower3/apis.json", buf);
    }
  } catch (e) {
    console.log("CFG ERR", url, e.message);
  }
}

// Try listing CDN prefix via known paths in JS
const cdnPaths = [
  ...text.matchAll(
    /cdn-betmonsters-com-cdn-bucket-online\/[A-Za-z0-9_./%-]+/g,
  ),
].map((m) => m[0]);
console.log("\ncdn paths", [...new Set(cdnPaths)].slice(0, 80));

// Probe API root and common game endpoints unauthenticated
const API = apiUrlMatch?.[1] || "https://d5y9.apit.5t1p6.com/";
const probes = [
  "frontend/api/guest/login",
  "api/getAgentCodeByDomain",
  "frontend/api/agent/downline-code",
  "api/game/list",
  "game/list",
  "frontend/api/game/list",
  "frontend/api/games",
  "frontend/api/vendor/list",
  "api/marquee/win_point/getList",
  "frontend/api/marquee/win-points",
];

async function tryPost(endpoint, body = {}) {
  const url = new URL(endpoint.replace(/^\//, ""), API).href;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "user-agent": UA,
      "content-type": "application/json",
      origin: "https://www.tpower3.com",
      referer: "https://www.tpower3.com/",
    },
    body: JSON.stringify(body),
  });
  const t = await res.text();
  return { url, status: res.status, ct: res.headers.get("content-type"), body: t.slice(0, 1500) };
}

async function tryGet(endpoint) {
  const url = new URL(endpoint.replace(/^\//, ""), API).href;
  const res = await fetch(url, {
    headers: {
      "user-agent": UA,
      origin: "https://www.tpower3.com",
      referer: "https://www.tpower3.com/",
    },
  });
  const t = await res.text();
  return { url, status: res.status, ct: res.headers.get("content-type"), body: t.slice(0, 1500) };
}

for (const ep of probes) {
  try {
    console.log("\nGET", await tryGet(ep));
  } catch (e) {
    console.log("\nGET ERR", ep, e.message);
  }
  try {
    console.log("POST {}", await tryPost(ep, {}));
  } catch (e) {
    console.log("POST ERR", ep, e.message);
  }
}

// Domain agent code
try {
  console.log(
    "\nagent by domain",
    await tryPost("frontend/api/agent/downline-code", {
      domain: "www.tpower3.com",
    }),
  );
  console.log(
    await tryPost("api/getAgentCodeByDomain", { domain: "www.tpower3.com" }),
  );
} catch (e) {
  console.log(e);
}
