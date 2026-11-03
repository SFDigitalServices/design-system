import { classed, classes } from './utils'
import type { AnyComponent, ComponentProps } from '../types'

export const Container = classed('div' as AnyComponent, {
  base: classes('mx-20 max-w-xl', 'md:mx-28', 'lg:mx-96', 'xl:mx-auto')
})

export type ContainerProps = ComponentProps<typeof Container>
