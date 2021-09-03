const { spawnSync } = require('child_process')
const pkg = require('../package.json')

const repoUrl = `https://github.com/${pkg.repository}`
const {
  HEROKU_BRANCH: branch = git('symbolic-ref', '--short', 'HEAD'),
  HEROKU_SLUG_COMMIT: sha = git('rev-parse', 'HEAD'),
  HEROKU_PR_NUMBER: pr
} = process.env

module.exports = {
  git,
  repo: repoUrl,
  defaultBranch: 'main',
  pr: pr ? `${repoUrl}/pull/${pr}` : null,
  branch,
  sha
}

function git (...args) {
  try {
    return spawnSync('git', args, { encoding: 'utf8' })
      .stdout
      .trim()
  } catch (error) {
    console.warn('unable to call `git %s`:', args.join(' '), error)
    return undefined
  }
}
