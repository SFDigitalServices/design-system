import { screens } from '@/src/theme/screens'
import type { Viewport, ViewportMap } from 'storybook/viewport'
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'

const breakpointTypes: Record<string, Viewport['type']> = {
  xs: 'mobile',
  sm: 'mobile',
  md: 'tablet',
  lg: 'desktop',
  xl: 'desktop'
}

export const viewports: ViewportMap = {
  ...MINIMAL_VIEWPORTS,
  ...Object.fromEntries(
    Object.entries(screens).map(([breakpoint, width]) => [
      breakpoint,
      {
        name: `breakpoints.${breakpoint} (${width})`,
        type: breakpointTypes[breakpoint] ?? 'other',
        styles: {
          width,
          height: 'auto'
        }
      } as Viewport
    ])
  )
}
