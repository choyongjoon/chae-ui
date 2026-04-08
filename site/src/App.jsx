import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./sections/Hero";
import { Introduction } from "./sections/Introduction";
import { ColorPalette } from "./sections/ColorPalette";
import { ComponentDocs } from "./sections/ComponentDocs";
import { Footer } from "./sections/Footer";

export default function App() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
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
      <main style={{ marginLeft: 220, minHeight: "100vh" }}>
        <Hero />
        <Introduction />
        <ColorPalette />
        <ComponentDocs />
        <Footer />
      </main>
    </div>
  );
}
