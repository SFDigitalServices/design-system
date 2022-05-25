const defaultPackage = require('sfgov-design-system/package.json')
const defaultBranch = 'main'
const { repository } = defaultPackage
const [owner, repo] = repository.split('/')
const repoUrl = `https://github.com/${repository}`
const treeBaseUrl = `${repoUrl}/tree/${defaultBranch}`

module.exports = {
  defaultPackage,
  defaultBranch,
  repository,
  owner,
  repo,
  repoUrl,
  treeBaseUrl
}
