const globby = require('globby')
const remark = require('remark')
const visit = require('unist-util-visit')
const { codeExamplePlugin } = require('../../lib/remark')
const { readFileSync } = require('fs')
const site = require('./site')

module.exports = getExamples

async function getExamples ({ package: pkg }) {
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

  const unpkgBaseURL = `https://unpkg.com/${pkg.name}@${pkg.version}`
  const exampleFooter = `
    <a
      class="mt-100 block text-mono text-grey-4 p-8"
      href="${unpkgBaseURL}/">
      ${pkg.name}@${pkg.version}
    </a>
  `

  for (const example of examples) {
    example.codepen = {
      title: `${site.title}: ${example.title}`,
      html: `${example.code}${exampleFooter}`,
      editors: '100',
      js_external: `${unpkgBaseURL}/dist/js/sfds.js`,
      css_external: [
        `${unpkgBaseURL}/dist/css/sfds.css`,
        `${unpkgBaseURL}/dist/css/fonts.css`
      ].join(';')
    }
  }

  return examples
}
