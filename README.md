# 채 UI (Chae UI)

한국 전통 건축 양식에서 영감을 얻은 shadcn/ui 기반 React UI 라이브러리.

[![npm](https://img.shields.io/npm/v/chae-ui)](https://www.npmjs.com/package/chae-ui)

> **[소개 사이트 보기](https://choyongjoon.github.io/chae-ui/)**

## 설치

```bash
npm install chae-ui
```

React 18 이상, Pretendard + 나눔명조 웹폰트가 필요합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.min.css" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet" />
```

## 사용법

```jsx
import { Button, Card, Badge } from "chae-ui";

function App() {
  return (
    <Card variant="changho">
      <Badge>청</Badge>
      <Button variant="accent">확인</Button>
    </Card>
  );
}
```

CSS 변수는 `chae-ui` import 시 자동 포함됩니다. 테마 상수만 별도로 사용하려면:

```js
import { dancheong, nature } from "chae-ui/theme";
```

## 채(채)란

**채**는 두 가지 의미를 동시에 품고 있습니다.

- **彩**(채색 채) — 고운 빛깔, 채색. 단청의 오방색처럼 건축에 색을 입히는 행위.
- **채**(고유어) — 한옥에서 건물 한 동을 세는 단위. 안채, 사랑채, 별채.

## 디자인 원천

| 소재 | UI 매핑 | 구현 |
|------|---------|------|
| 단청 | 컬러 시스템, 색띠, Alert 위계 | CSS variables, flexbox bands |
| 창호 | 격자 레이아웃, Card 프레임, Dialog | border, background-image |
| 한지 | 배경 질감, 반투명 오버레이 | SVG noise filter, backdrop-filter |
| 목재 | 테두리, 사이드바, 구분선 | border-color, background |
| 석탑 | Stepper, 직각 요소 | border-radius: 0, stacking |
| 황토 | Warm neutral, secondary 팔레트 | --secondary variable |

## 컴포넌트 (22개)

| 카테고리 | 컴포넌트 |
|----------|----------|
| 일반 | Button, Card, Badge, Avatar, Separator |
| 입력 | Input, Textarea, Select, Checkbox, RadioGroup, Switch |
| 피드백 | Alert, Toast, Progress, Skeleton |
| 내비게이션 | Tabs, Breadcrumb, Stepper, Accordion |
| 데이터 | Table |
| 오버레이 | Dialog |
| 장식 | DancheongStripe |

## 디자인 원칙

1. **단청은 그라디언트가 아님** — 명확한 색띠로 구분
2. **오방색 위계** — 청(일반), 황(주의), 적(경고)
3. **창호의 구조감** — 목재 테두리 3px, `--changho-border` 변수
4. **한지의 따뜻함** — 배경은 순백이 아닌 #FAF6EF (한지색)
5. **석의 비활성** — disabled 상태는 석(石) 색상으로 표현

## 웹폰트

- **본문/UI**: [Pretendard](https://github.com/orioncactus/pretendard) — Inter 기반 한글 최적화
- **제목/디스플레이**: [나눔명조](https://fonts.google.com/specimen/Nanum+Myeongjo) — 전통 붓글씨 획 처리

## 프로젝트 구조

```
chae-ui/
├── src/
│   ├── styles/tokens.css     # CSS 변수 (오방색, 자연소재, 시맨틱)
│   ├── lib/theme.js          # JS 테마 상수, 단청 프리셋
│   ├── components/           # 22개 React 컴포넌트
│   └── index.js              # Barrel export
├── site/                     # GitHub Pages 소개 사이트
├── vite.config.js            # 라이브러리 빌드 설정
└── package.json
```

## 라이선스

MIT
