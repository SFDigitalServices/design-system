const pkg = require('../../package.json')
const classnames = require('classnames')
const prettysize = require('prettysize')
const { branch } = require('../git')

module.exports = {
  classnames,

  filesize (num) {
    return prettysize(num, true, true)
  },

  local_date (value) {
    return new Date(value).toLocaleDateString('en-US')
  },

  repo_url (path, ref = branch) {
    const url = `https://github.com/${pkg.repository}`
    return path ? `${url}/tree/${ref}/${path}` : url
  }
}
