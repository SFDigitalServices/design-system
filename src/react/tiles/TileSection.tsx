import type { ComponentProps, ReactNode } from 'react'
import { isValidElement } from 'react'
import { BrandedHeading } from '../BrandedHeading'
import { HeadingXXl } from '../Text'
import { classed } from '../utils'

const SectionContainer = classed('div', 'space-y-28')

const SectionContentWrapper = classed('div', 'space-y-40 lg:space-y-60')

export type TileSectionProps = ComponentProps<typeof SectionContainer> & {
  heading?: ReactNode
  branded?: boolean
}

/**
 * A tile section is a container for one or more tile sets. Usage:
 *
 * ```jsx
 * <TileSection heading="Services">
 *   <TileSet heading="List A">
 *     <Tile {...} />
 *     <Tile {...} />
 *     <Tile {...} />
 *   </TileSet>
 *   <TileSet heading="List B">
 *     <Tile {...} />
 *     <Tile {...} />
 *     <Tile {...} />
 *   </TileSet>
 * </TileSection>
 * ```
 */
export function TileSection({
  heading,
  branded = false,
  children,
  ...rest
}: TileSectionProps) {
  if (heading && !isValidElement(heading)) {
    heading = <HeadingXXl as="h2">{heading}</HeadingXXl>
  }
  return (
    <SectionContainer {...rest}>
      {heading ? (
        branded ? (
          <BrandedHeading level={2}>{heading}</BrandedHeading>
        ) : (
          heading
        )
      ) : null}
      <SectionContentWrapper>{children}</SectionContentWrapper>
    </SectionContainer>
  )
}
