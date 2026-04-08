import { DancheongStripe } from "./DancheongStripe";

export interface SeparatorProps {
  variant?: "default" | "dancheong";
  label?: string;
}

export function Separator({ variant = "default", label }: SeparatorProps) {
  if (variant === "dancheong") return <div style={{ margin: "20px 0" }}><DancheongStripe /></div>;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "16px 0" }}>
      <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      {label && <span style={{ fontSize: "12px", color: "var(--muted-foreground)", fontFamily: "var(--font-serif)", fontWeight: 400 }}>{label}</span>}
      <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
    </div>
  );
}
