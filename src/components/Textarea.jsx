import { useState } from "react";
export function Textarea({ label, placeholder, rows = 3, ...props }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && <label style={{ fontSize: "13px", fontWeight: 500, color: "var(--muted-foreground)" }}>{label}</label>}
      <textarea placeholder={placeholder} rows={rows} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{
        padding: "9px 14px", fontSize: "14px", fontFamily: "var(--font-sans)", background: "var(--card)", resize: "vertical",
        border: f ? "1.5px solid var(--primary)" : "1.5px solid var(--border)", borderRadius: "4px", outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: f ? "0 0 0 3px rgba(43,107,94,0.1)" : "none", color: "var(--foreground)",
      }} {...props} />
    </div>
  );
}
