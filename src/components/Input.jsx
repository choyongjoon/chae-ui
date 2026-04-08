import { useState } from "react";
export function Input({ label, placeholder, disabled = false, ...props }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && <label style={{ fontSize: "13px", fontWeight: 500, color: disabled ? "var(--seok)" : "var(--muted-foreground)" }}>{label}</label>}
      <input
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setF(true)}
        onBlur={() => setF(false)}
        style={{
          padding: "9px 14px", fontSize: "14px", fontFamily: "var(--font-sans)",
          background: disabled ? "#F0EDEA" : "var(--card)",
          border: disabled ? "1.5px solid var(--seok)" : f ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
          borderRadius: "4px", outline: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
          boxShadow: f && !disabled ? "0 0 0 3px rgba(43,107,94,0.1)" : "none",
          color: disabled ? "var(--seok)" : "var(--foreground)",
          cursor: disabled ? "not-allowed" : "text",
        }}
        {...props}
      />
    </div>
  );
}
