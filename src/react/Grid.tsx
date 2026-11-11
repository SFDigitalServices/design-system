import type { ComponentProps } from 'react'
import type { AnyComponent } from './types'
import { classed } from './utils'

export const Grid = classed('div' as AnyComponent, {
  base: 'grid grid-cols-6 md:grid-cols-12 gap-20 md:gap-28',
  variants: {
    inline: {
      false: 'grid',
      true: 'inline-grid'
    }
  },
  defaultVariants: {
    inline: false
  }
})

export type GridProps = ComponentProps<typeof Grid>
