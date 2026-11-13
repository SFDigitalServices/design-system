import type { ComponentProps } from 'react'
import type { AnyComponent } from './types'
import { classed } from './utils'

export const StackedContainer = classed('div' as AnyComponent, {
  base: 'flex flex-col md:flex-row w-full gap-16',
  defaultProps: {
    'data-testid': 'stacked-content-container'
  }
})

export type StackedContainerProps = ComponentProps<typeof StackedContainer>
