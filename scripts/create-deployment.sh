#!/bin/bash
branch=$(git symbolic-ref --short HEAD)
pr=$(gh pr view "$branch" --json number --jq .number)
printf '{"ref":"%s","environment":"%s","required_contexts":[],"transient_environment":true}' \
  "$branch" review \
  | gh api repos/{owner}/{repo}/deployments --jq .id --input -