#!/bin/bash
app=sfgov-design-system
branch=$(git symbolic-ref --short HEAD)
pr=$(gh pr view "$branch" --json number --jq .number)
if [[ "$pr" = "" ]]; then
  echo "$app"
else
  echo "${app}-pr-${pr}"
fi
