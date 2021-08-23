const pkg = require('../../package.json')
const classnames = require('classnames')
const prettysize = require('prettysize')

module.exports = {
  classnames,

  filesize (num) {
    return prettysize(num, true, true)
  },

  repo_url (path, branch = 'main') {
    const url = `https://github.com/${pkg.repository}`
    return path ? `${url}/tree/main/${path}` : url
  }
}
