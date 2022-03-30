const visit = require('unist-util-visit')
const { environment } = require('../nunjucks')

module.exports = options => {
  return (tree, file) => {
    visit(tree, nodeFilter, (node, index, parent) => {
      node.value = environment.renderString(node.value, file.data)
    })
  }
}

function nodeFilter (node) {
  return node.type === 'code' && node.lang === 'html'
}
