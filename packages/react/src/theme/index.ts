import type { Theme } from 'theme-ui'
import colors from 'sfgov-design-system/src/tokens/colors'
import { breakpoints, responsive } from './breakpoints'
import { space } from './space'
import { pxMap } from '../utils'

export const theme: Theme = {
  breakpoints,
  colors,
  borderWidths: pxMap([0, 1, 3]),
  radii: pxMap([0, 2, 4, 8]),
  space,
  sizes: {
    ...space,
    ...breakpoints
  },
  layout: {
    container: {
      maxWidth: 'xl',
      mx: responsive<string | number>(20, {
        md: 28,
        lg: 96,
        xl: 'auto'
      })
    }
  },
  grids: {
    responsive: {
      gap: responsive(20, { md: 28 }),
      columns: 6
    }
  }
}
