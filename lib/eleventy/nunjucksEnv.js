const pkg = require('../../package.json')
const { Environment, FileSystemLoader } = require('nunjucks')
const filters = require('./filters')

const env = new Environment([
  new FileSystemLoader('docs/_includes')
])

const globalData = {
  theme: require('../../docs/_data/theme'),
  tokens: require('../../docs/_data/tokens'),
  package: require('../../package.json'),
  repo: {
    url: `https://github.com/${pkg.repository}`,
    slug: pkg.repository
  }
}

for (const [key, value] of Object.entries(globalData)) {
  env.addGlobal(key, value)
}

for (const [name, filter] of Object.entries(filters)) {
  env.addFilter(name, filter)
}

module.exports = env
