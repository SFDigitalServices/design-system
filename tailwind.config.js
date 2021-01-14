const plugin = require('tailwindcss/plugin')
const colors = require('./src/tokens/colors')

module.exports = {
  purge: false,
  important: true,

  /*
   * This is essentially where we define all of the "tokens" that
   * Tailwind uses to generate CSS.
   *
   * See: <https://tailwindcss.com/docs/theme>
   */
  theme: {
    colors,
    spacing: {
      0: '0',
      nudge: '5px',
      sm: '10px',
      md: '20px',
      lg: '30px',
      xl: '40px',
      xxl: '60px',
      gutter: '96px'
    },
    borderColor: theme => ({
      current: 'currentColor',
      ...theme('colors')
    }),
    borderRadius: {
      DEFAULT: '8px',
      0: '0'
    },
    borderWidth: {
      DEFAULT: '4px',
      0: '0',
      1: '1px'
    }
  },

  /*
   * This is where we disable Tailwind's "core plugins", most of
   * which generate utility classes. There are a *lot* of these
   * turned on by default. Disabling them here saves us many
   * kilobytes in generated CSS.
   *
   * See: <https://tailwindcss.com/docs/configuration#core-plugins>
   */
  corePlugins: [
    'appearance',
    'alignContent',
    'alignItems',
    'backgroundColor',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'borderWidth',
    'cursor',
    'display',
    'flex',
    'flexShrink',
    'fontFamily',
    'fontSize',
    'fontSmoothing',
    'fontWeight',
    'justifyContent',
    'justifyItems',
    'padding',
    'margin',
    'textAlign',
    'textColor',
    'width'
  ],

  /*
   * This is where we tell Tailwind which variants to make available
   * for each "core plugin". Most plugins get responsive variants out
   * of the box, but we can shrink the size of our CSS significantly
   * by turning off responsive variants for ones that we don't need
   * to change at different screen widths.
   *
   * See: <https://tailwindcss.com/docs/configuring-variants>
   */
  variants: {
    accessibility: ['responsive', 'focus', 'hocus'],
    appearance: [],
    backgroundColor: ['focus', 'hover', 'hocus'],
    borderColor: ['focus', 'hover', 'hocus'],
    cursor: [],
    display: ['responsive'],
    fill: [],
    fontWeight: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: [],
    fontStyle: [],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStyleType: [],
    listStylePosition: [],
    padding: ['responsive'],
    margin: ['responsive'],
    stroke: [],
    strokeWidth: [],
    textColor: ['focus', 'hover', 'hocus'],
    userSelect: [],
    width: ['responsive']
  },

  plugins: [
    plugin(({ addVariant, e }) => {
      console.warn('adding variant: "hocus"')
      const suffixes = ['.hocus', ':hover', '.hover', ':focus', '.focus']
      addVariant('hocus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const prefix = '.' + e(`hocus${separator}${className}`)
          return suffixes
            .map(suffix => `${prefix}${suffix}`)
            .join(',\n')
        })
      })
    })
  ]
}
