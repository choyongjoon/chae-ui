import { useState } from "react";
/** 아코디언 — 창호 접이식, 목재 테두리 */
export function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ border: "var(--changho-border, 3px) solid var(--changho-color, var(--mokjae))", borderRadius: "2px", overflow: "hidden" }}>
      {items.map((item, i) => (
        <div key={i}>
          {i > 0 && <div style={{ height: "1px", background: "var(--border)" }} />}
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", padding: "12px 16px", fontSize: "14px", fontWeight: 500, fontFamily: "var(--font-sans)", background: open === i ? "rgba(139,111,78,0.04)" : "var(--card)", border: "none", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--foreground)" }}>
            {item.title}
            <span style={{ transition: "transform 0.2s", transform: open === i ? "rotate(180deg)" : "rotate(0deg)", fontSize: "12px", color: "var(--muted-foreground)" }}>▾</span>
          </button>
          {open === i && <div style={{ padding: "0 16px 14px", fontSize: "13px", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
