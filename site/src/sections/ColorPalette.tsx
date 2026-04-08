import { Badge } from "chae-ui";

interface ColorItem {
  name: string;
  var: string;
  hex: string;
  meaning?: string;
  dark?: boolean;
}

const OBANGSAEK: ColorItem[] = [
  { name: "청 cheong", var: "--cheong", hex: "#2B6B5E", meaning: "木 / 동 / Blue-green" },
  { name: "백 baek", var: "--baek", hex: "#F5F0E8", meaning: "金 / 서 / Warm white", dark: true },
  { name: "적 jeok", var: "--jeok", hex: "#C23B3B", meaning: "火 / 남 / Red" },
  { name: "흑 heuk", var: "--heuk", hex: "#2C2825", meaning: "水 / 북 / Near black" },
  { name: "황 hwang", var: "--hwang", hex: "#D4A843", meaning: "土 / 중앙 / Gold yellow" },
];

const MATERIALS: ColorItem[] = [
  { name: "한지 hanzi", var: "--hanzi", hex: "#FAF6EF", dark: true },
  { name: "황토 hwangto", var: "--hwangto", hex: "#C8A97E" },
  { name: "목재 mokjae", var: "--mokjae", hex: "#8B6F4E" },
  { name: "기와 giwa", var: "--giwa", hex: "#4A4440" },
  { name: "석 seok", var: "--seok", hex: "#9B9590" },
  { name: "초가 choga", var: "--choga", hex: "#B8A88A" },
  { name: "송목 songmok", var: "--songmok", hex: "#5C7A5D" },
  { name: "먹 meok", var: "--meok", hex: "#3D3835" },
];

interface SwatchProps {
  name: string;
  hex: string;
  cssVar: string;
  meaning?: string;
  dark?: boolean;
}

function Swatch({ name, hex, cssVar, meaning, dark }: SwatchProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 4,
          background: hex,
          border: dark ? "1px solid var(--border)" : "none",
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600 }}>
          {name}
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 2 }}>
          <Badge variant="outline">{cssVar}</Badge>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              color: "var(--muted-foreground)",
            }}
          >
            {hex}
          </span>
        </div>
        {meaning && (
          <div
            style={{
              fontSize: 12,
              color: "var(--muted-foreground)",
              marginTop: 2,
            }}
          >
            {meaning}
          </div>
        )}
      </div>
    </div>
  );
}

export function ColorPalette() {
  return (
    <section
      id="colors"
      style={{ padding: "64px 40px", maxWidth: 820, margin: "0 auto" }}
    >
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        색상 팔레트
      </h2>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        오방색 (Five Cardinal Colors)
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "var(--muted-foreground)",
          marginBottom: 20,
          lineHeight: 1.6,
        }}
      >
        음양오행에 기반한 다섯 가지 기본색. 각 색은 방위, 계절, 원소와 대응됩니다.
      </p>
      <div style={{ marginBottom: 40 }}>
        {OBANGSAEK.map((c) => (
          <Swatch key={c.var} name={c.name} hex={c.hex} cssVar={c.var} meaning={c.meaning} dark={c.dark} />
        ))}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        자연 소재 (Natural Materials)
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "var(--muted-foreground)",
          marginBottom: 20,
          lineHeight: 1.6,
        }}
      >
        한옥의 건축 재료에서 추출한 보조 팔레트.
      </p>
      <div>
        {MATERIALS.map((c) => (
          <Swatch key={c.var} name={c.name} hex={c.hex} cssVar={c.var} dark={c.dark} />
        ))}
      </div>
    </section>
  );
}
