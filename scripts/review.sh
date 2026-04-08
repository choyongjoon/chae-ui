#!/bin/bash
#
# 채 UI — 리뷰 실행 스크립트
#
# 리뷰어 subagent를 호출하여 스크린샷 기반 디자인 리뷰를 수행합니다.
# 리뷰어는 코드를 보지 않고, 렌더링된 스크린샷만 봅니다.
#
# 사용법:
#   ./scripts/review.sh                    # 최신 스크린샷으로 리뷰
#   ./scripts/review.sh .review/2025-04-08  # 특정 스크린샷 디렉토리
#
# 사전 조건:
#   1. dev server가 떠있어야 함 (npm run dev)
#   2. 스크린샷이 캡처되어 있어야 함 (node scripts/capture.mjs)
#   3. claude CLI가 PATH에 있어야 함

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
REVIEW_DIR="${PROJECT_DIR}/.review"
CRITERIA_FILE="${PROJECT_DIR}/docs/REVIEW_CRITERIA.md"

# 스크린샷 디렉토리 결정
if [ -n "${1:-}" ]; then
  SCREENSHOT_DIR="$1"
elif [ -f "${REVIEW_DIR}/latest" ]; then
  SCREENSHOT_DIR="$(cat "${REVIEW_DIR}/latest")"
else
  echo "Error: No screenshots found. Run 'node scripts/capture.mjs' first."
  exit 1
fi

if [ ! -d "$SCREENSHOT_DIR" ]; then
  echo "Error: Screenshot directory not found: $SCREENSHOT_DIR"
  exit 1
fi

echo "=== 채 UI Design Review ==="
echo "Screenshots: $SCREENSHOT_DIR"
echo ""

# 리뷰 결과 파일
REVIEW_OUTPUT="${SCREENSHOT_DIR}/review.json"

# 리뷰 기준 읽기
CRITERIA=$(cat "$CRITERIA_FILE")

# 스크린샷 파일 목록
SCREENSHOTS=$(find "$SCREENSHOT_DIR" -name "*.png" | sort)
SCREENSHOT_ARGS=""
for img in $SCREENSHOTS; do
  SCREENSHOT_ARGS="$SCREENSHOT_ARGS $img"
done

# Claude CLI를 subagent로 호출
# --print: 스트리밍 없이 최종 결과만 출력
# 리뷰어에게는 코드 접근 권한을 주지 않고, 이미지만 전달
cat <<PROMPT | claude --print \
  --allowedTools "" \
  --output-format json \
  > "$REVIEW_OUTPUT" 2>/dev/null || true

당신은 한국 전통 건축에서 영감받은 UI 디자인 시스템 "채 UI"의 소개 페이지를 리뷰하는 디자인 평론가입니다.

아래 스크린샷들은 이 소개 페이지를 다양한 뷰포트에서 캡처한 것입니다.
코드는 볼 수 없습니다. 오직 렌더링된 결과물만 보고 평가하세요.

## 리뷰 기준

${CRITERIA}

## 스크린샷

첨부된 이미지들을 분석하세요:
$(for img in $SCREENSHOTS; do echo "- $(basename "$img")"; done)

## 지시사항

1. 각 스크린샷을 주의 깊게 살펴보세요
2. 리뷰 기준의 4가지 영역(시각적 아름다움, 가독성, 한국 전통 건축 미학, 창의성)을 평가하세요
3. 반드시 "리뷰 출력 형식"의 JSON 형식으로만 응답하세요
4. top_issues는 최대 5개, 우선순위가 높은 것부터
5. 한국어로 작성하세요
PROMPT

# 결과 출력
if [ -f "$REVIEW_OUTPUT" ] && [ -s "$REVIEW_OUTPUT" ]; then
  echo "Review saved to: $REVIEW_OUTPUT"
  echo ""
  cat "$REVIEW_OUTPUT"
else
  echo "Review failed or produced empty output."
  echo "Falling back to manual review prompt..."

  # fallback: 프롬프트만 생성
  cat > "${SCREENSHOT_DIR}/review-prompt.md" <<EOF
# 수동 리뷰 프롬프트

아래 스크린샷들을 Claude에 첨부하고 이 프롬프트를 전달하세요:

---

당신은 한국 전통 건축에서 영감받은 UI 디자인 시스템 "채 UI"의 소개 페이지를 리뷰하는 디자인 평론가입니다.

첨부된 스크린샷들은 이 소개 페이지를 desktop/tablet/mobile 뷰포트에서 캡처한 것입니다.

$(cat "$CRITERIA_FILE")

스크린샷 파일:
$(for img in $SCREENSHOTS; do echo "- $(basename "$img")"; done)
EOF
  echo "Manual prompt saved to: ${SCREENSHOT_DIR}/review-prompt.md"
fi
