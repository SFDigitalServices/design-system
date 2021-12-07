const pkg = require('../../package.json')
const classnames = require('classnames')
const prettysize = require('prettysize')
const { branch, defaultBranch } = require('../git')

const repoUrl = `https://github.com/${pkg.repository}`

module.exports = {
  classnames,

  filesize (num) {
    return prettysize(num, true, true)
  },

  local_date (value) {
    const date = new Date(value)
    return String(date).includes('Invalid')
      ? `(invalid date: "${value}")`
      : date.toLocaleDateString('en-US')
  },

  commit_url (ref) {
    return `${repoUrl}/commit/${ref}`
  },

  blame_url (path, ref = branch) {
    return `${repoUrl}/blame/${ref || defaultBranch}/${normalizePath(path)}`
  },

  repo_url (path, ref = branch) {
    return `${repoUrl}/tree/${ref || defaultBranch}/${normalizePath(path)}`
  },

  published_url (path, version = pkg.version) {
    if (!path.startsWith('/')) path = `/${path}`
    return `https://unpkg.com/${pkg.name}@${version}${path}`
  }
}

function normalizePath (path) {
  return path.replace(/^\.\//, '')
}
