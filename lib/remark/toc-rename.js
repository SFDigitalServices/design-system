const visit = require('unist-util-visit')
const { h, addClass } = require('./utils')

module.exports = function tocRename () {
  return (tree, file) => {
    let title
    visit(tree, 'heading', node => {
      if (!title) {
        title = node.children[0]?.value
        return visit.STOP
      }
    })

    visit(tree, 'heading', (node, index, parent) => {
      const text = node.children[0]?.value
      if (text === 'Table of contents') {
        node.children[0].value = title

        /*
        addClass(parent, 'lg:pr-100')

        parent.children.splice(
          index,
          1,
          h('div', {
            className: 'w-full lg:w-1/3 lg:sticky lg:top-0 lg:right-0'
          }, [node])
        )
        */

        return visit.STOP
      }
    })
  }
}
