const visit = require('unist-util-visit')
const { addClass } = require('./utils')

module.exports = function hideAutolinkHeadings () {
  return (tree, file) => {
    visit(tree, 'heading', node => {
      addClass(node, 'group')
      visit(node, 'link', link => {
        addClass(link, 'hidden', 'group-hover:inline-block')
      })
    })
  }
}
