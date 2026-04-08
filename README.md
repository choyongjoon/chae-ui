# 채 UI (Chae UI)

한국 전통 건축 양식에서 영감을 얻은 shadcn/ui 기반 디자인 시스템.

## 채(채)란

**채**는 두 가지 의미를 동시에 품고 있습니다.

- **彩**(채색 채) — 고운 빛깔, 무늬, 채색. 단청의 오방색처럼 건축에 색을 입히는 행위. 한국민족문화대백과에 따르면 "'채'는 색깔 또는 빛의 종류를 말하되 아름답다거나 곱다는 의미를 포함하여 하는 말"입니다.
- **채**(고유어) — 한옥에서 건물 한 동(棟)을 세는 단위. 안채, 사랑채, 별채, 행랑채 등. 한옥의 공간 구성 자체를 나타냅니다.

단청의 색(彩)과 한옥의 구조(채)를 현대 UI 컴포넌트에 담는 프로젝트입니다.

## 디자인 원천

| 소재 | UI 매핑 | 구현 |
|------|---------|------|
| 단청 | 컬러 시스템, 색띠, Alert 위계 | CSS variables, flexbox bands |
| 창호 | 격자 레이아웃, Card 프레임, Dialog | background-image, border |
| 한지 | 배경 질감, 반투명 오버레이 | SVG noise filter, backdrop-filter |
| 목재 | 테두리, 사이드바, 구분선 색상 | border-color, background |
| 석탑 | Stepper, 직각 요소 | border-radius: 0, stacking |
| 황토 | Warm neutral, secondary 팔레트 | --secondary variable |

## 웹폰트

- **본문/UI**: [Pretendard](https://github.com/orioncactus/pretendard) — Inter 기반 한글 최적화, 가변폰트
- **제목/디스플레이**: [나눔명조(Nanum Myeongjo)](https://fonts.google.com/specimen/Nanum+Myeongjo) — 전통 붓글씨 획 처리

## 컴포넌트

- Button (7 variants: default, secondary, accent, destructive, outline, ghost, dancheong)
- Card (5 variants: default, changho, hanzi, dancheong, stone)
- Badge, Input, Textarea, Select, Checkbox, RadioGroup
- Alert (info=청, warning=황, error=적)
- Accordion, Breadcrumb, Separator (default, dancheong)
- Progress (default, dancheong 3색 구간, seok)
- Toggle, Stepper (석탑), Avatar, Skeleton, Toast, Table
- Dialog (창호)
- DancheongStripe (색띠 — 그라디언트 아님)

## 프로젝트 구조

```
chae-ui/
├── README.md
├── docs/
│   └── DESIGN_TOKENS.md      # 디자인 토큰 문서
├── src/
│   ├── styles/
│   │   └── tokens.css         # CSS 변수 (오방색, 자연소재, 시맨틱)
│   ├── lib/
│   │   └── theme.js           # JS 테마 상수
│   ├── components/
│   │   ├── DancheongStripe.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Input.jsx
│   │   ├── Textarea.jsx
│   │   ├── Select.jsx
│   │   ├── Checkbox.jsx
│   │   ├── RadioGroup.jsx
│   │   ├── Separator.jsx
│   │   ├── Progress.jsx
│   │   ├── Avatar.jsx
│   │   ├── Toggle.jsx
│   │   ├── Tabs.jsx
│   │   ├── Stepper.jsx
│   │   ├── Alert.jsx
│   │   ├── Accordion.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── Skeleton.jsx
│   │   ├── Toast.jsx
│   │   ├── Table.jsx
│   │   └── ChanghoDialog.jsx
│   └── showcase.jsx           # 데모 페이지
└── package.json (placeholder)
```

## Claude Code로 이어 작업하기

```bash
# 이 디렉토리를 프로젝트 루트로 사용
cd chae-ui

# shadcn/ui 기반 프로젝트에 통합할 때:
# 1. src/styles/tokens.css를 globals.css에 추가
# 2. src/components/*.jsx를 components/ui/에 복사
# 3. Pretendard + Nanum Myeongjo 웹폰트 import 추가
```
