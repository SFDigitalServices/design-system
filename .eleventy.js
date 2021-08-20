const pkg = require('./package.json')
const remark = require('@fec/eleventy-plugin-remark')
const remarkConfig = require('./lib/remark').eleventyPluginConfig
const navigation = require('./lib/eleventy/nav')
const prettysize = require('prettysize')
const yaml = require('js-yaml')
const toc = require('./lib/eleventy/toc')

module.exports = config => {
  if (process.env.NODE_ENV === 'development') {
    const reloadOnChange = require('./lib/eleventy/reload')
    reloadOnChange(__filename, ['lib/**/*.js'])
  }

  config.addPlugin(navigation)
  config.addPlugin(remark, remarkConfig)
  config.addPlugin(toc, {
    ignore: 'h1',
    startLevel: 3
  })

  config.addFilter('filesize', num => prettysize(num, true, true))
  config.addFilter('repo_url', (path, branch = 'main') => {
    const url = `https://github.com/${pkg.repository}`
    return path ? `${url}/tree/main/${path}` : url
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
