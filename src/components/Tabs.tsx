export interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onChange: (id: string) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div style={{ display: "flex", borderBottom: "2px solid var(--border)" }}>
      {tabs.map(t => <button key={t.id} onClick={() => onChange(t.id)} style={{ padding: "10px 20px", fontSize: "14px", fontWeight: activeTab === t.id ? 600 : 400, fontFamily: "var(--font-sans)", color: activeTab === t.id ? "var(--primary)" : "var(--muted-foreground)", background: "transparent", border: "none", borderBottom: activeTab === t.id ? "2px solid var(--primary)" : "2px solid transparent", marginBottom: "-2px", cursor: "pointer", transition: "all 0.2s" }}>{t.label}</button>)}
    </div>
  );
}
