/**
 * Rebrand Chinese copy: TPOWER线上博彩 primary, limit 娱乐城.
 * Run: node scripts/rebrand-zh-online-betting.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const FILES = [
  "src/content/zh/index.ts",
  "src/data/homepage-seo.ts",
  "src/data/promotions-seo.ts",
  "src/data/promotions.ts",
  "src/data/payments.ts",
  "src/data/blog.ts",
  "src/data/providers.ts",
  "src/data/category-seo.ts",
  "src/data/games-seo.ts",
  "src/data/faq.ts",
  "src/data/news.ts",
  "src/data/vip.ts",
  "src/data/categories.ts",
];

/** Ordered replacements — more specific first */
const REPLACEMENTS = [
  // Primary brand
  ["TPOWER官方娱乐城", "TPOWER线上博彩"],
  ["TPOWER娱乐城游戏", "TPOWER线上博彩游戏"],
  ["TPOWER娱乐城大厅", "TPOWER游戏大厅"],
  ["TPOWER娱乐城", "TPOWER线上博彩"],

  // Market phrasing
  ["马来西亚娱乐城官方入口", "马来西亚线上博彩官方入口"],
  ["马来西亚娱乐城官方平台", "马来西亚线上博彩官方平台"],
  ["马来西亚娱乐城官方大厅", "TPOWER官方平台大厅"],
  ["马来西亚娱乐城玩家", "马来西亚线上博彩玩家"],
  ["马来西亚娱乐城", "马来西亚线上博彩"],
  ["马来西亚手机娱乐城", "马来西亚手机博彩"],
  ["手机版娱乐城", "手机博彩APP"],
  ["手机娱乐城", "手机博彩"],

  // Product / CTA phrasing
  ["进入娱乐城大厅", "进入TPOWER游戏大厅"],
  ["进入娱乐城", "进入游戏大厅"],
  ["直接进娱乐城开转", "直接进大厅开转"],
  ["娱乐城大厅", "游戏大厅"],
  ["官方娱乐城", "官方平台"],
  ["把官方娱乐城装进手机", "把TPOWER官方APP装进手机"],
  ["高端娱乐城大厅", "高端游戏大厅"],
  ["完整娱乐城", "完整官方平台"],
  ["正经的TPOWER线上博彩优惠中心", "正经的TPOWER线上博彩优惠中心"],
  ["高端娱乐城优惠页", "高端官方优惠页"],
  ["娱乐城攻略", "TPOWER线上博彩攻略"],
  ["娱乐城流量", "平台流量"],

  // Avoid casino-site tone
  ["模板赌场站", "模板博彩站"],
  ["多数赌场站靠吵", "多数博彩站靠吵"],
  ["真正的线上赌场", "真正的线上博彩平台"],
  ["像真正的线上赌场", "像真正的线上博彩平台"],
  ["赌场工作室", "游戏工作室"],
  ["赌场和体育投注", "博彩与体育投注"],
  ["除了赌场游戏还有", "除了平台游戏还有"],

  // Games page titles
  ["娱乐城游戏｜", "线上博彩游戏｜"],
  ["娱乐城游戏常见问题", "线上博彩游戏常见问题"],
  ["马上进入TPOWER线上博彩", "马上进入TPOWER官方平台"],
  ["为什么选TPOWER线上博彩", "为什么选TPOWER线上博彩"],
  ["关于TPOWER线上博彩的常见问题", "关于TPOWER线上博彩的常见问题"],

  // Footer / misc
  ["马来西亚线上博彩官方气质", "马来西亚线上博彩官方气质"],
];

function rebrand(content) {
  let out = content;
  for (const [from, to] of REPLACEMENTS) {
    if (from === to) continue;
    out = out.split(from).join(to);
  }
  return out;
}

let changedFiles = 0;
for (const rel of FILES) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) {
    console.log("skip missing", rel);
    continue;
  }
  const before = fs.readFileSync(abs, "utf8");
  const after = rebrand(before);
  if (after !== before) {
    fs.writeFileSync(abs, after);
    changedFiles += 1;
    const left = (after.match(/娱乐城/g) || []).length;
    console.log("updated", rel, "| 娱乐城 remaining:", left);
  } else {
    console.log("unchanged", rel);
  }
}

console.log("files changed:", changedFiles);
