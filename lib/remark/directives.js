const dot = require('dot-component')
const visit = require('unist-util-visit')
const env = require('../eleventy/nunjucksEnv')

const swatchTemplate = `
{% from '../_includes/macros.njk' import swatch %}
{{ swatch(color) }}
`

const directiveHandlers = {
  swatches (node) {
    visit(node, 'list', list => {
      dot.set(list, 'data.hProperties.className', 'list-none flex flex-wrap m-0 p-0')
    })
    visit(node, child => child.name === 'swatch', child => {
      child.type = 'html'
      const color = {
        label: child.children[0]?.value || '',
        ...child.attributes
      }
      child.value = env.renderString(swatchTemplate, { color })
    })
  }
}

module.exports = options => {
  return (tree, file) => {
    visit(tree, ['containerDirective', 'inlineDirective'], (node, index, parent) => {
      const handler = directiveHandlers[node.name]
      if (typeof handler === 'function') {
        handler(node)
      }
    })
  }
}
