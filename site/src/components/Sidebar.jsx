import { useState } from "react";

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

function SidebarLink({ id, label, isActive }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={`#${id}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block",
        padding: "7px 20px",
        color: isActive ? "var(--primary)" : hov ? "var(--primary)" : "var(--foreground)",
        textDecoration: "none",
        fontWeight: isActive ? 600 : 400,
        background: isActive ? "var(--muted)" : hov ? "rgba(0,0,0,0.03)" : "transparent",
        borderRight: isActive ? "2px solid var(--primary)" : "2px solid transparent",
        transition: "all 0.15s",
      }}
    >
      {label}
    </a>
  );
}

export function Sidebar({ activeId }) {
  return (
    <nav
      aria-label="사이트 내비게이션"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 220,
        height: "100vh",
        overflowY: "auto",
        background: "var(--card)",
        borderRight: "1px solid var(--border)",
        padding: "0 0 40px",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        zIndex: 100,
        scrollbarWidth: "thin",
        scrollbarColor: "var(--border) transparent",
      }}
    >
      {/* Branding */}
      <a
        href="#hero"
        style={{
          display: "block",
          padding: "20px 20px 16px",
          fontFamily: "var(--font-serif)",
          fontSize: 18,
          fontWeight: 800,
          color: "var(--foreground)",
          letterSpacing: "-0.02em",
          borderBottom: "1px solid var(--border)",
          marginBottom: 12,
          textDecoration: "none",
        }}
      >
        채 UI
      </a>

      {SECTIONS.filter((s) => s.id !== "hero").map((s, i) => {
        if (s.type === "divider") {
          return (
            <div
              key={i}
              style={{
                padding: "18px 20px 6px",
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
        return (
          <SidebarLink
            key={s.id}
            id={s.id}
            label={s.label}
            isActive={activeId === s.id}
          />
        );
      })}
    </nav>
  );
}
