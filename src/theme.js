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
  },
  width: {
    '1/2': '50%',
    '2/2': '100%',
    '1/3': '33.3333333%',
    '2/3': '66.6666666%',
    '3/3': '100%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '4/4': '100%',
    full: '100%'
  }
}
