import type { ComponentType, ElementType } from 'react'

import type * as Classed from '@tw-classed/react'

export type { Classed }

export { ComponentType, ElementType }

export type ComponentProps<C> = Classed.ComponentProps<C>

export type AnyComponent<P = unknown> = ElementType | ComponentType<P>
