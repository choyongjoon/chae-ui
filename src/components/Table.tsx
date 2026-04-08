import type { ReactNode } from "react";

export interface TableProps {
  columns: string[];
  rows: ReactNode[][];
}

export function Table({ columns, rows }: TableProps) {
  return (
    <div style={{ overflowX: "auto", border: "var(--changho-border, 3px) solid var(--changho-color, var(--mokjae))", borderRadius: "2px" }}>
      <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
        <thead><tr style={{ borderBottom: "2px solid var(--changho-color, var(--mokjae))" }}>
          {columns.map(c => <th key={c} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, fontSize: "12px", color: "var(--muted-foreground)", background: "rgba(139,111,78,0.03)" }}>{c}</th>)}
        </tr></thead>
        <tbody>{rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none" }}>
            {row.map((cell, j) => <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "var(--foreground)" : "var(--muted-foreground)" }}>{cell}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}
