import type { ComponentProps, ComponentType, ReactNode } from 'react'
import { IconArrowRight } from '../icons'
import { TEXT_CLASSES } from '../Text'
import { classed, classes } from '../utils'

// Tile links use a flex layout with 12px spacing between icons, text, and the
// right arrow.
const Link = classed('a', {
  base: 'flex items-start gap-12 text-black no-underline group',
  variants: {
    divider: {
      true: [
        // 20px padding and margin on the bottom on mobile, 24px on lg+
        'pb-20 mb-20 lg:pb-[24px] lg:mb-[24px]',
        // horizontal border between this tile and the next one
        'border-b-1 border-neutral200',
        // the last tile should have no margin, padding, or border
        'last:pb-0 last:mb-0 last:border-0'
      ].join(' ')
    }
  }
})

// classes that style the link title and icons as links that darken on
// group-hover
export const LINK_COLOR_CLASSES = classes(
  'text-primary600 group-hover:text-primary800'
)

// Tile content stretches to fill the flexbox and has consistent vertical
// spacing between children.
const Content = classed('div', 'space-y-8 basis-full')

// The heading should not exceed 2 lines
const Heading = classed(
  'div',
  'font-bold underline line-clamp-2',
  LINK_COLOR_CLASSES
)

// The icon should inherit the link classes
const IconWrapper = classed('div', 'shrink-0', LINK_COLOR_CLASSES)

// Description should not exceed 3 lines
const Description = classed('div', 'line-clamp-3', TEXT_CLASSES.body)

const RightArrowWrapper = classed(
  'div',
  // 6px left padding makes the spacing between the text and the arrow
  // 18px (because <Link> uses `gap-12`)
  'pl-[6px]',
  LINK_COLOR_CLASSES
)

type IconComponent = ComponentType<JSX.IntrinsicElements['svg']>

export type TileProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  // href is required
  href: string
  /**
   * The tile title. This can either be a string or mixed content (JSX fragment,
   * etc.). NOTE: the "title" prop is reserved for accessibility purposes, and
   * can be used separately to assign an accessible title to the link.
   */
  heading: ReactNode
  /**
   * The SVG icon component to render before the heading. This component needs
   * to accept a className prop so that we can set responsive sizing classes on
   * it.
   */
  icon?: IconComponent
  // The tile description
  description?: ReactNode
  /**
   * Hide the right arrow. The default behavior is to show the arrow, but this
   * prop is provided as a simpler way to render "one-off" tiles without the
   * right arrow rather than having to reconstruct a tile from subcomponents.
   */
  hideRightArrow?: boolean
}

function Icon({ icon: SVGIcon }: Pick<TileProps, 'icon'>) {
  return SVGIcon ? (
    <IconWrapper>
      <SVGIcon className="size-20 lg:!size-[24px]" data-testid="tile-icon" />
    </IconWrapper>
  ) : null
}

/**
 * This is the "base" tile component used to render all tile types except quick
 * links. Tiles are links, so they require an href and a heading.
 */
export const Tile = Object.assign(
  function Tile({
    heading,
    description,
    icon,
    hideRightArrow,
    children,
    ...rest
  }: TileProps) {
    return (
      <Link data-testid="tile-link" divider={true} {...rest}>
        <Icon icon={icon} />
        <Content>
          <Heading data-testid="tile-heading">{heading}</Heading>
          {description ? (
            <Description data-testid="tile-description">
              {description}
            </Description>
          ) : null}
          {children}
        </Content>
        {hideRightArrow ? null : <RightArrow />}
      </Link>
    )
  },
  {
    Link,
    Content,
    Heading,
    Icon,
    Description
  }
)

/**
 * The tile's right arrow is static. It takes no props, so React can easily
 * optimize its rendering without the use of `memo()`.
 */
function RightArrow() {
  return (
    <RightArrowWrapper>
      <IconArrowRight
        width={20}
        height={24}
        data-testid="tile-arrow"
        aria-hidden="true"
      />
    </RightArrowWrapper>
  )
}
