export function CodeBlock({ children }) {
  return (
    <pre
      style={{
        background: "var(--heuk)",
        color: "var(--baek)",
        padding: "14px 18px",
        borderRadius: 4,
        fontSize: 13,
        fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
        overflowX: "auto",
        lineHeight: 1.6,
        marginTop: 12,
      }}
    >
      <code>{children}</code>
    </pre>
  );
}
