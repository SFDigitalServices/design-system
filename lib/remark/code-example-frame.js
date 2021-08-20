const classNames = require('classnames')
const visit = require('unist-util-visit')
const { h, icon, addClass } = require('./utils')

const WRAPPER_CLASS = 'my-20 border-1 border-solid border-slate-4'

module.exports = function exampleFramePlugin () {
  return (tree, file) => {
    visit(tree, 'code', (node, index, parent) => {
      const { id: nodeId, iframe, url } = node?.data || {}
      if (!iframe) {
        addClass(node, 'block rounded p-20 bg-grey-1')
        return
      }

      const id = `example--${nodeId}`
      parent.children.splice(
        index,
        1,
        h('div', {
          id,
          className: WRAPPER_CLASS
        }, [
          h('div', { className: 'p-20' }, [
            h('iframe', {
              ...iframe.properties,
              className: 'w-full border-0 bg-white'
            })
          ]),
          h('div', {
            className: 'p-20 pr-48 bg-grey-1 border-0 border-t-1 border-solid border-slate-4 relative'
          }, [
            node,
            h('div', {
              className: 'absolute m-8 space-y-8',
              style: 'top: 0; right: 0;'
            }, [
              h('div', { }, [
                actionButton('a', {
                  href: url,
                  title: 'open in editor',
                  target: '_blank'
                }, [
                  icon('arrow-up')
                ])
              ]),
              h('div', {}, [
                h('clipboard-copy', { for: id }, [
                  actionButton('button', {
                    title: 'copy example code'
                  }, [
                    icon('document')
                  ])
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
