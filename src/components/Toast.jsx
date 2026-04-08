export function Toast({ message, variant = "default", visible }) {
  if (!visible) return null;
  const c = { default: { bg: "var(--heuk)", color: "var(--baek)" }, success: { bg: "var(--cheong)", color: "var(--baek)" }, error: { bg: "var(--jeok)", color: "var(--baek)" } }[variant];
  return <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", padding: "10px 20px", borderRadius: "2px", fontSize: "14px", fontFamily: "var(--font-sans)", background: c.bg, color: c.color, zIndex: 200, animation: "toastIn 0.25s ease-out", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", fontWeight: 500 }}>{message}</div>;
}
