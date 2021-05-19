const mandelbrot = require('@frctl/mandelbrot')
const pkg = require('./package.json')
const fractal = require('@frctl/fractal').create()

const scripts = [
  'https://unpkg.com/@sfgov/icons@0.0.1/dist/sfgov-icons.umd.js'
]

const defaultContext = {
  scripts
}

fractal.web.set('server.port', process.env.PORT || 4444)
fractal.web.set('builder.dest', 'public')
fractal.web.set('static.path', 'dist')

fractal.set('project.title', pkg.project.title)
fractal.set('project.package', pkg)

const nunjucks = require('@frctl/nunjucks')({
  paths: ['src/templates'],
  filters: {
    iconify (content) {
      if (content && content.icon) {
        return `<sfgov-icon symbol="${content.icon}"></sfgov-icon>`
      } else {
        return content || ''
      }
    }
  }
})

fractal.components.engine(nunjucks)
fractal.components.set('ext', '.html')
fractal.components.set('path', 'src/components')
fractal.components.set('default.status', 'prototype')
fractal.components.set('default.context', defaultContext)

fractal.docs.set('path', 'docs')
fractal.docs.set('default.status', 'draft')
fractal.docs.set('default.context', defaultContext)

const {
  HEROKU_SLUG_COMMIT: gitSHA
} = process.env

const theme = mandelbrot({
  skin: 'white',
  nav: ['search', 'docs', 'components', 'information'],
  panels: ['html', 'view', 'context', 'resources', 'info', 'notes'],
  styles: [
    'default',
    '/css/fractal.css'
  ],
  scripts: [
    'default',
    '/js/fractal.js',
    ...scripts
  ],
  information: [
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
    gitSHA && {
      label: 'Commit',
      value: gitSHA,
      format (value) {
        const short = value.substr(0, 7)
        return `<a href="https://github.com/${pkg.repository}/commit/${value}">${short}</a>`
      }
    }
  ].filter(Boolean)
})

theme.addLoadPath('src/templates')

fractal.web.theme(theme)

module.exports = fractal
