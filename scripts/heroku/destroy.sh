#!/bin/bash
app="${1:-$(scripts/heroku/get-app.sh)}"
heroku apps:destroy "$app" --confirm "$app"