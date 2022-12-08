import React, { ComponentProps, ComponentType } from 'react'
import { styled } from '../stitches.config'

export type SVGProps = ComponentProps<'svg'>
export type IconProps = SVGProps & {
  symbol: ComponentType<SVGProps>
}

export const Icon = styled(function IconImpl ({ symbol, ...rest }: IconProps) {
  const Component = symbol || 'svg'
  return <Component {...rest} />
}, {
  fill: 'currentcolor',
  '[stroke-width]': {
    stroke: 'currentcolor'
  }
})
