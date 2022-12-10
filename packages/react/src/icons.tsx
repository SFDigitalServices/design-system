/* eslint-disable import/namespace */
import type { ComponentType } from 'react'
import type { SVGProps } from './components/Icon'
import * as symbols from '@sfgov/icons/react'
import { components } from '@sfgov/icons/react/index.json'

// re-export all of the symbols individually
export * from '@sfgov/icons/react'

export type IconMeta = {
  // e.g. 'arrow-down'
  id: string
  // e.g. 'Arrow down'
  name: string
  // e.g. 'ArrowDown'
  componentName: string
  // ArrowDown symbol
  component: ComponentType<SVGProps>
  // Figma link
  href: string
}

export const Icons = Object.fromEntries(
  components.map(({ component: key, ...rest }) => [key, {
    componentName: key,
    component: symbols[key],
    ...rest
  }])
) as Record<keyof symbols, IconMeta>
