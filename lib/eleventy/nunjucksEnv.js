const { Environment, FileSystemLoader } = require('nunjucks')
const filters = require('./filters')

const {
  AMPLITUDE_API_KEY,
  NODE_ENV
} = process.env

const env = new Environment([
  new FileSystemLoader('docs/_includes'),
  new FileSystemLoader('node_modules')
])

const globalData = {
  theme: require('../../docs/_data/theme'),
  tokens: require('../../docs/_data/tokens'),
  package: require('../../package.json'),
  env: {
    AMPLITUDE_API_KEY,
    NODE_ENV
  }
}

for (const [key, value] of Object.entries(globalData)) {
  env.addGlobal(key, value)
}

for (const [name, filter] of Object.entries(filters)) {
  env.addFilter(name, filter)
}

module.exports = env
