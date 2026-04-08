import { stripePresets } from "../lib/theme";

/**
 * 단청 색띠 — 명확한 색띠로 구분 (그라디언트 없음)
 * 실제 단청처럼 각 색의 경계가 분명합니다.
 */
export function DancheongStripe({ height = 8, colors, preset = "default" }) {
  const bands = colors || stripePresets[preset] || stripePresets.default;
  return (
    <div style={{ display: "flex", height, width: "100%" }}>
      {bands.map((b, i) => (
        <div key={i} style={{ flex: b.flex, background: b.color, height: "100%" }} />
      ))}
    </div>
  );
}
