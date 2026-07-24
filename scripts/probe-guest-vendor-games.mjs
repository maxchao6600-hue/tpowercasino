/**
 * Try guest login then open vendor game shelf in the official SPA.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import CryptoJS from "crypto-js";

const OUT = path.join(process.cwd(), "scripts/.tmp-live-scrape");
const API = "https://d5y9.apit.5t1p6.com/";
const KEYS = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
};

function encrypt(plain) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(KEYS.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(KEYS.iv);
  return CryptoJS.AES.encrypt(String(plain), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

async function apiPost(endpoint, payload) {
  const params = encrypt(
    payload == null || payload === "" ? "" : JSON.stringify(payload),
  );
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch(new URL(endpoint.replace(/^\//, ""), API), {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept-language": "en",
      origin: "https://www.tpower3.com",
      referer: "https://www.tpower3.com/",
    },
    body: JSON.stringify({ params, key }),
  });
  return res.json();
}

for (const ep of [
  "frontend/api/guest/login",
  "api/guest/login",
  "frontend/api/guestLogin",
]) {
  const r = await apiPost(ep, { domain: "www.tpower3.com" });
  console.log(ep, r.code, r.message, JSON.stringify(r.data)?.slice(0, 200));
}

const browser = await chromium.launch({
  headless: true,
  executablePath:
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 420, height: 900 } });

const gameApis = [];
page.on("response", async (res) => {
  const u = res.url();
  if (!/game\/list|myGames/i.test(u)) return;
  try {
    const json = await res.json();
    const data = json.data;
    const games = Array.isArray(data) ? data : data?.games;
    gameApis.push({
      url: u,
      code: json.code,
      len: games?.length,
      first: games?.[0],
    });
  } catch {
    // ignore
  }
});

await page.goto("https://www.tpower3.com/", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

// Inspect vue / localStorage for login hooks
const state = await page.evaluate(() => ({
  token: sessionStorage.getItem("token") || localStorage.getItem("token"),
  keys: Object.keys(sessionStorage),
  localKeys: Object.keys(localStorage),
}));
console.log("storage", state);

// Force-call game list from inside page context (same origin cookies / enableNewApi)
const inPage = await page.evaluate(async () => {
  // Find axios / vue if exposed
  return {
    hasVue: typeof window !== "undefined",
    enableNewApi: window?.Vue
      ? "vue"
      : Object.keys(window).filter((k) => /vue|axios|app/i.test(k)).slice(0, 20),
  };
});
console.log("inPage", inPage);

await browser.close();
