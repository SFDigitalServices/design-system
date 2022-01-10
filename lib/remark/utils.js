const classNames = require('classnames')

module.exports = {
  addClass,
  getNearestHeading,
  h,
  icon,
  parseMeta,
  t
}

function addClass (node, ...classes) {
  if (node.properties) {
    node.properties.className = classNames(
      node.properties.className,
      ...classes
    )
    return
  }
  if (!node.data) node.data = {}
  if (!node.data.hProperties) node.data.hProperties = {}
  node.data.hProperties.className = classNames(
    node.data.hProperties.className,
    ...classes
  )
}

function getNearestHeading (node, parent) {
  for (let i = parent.children.indexOf(node) - 1; i >= 0; i--) {
    const sibling = parent.children[i]
    if (sibling.type === 'heading') {
      return sibling
    }
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

function icon (symbol, label, props = { }, ...children) {
  return h('sfgov-icon', {
    symbol,
    'aria-label': label,
    height: 16,
    ...props
  }, ...children)
}
