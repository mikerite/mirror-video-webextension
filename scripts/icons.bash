#!/usr/bin/env bash
set -euo pipefail

(which svgo 2>&1 > /dev/null) || {
    echo "Required command not found";
    exit 1;
}

proj_dir="$( dirname $(dirname "${BASH_SOURCE[0]}") )"
icon_dir="$proj_dir/src/icons"

svgo -i "$icon_dir/src/mirror.svg" -o "$icon_dir/mirror.svg"
svgo -i "$icon_dir/src/dont_mirror.svg" -o "$icon_dir/dont_mirror.svg"
