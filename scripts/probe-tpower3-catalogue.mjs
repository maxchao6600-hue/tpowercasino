import fs from "node:fs";
import CryptoJS from "crypto-js";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const API = "https://d5y9.apit.5t1p6.com/";
const DOMAIN = "www.tpower3.com";
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
  const plain =
    payload === "" || payload == null
      ? ""
      : typeof payload === "string"
        ? payload
        : JSON.stringify(payload);
  const params = encrypt(plain);
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const url = new URL(endpoint.replace(/^\//, ""), API).href;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "user-agent": UA,
      "content-type": "application/json",
      "accept-language": "en",
      origin: "https://www.tpower3.com",
      referer: "https://www.tpower3.com/",
    },
    body: JSON.stringify({ params, key }),
  });
  const json = await res.json();
  return json;
}

const trials = [
  ["frontend/api/lobby/vendors", { domain: DOMAIN }],
  ["api/newVendorsByDomain", { domain: DOMAIN }],
  ["api/vendorByDomain", { domain: DOMAIN }],
  ["frontend/api/vendor/game-types", { domain: DOMAIN }],
  ["api/vendor/gameTypesByDomain", { domain: DOMAIN }],
  ["frontend/api/lobby/games", { domain: DOMAIN }],
  ["frontend/api/game/list", { domain: DOMAIN }],
  ["frontend/api/game/list", { domain: DOMAIN, vendor_id: 22 }],
  ["frontend/api/game/list-by-types", { domain: DOMAIN, type_id: 2 }],
  ["api/myGamesByDomain", { domain: DOMAIN }],
  ["api/getGamesByTagByDomain", { domain: DOMAIN, tag: "hot" }],
  ["api/getTopGamesByDomain", { domain: DOMAIN }],
  ["api/getPromotionGames", { domain: DOMAIN }],
  ["frontend/api/advertise/list", { domain: DOMAIN }],
];

for (const [ep, body] of trials) {
  try {
    const json = await apiPost(ep, body);
    const preview = JSON.stringify(json).slice(0, 700);
    console.log("\n==", ep, "code", json.code, preview);
    if (json.code === 1000) {
      const name = ep.replace(/[^\w]+/g, "_");
      fs.writeFileSync(
        `scripts/.tmp-tpower3/resp-${name}.json`,
        JSON.stringify(json, null, 2),
      );
    }
  } catch (e) {
    console.log("\n==", ep, "ERR", e.message);
  }
}
