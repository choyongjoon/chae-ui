import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./sections/Hero";
import { Introduction } from "./sections/Introduction";
import { ColorPalette } from "./sections/ColorPalette";
import { Showcase } from "./sections/Showcase";
import { ComponentDocs } from "./sections/ComponentDocs";
import { Footer } from "./sections/Footer";

const MOBILE_BREAKPOINT = 768;

function useIsMobile(): boolean {
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

export default function App() {
  const [activeId, setActiveId] = useState("hero");
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        color: "var(--foreground)",
        background: "var(--background)",
        minHeight: "100vh",
      }}
    >
      <Sidebar activeId={activeId} />
      <main style={{ marginLeft: isMobile ? 0 : 220, minHeight: "100vh" }}>
        <Hero />
        <Showcase />
        <Introduction />
        <ColorPalette />
        <ComponentDocs />
        <Footer />
      </main>
    </div>
  );
}
