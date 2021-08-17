const utils = require('./utils')
const codeExamplePlugin = require('./code-example')

module.exports = {
  ...utils,
  codeExamplePlugin,
  eleventyPluginConfig: {
    enableRehype: false,
    plugins: [
      {
        plugin: 'remark-gfm',
        options: {
        }
      },
      {
        plugin: 'remark-behead',
        options: {
          // increase heading levels (h1 -> h2, et al)
          depth: 1
        }
      },
      {
        plugin: 'remark-slug'
      },
      require('./autolink-headings'),
      require('./hide-autolink-headings'),
      {
        plugin: 'remark-highlight.js'
      },
      codeExamplePlugin,
      require('./code-example-frame'),
      {
        plugin: 'remark-rehype',
        options: { allowDangerousHtml: true }
      },
      require('./prose'),
      {
        plugin: 'rehype-stringify'
      }
    ]
  }
}
