#!/bin/bash
state="$1"
deployment_id="${2:-$(scripts/deployment/get-id.sh)}"
app="${3:-$(scripts/heroku/get-app.sh)}"
url="https://${app}.herokuapp.com/"
printf '{"state":"%s","environment_url":"%s","target_url":"%s"}' \
  "$state" "$url" "$url" \
  | gh api "repos/{owner}/{repo}/deployments/$deployment_id/statuses" --input -
