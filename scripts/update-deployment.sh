#!/bin/bash
deployment_id="$1"
state="$2"
app=$(scripts/get-heroku-app.sh)
url="https://${app}.herokuapp.com/"
printf '{"state":"%s","environment_url":"%s","target_url":"%s"}' \
  "$state" "$url" "$url" \
  | gh api "repos/{owner}/{repo}/deployments/$deployment_id/statuses" --input -
