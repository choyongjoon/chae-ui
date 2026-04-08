import { useState } from "react";

const VARIANTS = {
  default: { bg: "var(--primary)", color: "var(--primary-foreground)", border: "none" },
  destructive: { bg: "var(--destructive)", color: "var(--destructive-foreground)", border: "none" },
  outline: { bg: "transparent", color: "var(--foreground)", border: "1.5px solid var(--border)" },
  secondary: { bg: "var(--secondary)", color: "var(--secondary-foreground)", border: "none" },
  ghost: { bg: "transparent", color: "var(--foreground)", border: "none" },
  accent: { bg: "var(--accent)", color: "var(--accent-foreground)", border: "none" },
  dancheong: { bg: "var(--jeok)", color: "var(--baek)", border: "none", split: true },
};

const SIZES = {
  sm: { padding: "6px 12px", fontSize: "12px", lineHeight: "16px" },
  default: { padding: "8px 16px", fontSize: "14px", lineHeight: "20px" },
  lg: { padding: "12px 28px", fontSize: "16px", lineHeight: "24px" },
};

export function Button({ variant = "default", size = "default", children, style: sx = {}, ...props }) {
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const [hov, setHov] = useState(false);

  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px",
    fontFamily: "var(--font-sans)", fontWeight: 500, cursor: "pointer",
    borderRadius: "4px", transition: "all 0.15s", letterSpacing: "-0.01em",
    ...s,
  };

  if (v.split) {
    return (
      <button
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          ...base, color: "var(--baek)", border: "none", borderRadius: "2px",
          background: "var(--jeok)", position: "relative", overflow: "hidden",
          filter: hov ? "brightness(1.1)" : "none", ...sx,
        }}
        {...props}
      >
        <span style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", background: "var(--cheong)" }} />
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      </button>
    );
  }

  return (
    <button
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        ...base,
        background: hov && ["outline", "ghost"].includes(variant) ? "var(--muted)" : v.bg,
        color: v.color, border: v.border,
        filter: hov && !["outline", "ghost"].includes(variant) ? "brightness(1.1)" : "none",
        ...sx,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
