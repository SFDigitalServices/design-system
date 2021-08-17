const remark = require('@fec/eleventy-plugin-remark')
const remarkConfig = require('./lib/remark').eleventyPluginConfig
const navigation = require('./lib/eleventy/nav')
const yaml = require('js-yaml')
const toc = require('eleventy-plugin-toc')

module.exports = config => {
  if (process.env.NODE_ENV === 'development') {
    const reloadOnChange = require('./lib/eleventy/reload')
    reloadOnChange(__filename, ['lib/**/*.js'])
  }

  config.addPlugin(navigation)
  config.addPlugin(remark, remarkConfig)
  config.addPlugin(toc, {
    tags: ['h3'],
    wrapper: 'div',
    wrapperClass: '',
    ul: true
  })

  config.addDataExtension('yml', contents => yaml.safeLoad(contents))

  config.setUseGitIgnore(false)
  config.addWatchTarget('./dist')
  config.addPassthroughCopy('dist')

  return {
    dir: {
      input: 'docs',
      output: 'public'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  }
}
