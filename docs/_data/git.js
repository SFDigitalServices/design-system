const pkg = require('../../package.json')
const { git } = require('../../lib/git')

const repoUrl = `https://github.com/${pkg.repository}`
const {
  HEROKU_BRANCH: branch = git('symbolic-ref', '--short', 'HEAD'),
  HEROKU_SLUG_COMMIT: sha = git('rev-parse', 'HEAD'),
  HEROKU_PR_NUMBER: pr
} = process.env

module.exports = {
  repo: repoUrl,
  defaultBranch: 'main',
  pr: pr ? `${repoUrl}/pull/${pr}` : null,
  branch,
  sha
}
