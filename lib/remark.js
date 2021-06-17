const merge = require('lodash.merge')
const visit = require('unist-util-visit')

module.exports = {
  parseMeta,
  getSlug,
  eleventyPluginConfig: {
    enableRehype: false,
    plugins: [
      'remark-slug',
      'remark-autolink-headings',
      'remark-highlight.js',
      exampleFramePlugin,
      {
        plugin: 'remark-rehype',
        options: { allowDangerousHtml: true }
      },
      prosePlugin,
      'rehype-stringify'
    ]
  }
}

function prosePlugin () {
  const transforms = {
    root: {
      properties: {
        className: 'prose'
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

function exampleFramePlugin () {
  const resizeHandler = 'this.style.height = this.contentDocument.documentElement.offsetHeight + "px"'
  return (tree, file) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'html') {
        console.warn('non-html code block:', node.lang)
        return
      }

      const meta = parseMeta(node.meta)
      const id = meta.id || getSlug(node, parent)
      if (!id) {
        console.warn('unable to determine id for code block in %s:', file.path, node)
        return
      }

      const src = `/examples/${id}.html`
      parent.children.splice(
        index,
        1,
        h('div', {
          className: 'flex rounded bg-grey-2 my-20'
        }, [
          h('div', { className: 'w-1/2 p-20' }, [node]),
          h('div', { className: 'w-1/2 p-20' }, [
            h('iframe', {
              src,
              className: 'w-full rounded border-0 bg-white',
              style: 'overflow-y: auto',
              scrolling: 'no',
              onload: resizeHandler,
              onresize: resizeHandler
            })
          ])
        ])
      )
      return visit.SKIP
    })
  }
}

function h (tagName, props = {}, ...children) {
  return {
    type: 'element',
    tagName,
    data: {
      hName: tagName,
      hProperties: props
    },
    children: children.flat(2)
  }
}

function parseMeta (str) {
  if (!str) return {}
  const meta = {}
  str.replace(/(\w+)="([^"]+)"/g, (_, key, value) => {
    meta[key] = value
  })
  return meta
}

function getSlug (node, parent) {
  for (let i = parent.children.indexOf(node) - 1; i >= 0; i--) {
    const sibling = parent.children[i]
    if (sibling.type === 'heading') {
      return sibling.data.hProperties.id
    }
  }
}
