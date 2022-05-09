#!/bin/bash
HEROKU_APP_NAME=sfgov-design-system
branch=$(git symbolic-ref --short HEAD)
pr=$(gh pr view "$branch" --json number --jq .number)
if [[ "$pr" = "" ]]; then
  echo $HEROKU_APP_NAME
else
  echo "${HEROKU_APP_NAME}-pr-${pr}"
fi
