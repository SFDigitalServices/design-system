const dev = process.env.NODE_ENV === 'development'
if (dev) {
  require('dotenv').config()
}

const remark = require('@fec/eleventy-plugin-remark')
const remarkConfig = require('./lib/remark').eleventyPluginConfig
const navigation = require('./lib/eleventy/nav')
const yaml = require('js-yaml')
const toc = require('./lib/eleventy/toc')
const { environment } = require('./lib/nunjucks')

module.exports = config => {
  if (dev) {
    const throttle = 100
    const reloadOnChange = require('./lib/eleventy/reload')
    reloadOnChange(__filename, [
      'lib/**/*.js',
      // we need to watch these ones explicitly because they
      // change how examples and color swatches are rendered
      'docs/_includes/{example,macros}.njk'
    ], throttle)

    // throttle subsequent rebuilds
    config.setWatchThrottleWaitTime(throttle)
  }

  config.addPlugin(navigation)
  config.addPlugin(remark, remarkConfig)
  config.addPlugin(toc, {
    ignore: 'h1',
    startLevel: 3
  })

  config.setLibrary('njk', environment)
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
