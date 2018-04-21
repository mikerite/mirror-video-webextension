#!/usr/bin/env bash
set -euo pipefail

(which web-ext 2>&1 > /dev/null) || {
    echo "Required command not found";
    exit 1;
}

proj_dir="$( cd "$(dirname "$(dirname "${BASH_SOURCE[0]}")")" && pwd -P )"
web-ext run --start-url "file://$proj_dir/test/test.html"

