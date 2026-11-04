import { createClassed } from '@tw-classed/react'
import type { ReactElement } from 'react'
import { cloneElement } from 'react'
import type { ClassNameValue } from 'tailwind-merge'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [
      {
        text: [
          'heading-xs',
          'heading-sm',
          'heading-md',
          'heading-lg',
          'heading-lg-li',
          'heading-xl',
          'heading-xxl',
          'display-lg',
          'display-xxxl',
          'label-xs',
          'label-sm',
          'label-md'
        ]
      }
    ]
  }
})

export const { classed } = createClassed({
  merger: twMerge
})

export const classes = twMerge

export type ClassifiableElement = ReactElement<{ className?: string }>

/**
 * Add classes to a JSX element. This is the element equivalent of classes() and
 * classed() that lets components accept arbitrary _rendered_ components without
 * caring about their implementation. For instance, a component that styles an
 * image rendered with <img>, next/image's <Image> component, or even <svg>
 * would look like:
 *
 * ```tsx
 * import { classify, type ClassifiableElement } from '@sfgov/design-system'
 * type Props = {
 *   image: ClassifiableElement
 * }
 * function Component({ image }: Props) {
 *   return (
 *     <div className="relative aspect-square">
 *       {classify(image, 'absolute object-contain object-center')}
 *     </div>
 *   )
 * }
 * ```
 *
 * Then you'd render it with:
 *
 * ```tsx
 * <Component image={<img src="foo.jpg" />} />
 * ```
 *
 * This means that you don't have to overload your component with image props
 * or get involved in the rendering of the image itself.
 */
export function classify(
  element: ClassifiableElement,
  ...classNames: ClassNameValue[]
) {
  if (!classNames.flat().some(Boolean)) {
    return element
  }
  // eslint-disable-next-line @eslint-react/no-clone-element
  return cloneElement(element, {
    className: classes(element.props.className, ...classNames)
  })
}
