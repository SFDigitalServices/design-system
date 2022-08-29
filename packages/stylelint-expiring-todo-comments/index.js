const { join } = require('path')
const semver = require('semver')
const stylelint = require('stylelint')
const { report } = stylelint.utils

const ruleName = 'sfgov/expiring-todo-comments'

module.exports = Object.assign(
  stylelint.createPlugin(ruleName, (enabled, options = {}) => {
    return (root, result, context) => {
      if (!enabled) return
      
      // FIXME: use find-up, relative to file being processed??
      const pkg = require(join(process.cwd(), 'package.json'))
      const { version } = pkg

      const { keywords = ['todo', 'fixme'] } = options || {}
      const pattern = /\b([a-z]+) \[(.+)\]: +(.+)/i

      root.walkComments((node) => {
        const match = node.text.match(pattern)
        if (match) {
          const [_, keyword, spec, note] = match // eslint-disable-line no-unused-vars
          const lowerKeyword = keyword.toLowerCase()
          if (
            keywords.includes(lowerKeyword) &&
            semver.satisfies(version, spec)
          ) {
            report({
              ruleName,
              result,
              message: `Version ${quote(version)} satisfies ${quote(
                spec
              )} (${keyword}: ${note})`,
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
