import { classed } from './utils'
import type { ComponentProps } from '../types'

export const Link = classed('a', 'text-primary500 cursor-pointer')

export type LinkProps = ComponentProps<typeof Link>
