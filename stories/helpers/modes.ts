/**
 * These are "presets" that we can reuse in `parameters.chromatic.modes` to have
 * Chromatic take screenshots at different breakpoints and/or with different
 * themes.
 *
 * Each mode's key/value pairs are applied as globals. For instance, `mobile: {
 * viewport: 'xs' }` renders with `globals: { viewport: 'xs' }` (and
 * `?globals=viewport.value:xs` in the query string).
 *
 * If we decide to add themes here, they need to set `sfgovTheme: 'green'`
 * (etc.) to set the global that the theme switcher uses in Storybook previews.
 *
 * @see https://www.chromatic.com/docs/modes/
 */
export const ALL_MODES = {
  mobile: {
    viewport: 'xs'
  },
  tablet: {
    viewport: 'md'
  },
  desktop: {
    viewport: 'lg'
  },
  widescreen: {
    viewport: 'xl'
  }
} as const
