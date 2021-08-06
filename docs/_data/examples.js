const globby = require('globby')
const remark = require('remark')
const visit = require('unist-util-visit')
const { codeExamplePlugin } = require('../../lib/remark')
const { readFileSync } = require('fs')

module.exports = getExamples

async function getExamples () {
  const examples = []
  const mds = await globby('docs/**/*.md')
  const processor = remark()
    .use(require('remark-slug'))
    .use(codeExamplePlugin)
    .use(() => (tree, file) => {
      visit(tree, 'code', (node, index, parent) => {
        examples.push({
          code: node.value,
          ...node.data
        })
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