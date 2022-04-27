const { addClass } = require('./utils')
const visit = require('unist-util-visit')

module.exports = function yesNoHighlight () {
  return (tree, file) => {
    visit(tree, 'table', table => {
      let yes = false
      let no = false
      visit(table, 'tableCell', (node, index, parent) => {
        if (!node.children.length) return
        const value = node.children[0].value?.trim()
        switch (value) {
          case 'Yes':
            yes = true
            addClass(node, 'border-solid', 'border-0', 'border-t-2', 'border-green-4')
            break
          case 'No':
            no = true
            addClass(node, 'border-solid', 'border-0', 'border-t-2', 'border-red-4')
            break
          default:
            return null
        }
        addClass(node, 'w-1/2')
      })
      if (yes && no) {
        addClass(table, 'w-full')
      }
    })
  }
}
