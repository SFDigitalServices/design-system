import type { ResponsiveStyleValue } from 'theme-ui'
import type { BreakpointName } from './types'

const breakpointsByName: Record<BreakpointName, string> = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

export const responsiveKeys = Object.keys(breakpointsByName)

export const breakpoints = Object.values(breakpointsByName)

/**
 * Generate a responsive value array for a theme-aware style prop
 * using known (and hinted!) breakpoint names:
 * 
 * ```js
 * import { Box } from 'theme-ui'
 * import { responsive } from '@sfgov/components'
 * 
 * export const Container = withStyles(Box, {
 *  mx: responsive(20, {
 *    md: 28,
 *    xl: 'lg'
 *  })
 * })
 * ```
 */
export function responsive<T = any> (
  defaultValue: T,
  map?: Partial<Record<BreakpointName, T>>
): ResponsiveStyleValue<T> {
  return map ? [defaultValue, ...responsiveKeys.map(k => map[k] || null)] : defaultValue
}
