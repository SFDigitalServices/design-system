const pkg = require('../../package.json')
const { git } = require('../../lib/git')
const { Octokit } = require('@octokit/rest')
const { branch } = require('./git')

const github = new Octokit({ auth: process.env.GITHUB_TOKEN })

const gitMetaCache = new Map()

module.exports = {
  git: {
    commit (data) {
      const path = data.page.inputPath.replace(/^\.\//, '')
      return getLastCommit(path)
    }
  }
}

async function getLastCommit (path) {
  let meta
  if (gitMetaCache.has(path)) {
    return await gitMetaCache.get(path)
  }

  console.info('getting last commit for', path)
  if (process.env.NODE_ENV === 'development') {
    meta = getLastCommitFromGit(path)
  } else if (github) {
    const promise = getLastCommitFromGitHub(path)
    // put the promise in the cache so that simultaneous requests for the same
    // path await the same request
    gitMetaCache.set(path, promise)
    meta = await promise
  }
  gitMetaCache.set(path, meta)
  return meta
}

function getLastCommitFromGit (path) {
  const log = git('log', '-1', '--', path)
  const [first, second, third] = log.split('\n')
  return {
    sha: match(first, /^commit ([a-f0-9]+)/, 1),
    author: match(second, /Author: +.*<([^@]+)@users\.noreply\.github\.com>/, 1),
    date: match(third, /Date: +(.+)/, 1)
  }
}

async function getLastCommitFromGitHub (path) {
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
    // console.info('caching git meta for "%s"', path, meta)
    return meta
  } else {
    console.warn('unable to get commit for "%s"', path, res)
    return null
  }
}

function match (str, pattern, index = 1) {
  const m = str ? str.match(pattern) : null
  return m ? m[index] : null
}
