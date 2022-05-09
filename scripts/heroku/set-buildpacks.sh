#!/bin/bash
heroku plugins:install buildpack-registry
heroku plugins:install buildpacks

app="${1:-$(scripts/heroku/get-app.sh)}"
buildpacks=$(node -e 'console.log(require("./app.json").buildpacks.map(b => b.url).join("\n"))')
for buildpack in $buildpacks; do
  heroku buildpacks:add "$buildpack" -a "$app"
done