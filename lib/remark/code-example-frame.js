const visit = require('unist-util-visit')
const toString = require('hast-util-to-html')
const { Environment, FileSystemLoader } = require('nunjucks')
const { addClass } = require('./utils')
const h = require('hastscript')
const filters = require('../eleventy/filters')

const env = new Environment([
  new FileSystemLoader('docs/_includes')
])
for (const [name, filter] of Object.entries(filters)) {
  env.addFilter(name, filter.bind(env))
}

module.exports = function exampleFramePlugin () {
  return async (tree, file) => {
    return visit(tree, 'code', async (node, index, parent) => {
      const { id: nodeId, iframe } = node?.data || {}
      if (!iframe) {
        addClass(node, 'block rounded p-20 bg-grey-1')
        return visit.SKIP
      }

      const template = node.data.template || 'example.njk'
      const { hProperties, hChildren, ...rest } = node.data
      const html = env.render(template, {
        node,
        ...rest,
        id: `example--${nodeId}`,
        content: toString(
          h('pre', { className: 'hljs' }, [
            h('code', hProperties, hChildren)
          ])
        )
      })
      parent.children.splice(index, 1, {
        type: 'html',
        value: html
      })
      return visit.SKIP
    })
  }
}
