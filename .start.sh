#!/usr/bin/env bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

case "${1:-}" in
  --production)
    shift
    npm run build
    exec npm run preview -- "$@"
    ;;
  *)
    exec npm run dev -- "$@"
    ;;
esac
