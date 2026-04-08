import { useState } from "react";

function normalize(o) {
  if (typeof o === "string") return { value: o, label: o };
  return o;
}

export function Select({ label, options = [], value, onChange, placeholder = "선택..." }) {
  const [f, setF] = useState(false);
  const items = options.map(normalize);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && <label style={{ fontSize: "13px", fontWeight: 500, color: "var(--muted-foreground)" }}>{label}</label>}
      <select value={value} onChange={e => onChange?.(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{
        padding: "9px 14px", fontSize: "14px", fontFamily: "var(--font-sans)", background: "var(--card)", appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237A7570' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
        border: f ? "1.5px solid var(--primary)" : "1.5px solid var(--border)", borderRadius: "4px", outline: "none", cursor: "pointer", color: "var(--foreground)", paddingRight: "36px",
      }}>
        <option value="" disabled>{placeholder}</option>
        {items.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}
