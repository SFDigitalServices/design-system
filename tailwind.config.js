const theme = require('./src/theme')

const { PURGE_CSS } = process.env

module.exports = {
  purge: PURGE_CSS ? { enable: true, content: PURGE_CSS.split(',') } : false,
  important: true,

  /*
   * This is essentially where we define all of the "tokens" that
   * Tailwind uses to generate CSS.
   *
   * See: <https://tailwindcss.com/docs/theme>
   */
  theme,

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
    'flexDirection',
    'flexShrink',
    'flexWrap',
    'fontFamily',
    'fontSize',
    'fontSmoothing',
    'fontWeight',
    'height',
    'inset',
    'justifyContent',
    'justifyItems',
    'letterSpacing',
    'listStyleType',
    'padding',
    'position',
    'margin',
    'maxWidth',
    'opacity',
    'overflow',
    'space',
    'textAlign',
    'textColor',
    'textDecoration',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'verticalAlign',
    'visibility',
    'whitespace',
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
    backgroundColor: ['focus', 'hover', 'hocus', 'group-hocus'],
    borderColor: ['focus', 'hover', 'hocus', 'group-hover'],
    borderWidth: ['hocus'],
    cursor: [],
    display: ['responsive', 'group-hocus'],
    fill: [],
    fontWeight: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: [],
    fontStyle: [],
    flexDirection: ['responsive'],
    flexWrap: [],
    height: ['responsive'],
    inset: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStyleType: ['responsive'],
    listStylePosition: [],
    opacity: [],
    overflow: [],
    padding: ['responsive'],
    position: ['responsive'],
    margin: ['responsive'],
    maxWidth: ['responsive'],
    space: ['responsive'],
    stroke: [],
    strokeWidth: [],
    textColor: ['focus', 'hover', 'hocus', 'group-hocus'],
    textDecoration: ['focus', 'hover', 'hocus'],
    transitionProperty: ['motion-safe'],
    userSelect: [],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'group-hocus'],
    width: ['responsive']
  },

  plugins: [
    require('tailwindcss-interaction-variants')
  ]
}
