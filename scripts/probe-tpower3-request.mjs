import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import CryptoJS from "crypto-js";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const BASE = "https://www.tpower3.com";
const API = "https://d5y9.apit.5t1p6.com/";

// Runtime keys from Vue prototype overwrite (active site keys)
const KEYS_A = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
};
const KEYS_B = {
  md5: "&zSMvVTK4gbDvCcU",
  aes: "M53B?xKnTVtVnjM^",
  iv: "3579653693526433",
};

function encrypt(plain, keys) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(keys.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(keys.iv);
  return CryptoJS.AES.encrypt(plain, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

function decrypt(cipher, keys) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(keys.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(keys.iv);
  return CryptoJS.AES.decrypt(cipher, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
}

function md5(s) {
  return crypto.createHash("md5").update(s).digest("hex");
}

// Download a few more chunks that likely contain HTTP layer
const manifest = fs.readFileSync("scripts/.tmp-tpower3/manifest.txt", "utf8");
const mapMatch = manifest.match(/n\.src=d\.p\+"static\/js\/"\+e\+"\."\+\{([^}]+)\}/);
const chunkMap = {};
if (mapMatch) {
  for (const part of mapMatch[1].split(",")) {
    const [id, hash] = part.split(":");
    chunkMap[id.trim()] = hash.replace(/"/g, "");
  }
}
console.log("chunks", Object.keys(chunkMap).length);

async function fetchChunk(id) {
  const hash = chunkMap[id];
  if (!hash) return null;
  const url = `${BASE}/static/js/${id}.${hash}.js`;
  const res = await fetch(url, { headers: { "user-agent": UA } });
  const text = await res.text();
  const out = path.join("scripts/.tmp-tpower3", `chunk-${id}.js`);
  fs.writeFileSync(out, text);
  return text;
}

// Search chunks mentioning Encrypt / game/list / frontend/api
const interesting = [];
for (const id of Object.keys(chunkMap)) {
  // sample likely API chunks - search first 80 chunks by downloading those with keywords later
}
// Download chunks 0-60 first wave
for (let id = 0; id <= 60; id++) {
  if (!chunkMap[id]) continue;
  try {
    const text = await fetchChunk(id);
    if (!text) continue;
    if (
      /Encrypt\(|\$API_MD5|frontend\/api\/game|game\/list|axios\.intercept|transformRequest|Invalid key|key\"\s*:/.test(
        text,
      )
    ) {
      interesting.push(id);
      console.log("interesting chunk", id, "len", text.length);
      const idx = text.search(/Encrypt\(|frontend\/api\/game|\$API_MD5_KEY|transformRequest/);
      if (idx >= 0) console.log(text.slice(Math.max(0, idx - 120), idx + 500));
    }
  } catch (e) {
    console.log("chunk err", id, e.message);
  }
}
console.log("interesting ids", interesting);

// Try common encrypted body shapes
async function postShapes(endpoint, payload, keys, label) {
  const plain = JSON.stringify(payload);
  const enc = encrypt(plain, keys);
  const shapes = [
    { data: enc },
    { key: enc },
    { payload: enc },
    { data: enc, key: md5(keys.md5 + plain) },
    { data: enc, sign: md5(keys.md5 + plain) },
    { data: enc, key: keys.md5 },
    { data: enc, md5: md5(plain + keys.md5) },
    { encrypt: enc },
    enc,
  ];
  for (let i = 0; i < shapes.length; i++) {
    const body = shapes[i];
    const res = await fetch(new URL(endpoint, API), {
      method: "POST",
      headers: {
        "user-agent": UA,
        "content-type": "application/json",
        origin: "https://www.tpower3.com",
        referer: "https://www.tpower3.com/",
      },
      body: typeof body === "string" ? JSON.stringify({ data: body }) : JSON.stringify(body),
    });
    const text = await res.text();
    console.log(label, "shape", i, res.status, text.slice(0, 220));
    if (!text.includes("Invalid key") && !text.includes("Verification error")) {
      console.log("SUCCESS?", text.slice(0, 1000));
      // try decrypt response fields
      try {
        const json = JSON.parse(text);
        if (typeof json.data === "string") {
          console.log("decrypted", decrypt(json.data, keys).slice(0, 500));
        }
      } catch {}
    }
  }
}

const payload = { domain: "www.tpower3.com" };
await postShapes("frontend/api/agent/downline-code", payload, KEYS_A, "A");
await postShapes("frontend/api/agent/downline-code", payload, KEYS_B, "B");
await postShapes("frontend/api/guest/login", { domain: "www.tpower3.com" }, KEYS_B, "B-login");
