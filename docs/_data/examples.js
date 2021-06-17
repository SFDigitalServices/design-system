const globby = require('globby')
const remark = require('remark')
const visit = require('unist-util-visit')
const { parseMeta, getSlug } = require('../../lib/remark')
const { readFileSync } = require('fs')
const { join } = require('path')

module.exports = getExamples

async function getExamples () {
  const examples = []
  const mds = await globby('docs/**/*.md')
  const processor = remark()
    .use(require('remark-slug'))
    .use(() => (tree, file) => {
      visit(tree, 'code', (node, index, parent) => {
        const meta = parseMeta(node.meta)
        const id = meta.id || getSlug(node, parent)
        examples.push({
          id,
          code: node.value,
          file,
          meta
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
