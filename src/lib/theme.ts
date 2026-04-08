/**
 * 채 UI — Theme Constants
 * JS에서 참조할 수 있는 테마 상수
 */

export const dancheong = {
  cheong: "#2B6B5E",
  baek: "#F5F0E8",
  jeok: "#C23B3B",
  heuk: "#2C2825",
  hwang: "#D4A843",
} as const;

export const nature = {
  hanzi: "#FAF6EF",
  hwangto: "#C8A97E",
  mokjae: "#8B6F4E",
  giwa: "#4A4440",
  seok: "#9B9590",
  choga: "#B8A88A",
  songmok: "#5C7A5D",
  meok: "#3D3835",
} as const;

export const fonts = {
  sans: "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  serif: "'Nanum Myeongjo', serif",
} as const;

/** 단청 색띠 한 줄 */
export type StripeBand = {
  readonly color: string;
  readonly flex: number;
};

/** 단청 색띠 기본 프리셋 */
export const stripePresets = {
  default: [
    { color: "var(--jeok)", flex: 3 },
    { color: "var(--hwang)", flex: 1.5 },
    { color: "var(--cheong)", flex: 3 },
    { color: "var(--baek)", flex: 1 },
  ],
  geum: [
    { color: "var(--jeok)", flex: 2 },
    { color: "var(--hwang)", flex: 1 },
    { color: "var(--cheong)", flex: 2 },
    { color: "var(--heuk)", flex: 0.5 },
    { color: "var(--baek)", flex: 0.5 },
  ],
  gachil: [
    { color: "var(--cheong)", flex: 1 },
  ],
  gutgi: [
    { color: "var(--cheong)", flex: 4 },
    { color: "var(--heuk)", flex: 0.3 },
    { color: "var(--baek)", flex: 0.3 },
    { color: "var(--cheong)", flex: 4 },
  ],
} as const satisfies Record<string, readonly StripeBand[]>;

/** 프리셋 이름 유니온 타입 */
export type StripePresetKey = keyof typeof stripePresets;
