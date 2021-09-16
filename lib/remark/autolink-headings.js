const visit = require('unist-util-visit')
const { addClass } = require('./utils')

/**
 * This plugin does basically the same thing as remark-autolink-headings,
 * but adds "group" and "group-hover:inline-block" to the heading and "#"
 * link, respectively, to show the link on hover.
 */
module.exports = function autolinkHeadings () {
  return (tree, file) => {
    visit(tree, 'heading', node => {
      const { id } = node.properties || node.data?.hProperties || {}
      if (!id) return

      addClass(node, 'group')

      node.children.push({
        type: 'element',
        children: [{
          type: 'text',
          value: '#'
        }],
        data: {
          hName: 'a',
          hProperties: {
            href: `#${id}`,
            ariaHidden: 'true',
            tabIndex: -1,
            className: 'hidden group-hover:inline-block ml-8 no-underline font-regular'
          }
        }
      })
    })
  }
}
