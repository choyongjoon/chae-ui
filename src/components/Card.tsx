import { useState } from "react";
import type { CSSProperties, ReactNode, HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "changho" | "hanzi" | "dancheong" | "stone";
  style?: CSSProperties;
  className?: string;
}

const STYLES: Record<string, CSSProperties> = {
  default: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "4px" },
  changho: { background: "var(--card)", border: "var(--changho-border, 3px) solid var(--changho-color, var(--mokjae))", borderRadius: "2px" },
  hanzi: { background: "var(--hanzi)", border: "1px solid var(--border)", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" },
  dancheong: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "4px", borderTop: "3px solid var(--jeok)" },
  stone: { background: "#F0EDEA", border: "1px solid var(--seok)", borderRadius: "0px" },
};

export function Card({ children, variant = "default", style: sx = {}, className = "", ...props }: CardProps) {
  const cs = STYLES[variant];
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className={className}
      style={{
        ...cs, padding: "20px", position: "relative", transition: "box-shadow 0.2s",
        boxShadow: hov ? "0 4px 16px rgba(0,0,0,0.06)" : cs.boxShadow || "none",
        ...sx,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
