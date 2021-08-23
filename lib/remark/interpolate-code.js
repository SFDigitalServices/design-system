const visit = require('unist-util-visit')
const { Environment, FileSystemLoader } = require('nunjucks')

const globalData = {
  theme: require('../../docs/_data/theme'),
  tokens: require('../../docs/_data/tokens'),
  package: require('../../package.json')
}

const env = new Environment([
  new FileSystemLoader('docs/_includes')
])

module.exports = options => {
  return (tree, file) => {
    visit(tree, nodeFilter, (node, index, parent) => {
      node.value = env.renderString(node.value, {
        ...globalData,
        ...file.data
      })
    })
  }
}

function nodeFilter (node) {
  return node.type === 'code' && node.lang === 'html'
}
