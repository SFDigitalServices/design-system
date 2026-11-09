import type { ComponentProps, ReactNode } from 'react'
import { classed } from './utils'
import { HeadingDivider } from './HeadingDivider'

const Wrapper = classed('div', {
  base: 'space-y-8',
  variants: {
    level: {
      1: 'space-y-12 lg:space-y-16',
      2: 'lg:space-y-12',
      3: ''
    }
  }
})

export const BrandedDivider = classed(HeadingDivider, {
  base: 'w-[46px]',
  variants: {
    level: {
      1: 'md:w-[54px] lg:w-[58px]',
      2: 'w-[36px] md:w-[42px] lg:w-[52px]',
      3: ''
    }
  }
})

export type BrandedHeadingProps = Omit<
  ComponentProps<typeof Wrapper>,
  'children'
> & {
  children: ReactNode
}

export function BrandedHeading({
  level,
  children,
  ...rest
}: BrandedHeadingProps) {
  return (
    <Wrapper
      className="*:!mb-0"
      level={level}
      data-testid="branded-heading"
      {...rest}
    >
      {children}
      <BrandedDivider level={level} />
    </Wrapper>
  )
}
