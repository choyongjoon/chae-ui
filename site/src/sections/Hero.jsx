import { useState } from "react";
import { DancheongStripe, Button } from "chae-ui";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install chae-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero">
      <DancheongStripe height={6} />
      <div
        style={{
          padding: "80px 40px 60px",
          textAlign: "center",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 56,
            fontWeight: 800,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          채 UI
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
            marginBottom: 8,
          }}
        >
          단청의 색(彩)과 한옥의 구조(채)를
          <br />
          현대 UI 컴포넌트에 담다
        </p>
        <p
          style={{
            fontSize: 14,
            color: "var(--muted-foreground)",
            marginBottom: 32,
            fontFamily: "var(--font-sans)",
          }}
        >
          shadcn/ui 기반 한국 전통 건축 디자인 시스템
        </p>

        <div
          onClick={handleCopy}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "var(--heuk)",
            color: "var(--baek)",
            padding: "10px 20px",
            borderRadius: 4,
            fontFamily: "'SF Mono', 'Fira Code', monospace",
            fontSize: 14,
            cursor: "pointer",
            marginBottom: 32,
            transition: "opacity 0.15s",
          }}
        >
          <span style={{ opacity: 0.5 }}>$</span>
          <span>npm install chae-ui</span>
          <span style={{ opacity: 0.5, fontSize: 12 }}>
            {copied ? "Copied!" : "Click to copy"}
          </span>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Button variant="default" size="lg">
            <a href="#introduction" style={{ color: "inherit", textDecoration: "none" }}>
              둘러보기
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a
              href="https://github.com/choyongjoon/chae"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
