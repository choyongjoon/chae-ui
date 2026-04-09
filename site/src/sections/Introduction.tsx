import { Card } from "chae-ui";

interface Mapping {
  source: string;
  desc: string;
  impl: string;
}

const MAPPINGS: Mapping[] = [
  {
    source: "단청",
    desc: "컬러 시스템, 색띠, Alert 위계",
    impl: "CSS variables, flexbox bands",
  },
  {
    source: "창호",
    desc: "격자 레이아웃, Card 프레임, Dialog",
    impl: "background-image, border",
  },
  {
    source: "한지",
    desc: "배경 질감, 반투명 오버레이",
    impl: "SVG noise filter, backdrop-filter",
  },
  {
    source: "목재",
    desc: "테두리, 사이드바, 구분선",
    impl: "border-color, background",
  },
  {
    source: "석탑",
    desc: "Stepper, 직각 요소",
    impl: "border-radius: 0, stacking",
  },
  {
    source: "황토",
    desc: "Warm neutral, secondary 색표",
    impl: "--secondary variable",
  },
];

export function Introduction() {
  return (
    <section
      id="introduction"
      style={{ padding: "64px 40px", maxWidth: 820, margin: "0 auto" }}
    >
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 16,
          color: "var(--foreground)",
        }}
      >
        소개
      </h2>

      <Card variant="hanzi" style={{ marginBottom: 32, lineHeight: 1.8 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--foreground)" }}>
          <strong>채 UI</strong>는{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--primary)" }}
          >
            shadcn/ui
          </a>
          의 부재 구조를 기반으로, 한국 전통 건축 양식의 미학을 현대 웹 화면에 접목한 양식 체계입니다.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            color: "var(--foreground)",
            marginTop: 12,
          }}
        >
          <strong>채(彩)</strong>는 고운 빛깔과 채색을, <strong>채</strong>(고유어)는 한옥에서 건물 한 동을 세는 단위를 뜻합니다.
          단청의 오방색 체계, 창호의 격자 구조, 한지의 질감, 목재의 따뜻함을 React 부재로 표현합니다.
        </p>
      </Card>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 20,
          letterSpacing: "-0.01em",
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        양식 원천
      </h3>

      <Card variant="changho">
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--font-sans)",
            fontSize: 14,
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid var(--mokjae)" }}>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600 }}>
                소재
              </th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600 }}>
                UI 매핑
              </th>
              <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600 }}>
                구현
              </th>
            </tr>
          </thead>
          <tbody>
            {MAPPINGS.map((m, i) => (
              <tr
                key={m.source}
                style={{
                  borderBottom: "1px solid var(--border)",
                  background: i % 2 === 0 ? "transparent" : "var(--hanzi)",
                }}
              >
                <td
                  style={{
                    padding: "10px 12px",
                    fontWeight: 600,
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {m.source}
                </td>
                <td style={{ padding: "10px 12px" }}>{m.desc}</td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {m.impl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
