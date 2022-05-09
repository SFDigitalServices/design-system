#!/bin/bash
app="${1:-$(scripts/heroku/get-app.sh)}"
heroku git:remote -a "$app"
git push --force heroku HEAD:main