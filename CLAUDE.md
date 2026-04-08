# 채 UI (Chae UI)

한국 전통 건축 양식에서 영감을 얻은 shadcn/ui 기반 디자인 시스템.

- **彩**(채색 채) — 고운 빛깔, 채색. 단청에서 건축에 색을 입히는 행위.
- **채**(고유어) — 한옥에서 건물 한 동을 세는 단위. 안채, 사랑채, 별채.

## 기술 스택

- React + TanStack Start (또는 Vite)
- 웹폰트: Pretendard (본문) + 나눔명조 (제목)
- CSS 변수 기반 테마: `src/styles/tokens.css`

## 디자인 원칙

1. **단청은 그라디언트가 아님** — 명확한 색띠로 구분. `DancheongStripe` 참조.
2. **오방색 위계** — 청(일반) → 황(주의) → 적(경고)
3. **창호의 구조감** — 목재 테두리 3px, `--changho-border` 변수로 제어
4. **한지의 따뜻함** — 배경은 순백이 아닌 #FAF6EF (한지색)

## 디자인 리뷰 워크플로우

이 프로젝트는 **리뷰어와 익스큐터가 분리**된 구조로 디자인 개선을 진행합니다.

### 역할 분리

- **익스큐터 (당신)**: 코드를 읽고 수정하는 역할. `.review/latest-review.json`의 피드백을 받아 실행.
- **리뷰어 (subagent)**: 렌더링된 스크린샷만 보고 디자인을 평가. 코드는 보지 않음. 독립된 Claude 프로세스.

### 리뷰 사이클

```
[익스큐터] 코드 수정
    ↓
[익스큐터] ./scripts/review-loop.sh 실행
    ↓
  [capture.mjs] dev server 스크린샷 캡처
    ↓
  [review.sh] 리뷰어 subagent 호출 (별도 프로세스)
    ↓
  리뷰어가 스크린샷 기반 피드백 JSON 반환
    ↓
[익스큐터] .review/latest-review.json 읽고 수정
    ↓
반복
```

### 실행 방법

```bash
# 1. dev server 띄우기
npm run dev

# 2. 스크린샷 캡처 + 리뷰 실행 (1회)
./scripts/review-loop.sh

# 3. 리뷰 결과 확인
cat .review/latest-review.json

# 4. 피드백 기반으로 코드 수정 후 다시 2번부터 반복
```

### 리뷰 기준

`docs/REVIEW_CRITERIA.md` 참조. 4가지 영역:
- 시각적 아름다움 (색채 조화, 타이포, 여백)
- 가독성 (대비, 텍스트 크기)
- 한국 전통 건축 미학 (단청 원칙, 창호 구조감, 한지 질감)
- 창의성 (차별화, 전통→현대 변환의 신선함)

### 익스큐터 가이드라인

1. 리뷰 결과에서 `top_issues`의 `priority: high` 항목을 먼저 처리
2. 한 번에 1-2개 이슈만 수정 (과도한 변경 방지)
3. 수정 후 반드시 다시 리뷰 실행하여 개선 확인
4. `overall_score`가 8 이상이면 해당 라운드 종료
5. 리뷰어의 피드백에 동의하지 않으면 무시해도 됨 (최종 판단은 사람)

### 참고: Playwright 설치

```bash
npm install -D playwright
npx playwright install chromium
```

## 파일 구조

```
src/
  styles/tokens.css     ← CSS 변수 (오방색, 자연소재, 시맨틱)
  lib/theme.js          ← JS 테마 상수, 단청 프리셋
  components/*.jsx      ← 개별 컴포넌트 (20개)
  showcase.jsx          ← 소개 페이지
docs/
  DESIGN_TOKENS.md      ← 토큰 레퍼런스
  REVIEW_CRITERIA.md    ← 리뷰 평가 기준
scripts/
  capture.mjs           ← Playwright 스크린샷
  review.sh             ← 리뷰어 subagent 호출
  review-loop.sh        ← 캡처→리뷰 통합 실행
.review/
  latest                ← 최신 캡처 경로
  latest-review.json    ← 최신 리뷰 결과
  {timestamp}/          ← 각 캡처 스크린샷 + 리뷰
```
