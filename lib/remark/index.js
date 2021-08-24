const utils = require('./utils')
const presets = require('./presets')
const codeExamplePlugin = require('./code-example')

module.exports = {
  ...utils,
  codeExamplePlugin,
  presets,
  eleventyPluginConfig: {
    enableRehype: false,
    plugins: [
      ...presets.transform,
      ...presets.examples,
      ...presets.stringify
    ]
  }
}
