const theme = require('./css/src/theme')

module.exports = {
  theme,

  important: true,

  /*
   * This is where we disable Tailwind's "core plugins", most of
   * which generate utility classes. There are a *lot* of these
   * turned on by default. Disabling them here saves us many
   * kilobytes in generated CSS.
   *
   * See: <https://tailwindcss.com/docs/configuration#core-plugins>
   */
  corePlugins: [
    // TODO [^3]: add preflight (https://tailwindcss.com/docs/preflight)
    'accessibility',
    'alignContent',
    'alignItems',
    'appearance',
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
    'gap',
    'gridColumn',
    'gridRow',
    'gridTemplateColumns',
    'gridTemplateRows',
    'height',
    'inset',
    'justifyContent',
    'justifyItems',
    'letterSpacing',
    'listStyleType',
    'margin',
    'maxWidth',
    'opacity',
    'overflow',
    'padding',
    'pointerEvents',
    'position',
    'space',
    'textAlign',
    'textColor',
    'textDecoration',
    'verticalAlign',
    'visibility',
    'whitespace',
    'width',
    'zIndex'
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
    // TODO [^3]: nix 'focus'
    accessibility: ['responsive', 'focus', 'hocus'],
    appearance: [],
    // TODO [^3]: nix 'focus' + 'hover'
    backgroundColor: ['focus', 'focus-within', 'hover', 'hocus', 'group-hocus', 'details'],
    // TODO [^3]: nix 'focus' + 'hover'
    borderColor: ['focus', 'hover', 'hocus', 'group-hocus', 'details'],
    borderWidth: ['hocus'],
    cursor: [],
    display: ['responsive', 'group-hocus', 'details'],
    fill: [],
    fontWeight: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: [],
    fontStyle: [],
    flexDirection: ['responsive'],
    flexWrap: [],
    gap: ['responsive'],
    gridColumn: ['responsive'],
    gridRow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStyleType: ['responsive'],
    listStylePosition: [],
    overflow: [], // TODO [^2.3]: add 'hocus', 'group-hocus'
    padding: ['responsive'],
    pointerEvents: [],
    position: ['responsive'],
    margin: ['responsive'],
    maxWidth: ['responsive'],
    space: ['responsive'],
    stroke: [],
    strokeWidth: [],
    // TODO [^3]: nix 'focus' + 'hover'
    textColor: ['focus', 'hover', 'hocus', 'group-hocus', 'details'],
    // TODO [^3]: nix 'focus' + 'hover'
    textDecoration: ['focus', 'hover', 'hocus'],
    userSelect: [],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'group-hocus'],
    width: ['responsive'],
    zIndex: ['responsive']
  },

  plugins: [
    require('tailwindcss-interaction-variants'),
    require('./lib/tailwind/details')
  ]
}
