import { useState, useEffect } from "react";

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
  { id: "comp-radiogroup", label: "Radio Group" },
  { id: "comp-switch", label: "Switch" },
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
  { id: "comp-dialog", label: "Dialog" },
  { type: "divider", label: "기타" },
  { id: "unsupported", label: "미지원 목록" },
];

const MOBILE_BREAKPOINT = 768;

function SidebarLink({ id, label, isActive, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

export function Sidebar({ activeId }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  // 모바일에서 링크 클릭 시 사이드바 닫기
  const handleLinkClick = () => {
    if (isMobile) setOpen(false);
  };

  // 모바일에서 바깥 클릭 시 닫기
  useEffect(() => {
    if (!isMobile || !open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobile, open]);

  return (
    <>
      {/* 모바일 햄버거 버튼 (사이드바 닫혀있을 때만) */}
      {isMobile && !open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="메뉴 열기"
          style={{
            position: "fixed",
            top: 12,
            left: 12,
            zIndex: 200,
            width: 40,
            height: 40,
            borderRadius: 4,
            border: "1.5px solid var(--border)",
            background: "var(--card)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <line x1="1" y1="1" x2="17" y2="1" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="7" x2="17" y2="7" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="13" x2="17" y2="13" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}

      {/* 모바일 오버레이 */}
      {isMobile && open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 99,
          }}
        />
      )}

      {/* 사이드바 */}
      <nav
        aria-label="사이트 내비게이션"
        style={{
          position: "fixed",
          top: 0,
          left: isMobile ? (open ? 0 : -260) : 0,
          width: isMobile ? 260 : 220,
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
          transition: isMobile ? "left 0.25s ease" : "none",
          boxShadow: isMobile && open ? "4px 0 16px rgba(0,0,0,0.1)" : "none",
        }}
      >
        {/* Branding + 모바일 닫기 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 20px 16px",
            borderBottom: "1px solid var(--border)",
            marginBottom: 12,
          }}
        >
          <a
            href="#hero"
            onClick={handleLinkClick}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
              textDecoration: "none",
            }}
          >
            채 UI
          </a>
          {isMobile && (
            <button
              onClick={() => setOpen(false)}
              aria-label="메뉴 닫기"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--muted-foreground)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

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
              onClick={handleLinkClick}
            />
          );
        })}
      </nav>
    </>
  );
}
