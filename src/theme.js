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
  gap: {
    ...spacing
  },
  gridColumn: {
    'span-auto': 'auto',
    ...Object.fromEntries(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => [
        `span-${n}`,
        `span ${n} / span ${n}`
      ])
    )
  },
  gridTemplateColumns: {
    ...Object.fromEntries(
      [1, 2, 3, 6, 12].map(n => [
        n,
        `repeat(${n}, minmax(0, 1fr))`
      ])
    )
  },
  height: {
    auto: 'auto',
    full: '100%',
    ...spacing
  },
  margin: {
    auto: 'auto',
    ...spacing,
    'gutter-auto': `calc((100vw - ${breakpoints.lg}) / 2)`
  },
  maxWidth: theme => ({
    ...breakpoints,
    ...theme('width')
  }),
  width: {
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
    ...spacing
  }
}
