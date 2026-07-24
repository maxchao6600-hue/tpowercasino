import fs from "node:fs";
import CryptoJS from "crypto-js";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const API = "https://d5y9.apit.5t1p6.com/";

const KEYSETS = {
  config: {
    md5: "&W7e1vRWRH02jZIB",
    aes: "M53B?gQhkRtSeQZ^",
    iv: "4339794120398193",
  },
  proto: {
    md5: "&zSMvVTK4gbDvCcU",
    aes: "M53B?xKnTVtVnjM^",
    iv: "3579653693526433",
  },
};

function encrypt(plain, keys) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(keys.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(keys.iv);
  return CryptoJS.AES.encrypt(String(plain), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

function decryptMaybe(value, keys) {
  if (typeof value !== "string" || value.length < 16) return value;
  try {
    const out = CryptoJS.AES.decrypt(value, CryptoJS.enc.Utf8.parse(CryptoJS.MD5(keys.aes).toString()), {
      iv: CryptoJS.enc.Utf8.parse(keys.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    return out || value;
  } catch {
    return value;
  }
}

async function apiPost(endpoint, payload, keys, label) {
  const plain =
    payload === "" || payload == null
      ? ""
      : typeof payload === "string"
        ? payload
        : JSON.stringify(payload);
  const params = encrypt(plain, keys);
  const key = CryptoJS.MD5(params + keys.md5).toString();
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
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text.slice(0, 300) };
  }
  console.log("\n==", label, endpoint, "status", res.status, "code", json.code, "msg", json.message);
  if (json.data != null) {
    const data =
      typeof json.data === "string" ? decryptMaybe(json.data, keys) : json.data;
    const preview =
      typeof data === "string" ? data.slice(0, 500) : JSON.stringify(data).slice(0, 800);
    console.log("data", preview);
    return { json, data };
  }
  console.log("body", text.slice(0, 400));
  return { json };
}

// Pull more endpoint names from chunk 0
const chunk0 = fs.readFileSync("scripts/.tmp-tpower3/chunk-0.js", "utf8");
const eps = [
  ...chunk0.matchAll(
    /["'`]((?:frontend\/)?api\/[A-Za-z0-9_./-]{3,80})["'`]/g,
  ),
].map((m) => m[1]);
const uniq = [...new Set(eps)].filter((e) =>
  /game|vendor|lobby|type|hot|new|jackpot|list/i.test(e),
);
console.log("endpoints", uniq);

for (const [name, keys] of Object.entries(KEYSETS)) {
  await apiPost("api/gameTypes", "", keys, name);
  await apiPost("frontend/api/game/list", {}, keys, name);
  await apiPost("frontend/api/game/list", { vendor_id: 22 }, keys, name);
  await apiPost("api/game/list", { vendor_id: 22 }, keys, name);
  await apiPost("frontend/api/guest/login", { domain: "www.tpower3.com" }, keys, name);
}

// If gameTypes works, dump full
for (const [name, keys] of Object.entries(KEYSETS)) {
  const r = await apiPost("api/gameTypes", "", keys, `${name}-full-types`);
  if (r?.json?.code === 1000 || r?.json?.code === 1e3) {
    fs.writeFileSync(
      `scripts/.tmp-tpower3/gameTypes-${name}.json`,
      JSON.stringify(r.data ?? r.json, null, 2),
    );
  }
}
