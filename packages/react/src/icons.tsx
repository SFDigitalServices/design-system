/* eslint-disable import/namespace */
import * as symbols from '@sfgov/icons'
import { components } from '@sfgov/icons/react/index.json'
import type { ComponentType } from 'react'
import { SVGProps } from './components/Icon'

export type IconSymbol = Exclude<keyof symbols, '__esModule'>
export type IconMeta = typeof components[number] & {
  component: ComponentType<SVGProps>
}

export const icons = Object.fromEntries(
  components.map(({ component: key, ...rest }) => [key, { component: symbols[key], ...rest }])
) as Record<IconSymbol, IconMeta>
