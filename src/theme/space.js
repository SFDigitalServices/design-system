const tokens = require('../tokens/spacing')
const { pxMap, tokenMap } = require('./utils')

module.exports = {
  spacing: {
    ...pxMap([0, 2, 4, 8, 12, 16, 20, 28, 40, 60, 80, 96]),
    ...tokenMap(tokens),
    fit: 'fit-content'
  }
}
