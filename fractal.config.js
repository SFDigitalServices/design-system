const { join } = require('path')
const exec = require('execa').sync
const mandelbrot = require('@frctl/mandelbrot')

const pkg = require('./package.json')
const fractal = require('@frctl/fractal').create()

const path = (...parts) => join(__dirname, ...parts)

const {
  VERCEL_ENV,
  VERCEL_GIT_COMMIT_REF = getGitRef(),
  // VERCEL_GIT_REPO_OWNER,
  // VERCEL_GIT_REPO_SLUG,
} = process.env

const information = [
  {
    label: 'Built on',
    value: new Date(),
    type: 'time',
    format (value) {
      return value.toLocaleDateString('en')
    }
  },
  {
    label: 'Version',
    value: pkg.version,
    format (value) {
      return `<a href="https://unpkg.com/${pkg.name}@${value}/">${value}</a>`
    }
  },
  {
    label: 'Commit',
    value: VERCEL_GIT_COMMIT_REF,
    format (value) {
      return `<a href="https://github.com/${pkg.repository}/commit/${value}">${value}</a>`
    }
  },
  VERCEL_ENV && {
    label: 'Environment',
    value: VERCEL_ENV
  },
].filter(Boolean)

const theme = mandelbrot({
  skin: 'white',
  nav: ['search', 'docs', 'components', 'information'],
  panels: ['html', 'view', 'context', 'resources', 'info', 'notes'],
  information
})

theme.addLoadPath(path('src/templates'))

fractal.web.theme(theme)
fractal.web.set('builder.dest', path('public'))
fractal.web.set('static.path', path('dist'))

fractal.set('project.title', pkg.project.title)
fractal.set('project.package', pkg)

const defaultContext = {
  package: pkg
}

const nunjucks = require('@frctl/nunjucks')({
  paths: [path('src/templates')]
})

fractal.components.engine(nunjucks)
fractal.components.set('ext', '.html')
fractal.components.set('path', path('src/components'))
fractal.components.set('default.status', 'prototype')
fractal.components.set('default.context', defaultContext)

fractal.docs.set('path', path('src/docs'))
fractal.docs.set('default.status', 'draft')
fractal.docs.set('default.context', defaultContext)

module.exports = fractal

function getGitRef () {
  try {
    return exec('git', ['rev-parse', '--short', 'HEAD']).stdout
  } catch (error) {
    console.warn('unable to get git ref:', error)
    return ''
  }
}
