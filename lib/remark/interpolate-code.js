const visit = require('unist-util-visit')
const env = require('../eleventy/nunjucksEnv')

module.exports = options => {
  return (tree, file) => {
    visit(tree, nodeFilter, (node, index, parent) => {
      node.value = env.renderString(node.value, file.data)
    })
  }
}

function nodeFilter (node) {
  return node.type === 'code' && node.lang === 'html'
}
