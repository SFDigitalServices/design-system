import { classed as coreClassed } from '@tw-classed/core'
import type { ComponentProps, ComponentType, ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { TEXT_CLASSES } from './Text'
import type { AnyComponent } from './types'
import type { ClassifiableElement } from './utils'
import { classed, classify, withDisplayName } from './utils'

type SpotlightVariant = 'horizontal' | 'vertical' | 'background'

export type SpotlightProps = ComponentProps<typeof Wrapper> & {
  layout?: SpotlightVariant
  reverse?: boolean
}

type SpotlightContextProps = Pick<SpotlightProps, 'layout' | 'reverse'>

const SpotlightContext = createContext<SpotlightContextProps>({
  layout: 'horizontal',
  reverse: false
})

const Wrapper = withContextVariant(
  classed('div', {
    base: [
      'flex flex-col flex-nowrap items-center p-20 gap-16 md:rounded-4 md:p-28 md:gap-28',
      // defaults
      'bg-theme-secondary text-primary800',
      // themed overrides
      'theme-teal:text-secondary800',
      'theme-orange:text-accent800',
      'theme-red:text-danger800',
      'theme-green:text-success800',
      'theme-black:bg-neutral800 theme-black:text-white'
    ].join(' '),
    variants: {
      layout: {
        horizontal: 'md:flex-row *:basis-1/2',
        vertical: 'md:flex-col',
        background: 'bg-[transparent] relative mb-28 md:flex-row *:basis-1/2'
      },
      reverse: {
        true: 'md:flex-row-reverse',
        false: ''
      }
    }
  })
)

const imageClass = coreClassed({
  base: 'rounded-4 object-cover',
  variants: {
    layout: {
      horizontal: 'aspect-[4/3]',
      vertical: 'aspect-[3/1]',
      background: 'rounded-0 absolute top-0 left-0 size-full object-cover'
    }
  }
})

type ImageProps = {
  children?: ClassifiableElement | null
  layout?: SpotlightVariant
  attribution?: ReactNode
}

const Content = withContextVariant(
  classed('div', {
    base: 'space-y-20',
    variants: {
      layout: {
        horizontal: '',
        vertical: 'order-2 w-full',
        background:
          'relative z-10 bg-white theme-black:bg-black rounded-4 p-20 md:p-28'
      },
      reverse: {
        true: '',
        false: ''
      }
    }
  })
)

const Figure = withContextVariant(
  classed('figure', {
    variants: {
      layout: {
        // the image always comes first in vertical layouts
        vertical: 'order-1'
      }
    }
  })
)

const Caption = withContextVariant(
  classed('figcaption', {
    base: 'empty:hidden text-label-xs link:text-primary500 theme-black:link:text-inherit link:underline mt-[10px]',
    variants: {
      layout: {
        horizontal: '',
        vertical: '',
        background: 'absolute z-0 top-full left-0'
      }
    }
  })
)

const Image = withContextVariant(function Image({
  attribution,
  layout,
  children: image,
  ...rest
}: ImageProps) {
  if (!image) return null
  return (
    <Figure {...rest}>
      {classify(image, imageClass({ layout }))}
      {attribution ? <Caption>{attribution}</Caption> : null}
    </Figure>
  )
})

const Heading = classed(
  'h2' as AnyComponent,
  TEXT_CLASSES.headingXl,
  'text-inherit mb-0'
)

export const Spotlight = Object.assign(
  function Spotlight({ layout, reverse, ...rest }: SpotlightProps) {
    return (
      <SpotlightContext.Provider value={{ layout, reverse }}>
        <Wrapper {...{ layout, reverse, ...rest }} />
      </SpotlightContext.Provider>
    )
  },
  {
    displayName: 'Spotlight',
    Content: withDisplayName(Content, 'Spotlight.Content'),
    Heading: withDisplayName(Heading, 'Spotlight.Heading'),
    Image: withDisplayName(Image, 'Spotlight.Image')
  }
)

/**
 * Create a component that receives the layout context
 * @param Component
 * @returns
 */
function withContextVariant<
  P extends {
    layout?: SpotlightVariant
    reverse?: boolean | 'true' | 'false'
  }
>(Component: ComponentType<P>) {
  return function WithContextVariant(props: P) {
    const { layout } = useContext(SpotlightContext)
    return <Component layout={layout} {...props} />
  }
}
