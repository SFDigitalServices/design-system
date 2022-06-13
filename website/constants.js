const defaultPackage = require('sfgov-design-system/package.json')
const defaultBranch = 'main'
const { repository } = defaultPackage
const [owner, repo] = repository.split('/')
const repoUrl = `https://github.com/${repository}`
const treeBaseUrl = `${repoUrl}/tree/${defaultBranch}`
const landingDesc = 'The SF.gov design system helps anyone creating digital products for San Francisco to ensure the interfaces are accessible, consistent, and efficient.'

module.exports = {
  defaultPackage,
  defaultBranch,
  repository,
  owner,
  repo,
  repoUrl,
  treeBaseUrl,
  landingDesc
}
