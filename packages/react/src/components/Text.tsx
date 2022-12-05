import React from 'react'
import { textStyles } from '../theme/typography'
import { CSS, styled } from '../stitches.config'
import { withFixedProps } from '../utils'

export type TextVariant =
  'body' | 'small' | 'bigDesc' |
  'titleXs' | 'titleSm' | 'titleMd' | 'titleLg' | 'titleXl' |
  'displaySm' | 'displayLg' | 'mono'

export const Text = styled('div', {
  m: 0,
  // Chinese text should be rendered in Noto Sans TC,
  // with bold font weights at 500 (not 600)
  '&:lang(zh)': {
    fontFamily: '$chinese',
    $fontWeights$bold: '$fontWeights$boldChinese',
    letterSpacing: '0 !important'
  },
  variants: {
    variant: {
      body: textStyles.body,
      small: textStyles.small,
      bigDesc: {
        ...textStyles.bigDesc,
        '@lg': textStyles.bigDescDesktop
      },
      titleSm: textStyles.titleSm,
      titleMd: {
        ...textStyles.titleMd,
        '@lg': textStyles.titleMdDesktop
      },
      titleLg: {
        ...textStyles.titleLg,
        '@lg': textStyles.titleLgDesktop
      },
      titleXl: {
        ...textStyles.titleXl,
        '@lg': textStyles.titleXlDesktop
      },
      displaySm: {
        ...textStyles.displaySm,
        '@lg': textStyles.displaySmDesktop
      },
      displayLg: {
        ...textStyles.displayLg,
        '@lg': textStyles.displayLgDesktop
      },
      mono: {
        ...textStyles.body,
        fontFamily: '$monospace'
      }
    } as Record<TextVariant, CSS>
  },
  defaultVariants: {
    variant: 'body'
  }
})

export type TextProps = React.ComponentProps<typeof Text>

export const BodyText = createVariant('body')
export const SmallText = createVariant('small')
export const BigDesc = createVariant('bigDesc')
export const TitleXs = createVariant('titleXs')
export const TitleSm = createVariant('titleSm')
export const TitleMd = createVariant('titleMd')
export const TitleLg = createVariant('titleLg')
export const TitleXl = createVariant('titleXl')
export const DisplaySm = createVariant('displaySm')
export const DisplayLg = createVariant('displayLg')
export const Monospace = createVariant('mono')

function createVariant (variant: TextVariant) {
  return withFixedProps(Text, { variant })
}
