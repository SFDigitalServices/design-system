#!/bin/bash
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi
npx figma-export use-config
npx eslint --fix generated/jsx/*.js*