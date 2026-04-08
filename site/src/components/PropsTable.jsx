export function PropsTable({ props }) {
  return (
    <div style={{ overflowX: "auto", marginTop: 16 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
        }}
      >
        <thead>
          <tr
            style={{
              borderBottom: "2px solid var(--border)",
              textAlign: "left",
            }}
          >
            <th style={{ padding: "8px 12px", fontWeight: 600 }}>Prop</th>
            <th style={{ padding: "8px 12px", fontWeight: 600 }}>Type</th>
            <th style={{ padding: "8px 12px", fontWeight: 600 }}>Default</th>
            <th style={{ padding: "8px 12px", fontWeight: 600 }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr
              key={p.name}
              style={{
                borderBottom: "1px solid var(--border)",
                background: i % 2 === 0 ? "transparent" : "var(--hanzi)",
              }}
            >
              <td
                style={{
                  padding: "8px 12px",
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: "var(--primary)",
                }}
              >
                {p.name}
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: "var(--muted-foreground)",
                }}
              >
                {p.type}
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  fontFamily: "monospace",
                  fontSize: 12,
                }}
              >
                {p.default || "—"}
              </td>
              <td style={{ padding: "8px 12px" }}>{p.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
