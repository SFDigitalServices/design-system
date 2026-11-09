import type { ReactNode } from 'react'
import { Grid } from './Grid'
import { PageLabel } from './PageLabel'
import { DisplayLg, DisplayXXXl } from './Text'
import { classify, type ClassifiableElement } from './utils'
import { BrandedHeading } from './BrandedHeading'

export type PageHeaderProps = Omit<JSX.IntrinsicElements['div'], 'title'> & {
  title: string
  /**
   * Passing a truthy string for the label renders a {@link PageLabel} with the
   * string. To hide the label, pass a rendered page label, e.g.
   * ```tsx
   * <PageHeader label={<PageLabel isHidden>Label</PageLabel>} />
   * ```
   */
  label?: ReactNode
  description?: string
  logo?: ClassifiableElement | null
}

/**
 * Renders a page title, label, description, and logo.
 *
 * The `logo` prop is a JSX element that just gets classes appended to it (with
 * {@link classify}) on smaller viewports to constrain its width. Two instances
 * of the logo are rendered to meet the design spec, which puts the logo between
 * the label and title on mobile and to the right of all the text elements on
 * larger viewports.
 *
 * Additional children are rendered after the description, and spacing between
 * all of the text elements is provided by `gap-*` utilities on the parent. Be
 * sure to pass block-level elements as children (i.e. wrapping links in a
 * `<div>`), as inline elements won't receive vertical margins.
 */
export function PageHeader({
  title,
  label,
  description,
  logo,
  children,
  ...rest
}: PageHeaderProps) {
  return (
    <div data-testid="page-header" {...rest}>
      <Grid className="items-center">
        <div className={`col-span-full ${logo ? 'lg:col-span-9' : ''}`}>
          <div className="flex flex-col gap-20 md:gap-[24px]">
            {label && typeof label === 'string' ? (
              <PageLabel>{label}</PageLabel>
            ) : (
              label
            )}
            {logo ? classify(logo, 'max-w-1/4 lg:hidden') : null}
            <BrandedHeading level={1}>
              <DisplayXXXl as="h1">{title}</DisplayXXXl>
            </BrandedHeading>
            {description ? <DisplayLg as="p">{description}</DisplayLg> : null}
            {children}
          </div>
        </div>
        {logo ? <div className="hidden lg:block col-span-3">{logo}</div> : null}
      </Grid>
    </div>
  )
}
