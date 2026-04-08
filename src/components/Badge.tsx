import type { ReactNode } from "react";

export interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "accent" | "outline";
  children: ReactNode;
}

export function Badge({ variant = "default", children }: BadgeProps) {
  const v = {
    default: { bg: "var(--primary)", color: "var(--primary-foreground)" },
    secondary: { bg: "var(--muted)", color: "var(--muted-foreground)" },
    destructive: { bg: "var(--destructive)", color: "var(--destructive-foreground)" },
    accent: { bg: "var(--accent)", color: "var(--accent-foreground)" },
    outline: { bg: "transparent", color: "var(--foreground)", border: "1.5px solid var(--border)" },
  }[variant];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "2px 10px",
      fontSize: "12px", fontWeight: 500, borderRadius: "2px",
      background: v.bg, color: v.color, border: v.border || "none",
      fontFamily: "var(--font-sans)",
    }}>{children}</span>
  );
}
