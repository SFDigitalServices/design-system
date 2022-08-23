const pkg = require('../../package.json')
const { github, context, branch, defaultBranch, sha } = require('../../lib/git')

// if we're on the main branch, just use the version in package.json
let version = (branch === defaultBranch) ? pkg.version : undefined

module.exports = async function getPackageWithVersion () {
  // if no version was set yet, try to figure out the version published by
  // GitHub Actions
  if (!version) {
    version = await getPublishedStatusVersion() || pkg.version
  }
  return { ...pkg, version }
}

async function getPublishedStatusVersion () {
  try {
    const res = await github.repos.listCommitStatusesForRef({
      ...context,
      ref: sha
    })
    const statuses = res.data
    const versionStatus = statuses.find(status => {
      return status.state === 'success' && status.context.includes('publish')
    })
    if (versionStatus) {
      // console.info('got published version status:', versionStatus)
      return versionStatus.description
    } else {
      console.warn('no published version status for %s', sha, statuses)
    }
  } catch (error) {
    console.warn('unable to get published version status:', error.message)
  }
}
