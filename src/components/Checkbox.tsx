export interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

/**
 * 채 UI — Checkbox
 * shadcn/ui 구조 기반, Radix UI 없이 네이티브 input으로 구현
 */
export function Checkbox({ checked, onChange, label, disabled = false }: CheckboxProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: 14,
        fontFamily: "var(--font-sans)",
        color: disabled ? "var(--muted-foreground)" : "var(--foreground)",
        lineHeight: 1,
      }}
    >
      {/* 숨겨진 네이티브 체크박스 (접근성) */}
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      />
      {/* 시각적 체크박스 — 항상 동일 크기 유지 */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <rect
          x="0.75"
          y="0.75"
          width="14.5"
          height="14.5"
          rx="2.5"
          fill={disabled ? "#F0EDEA" : checked ? "var(--primary)" : "var(--card)"}
          stroke={disabled ? "var(--seok)" : checked ? "var(--primary)" : "var(--border)"}
          strokeWidth="1.5"
          style={{ transition: "all 0.15s" }}
        />
        <path
          d="M4.5 8.5L7 11L11.5 5"
          stroke="var(--primary-foreground)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: checked ? 1 : 0,
            transition: "opacity 0.1s",
          }}
        />
      </svg>
      {label && <span>{label}</span>}
    </label>
  );
}
