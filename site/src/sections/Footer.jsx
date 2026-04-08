import { DancheongStripe } from "chae-ui";

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
          <a
            href="https://github.com/choyongjoon/chae"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--primary)", textDecoration: "none" }}
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://www.npmjs.com/package/chae-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--primary)", textDecoration: "none" }}
          >
            npm
          </a>
        </p>
      </div>
    </footer>
  );
}
