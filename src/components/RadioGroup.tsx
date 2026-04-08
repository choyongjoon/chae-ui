export interface RadioGroupProps {
  options?: (string | { value: string; label: string })[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

function normalize(o: string | { value: string; label: string }): { value: string; label: string } {
  if (typeof o === "string") return { value: o, label: o };
  return o;
}

export function RadioGroup({ options = [], value, onChange, label }: RadioGroupProps) {
  const items = options.map(normalize);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && <label style={{ fontSize: "13px", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "4px" }}>{label}</label>}
      {items.map(o => (
        <label key={o.value} onClick={() => onChange?.(o.value)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px" }}>
          <div style={{
            width: 18, height: 18, borderRadius: "50%", flexShrink: 0, boxSizing: "border-box",
            border: value === o.value ? "5px solid var(--primary)" : "1.5px solid var(--border)",
            background: "var(--card)", transition: "all 0.15s",
          }} />
          {o.label}
        </label>
      ))}
    </div>
  );
}
