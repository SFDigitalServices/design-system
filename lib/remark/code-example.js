const visit = require('unist-util-visit')
const { getNearestHeading, parseMeta } = require('./utils')

module.exports = function codeExamplePlugin () {
  const resizeHandler = 'this.style.height = this.contentDocument.documentElement.offsetHeight + "px"'
  return (tree, file) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'html') {
        console.warn('non-html code block:', node.lang)
        return
      }

      const heading = getNearestHeading(node, parent)
      const meta = parseMeta(node.meta)
      const id = meta.id || heading?.data.hProperties.id
      if (!id) {
        console.warn('unable to determine id for code block in %s:', file.path, node)
        return
      }

      const nodeId = `code--${id}`
      const data = node.data || (node.data = {})
      const props = data.hProperties || (node.data.hProperties = {})
      props.id = nodeId

      const url = `/examples/${id}.html`
      Object.assign(node.data, {
        id,
        title: meta.title || heading?.children[0]?.value,
        url,
        meta,
        source: {
          path: `/${file.path}`,
          location: node.location,
          url: String(file.path)
            .replace(/docs/, '')
            .replace(/\.md$/, `/#${id}`)
        }
      })

      node.data.iframe = {
        properties: {
          src: url,
          style: 'overflow-y: auto',
          scrolling: 'no',
          onload: resizeHandler,
          onresize: resizeHandler
        }
      }
    })
  }
}
