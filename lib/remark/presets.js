const rehypeOptions = { allowDangerousHtml: true }

const presets = {
  transform: [
    require('remark-gfm'),
    { plugin: require('remark-behead'), options: { depth: 1 } },
    require('remark-slug'),
    require('./autolink-headings'),
    require('remark-highlight.js'),
    require('remark-directive'),
    require('./inline-code'),
    require('./yes-no'),
    require('./directives')
  ],
  examples: [
    require('./code-example'),
    require('./code-example-frame')
  ],
  stringify: [
    { plugin: require('remark-rehype'), options: rehypeOptions },
    require('rehype-raw'),
    { plugin: require('./classify') },
    { plugin: require('rehype-stringify'), options: rehypeOptions }
  ]
}

module.exports = presets
