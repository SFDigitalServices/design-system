#!/bin/bash
app="${1:-$(scripts/heroku/get-app.sh)}"
branch="$(git symbolic-ref --short HEAD)"
pr=$(gh pr view "$branch" --json number --jq .number)
printf '{"ref":"%s","environment":"%s","required_contexts":[],"transient_environment":true}' \
  "$branch" "$app" \
  | gh api repos/{owner}/{repo}/deployments --jq .id --input -