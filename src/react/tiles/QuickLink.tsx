import { IconArrowRight } from '../icons'
import { TEXT_CLASSES } from '../Text'
import { classed } from '../utils'
import type { TileProps } from './Tile'
import { LINK_COLOR_CLASSES, Tile } from './Tile'

export type QuickLinkProps = Omit<
  TileProps,
  'children' | 'divider' | 'hideRightArrow' | 'icon'
>

const Heading = classed(
  'div',
  TEXT_CLASSES.headingLg,
  LINK_COLOR_CLASSES,
  // vertically center the first line of text with the circle (px):
  'pt-[1px]',
  // circle height: 46
  // line height: 32
  // offset: (46 - 32) / 2 = 7
  'lg:pt-[7px]'
)

// this component is static; it takes no props and always renders the same thing
function Icon() {
  return (
    <div className="shrink-0 flex items-center justify-center rounded-full bg-theme-secondary size-[30px] lg:size-[46px]">
      <IconArrowRight
        className="text-theme-primary size-[18px] lg:size-[24px]"
        aria-hidden="true"
      />
    </div>
  )
}

export const QuickLink = Object.assign(
  function QuickLink(props: QuickLinkProps) {
    const { heading, description, ...rest } = props
    return (
      <Tile.Link {...rest} divider={false} data-testid="quick-link">
        <Icon />
        <Tile.Content>
          <Heading data-testid="quick-link-heading">{heading}</Heading>
          {description ? (
            <Tile.Description data-testid="quick-link-description">
              {description}
            </Tile.Description>
          ) : null}
        </Tile.Content>
      </Tile.Link>
    )
  },
  {
    Icon,
    Heading
  }
)
