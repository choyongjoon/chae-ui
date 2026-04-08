/**
 * 채 UI — 스크린샷 캡처 스크립트
 *
 * 사용법: node scripts/capture.mjs [url] [output-dir]
 * 기본값: http://localhost:5173 → .review/
 *
 * dev server가 떠있는 상태에서 실행합니다.
 * 전체 페이지 + 각 뷰포트(desktop, tablet, mobile) 캡처.
 */

import { chromium } from "playwright";
import { mkdirSync, existsSync } from "fs";
import { join } from "path";

const BASE_URL = process.argv[2] || "http://localhost:5173";
const OUTPUT_DIR = process.argv[3] || ".review";
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const RUN_DIR = join(OUTPUT_DIR, TIMESTAMP);

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

async function capture() {
  mkdirSync(RUN_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();

  for (const vp of VIEWPORTS) {
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    // 폰트 로딩 대기
    await page.waitForTimeout(2000);

    // 전체 페이지 스크린샷
    await page.screenshot({
      path: join(RUN_DIR, `${vp.name}-full.png`),
      fullPage: true,
    });

    // 뷰포트 크기 스크린샷 (above the fold)
    await page.screenshot({
      path: join(RUN_DIR, `${vp.name}-fold.png`),
      fullPage: false,
    });

    // 탭 전환해서 각 탭도 캡처
    const tabButtons = await page.$$('button');
    for (const btn of tabButtons) {
      const text = await btn.textContent();
      if (["오방색 팔레트", "전통 패턴"].includes(text?.trim())) {
        await btn.click();
        await page.waitForTimeout(500);
        const tabName = text.trim() === "오방색 팔레트" ? "palette" : "patterns";
        await page.screenshot({
          path: join(RUN_DIR, `${vp.name}-${tabName}.png`),
          fullPage: true,
        });
      }
    }

    // 컴포넌트 탭으로 복귀
    for (const btn of tabButtons) {
      const text = await btn.textContent();
      if (text?.trim() === "컴포넌트") {
        await btn.click();
        break;
      }
    }

    await page.close();
  }

  await browser.close();

  console.log(`Screenshots saved to ${RUN_DIR}/`);
  console.log("Files:");
  const fs = await import("fs");
  fs.readdirSync(RUN_DIR).forEach((f) => console.log(`  ${f}`));

  // 최신 캡처 경로를 파일로 저장 (리뷰어가 참조)
  fs.writeFileSync(join(OUTPUT_DIR, "latest"), RUN_DIR);
}

capture().catch((err) => {
  console.error("Capture failed:", err.message);
  process.exit(1);
});
