import type { ComponentProps } from 'react'
import type { AnyComponent } from './types'
import { classed } from './utils'

export const Container = classed('div' as AnyComponent, {
  base: 'mx-20 max-w-xl md:mx-28 lg:mx-96 xl:mx-auto'
})

export type ContainerProps = ComponentProps<typeof Container>
