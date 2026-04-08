import { useState } from "react";

interface CodeBlockProps {
  children: string;
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [hov, setHov] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <pre
      style={{
        position: "relative",
        background: "var(--heuk)",
        color: "var(--baek)",
        padding: "14px 18px",
        borderRadius: 4,
        fontSize: 13,
        fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
        overflowX: "auto",
        lineHeight: 1.6,
        marginTop: 12,
      }}
    >
      <code>{children}</code>
      <button
        onClick={handleCopy}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          background: copied
            ? "var(--cheong)"
            : hov
            ? "rgba(255,255,255,0.2)"
            : "rgba(255,255,255,0.1)",
          color: "var(--baek)",
          border: "none",
          borderRadius: 3,
          padding: "4px 10px",
          fontSize: 11,
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          transition: "all 0.15s",
        }}
      >
        {copied ? "복사됨!" : "복사"}
      </button>
    </pre>
  );
}
