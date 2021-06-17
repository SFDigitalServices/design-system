const remark = require('@fec/eleventy-plugin-remark')
const remarkConfig = require('./lib/remark').eleventyPluginConfig
const navigation = require('@11ty/eleventy-navigation')
const yaml = require('js-yaml')

module.exports = config => {
  config.addPlugin(navigation)
  config.addPlugin(remark, remarkConfig)

  config.addDataExtension('yml', contents => yaml.safeLoad(contents))

  config.setUseGitIgnore(false)
  config.addWatchTarget('./dist')
  config.addPassthroughCopy('dist')

  return {
    dir: {
      input: 'docs',
      output: 'public'
    }
  }
}
