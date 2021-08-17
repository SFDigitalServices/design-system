const breakpoints = require('./tokens/breakpoints')
const colors = require('./tokens/colors')
const { fontFamily, ...typography } = require('./tokens/typography')
const spacing = require('./tokens/spacing')

module.exports = {
  colors,
  screens: breakpoints,
  spacing,
  fontFamily: {
    ...fontFamily,
    inherit: 'inherit'
  },
  ...typography,
  borderColor: {
    current: 'currentColor',
    ...colors
  },
  textColor: {
    inherit: 'inherit',
    ...colors
  },
  borderRadius: {
    DEFAULT: '8px',
    0: '0',
    2: '2px',
    4: '4px'
  },
  borderWidth: {
    DEFAULT: '3px',
    0: '0',
    1: '1px',
    2: '2px',
    3: '3px',
    4: '4px'
  },
  maxWidth: theme => ({
    ...breakpoints,
    ...theme('width')
  }),
  width: theme => ({
    '1/2': '50%',
    '2/2': '100%',
    '1/3': '33.3333333%',
    '2/3': '66.6666666%',
    '3/3': '100%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '4/4': '100%',
    full: '100%',
    ...theme('spacing')
  }),
  height: theme => ({
    full: '100%',
    ...theme('spacing')
  })
}
