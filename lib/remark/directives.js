const visit = require('unist-util-visit')
const { environment } = require('../nunjucks')
const outdent = require('outdent')
const { addClass } = require('./utils')
const h = require('hastscript')

const directiveHandlers = {
  swatches (node) {
    const swatchTemplate = outdent`
      {% from '../_includes/macros.njk' import swatch %}
      {{ swatch(color) }}
    `
    visit(node, 'list', list => {
      addClass(list, 'list-none flex flex-wrap m-0 p-0')
    })
    visit(node, child => child.name === 'swatch', child => {
      const color = {
        label: child.children[0]?.value || '',
        ...child.attributes
      }
      child.type = 'html'
      child.value = environment.renderString(swatchTemplate, { color })
    })
  },

  icon (node, index, parent) {
    upgrade(node, {
      name: 'sfgov-icon',
      attributes: {
        'aria-label': node.children[0]?.value
      }
    })
    node.children = []
  }
}

module.exports = options => {
  const types = [
    'containerDirective',
    'leafDirective',
    'textDirective'
  ]
  return (tree, file) => {
    visit(tree, types, (node, index, parent) => {
      const handler = directiveHandlers[node.name]
      if (typeof handler === 'function') {
        handler(node, index, parent)
      } else {
        upgrade(node)
      }
    })
  }
}

function upgrade (node, options) {
  const hast = h(options?.name || node.name, node.attributes)
  const data = node.data || (node.data = {})
  data.hName = hast.tagName
  data.hProperties = Object.assign(hast.properties, options?.attributes)
}
