const semver = require('semver')
const stylelint = require('stylelint')
const { report } = stylelint.utils
const pkg = require('../../package.json')

const version = process.env.PACKAGE_VERSION || pkg.version
const ruleName = 'local/expiring-todo-comments'

module.exports = Object.assign(
  stylelint.createPlugin(ruleName, (enabled, options = {}) => {
    return (root, result, context) => {
      if (!enabled) return

      const {
        keywords = ['todo', 'fixme']
      } = options || {}
      const pattern = /\b([a-z]+) \[(.+)\]: +(.+)/i

      root.walkComments(node => {
        const match = node.text.match(pattern)
        if (match) {
          const [_, keyword, spec, note] = match // eslint-disable-line no-unused-vars
          const lowerKeyword = keyword.toLowerCase()
          if (keywords.includes(lowerKeyword) && semver.satisfies(version, spec)) {
            report({
              ruleName,
              result,
              message: `Version ${quote(version)} satisfies ${quote(spec)} (${keyword}: ${note})`,
              node,
              word: spec
            })
          }
        }
      })
    }
  }),
  {
    ruleName
  }
)

function quote (str) {
  return `“${str}”`
}
