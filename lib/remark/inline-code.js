const h = require('hastscript')
const { addClass } = require('./utils')
const visit = require('unist-util-visit')
const colorPattern = /^#[a-f0-9]{3,6}$/i

module.exports = function inlineCode () {
  return (tree, file) => {
    visit(tree, 'inlineCode', (node, index, parent) => {
      addClass(node, 'inline-code')
      if (colorPattern.test(node.value)) {
        if (!node.data) {
          node.data = {}
        }
        node.data.hChildren = [
          h('span', { className: 'inline-block rounded-2 w-16 h-16 mr-4', style: `background: ${node.value}; align-self: center;` }),
          { type: 'text', value: node.value }
        ]
      }
    })
  }
}
