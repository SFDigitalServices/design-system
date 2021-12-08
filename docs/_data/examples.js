const globby = require('globby')
const remark = require('remark')
const visit = require('unist-util-visit')
const interpolateCode = require('../../lib/remark/interpolate-code')
const codeExample = require('../../lib/remark/code-example')
const { readFileSync } = require('fs')

module.exports = getExamples

async function getExamples () {
  const examples = []
  const mds = await globby('docs/**/*.md')
  const processor = remark()
    .use(require('remark-slug'))
    .use(interpolateCode)
    .use(codeExample)
    .use(() => (tree, file) => {
      visit(tree, 'code', (node, index, parent) => {
        if (node.data?.id && node.data?.meta?.static !== 'true') {
          examples.push({
            code: node.value,
            ...node.data
          })
        }
      })
    })

  for (const path of mds) {
    await processor.process({
      path,
      contents: readFileSync(path, 'utf8')
    })
  }


  return examples
}
