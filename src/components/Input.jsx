import { useState } from "react";
export function Input({ label, placeholder, variant = "default", ...props }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && <label style={{ fontSize: "13px", fontWeight: 500, color: "var(--muted-foreground)" }}>{label}</label>}
      <input placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{
        padding: "9px 14px", fontSize: "14px", fontFamily: "var(--font-sans)",
        background: variant === "hanzi" ? "var(--hanzi)" : "var(--card)",
        border: f ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
        borderRadius: variant === "changho" ? "2px" : "4px", outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: f ? "0 0 0 3px rgba(43,107,94,0.1)" : "none", color: "var(--foreground)",
      }} {...props} />
    </div>
  );
}
