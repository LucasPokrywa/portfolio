#!/usr/bin/env bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

case "${1:-}" in
  --production)
    exec docker compose -f compose.production.yaml up --build -d
    ;;
  "")
    exec docker compose up --build
    ;;
  *)
    echo "Usage: $0 [--production]" >&2
    exit 1
    ;;
esac
