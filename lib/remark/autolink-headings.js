const visit = require('unist-util-visit')
const { addClass } = require('./utils')

const headingClassMap = {
  2: 'title-md',
  3: 'title-sm',
  4: 'title-xs',
  5: 'big-desc',
  6: 'text-medium'
}

/**
 * This plugin does basically the same thing as remark-autolink-headings,
 * but adds "group" and "group-hover:inline-block" to the heading and "#"
 * link, respectively, to show the link on hover.
 */
module.exports = function autolinkHeadings () {
  return (tree, file) => {
    visit(tree, 'heading', node => {
      addClass(node, headingClassMap[node.depth])

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
