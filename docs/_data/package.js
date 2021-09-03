const pkg = require('../../package.json')
const { github, context, sha } = require('../../lib/git')

let version

module.exports = async function getPackageWithVersion () {
  if (!version) {
    version = await getPublishedStatusVersion() || pkg.version
  }
  return { ...pkg, version }
}

async function getPublishedStatusVersion () {
  try {
    const data = await github.repos.listCommitStatusesForRef({
      ...context,
      ref: sha
    })
    const versionStatus = data.statuses?.find(status => {
      return status.state === 'success' && status.context.includes('publish')
    })
    if (versionStatus) {
      console.info('got published version status:', versionStatus)
      return versionStatus.description
    } else {
      console.warn('no published version status for %s', sha)
    }
  } catch (error) {
    console.warn('unable to get published version status:', error)
  }
}
