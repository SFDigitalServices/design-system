import { classed } from '../utils'
import { HeadingXXl } from '../Text'
import type { ComponentProps, ReactNode } from 'react'

const SectionContainer = classed('div', 'space-y-28')

const SectionContentWrapper = classed('div', 'space-y-40 lg:space-y-60')

export type TileSectionProps = ComponentProps<typeof SectionContainer> & {
  heading?: ReactNode
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
export function TileSection({ heading, children, ...rest }: TileSectionProps) {
  return (
    <SectionContainer data-testid="tile-section" {...rest}>
      {heading ? (
        <HeadingXXl as="h2" data-testid="tile-section-heading">
          {heading}
        </HeadingXXl>
      ) : null}
      <SectionContentWrapper>{children}</SectionContentWrapper>
    </SectionContainer>
  )
}
