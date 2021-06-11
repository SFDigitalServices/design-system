const yaml = require('js-yaml')

module.exports = config => {
  config.addDataExtension('yml', contents => yaml.safeLoad(contents))
  config.addPassthroughCopy('dist')

  return {
    dir: {
      input: 'docs',
      output: 'public'
    }
  }
}
