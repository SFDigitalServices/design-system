import type { ComponentProps } from 'react'
import { classed } from '../utils'

export const QuickLinkSet = classed('div', {
  base: 'grid gap-28 grid-cols-1 lg:grid-cols-2 lg:gap-y-[32px]',
  defaultProps: {
    // @ts-expect-error wtf
    'data-testid': 'quick-link-set'
  }
})

export type QuickLinkSetProps = ComponentProps<typeof QuickLinkSet>
