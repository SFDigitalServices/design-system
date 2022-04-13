const debounce = require('debounce')
const fs = require('fs')
const watchy = require('watchy')

module.exports = (configFilename, patterns, throttle = 100) => {
  return watchy({
    patterns,
    onChange: debounce(({ action, path }) => {
      console.warn('touching', __filename)
      const now = new Date()
      try {
        fs.utimesSync(configFilename, now, now)
      } catch (error) {
        fs.closeSync(fs.openSync(configFilename, 'w'))
      }
    }, throttle)
  })
}
