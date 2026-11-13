import type { ComponentProps } from 'react'
import { classed } from './utils'

export const Link = classed('a', 'text-primary500 cursor-pointer')

export type LinkProps = ComponentProps<typeof Link>
