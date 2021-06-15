const navigation = require('@11ty/eleventy-navigation')
const yaml = require('js-yaml')

module.exports = config => {
  config.addPlugin(navigation)

  config.addDataExtension('yml', contents => yaml.safeLoad(contents))

  config.addPassthroughCopy('dist')
  config.addWatchTarget('dist')

  return {
    dir: {
      input: 'docs',
      output: 'public'
    }
  }
}
