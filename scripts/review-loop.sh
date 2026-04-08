#!/bin/bash
#
# 채 UI — 디자인 리뷰 루프
#
# 익스큐터(메인 Claude Code)가 이 스크립트를 호출하면:
# 1. 스크린샷 캡처
# 2. 리뷰어 subagent 호출 (독립 컨텍스트)
# 3. 리뷰 결과를 .review/latest-review.json에 저장
#
# 익스큐터는 이 결과를 읽고 코드를 수정합니다.
#
# 사용법: ./scripts/review-loop.sh [max-rounds]
# 기본: 1회 (익스큐터가 수동으로 반복 호출)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
MAX_ROUNDS="${1:-1}"

echo "=== 채 UI Design Review Loop ==="
echo "Max rounds: $MAX_ROUNDS"
echo ""

for ((round=1; round<=MAX_ROUNDS; round++)); do
  echo "--- Round $round ---"

  # Step 1: 스크린샷 캡처
  echo "[1/3] Capturing screenshots..."
  node "${SCRIPT_DIR}/capture.mjs" 2>&1 || {
    echo "ERROR: Capture failed. Is the dev server running?"
    exit 1
  }

  # Step 2: 리뷰어 호출
  echo "[2/3] Calling reviewer subagent..."
  bash "${SCRIPT_DIR}/review.sh" 2>&1

  # Step 3: 최신 리뷰 결과 복사
  LATEST_DIR=$(cat "${PROJECT_DIR}/.review/latest")
  if [ -f "${LATEST_DIR}/review.json" ]; then
    cp "${LATEST_DIR}/review.json" "${PROJECT_DIR}/.review/latest-review.json"
    echo "[3/3] Review ready at .review/latest-review.json"
  else
    echo "[3/3] No review output. Check .review/ for manual prompt."
  fi

  echo ""
  if [ "$round" -lt "$MAX_ROUNDS" ]; then
    echo "Waiting for executor to apply changes..."
    echo "(Press Enter to continue to next round, or Ctrl+C to stop)"
    read -r
  fi
done

echo "=== Review loop complete ==="
