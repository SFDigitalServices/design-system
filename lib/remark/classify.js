const { selectAll } = require('unist-util-select')
const { addClass } = require('./utils')

const selectorClassMap = {
  h3: 'title-sm',
  h4: 'title-xs',
  h5: 'big-desc',
  h6: 'text-medium',
  blockquote: 'border-0 border-l-1 border-solid border-grey-4 mx-0 pr-0 pl-16 py-8'
}

module.exports = function classify () {
  const selectors = Object.keys(selectorClassMap)
  return (tree, file) => {
    for (const selector of selectors) {
      const klass = selectorClassMap[selector]
      const nodes = selectAll(upgradeSelector(selector), tree)
      // console.info('got %d nodes matching %s', nodes.length, selector)
      for (const node of nodes) {
        addClass(node, typeof klass === 'function' ? klass(...arguments) : klass)
      }
    }
  }

  function upgradeSelector (selector) {
    if (typeof selector === 'string' && /^[\w-]+$/.test(selector)) {
      return `${selector}, [tagName="${selector}"]`
    }
    return selector
  }
}