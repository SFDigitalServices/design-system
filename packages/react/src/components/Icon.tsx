import type { ComponentProps, ComponentType } from 'react'
import { styled } from '../stitches.config'

export type SVGProps = ComponentProps<'svg'>

export const Icon = styled('svg', {
  fill: 'currentcolor',
  '[stroke-width]': {
    stroke: 'currentcolor'
  }
})

export type IconProps = SVGProps & {
  as: ComponentType<SVGProps>
}
