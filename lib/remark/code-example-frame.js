const classNames = require('classnames')
const visit = require('unist-util-visit')
const { h, icon } = require('./utils')

module.exports = function exampleFramePlugin () {
  return (tree, file) => {
    visit(tree, 'code', (node, index, parent) => {
      const { id, iframe, src } = node?.data || {}
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
