const breakpoints = require('./tokens/breakpoints')
const { text: textColor, ...colors } = require('./tokens/colors')
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
    ...colors, // FIXME: deprecate in 3.0.0
    ...textColor
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
  gap: theme => ({
    ...theme('spacing')
  }),
  gridTemplateColumns: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))'
  },
  gridColumn: {
    'span-auto': 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-6': 'span 6 / span 6',
    'span-12': 'span 12 / span 12'
  },
  margin: theme => ({
    auto: 'auto',
    ...theme('spacing'),
    'gutter-auto': `calc((100vw - ${breakpoints.lg}) / 2)`
  }),
  maxWidth: theme => ({
    ...breakpoints,
    ...theme('width')
  }),
  width: theme => ({
    auto: 'auto',
    '1/1': '100%',
    '1/2': '50%',
    '1/3': '33.3333333%',
    '1/4': '25%',
    '2/2': '100%',
    '2/3': '66.6666666%',
    '2/4': '50%',
    '3/3': '100%',
    '3/4': '75%',
    '4/4': '100%',
    full: '100%',
    ...breakpoints,
    ...theme('spacing')
  }),
  height: theme => ({
    auto: 'auto',
    full: '100%',
    ...theme('spacing')
  })
}
