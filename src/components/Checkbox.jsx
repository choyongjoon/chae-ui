export function Checkbox({ checked, onChange, label }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px" }}>
      <div onClick={() => onChange?.(!checked)} style={{
        width: 18, height: 18, borderRadius: "2px", flexShrink: 0,
        border: checked ? "none" : "1.5px solid var(--border)", background: checked ? "var(--primary)" : "var(--card)",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s", cursor: "pointer",
      }}>{checked && <span style={{ color: "var(--baek)", fontSize: "12px", lineHeight: 1 }}>✓</span>}</div>
      {label}
    </label>
  );
}
