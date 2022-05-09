#!/bin/bash
ref="${1:-$(git symbolic-ref --short HEAD)}"
gh api 'repos/{owner}/{repo}/deployments' -f "ref=$ref" --jq 'first | .id'