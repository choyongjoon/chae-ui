import { useState, type ReactNode } from "react";
import { DancheongStripe } from "chae-ui";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color: "var(--primary)",
        textDecoration: hov ? "underline" : "none",
        transition: "all 0.15s",
      }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer style={{ marginTop: 80 }}>
      <DancheongStripe height={4} />
      <div
        style={{
          padding: "32px 40px",
          textAlign: "center",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          color: "var(--muted-foreground)",
          background: "var(--card)",
        }}
      >
        <p>
          채 UI — shadcn/ui 기반 한국 전통 건축 디자인 시스템
        </p>
        <p style={{ marginTop: 8 }}>
          <FooterLink href="https://github.com/choyongjoon/chae-ui">GitHub</FooterLink>
          {" · "}
          <FooterLink href="https://www.npmjs.com/package/chae-ui">npm</FooterLink>
        </p>
      </div>
    </footer>
  );
}
