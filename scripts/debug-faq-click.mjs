import { chromium } from "playwright";
import fs from "node:fs";

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage();

const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e)));
page.on("console", (m) => {
  if (m.type() === "error") pageErrors.push(`console:${m.text()}`);
});

await page.goto("http://localhost:3000/en", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(3000);

const age = page.getByRole("button", { name: /21 or older/i });
if (await age.count()) await age.first().click();
await page.waitForTimeout(400);

const trigger = page.getByRole("button", {
  name: /How do I create a TPOWER account/i,
});
await trigger.scrollIntoViewIfNeeded();

async function snap(label) {
  return trigger.evaluate((btn, lbl) => {
    // Item is the accordion item wrapper, not the button itself
    const item =
      btn.closest("[data-radix-collection-item]")?.parentElement?.parentElement ||
      btn.parentElement?.parentElement;
    const region =
      item?.querySelector('[role="region"]') ||
      btn.parentElement?.parentElement?.querySelector('[role="region"]');

    // React fiber / props check
    const fiberKey = Object.keys(btn).find((k) =>
      k.startsWith("__reactFiber") || k.startsWith("__reactProps"),
    );
    const propsKey = Object.keys(btn).find((k) => k.startsWith("__reactProps"));
    const props = propsKey ? btn[propsKey] : null;

    const cs = region ? getComputedStyle(region) : null;
    const chevron = btn.querySelector("svg");

    return {
      label: lbl,
      ariaExpanded: btn.getAttribute("aria-expanded"),
      dataState: btn.getAttribute("data-state"),
      ariaControls: btn.getAttribute("aria-controls"),
      itemTag: item?.tagName ?? null,
      itemState: item?.getAttribute("data-state") ?? null,
      itemClass: (item?.className || "").toString().slice(0, 80),
      regionExists: !!region,
      regionHidden: region?.hidden ?? null,
      regionState: region?.getAttribute("data-state") ?? null,
      regionTextLen: (region?.textContent || "").trim().length,
      regionText: (region?.textContent || "").trim().slice(0, 160),
      regionRectH: region?.getBoundingClientRect().height ?? null,
      computed: cs
        ? {
            display: cs.display,
            visibility: cs.visibility,
            opacity: cs.opacity,
            height: cs.height,
            overflow: cs.overflow,
            animationName: cs.animationName,
          }
        : null,
      chevronTransform: chevron ? getComputedStyle(chevron).transform : null,
      react: {
        hasFiber: !!fiberKey,
        hasProps: !!propsKey,
        hasOnClick: typeof props?.onClick === "function",
        propKeys: props ? Object.keys(props).slice(0, 20) : [],
      },
    };
  }, label);
}

const before = await snap("before");

// Native DOM click + Playwright click
await trigger.click();
await page.waitForTimeout(800);
const afterPlaywrightClick = await snap("afterPlaywrightClick");

await trigger.evaluate((btn) => btn.click());
await page.waitForTimeout(800);
const afterDomClick = await snap("afterDomClick");

// Keyboard
await trigger.focus();
await page.keyboard.press("Enter");
await page.waitForTimeout(800);
const afterEnter = await snap("afterEnter");

// Is something covering the button?
const overlay = await trigger.evaluate((btn) => {
  const r = btn.getBoundingClientRect();
  const el = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
  return {
    topTag: el?.tagName,
    topText: (el?.textContent || "").trim().slice(0, 40),
    topClass: (el?.className || "").toString().slice(0, 100),
    contains: el ? btn.contains(el) || el === btn : false,
    ageGateOpen: !!document.querySelector('[aria-modal="true"]'),
  };
});

const report = {
  pageErrors,
  overlay,
  before,
  afterPlaywrightClick,
  afterDomClick,
  afterEnter,
};

fs.writeFileSync("scripts/_faq-click-proof.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

await browser.close();

const opened = [afterPlaywrightClick, afterDomClick, afterEnter].some(
  (s) => s.dataState === "open" || s.ariaExpanded === "true",
);
process.exit(opened ? 0 : 2);
