#!/bin/bash
deployment_id="${1:-$(scripts/deployment/get-id.sh)}"
gh api -X DELETE "repos/{owner}/{repo}/deployments/${deployment_id}"