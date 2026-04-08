/** 단청 Progress: 3색 구간 (청→황→적), 그라디언트 없음 */
export function Progress({ value = 0, variant = "default" }) {
  const h = 6;
  if (variant === "dancheong") {
    const bands = [{ color: "var(--cheong)", end: 40 }, { color: "var(--hwang)", end: 70 }, { color: "var(--jeok)", end: 100 }];
    return (
      <div style={{ width: "100%", height: h, background: "var(--muted)", borderRadius: "3px", overflow: "hidden", display: "flex" }}>
        {bands.map((b, i) => {
          const start = i === 0 ? 0 : bands[i - 1].end;
          const segW = b.end - start;
          const fill = Math.max(0, Math.min(1, (value - start) / segW));
          if (value <= start) return <div key={i} style={{ flex: segW }} />;
          return <div key={i} style={{ flex: segW, display: "flex" }}><div style={{ width: `${fill*100}%`, background: b.color, transition: "width 0.5s" }} />{fill < 1 && <div style={{ flex: 1 }} />}</div>;
        })}
      </div>
    );
  }
  return (
    <div style={{ width: "100%", height: h, background: "var(--muted)", borderRadius: "3px", overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", background: "var(--primary)", borderRadius: "inherit", transition: "width 0.5s" }} />
    </div>
  );
}
