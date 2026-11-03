import { HeadingLg } from './Text'
import { classed } from './utils'
import type { ComponentProps, ComponentType } from '../types'

const StyledItem = classed(
  'div',
  'w-full border-neutral200 border-b-1 pb-16 last-of-type:border-0 md:border-r-1 md:border-b-0 md:last-of-type:pr-0 md:pr-12 lg:pr-20'
)

export type StackedItemProps = ComponentProps<typeof StyledItem> & {
  icon?: ComponentType<{ width?: string | number }> | null
  title?: string
  headingAs?: string
}

export const StackedItem = ({
  icon: Icon = null,
  headingAs = 'p',
  title = '',
  children,
  ...rest
}: StackedItemProps) => {
  // TODO: handle icons as paths instead of assuming an Icon element
  return (
    <StyledItem data-testid="stacked-content-item" {...rest}>
      {Icon ? (
        <Icon
          // @ts-expect-error erg
          className="mb-12"
          width={24}
          data-testid="stacked-content-item-icon"
        />
      ) : null}
      {title ? (
        <HeadingLg className="flex items-center mb-28" as={headingAs}>
          {title}
        </HeadingLg>
      ) : null}
      {children}
    </StyledItem>
  )
}
