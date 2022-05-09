#!/bin/bash
app="${1:-$(scripts/heroku/get-app.sh)}"
team="${2:-sfdigitalservices}"
heroku apps:create -a "$app" --team="$team"

pipeline="${3:-$HEROKU_PIPELINE}"
stage="${4:-$HEROKU_STAGE}"
if [[ ! -z "$pipeline" ]]; then
  heroku pipelines:add "$pipeline" -a "$app" --stage "${stage:-development}"
fi

scripts/heroku/set-buildpacks.sh