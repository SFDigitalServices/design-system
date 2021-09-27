const h = require('hastscript')
const { addClass } = require('./utils')
const visit = require('unist-util-visit')
const colorPattern = /^#[a-f0-9]{3,6}$/i

module.exports = function inlineCode () {
  return (tree, file) => {
    visit(tree, 'inlineCode', (node, index, parent) => {
      addClass(node, 'inline-flex bg-grey-2 rounded-2 px-4 py-2')
      if (colorPattern.test(node.value)) {
        if (!node.data) {
          node.data = {}
        }
        node.data.hChildren = [
          { type: 'text', value: node.value },
          h('span', { className: 'rounded-2 w-16 h-16 ml-4', style: `background: ${node.value}; align-self: center;` })
        ]
      }
    })
  }
}
