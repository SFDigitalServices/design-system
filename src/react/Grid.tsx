import { classed, classes } from './utils'
import type { AnyComponent, ComponentProps } from '../types'

export const Grid = classed('div' as AnyComponent, {
  base: classes('grid grid-cols-6 md:grid-cols-12 gap-20 md:gap-28'),
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
