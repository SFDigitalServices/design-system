import React from 'react'
import { Theme, ThemeProvider as ThemeUIProvider } from 'theme-ui'
import colors from './colors'
import { breakpoints, breakpointsByName, responsive } from './breakpoints'
import { fonts, fontSizes, fontWeights, lineHeights, letterSpacings, textStyles } from './typography'
import { space } from './space'
import { pxMap } from '../utils'

export type { Theme }

export { breakpointsByName }

export const theme: Theme = {
  breakpoints,
  colors,
  borderStyles: {
    focus: 'dashed'
  },
  borderWidths: pxMap([0, 1, 2, 3]),
  radii: pxMap([0, 2, 4, 8]),
  space,
  sizes: {
    ...space,
    ...breakpoints
  },
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  text: textStyles,
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

export function ThemeProvider (props: Omit<React.ComponentPropsWithoutRef<typeof ThemeUIProvider>, 'theme'>) {
  return <ThemeUIProvider {...props} theme={theme} />
}
