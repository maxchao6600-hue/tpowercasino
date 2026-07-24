/**
 * Live DOM debug for homepage FAQ accordion.
 */
import { chromium } from "playwright";
import fs from "node:fs";

const URL = process.env.DEBUG_URL || "http://localhost:3000/en";

const browser = await chromium.launch({
  headless: true,
  channel: "chrome",
});
const page = await browser.newPage();

const consoleLogs = [];
const pageErrors = [];
page.on("console", (msg) => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
page.on("pageerror", (err) => pageErrors.push(String(err)));

await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2500);

// Dismiss age gate if present
for (const name of [/I am 21 or older/i, /我已满\s*21/i, /21 or older/i]) {
  const btn = page.getByRole("button", { name });
  if (await btn.count()) {
    await btn.first().click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(400);
    break;
  }
}

const probe = await page.evaluate(() => {
  const bodyText = document.body?.innerText || "";
  const hasFaqText = /Frequently asked questions|常见问题/i.test(bodyText);
  const allButtons = [...document.querySelectorAll("button")].map((b) => ({
    text: (b.textContent || "").trim().slice(0, 60),
    dataState: b.getAttribute("data-state"),
    ariaExpanded: b.getAttribute("aria-expanded"),
    ariaControls: b.getAttribute("aria-controls"),
    type: b.getAttribute("type"),
    className: (b.className || "").toString().slice(0, 80),
  }));

  const h2s = [...document.querySelectorAll("h2")].map((h) =>
    (h.textContent || "").trim(),
  );

  // Radix accordion markers
  const radixTriggers = document.querySelectorAll(
    "[data-radix-collection-item], button[aria-expanded]",
  ).length;

  const accordionRoots = [...document.querySelectorAll("[data-orientation]")].map(
    (el) => ({
      tag: el.tagName,
      orientation: el.getAttribute("data-orientation"),
      childButtons: el.querySelectorAll("button").length,
      html: el.outerHTML.slice(0, 400),
    }),
  );

  // Any element mentioning create-account FAQ question
  const q = [...document.querySelectorAll("button, h3, summary, div")].find((el) =>
    /How do I create a TPOWER account/i.test(el.textContent || ""),
  );

  return {
    title: document.title,
    hasFaqText,
    h2s,
    buttonCount: allButtons.length,
    buttonsWithAriaExpanded: allButtons.filter((b) => b.ariaExpanded != null),
    buttonsWithDataState: allButtons.filter((b) => b.dataState != null),
    sampleButtons: allButtons.slice(0, 30),
    radixTriggers,
    accordionRoots,
    questionNode: q
      ? {
          tag: q.tagName,
          className: (q.className || "").toString().slice(0, 100),
          dataState: q.getAttribute("data-state"),
          ariaExpanded: q.getAttribute("aria-expanded"),
          parent: q.parentElement?.tagName,
          outer: q.outerHTML.slice(0, 500),
        }
      : null,
    reactRoot: !!document.getElementById("__next") || !!document.querySelector("[data-reactroot], body > div"),
    nextData: !!document.getElementById("__NEXT_DATA__"),
  };
});

const report = {
  url: URL,
  pageErrors,
  consoleErrors: consoleLogs.filter((l) => l.startsWith("[error]")),
  consoleWarnings: consoleLogs
    .filter((l) => l.startsWith("[warning]"))
    .slice(0, 20),
  probe,
};

fs.writeFileSync(
  "scripts/_faq-debug-report.json",
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report, null, 2));

// If we found an expandable button, click it and capture after state
const expandable = page.locator("button[aria-expanded]").first();
if ((await expandable.count()) > 0) {
  const before = await expandable.getAttribute("aria-expanded");
  await expandable.click();
  await page.waitForTimeout(600);
  const after = await expandable.evaluate((btn) => {
    const id = btn.getAttribute("aria-controls");
    const content = id ? document.getElementById(id) : null;
    const cs = content ? getComputedStyle(content) : null;
    return {
      ariaExpanded: btn.getAttribute("aria-expanded"),
      dataState: btn.getAttribute("data-state"),
      contentExists: !!content,
      contentHidden: content?.hidden ?? null,
      contentDataState: content?.getAttribute("data-state") ?? null,
      textLen: (content?.textContent || "").trim().length,
      height: cs?.height,
      display: cs?.display,
      opacity: cs?.opacity,
      overflow: cs?.overflow,
      animationName: cs?.animationName,
      rectHeight: content?.getBoundingClientRect().height ?? null,
      contentHTML: content?.innerHTML?.slice(0, 300) ?? null,
    };
  });
  console.log("\nCLICK RESULT", { before, after });
  fs.writeFileSync(
    "scripts/_faq-debug-click.json",
    JSON.stringify({ before, after }, null, 2),
  );
} else {
  console.log("\nNO button[aria-expanded] FOUND — cannot click-test");
}

await browser.close();
