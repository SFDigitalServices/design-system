import * as colors from 'sfgov-design-system/src/tokens/style-dictionary/colors'
import { BreakpointName, breakpoints, media } from './breakpoints'
import { fonts, fontSizes, fontWeights, lineHeights, letterSpacings, textStyles } from './typography'
import { space } from './space'
import { pxMap } from '../utils'

export { BreakpointName, breakpoints, media, textStyles }

export const theme = {
  colors,
  media,
  space,
  sizes: {
    ...breakpoints,
    ...space
  },
  borderWidths: {
    ...pxMap([
      0,
      1,
      2,
      3
    ])
  },
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings
}
