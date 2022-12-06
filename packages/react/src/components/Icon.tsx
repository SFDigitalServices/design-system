/* eslint-disable import/namespace */
import React, { ComponentPropsWithoutRef, ComponentType } from 'react'
import * as components from '@sfgov/icons'
import { components as iconsIndex } from '@sfgov/icons/generated/index.json'
import { styled } from '../stitches.config'

export type SVGProps = ComponentPropsWithoutRef<'svg'>
export type IconName = keyof typeof iconsIndex

export { iconsIndex }

export const iconsByName = Object.fromEntries(
  Object.entries(iconsIndex)
    .map(([id, { component }]) => [id, components[component]])
) as Record<IconName, ComponentType<SVGProps>>

function getComponent (name: IconName | string): ComponentType<SVGProps> {
  return iconsByName[name] || 'svg'
}

export type IconProps = SVGProps & {
  symbol: IconName
}

export const Icon = styled(function IconImpl ({ symbol, ...rest }: IconProps) {
  const Component = getComponent(symbol)
  return <Component {...rest} />
}, {
  fill: 'currentcolor',
  '[stroke-width]': {
    stroke: 'currentcolor'
  }
})
