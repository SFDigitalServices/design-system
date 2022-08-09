const designSystemPackage = require('sfgov-design-system/package.json')
const defaultBranch = 'main'
const { repository } = designSystemPackage
const [owner, repo] = repository.split('/')
const repoUrl = `https://github.com/${repository}`
const treeBaseUrl = `${repoUrl}/tree/${defaultBranch}`
const landingDesc = 'The SF.gov design system helps anyone creating digital products for San Francisco to ensure the interfaces are accessible, consistent, and efficient.'

module.exports = {
  designSystemPackage,
  designSystemVersion: process.env.SFGOV_DESIGN_SYSTEM_VERSION || designSystemPackage.version,
  defaultBranch,
  repository,
  owner,
  repo,
  repoUrl,
  treeBaseUrl,
  landingDesc
}
