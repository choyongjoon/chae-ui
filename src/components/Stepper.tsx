export interface StepperProps {
  steps: string[];
  current?: number;
}

/** 석탑 스테퍼 — 직각, 쌓아올리는 형태 */
export function Stepper({ steps, current = 0 }: StepperProps) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {steps.map((_, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 32, height: 32, borderRadius: 0, background: i <= current ? "var(--primary)" : "var(--muted)", color: i <= current ? "var(--primary-foreground)" : "var(--muted-foreground)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-serif)", transition: "all 0.3s", transform: i <= current ? "none" : "scale(0.9)" }}>{i + 1}</div>
          {i < steps.length - 1 && <div style={{ width: 40, height: 2, background: i < current ? "var(--primary)" : "var(--border)", transition: "background 0.3s" }} />}
        </div>
      ))}
    </div>
  );
}
