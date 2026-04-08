import type { ReactNode } from "react";

export interface AlertProps {
  variant?: "info" | "warning" | "error";
  title: string;
  children?: ReactNode;
}

/** Alert — 단청 위계: info=청, warning=황, error=적 */
export function Alert({ variant = "info", title, children }: AlertProps) {
  const c = { info: { border: "var(--cheong)", bg: "rgba(43,107,94,0.06)", icon: "◈", color: "var(--cheong)" }, warning: { border: "var(--hwang)", bg: "rgba(212,168,67,0.08)", icon: "◇", color: "var(--mokjae)" }, error: { border: "var(--jeok)", bg: "rgba(194,59,59,0.06)", icon: "◆", color: "var(--jeok)" } }[variant];
  return (
    <div style={{ padding: "14px 16px", borderRadius: "2px", borderLeft: `3px solid ${c.border}`, background: c.bg }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: children ? "6px" : 0 }}>
        <span style={{ color: c.color, fontSize: "14px" }}>{c.icon}</span>
        <span style={{ fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-serif)", color: c.color }}>{title}</span>
      </div>
      {children && <p style={{ fontSize: "13px", color: "var(--muted-foreground)", lineHeight: 1.6, paddingLeft: "22px" }}>{children}</p>}
    </div>
  );
}
