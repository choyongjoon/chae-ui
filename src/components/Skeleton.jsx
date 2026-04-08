export function Skeleton({ width = "100%", height = 16, radius = 4 }) {
  return <div style={{ width, height, borderRadius: radius, background: "linear-gradient(90deg, var(--muted) 25%, #E8E3DA 50%, var(--muted) 75%)", backgroundSize: "200px 100%", animation: "shimmer 1.5s ease-in-out infinite" }} />;
}
