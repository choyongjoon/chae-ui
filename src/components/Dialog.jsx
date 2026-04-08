import { DancheongStripe } from "./DancheongStripe";
export function Dialog({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(250,246,239,0.85)", backdropFilter: "blur(4px)" }} />
      <div style={{ position: "relative", zIndex: 1, width: "min(440px, 90vw)", background: "var(--card)", border: "var(--changho-border, 3px) solid var(--changho-color, var(--mokjae))", borderRadius: "2px", overflow: "hidden", animation: "stackUp 0.25s ease-out" }}>
        <DancheongStripe />
        <div style={{ padding: "16px 20px", borderBottom: "2px solid var(--changho-color, var(--mokjae))", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, fontFamily: "var(--font-serif)" }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "var(--muted-foreground)", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
}
