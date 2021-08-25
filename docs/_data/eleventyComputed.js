const pkg = require('../../package.json')
const { git } = require('../../lib/git')
const { Octokit } = require('@octokit/rest')
const { branch } = require('./git')

let github
if (process.env.GITHUB_TOKEN) {
  github = new Octokit({ auth: process.env.GITHUB_TOKEN })
}

const gitMetaCache = new Map()

module.exports = {
  git: {
    commit (data) {
      const path = data.page.inputPath.replace(/^\.\//, '')
      console.info('getting last commit for', path)
      return getLastCommit(path)
    }
  }
}

async function getLastCommit (path) {
  if (gitMetaCache.has(path)) {
    // console.info('(git commit cached)', gitMetaCache.get(path))
    return gitMetaCache.get(path)
  } else if (github) {
    const [owner, repo] = pkg.repository.split('/')
    let res, commits
    try {
      res = await github.rest.repos.listCommits({
        owner,
        repo,
        path,
        sha: branch,
        per_page: 1
      })
      commits = res.data
    } catch (error) {
      console.warn('error loading commits for "%s"', path, error)
      gitMetaCache.set(path, null)
      return null
    }

    if (commits?.length) {
      const [{ sha, commit, author }] = commits
      const meta = {
        sha,
        date: commit.author?.date,
        author: {
          name: commit.author?.name,
          login: author.login
        }
      }
      console.info('caching git meta for "%s"', path, meta)
      gitMetaCache.set(path, meta)
      return meta
    } else {
      console.warn('unable to get commit for "%s"', path, res)
      gitMetaCache.set(path, null)
      return null
    }
  } else if (process.env.NODE_ENV === 'development') {
    const log = git('log', '-1', '--', path)
    const [first, second, third] = log.split('\n')
    const meta = {
      sha: match(first, /^commit ([a-f0-9]+)/, 1),
      author: match(second, /Author: +.*<([^@]+)@users\.noreply\.github\.com>/, 1),
      date: match(third, /Date: +(.+)/, 1)
    }
    gitMetaCache.set(path, meta)
    return meta
  }
}

function match (str, pattern, index = 1) {
  const m = str ? str.match(pattern) : null
  return m ? m[index] : null
}
