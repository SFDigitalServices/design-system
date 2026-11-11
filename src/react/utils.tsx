import { createClassed } from '@tw-classed/react'
import type { ReactElement } from 'react'
import { cloneElement } from 'react'
import type { ClassNameValue } from 'tailwind-merge'
import { extendTailwindMerge } from 'tailwind-merge'
import { fontSize } from '../theme/typography'

const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [
      {
        /**
         * This tells tailwind-merge to preserve (_not_ to merge) our `fontSize`
         * theme identifiers, which share the `text-` utility class prefix with
         * Tailwind's `text-{color}` utilities. Without this, tailwind-merge
         * merges classes like `text-black` (color) with `text-small`
         * (font-size), and whichever is specified last wins.
         */
        text: Object.keys(fontSize)
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
