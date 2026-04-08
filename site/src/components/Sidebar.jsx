const SECTIONS = [
  { id: "hero", label: "채 UI" },
  { id: "introduction", label: "소개" },
  { id: "colors", label: "색상 팔레트" },
  { type: "divider", label: "컴포넌트" },
  { id: "comp-button", label: "Button" },
  { id: "comp-card", label: "Card" },
  { id: "comp-badge", label: "Badge" },
  { id: "comp-input", label: "Input" },
  { id: "comp-textarea", label: "Textarea" },
  { id: "comp-select", label: "Select" },
  { id: "comp-checkbox", label: "Checkbox" },
  { id: "comp-radiogroup", label: "RadioGroup" },
  { id: "comp-toggle", label: "Toggle" },
  { id: "comp-alert", label: "Alert" },
  { id: "comp-toast", label: "Toast" },
  { id: "comp-progress", label: "Progress" },
  { id: "comp-skeleton", label: "Skeleton" },
  { id: "comp-separator", label: "Separator" },
  { id: "comp-dancheongstripe", label: "DancheongStripe" },
  { id: "comp-tabs", label: "Tabs" },
  { id: "comp-breadcrumb", label: "Breadcrumb" },
  { id: "comp-stepper", label: "Stepper" },
  { id: "comp-accordion", label: "Accordion" },
  { id: "comp-table", label: "Table" },
  { id: "comp-avatar", label: "Avatar" },
  { id: "comp-changhodialog", label: "ChanghoDialog" },
];

export function Sidebar({ activeId }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 220,
        height: "100vh",
        overflowY: "auto",
        background: "var(--card)",
        borderRight: "1px solid var(--border)",
        padding: "20px 0",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        zIndex: 100,
      }}
    >
      {SECTIONS.map((s, i) => {
        if (s.type === "divider") {
          return (
            <div
              key={i}
              style={{
                padding: "16px 20px 6px",
                fontSize: 11,
                fontWeight: 700,
                color: "var(--muted-foreground)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          );
        }
        const isActive = activeId === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            style={{
              display: "block",
              padding: "6px 20px",
              color: isActive ? "var(--primary)" : "var(--foreground)",
              textDecoration: "none",
              fontWeight: isActive ? 600 : 400,
              background: isActive ? "var(--muted)" : "transparent",
              borderRight: isActive ? "2px solid var(--primary)" : "2px solid transparent",
              transition: "all 0.15s",
            }}
          >
            {s.label}
          </a>
        );
      })}
    </nav>
  );
}
