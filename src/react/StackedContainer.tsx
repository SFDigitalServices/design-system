import { classed } from './utils'
import type { AnyComponent, ComponentProps } from '../types'

export const StackedContainer = classed('div' as AnyComponent, {
  base: 'flex flex-col md:flex-row w-full gap-16'
})

StackedContainer.defaultProps = {
  'data-testid': 'stacked-content-container'
}

export type StackedContainerProps = ComponentProps<typeof StackedContainer>
