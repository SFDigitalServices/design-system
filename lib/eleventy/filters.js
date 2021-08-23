const pkg = require('../../package.json')
const classnames = require('classnames')
const prettysize = require('prettysize')

module.exports = {
  classnames,

  filesize (num) {
    return prettysize(num, true, true)
  },

  local_time (date) {
    return (date instanceof Date)
      ? date.toLocaleString('en-US', { timezone: 'US/Pacific' })
      : null
  },

  repo_url (path, branch = 'main') {
    const url = `https://github.com/${pkg.repository}`
    return path ? `${url}/tree/${branch}/${path}` : url
  }
}
