const { join } = require('path')
const mandelbrot = require('@frctl/mandelbrot')

const pkg = require('./package.json')
const fractal = require('@frctl/fractal').create()

const {
  VERCEL_ENV,
  VERCEL_GIT_REPO_OWNER,
  VERCEL_GIT_REPO_SLUG,
  VERCEL_GIT_COMMIT_REF
} = process.env

const information = [
  {
    label: 'Version',
    value: pkg.version
  },
  VERCEL_ENV && {
    label: 'Environment',
    value: VERCEL_ENV
  },
  {
    label: 'Built on',
    value: new Date(),
    type: 'time',
    format (value) {
      return value.toLocaleDateString('en')
    }
  }
].filter(Boolean)

const theme = mandelbrot({
  skin: 'white',
  nav: ['search', 'docs', 'components', 'information'],
  panels: ['html', 'view', 'context', 'resources', 'info', 'notes'],
  information
})

fractal.web.theme(theme)
fractal.web.set('builder.dest', join(__dirname, 'public'))
fractal.web.set('static.path', join(__dirname,'dist'))

fractal.set('project.title', pkg.project.title)
fractal.set('project.package', pkg)

const defaultContext = {
  package: pkg
}

const nunjucks = require('@frctl/nunjucks')({
  paths: [join(__dirname, 'src/templates')]
})

fractal.components.engine(nunjucks)
fractal.components.set('ext', '.html')
fractal.components.set('path', join(__dirname, 'src/components'))
fractal.components.set('default.status', 'prototype')
fractal.components.set('default.context', defaultContext)

fractal.docs.set('path', join(__dirname, 'src/docs'))
fractal.docs.set('default.status', 'draft')
fractal.docs.set('default.context', defaultContext)

module.exports = fractal
