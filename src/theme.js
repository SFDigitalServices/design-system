const breakpoints = require('./tokens/breakpoints')
const colors = require('./tokens/colors')
const typography = require('./tokens/typography')
const spacing = require('./tokens/spacing')

module.exports = {
  ...typography,
  colors,
  screens: breakpoints,
  spacing,
  borderColor: {
    current: 'currentColor',
    ...colors
  },
  borderRadius: {
    DEFAULT: '8px',
    0: '0'
  },
  borderWidth: {
    DEFAULT: '4px',
    0: '0',
    1: '1px'
  }
}
