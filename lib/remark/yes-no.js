const { addClass, h } = require('./utils')
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
            break
          case 'No':
            no = true
            break
          default:
            return null
        }
        const border = no ? 'border-red-4' : 'border-green-4'
        const color = no ? 'text-red-4' : 'text-green-4'
        const symbol = no ? 'close' : 'check'
        addClass(node, 'w-1/2', 'border-solid', border, 'border-0', 'border-t-4', 'relative')
        node.children.push(
          h('div', {
            className: `
              absolute right-0 bottom-full m-12
              w-40 h-40 rounded-full bg-white
              border-solid border-2 ${border} ${color}
              flex justify-center items-center
            `
          }, [
            h('sfgov-icon', { symbol })
          ])
        )
      })
      if (yes && no) {
        addClass(table, 'w-full')
      }
    })
  }
}
