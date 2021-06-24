const classNames = require('classnames')
const merge = require('lodash.merge')
const visit = require('unist-util-visit')

module.exports = {
  parseMeta,
  getNearestHeading,
  codeExamplePlugin,
  eleventyPluginConfig: {
    enableRehype: false,
    plugins: [
      'remark-slug',
      {
        plugin: 'remark-autolink-headings',
        options: {
          behavior: 'append',
          content: {
            type: 'text',
            value: '#'
          },
          linkProperties: {
            ariaHidden: 'true',
            tabIndex: -1,
            className: 'ml-8 no-underline'
          }
        }
      },
      hideAutolinkHeadings,
      'remark-highlight.js',
      codeExamplePlugin,
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

function codeExamplePlugin () {
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
  return (tree, file) => {
    visit(tree, 'code', (node, index, parent) => {
      const { id, iframe, src } = node.data
      if (!iframe) {
        return
      }

      delete node.data.hProperties.id

      parent.children.splice(
        index,
        1,
        h('div', {
          id,
          className: 'flex flex-wrap items-stretch my-20 rounded border border-solid border-grey-1'
        }, [
          h('div', {
            className: 'w-full lg:w-1/2'
          }, [
            h('iframe', {
              ...iframe.properties,
              className: 'w-full rounded border-0 bg-white'
            })
          ]),
          h('div', {
            className: 'w-full lg:w-1/2 p-20 bg-grey-1 relative'
          }, [
            node,
            h('div', {
              className: 'absolute m-8',
              style: 'top: 0; right: 0;'
            }, [
              actionButton('a', {
                href: src,
                title: 'open in editor',
                target: '_blank'
              }, [
                icon('arrow-up')
              ]),
              h('clipboard-copy', { for: id }, [
                actionButton('button', {
                  className: 'ml-8',
                  title: 'copy example code'
                }, [
                  icon('document')
                ])
              ])
            ])
          ])
        ])
      )
      return visit.SKIP
    })
  }

  function actionButton (tagName = 'button', props = {}, ...children) {
    const { className, ...rest } = props
    return h(tagName, {
      className: classNames('btn btn-inverse rounded-4 px-8 py-4', className),
      ...rest
    }, ...children)
  }
}

function icon (symbol, label, props = { }, ...children) {
  return h('sfgov-icon', {
    symbol,
    'aria-label': label,
    height: 16,
    ...props
  }, ...children)
}

function h (tagName, props = {}, ...children) {
  return {
    type: 'element',
    tagName,
    data: {
      hName: tagName,
      hProperties: props
    },
    children: children
      .flat(2)
      .map(d => (typeof d === 'string') ? t(d) : d)
  }
}

function t (text) {
  return {
    type: 'text',
    value: text
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

function getNearestHeading (node, parent) {
  for (let i = parent.children.indexOf(node) - 1; i >= 0; i--) {
    const sibling = parent.children[i]
    if (sibling.type === 'heading') {
      return sibling
    }
  }
}

function hideAutolinkHeadings () {
  return (tree, file) => {
    visit(tree, 'heading', node => {
      addClass(node, 'group')
      visit(node, 'link', link => {
        addClass(link, 'hidden', 'group-hover:inline-block')
      })
    })
  }
}

function addClass (node, ...classes) {
  node.data.hProperties.className = classNames(
    node.data.hProperties.className,
    ...classes
  )
}
