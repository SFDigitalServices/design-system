const fs = require('fs')
const watchy = require('watchy')

module.exports = (configFilename, patterns) => {
  return watchy({
    patterns: ['lib/**/*.js'],
    onChange ({ action, path }) {
      console.warn('touching', __filename)
      const now = new Date()
      try {
        fs.utimesSync(configFilename, now, now)
      } catch (error) {
        fs.closeSync(fs.openSync(configFilename, 'w'))
      }
    }
  })
}
