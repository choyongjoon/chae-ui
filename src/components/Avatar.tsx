export interface AvatarProps {
  name: string;
  size?: number;
}

export function Avatar({ name, size = 40 }: AvatarProps) {
  return <div style={{ width: size, height: size, borderRadius: "50%", background: "var(--primary)", color: "var(--primary-foreground)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.4, fontWeight: 600, fontFamily: "var(--font-serif)", border: "2px solid var(--card)", boxShadow: "0 0 0 1px var(--border)" }}>{name.charAt(0)}</div>;
}
