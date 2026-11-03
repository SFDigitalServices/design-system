const { colors } = require('./colors')
const { breakpoints } = require('./breakpoints')
const { ...typography } = require('./typography')
const { spacing } = require('./space')
const widths = require('./widths')
const { pxMap } = require('./utils')

// available column grid templates
const gridColumns = [1, 2, 3, 4, 6, 12]
// possible per-column spans
const gridColumnSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// available row grid templates
const gridRows = [1, 2, 3]
// possible per-row spans
const gridRowSpans = gridRows

module.exports = {
  colors,
  screens: breakpoints,
  spacing, // TODO [>=3]: add line heights to spacing scale
  ...typography,
  borderColor: {
    current: 'currentColor',
    ...colors
  },
  textColor: {
    inherit: 'inherit',
    ...colors // TODO [>=3]: remove this in favor of only textColor
  },
  borderRadius: {
    DEFAULT: '8px',
    full: '100%',
    ...pxMap([0, 2, 4])
  },
  borderWidth: {
    DEFAULT: '3px',
    ...pxMap([0, 1, 2, 3])
  },
  gap: {
    ...spacing
  },
  gridColumn: {
    'span-auto': 'auto',
    'span-full': '1 / -1',
    ...Object.fromEntries(
      gridColumnSpans.map((n) => [`span-${n}`, `span ${n} / span ${n}`])
    )
  },
  gridRow: {
    'span-auto': 'auto',
    'span-full': '1 / -1',
    ...Object.fromEntries(
      gridRowSpans.map((n) => [`span-${n}`, `span ${n} / span ${n}`])
    )
  },
  gridTemplateColumns: {
    ...Object.fromEntries(
      gridColumns.map((n) => [n, `repeat(${n}, minmax(0, 1fr))`])
    )
  },
  gridTemplateRows: {
    ...Object.fromEntries(
      gridRows.map((n) => [n, `repeat(${n}, minmax(0, auto))`])
    )
  },
  height: {
    auto: 'auto',
    full: '100%',
    ...spacing
  },
  margin: {
    auto: 'auto',
    ...spacing
  },
  maxWidth: (theme) => ({
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
    ...widths,
    ...spacing
  }
}
