export function Toggle({ checked = false, onChange }) {
  return (
    <button onClick={() => onChange?.(!checked)} style={{ width: 44, height: 24, borderRadius: "12px", background: checked ? "var(--primary)" : "var(--muted)", border: "none", cursor: "pointer", position: "relative", transition: "background 0.2s", padding: 0 }}>
      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--card)", position: "absolute", top: 3, left: checked ? 23 : 3, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
    </button>
  );
}
