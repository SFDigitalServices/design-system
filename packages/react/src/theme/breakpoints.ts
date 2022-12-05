// required keys of our breakpoint object
export type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const breakpoints: Record<BreakpointName, string> = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

export const media = Object.fromEntries(
  Object.entries(breakpoints).map(([name, value]) => [name, `(min-width: ${value})`])
) as Record<BreakpointName, string>
