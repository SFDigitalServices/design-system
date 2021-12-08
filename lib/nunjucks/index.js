const pkg = require('../../package.json')
const { branch, defaultBranch } = require('../git')
const { Environment, FileSystemLoader } = require('nunjucks')
const classnames = require('classnames')
const prettysize = require('prettysize')

const repoUrl = `https://github.com/${pkg.repository}`

const globals = {
  theme: require('../../docs/_data/theme'),
  tokens: require('../../docs/_data/tokens'),
  package: require('../../package.json'),
  repo: {
    url: repoUrl,
    slug: pkg.repository
  }
}

const filters = {
  attributes,
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

const functions = {
  attributes,
  classnames
}

const env = new Environment([
  new FileSystemLoader('docs/_includes')
])

const escape = env.getFilter('e')

for (const [name, filter] of Object.entries(filters)) env.addFilter(name, filter)
for (const [name, fn] of Object.entries(functions)) env.addGlobal(name, fn)
for (const [key, value] of Object.entries(globals)) env.addGlobal(key, value)

module.exports = {
  filters,
  functions,
  globals,
  environment: env
}

function attributes (...values) {
  const attrs = { class: [] }
  for (const value of values) {
    if (value instanceof Object) {
      for (const [key, val] of Object.entries(value)) {
        if (key === 'class') {
          attrs.class.push(val)
        } else {
          attrs[key] = val
        }
      }
    } else if (typeof value === 'string') {
      attrs.class.push(value)
    }
  }
  return Object.entries(
    Object.assign(attrs, {
      class: classnames(...attrs.class)
    })
  )
    .map(([name, value]) => `${name}="${escape(value)}"`)
    .join(' ')
}

function normalizePath (path) {
  return path.replace(/^\.\//, '')
}
