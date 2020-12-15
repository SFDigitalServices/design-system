module.exports = {
  purge: [],
  important: true,

  /*
   * This is essentially where we define all of the "tokens" that
   * Tailwind uses to generate CSS.
   *
   * See: <https://tailwindcss.com/docs/theme>
   */
  theme: {
    colors: {
      blue: {
        1: '#edf4f7',
        2: '#a9d6ea',
        bright: '#4f66ee',
        dark: '#0c1464'
      },
      slate: {
        default: '#1c3e57',
        light: '#607889'
      }
    },
    borderRadius: {}
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
    'backgroundColor',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'flex',
    'flexShrink',
    'fontFamily',
    'fontSize',
    'fontSmoothing',
    'fontWeight',
    'textColor',
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
    accessibility: ['responsive', 'focus'],
    appearance: [],
    backgroundColor: ['focus'],
    borderColor: ['focus'],
    cursor: [],
    fill: [],
    fontWeight: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: [],
    fontStyle: [],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStyleType: [],
    listStylePosition: [],
    stroke: [],
    strokeWidth: [],
    textColor: [],
    userSelect: []
  }
}
