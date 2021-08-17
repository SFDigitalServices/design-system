const merge = require('lodash.merge')
const visit = require('unist-util-visit')

module.exports = function prosePlugin () {
  const transforms = {
    root: {
      properties: {
        className: 'prose relative'
      }
    },
    heading: {
      properties: {
        className: 'mt-40'
      }
    },
    pre: {
      properties: {
        className: 'p-0 m-0'
      }
    }
  }

  return (tree, file) => {
    for (const [type, transform] of Object.entries(transforms)) {
      visit(tree, node => node.tagName === type, node => {
        if (typeof transform === 'function') {
          transform(node)
        } else {
          merge(node, transform)
        }
      })
    }
  }
}
