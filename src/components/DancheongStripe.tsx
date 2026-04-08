import { stripePresets } from "../lib/theme";
import type { StripeBand } from "../lib/theme";

export interface DancheongStripeProps {
  height?: number;
  colors?: StripeBand[];
  preset?: string;
}

/**
 * 단청 색띠 — 명확한 색띠로 구분 (그라디언트 없음)
 * 실제 단청처럼 각 색의 경계가 분명합니다.
 */
export function DancheongStripe({ height = 8, colors, preset = "default" }: DancheongStripeProps) {
  const bands = colors || stripePresets[preset as keyof typeof stripePresets] || stripePresets.default;
  return (
    <div style={{ display: "flex", height, width: "100%" }}>
      {bands.map((b, i) => (
        <div key={i} style={{ flex: b.flex, background: b.color, height: "100%" }} />
      ))}
    </div>
  );
}
