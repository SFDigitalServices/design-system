const { Environment, FileSystemLoader } = require('nunjucks')

const env = new Environment([
  new FileSystemLoader('docs/_includes')
])

const globalData = {
  theme: require('../../docs/_data/theme'),
  tokens: require('../../docs/_data/tokens'),
  package: require('../../package.json')
}

for (const [key, value] of Object.entries(globalData)) {
  env.addGlobal(key, value)
}

module.exports = env
