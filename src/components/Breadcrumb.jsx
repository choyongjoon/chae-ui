export function Breadcrumb({ items }) {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {i > 0 && <span style={{ color: "var(--border)" }}>/</span>}
          <span style={{ color: i === items.length - 1 ? "var(--foreground)" : "var(--muted-foreground)", fontWeight: i === items.length - 1 ? 500 : 400, cursor: i < items.length - 1 ? "pointer" : "default" }}>{item}</span>
        </span>
      ))}
    </nav>
  );
}
