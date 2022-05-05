const postcss = require('postcss')
const { readFileSync } = require('fs')

const UTILITY_SELECTOR_PATTERN = /^\.[-:\w]+$/

module.exports = function getUtilities () {
  const css = readFileSync('dist/css/utilities.css', 'utf8')
  const root = postcss.parse(css)
  /** @type [postcss.Declaration] */
  const decls = []
  root.walkRules(rule => {
    if (UTILITY_SELECTOR_PATTERN.test(rule.selector)) {
      rule.walkDecls((decl, index) => {
        decls.push(decl)
      })
    }
  })

  return {
    decls,
    byClassname: Object.fromEntries(
      decls.map(decl => [
        decl.parent.selector.substring(1),
        decl
      ])
    ),
    byProperty: groupBy(
      decls,
      decl => decl.prop
    )
  }
}

function groupBy (list /** @type [any] */, keyFunction /** type Function */) {
  return list.reduce((map, d, i) => {
    const key = keyFunction(d, i)
    if (key in map) map[key].push(d)
    else map[key] = [d]
    return map
  }, {})
}
