import { createStitches } from '@stitches/react'
import * as Stitches from '@stitches/react'
import { theme as inputTheme, media } from './theme'
import { identity } from './utils'

export const {
  config,
  css,
  createTheme,
  keyframes,
  getCssText,
  globalCss,
  reset,
  styled,
  theme
} = createStitches({
  prefix: 'sfgov',
  theme: inputTheme,
  media,
  utils: {
    // colors
    bg: alias('backgroundColor'),
    fg: alias('color'),
    // borders
    bc: alias('borderColor'),
    br: alias('borderRadius'),
    // layout
    cols: alias('columnCount'),
    gapX: alias('columnGap'),
    gapY: alias('rowGap'),
    // spacing
    m: alias('margin'),
    mt: alias('marginTop'),
    mr: alias('marginRight'),
    mb: alias('marginBottom'),
    ml: alias('marginLeft'),
    mx: alias(['marginLeft', 'marginRight']),
    my: alias(['marginTop', 'marginBottom']),
    p: alias('padding'),
    pt: alias('paddingTop'),
    pr: alias('paddingRight'),
    pb: alias('paddingBottom'),
    pl: alias('paddingLeft'),
    px: alias(['paddingLeft', 'paddingRight']),
    py: alias(['paddingTop', 'paddingBottom'])
  }
})

type StitchesCSSProp = keyof Stitches.CSSProperties

export type CSS = Stitches.CSS<typeof config>

type CSSProp = keyof CSS
type CSSTransform<V extends CSSProp, Input = any> = (v: Input) => V
type AliasFunction<Input = any> = (v: Input) => Stitches.CSS

function alias <Input = any> (key: StitchesCSSProp, transform?: CSSTransform<typeof key, Input>): AliasFunction
function alias <Input = any> (keys: StitchesCSSProp[], transform?: CSSTransform<(typeof keys)[number], Input>): AliasFunction
function alias <Input = Stitches.CSS> (key: string, transform?: (v: Input) => Record<typeof key, Input>): AliasFunction

/**
 * Create an alias function that outputs one or more style properties from a single value:
 * 
 * ```js
 * createStitches({
 *   utils: {
 *     // { m: 0 } → { margin: 0 }
 *     m: alias('margin')
 *     // { mx: 'auto' } -> { marginLeft: 'auto', marginRight: 'auto' }
 *     mx: alias(['marginLeft', 'marginRight'])
 *   }
 * })
 * ```
 * 
 * @param keyOrKeys A single CSS style property or array of them
 * @param transform Optionally transform the input value with this function
 */
function alias <Input = any> (
  keyOrKeys: StitchesCSSProp | StitchesCSSProp[] | string,
  transform?: Function
) {
  const t = transform || identity
  return Array.isArray(keyOrKeys)
    ? (v: Input) => keyOrKeys.reduce((o, p) => Object.assign(o, { [p]: t(v) }), {})
    : (v: Input) => ({ [keyOrKeys]: t(v) })
}
