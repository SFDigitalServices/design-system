import type { ComponentProps, ComponentType } from 'react'
import { styled } from '../stitches.config'
import { withFixedProps } from '../utils'

export type SVGProps = ComponentProps<'svg'>

/**
 * SVGIcon is the vehicle for SVG icon styles without the content.
 * To render a specific SVG icon, pass it to the `as` prop as a component.
 */
export const SVGIcon = styled('svg', {
  fill: 'currentcolor',
  '[stroke-width]': {
    stroke: 'currentcolor'
  }
})

export type SVGIconProps = SVGProps & {
  as: ComponentType<SVGProps>
}

/**
 * Create a styled icon component from an unstyled SVG component by wrapping it
 * in a function that renders `<SVGIcon>` with `as={component}`.
 * 
 * @param IconComponent the SVG component to render
 * @param viewBox an optional array of numbers representing the visual bounding box
 *   of the SVG, e.g. `[0, 0, 20, 20]`. This sets the default `width` prop, which
 *   establishes a proportional height according to browser intrinsic aspect ratio rules.
 */
export function createStyledIcon (IconComponent: ComponentType<SVGProps>, viewBox?: number[]) {
  const Icon = withFixedProps(SVGIcon, { as: IconComponent })
  return Object.assign(Icon, {
    displayName: IconComponent.displayName || IconComponent.name,
    viewBox,
    defaultProps: viewBox?.[2]
      ? { width: viewBox[2] }
      : {}
  })
}
