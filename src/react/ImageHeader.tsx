import { Container } from './Container'
import type { ClassifiableElement } from './utils'
import { classed, classes, classify } from './utils'

export type ImageHeaderProps = Omit<
  JSX.IntrinsicElements['div'],
  'className'
> & {
  /**
   * The image element. Existing class names are merged with the positioning
   * classes that size the image responsively.
   */
  image?: ClassifiableElement | null
  /**
   * Classes applied to the {@link Container} that wraps the children.
   */
  className?: string
}

/**
 * This component conditionally renders a full-width header image that's
 * partially overlapped by the children in a {@link Container} with a solid
 * white background. Just pass a JSX element in the `image` prop (or not!) and
 * the component will wrap the content accordingly:
 *
 * ```tsx
 * <ImageHeader image={<img src="foo.jpg" />}>
 *   <DisplayXXl>My cool page title</DisplayXXl>
 * </ImageHeader>
 * ```
 *
 * Class names on the `image` element are overridden if they conflict with the
 * classes we need to position it properly. In other words: don't try to
 * position or size it. We position the image with `object-position: top` now,
 * but could add other positioning options later or allow custom `object-`
 * utilities.
 *
 * The children are wrapped in a {@link Container} and additional divs that
 * position the image behind the content with the appropriate spacing. If the
 * `image` is falsy, we just don't render it. This means that you can just wrap
 * your content in `<ImageHeader>` with a conditionally rendered image rather
 * than rendering the content and conditionally rendering `<ImageHeader>`:
 *
 * ```tsx
 * <ImageHeader image={logo ? <Image imageRef={logo} /> : null}>
 *   <DisplayXXl>My cool page title</DisplayXXl>
 * </ImageHeader>
 * ```
 *
 * In either case, the `className` prop is passed to the innermost Container,
 * and all of the remaining props are passed to the outermost <div>.
 */
export function ImageHeader({
  image,
  children,
  className,
  ...rest
}: ImageHeaderProps) {
  return (
    <div
      className={image ? 'overflow-clip' : undefined}
      data-testid="image-header"
      {...rest}
    >
      {image ? (
        <>
          <ImageWrapper data-testid="image-header-image">
            {classify(image, imageClass)}
          </ImageWrapper>
          <ContentWrapper>
            <ContentContainer className={className}>
              {children}
            </ContentContainer>
          </ContentWrapper>
        </>
      ) : (
        <Container className={className}>{children}</Container>
      )}
    </div>
  )
}

// Responsive height for the image at each breakpoint
const imageHeights = 'h-[100px] md:h-[200px] lg:h-[400px]'
// Responsive heights of the space between the top of the image and the content
// (i.e. how much of the image is visible within the container grid). These
// values must be <= the corresponding image height at each breakpoint!
const spacerHeights = 'h-[88px] md:h-[140px] lg:h-[200px] xl:h-[248px]'
// We set the min-height of the content container to reach the bottom of the
// image. These values are calculated by subtracting the spacer height from the
// image height at each breakpoint, i.e. 100 - 88 = 12, 200 - 140 = 60, etc.
const containerHeights =
  'min-h-[12px] md:min-h-[60px] lg:min-h-[200px] xl:min-h-[152px]'

const ImageWrapper = classed(
  'div',
  // creates a new positioning context, allowing us to position the image
  // absolutely and set z-index
  'relative z-0',
  spacerHeights
)

// the white background switches between the content wrapper to the container
// at the lg breakpoint to cover up the overflowing image
const ContentWrapper = classed(
  'div',
  'rounded-t-[8px] bg-white md:rounded-t-0 lg:bg-[transparent] relative z-10'
)

const ContentContainer = classed(
  Container,
  ['pt-20 lg:p-40 lg:bg-white', containerHeights].join(' ')
)

const imageClass = classes(
  'absolute w-full -z-10 object-cover object-top',
  imageHeights
)
