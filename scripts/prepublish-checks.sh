#!/bin/bash
set -e
echo "Running prepublish checks..."
echo

function assert_exists () {
  missing=0
  for path in "$@"; do
    if [ -e "$path" ]; then
      echo "✅ $path"
    else
      echo "❌ $path"
      missing=1
    fi
  done
  return $missing
}

echo "Checking for expected files..."
assert_exists \
  dist/css/index.json \
  dist/css/{sfds,base,components,typography,utilities}.css \
  dist/elements/index.json \
  dist/elements/index.{js,mjs} \
  icons/index.json icons/svg/{accessibility,plus,minus}.svg \
  react/index.json react/dist/index.{js,mjs} \
  dist/manifest.json \
|| exit 1

echo "🚀 Good to go!"
