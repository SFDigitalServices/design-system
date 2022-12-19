import { CSS } from '@stitches/react'
import { defaultFonts } from '../constants'

export const fonts = {
  body: '$sans',
  sans: '$RobotoFlex',
  slab: '$RobotoSlab',
  monospace: '$RobotoMono',
  chinese: '$NotoSansTC',
  ...Object.fromEntries(
    defaultFonts.map(font => [
      font.name.replace(/ +/g, ''),
      `${[font.name, ...font.fallbacks
    ].join(', ')}`])
  )
}

export const textStyles: Record<string, CSS> = {
  body: {
    fontFamily: '$body',
    fontSize: '16px',
    fontWeight: '$normal',
    lineHeight: '24px'
  },
  small: {
    fontFamily: '$body',
    fontSize: '14px',
    lineHeight: '18px'
  },
  bigDesc: {
    fontFamily: '$body',
    fontSize: '20px',
    fontWeight: '$bold',
    lineHeight: '28px'
  },
  bigDescDesktop: {
    fontFamily: '$body',
    fontSize: '24px',
    fontWeight: '$bold',
    lineHeight: '32px'
  },
  titleXs: {
    fontFamily: '$sans',
    fontSize: '20px',
    fontWeight: '$bold',
    lineHeight: '24px'
  },
  titleSm: {
    fontFamily: '$sans',
    fontSize: '24px',
    fontWeight: '$bold',
    lineHeight: '28px'
  },
  titleMd: {
    fontFamily: '$slab',
    fontSize: '24px',
    fontWeight: '$bold',
    lineHeight: '28px'
  },
  titleLg: {
    fontFamily: '$slab',
    fontSize: '28px',
    fontWeight: '$bold',
    lineHeight: '32px'
  },
  titleXl: {
    fontFamily: '$slab',
    fontSize: '32px',
    fontWeight: '$bold',
    lineHeight: '36px'
  },
  displaySm: {
    fontFamily: '$slab',
    fontSize: '36px',
    fontWeight: '$light',
    lineHeight: '40px'
  },
  displayLg: {
    fontFamily: '$slab',
    fontSize: '44px',
    fontWeight: '$light',
    lineHeight: '48px'
  },
  titleMdDesktop: {
    fontFamily: '$slab',
    fontSize: '32px',
    fontWeight: '$bold',
    lineHeight: '36px'
  },
  titleLgDesktop: {
    fontFamily: '$slab',
    fontSize: '44px',
    fontWeight: '$bold',
    lineHeight: '52px'
  },
  titleXlDesktop: {
    fontFamily: '$slab',
    fontSize: '60px',
    fontWeight: '$bold',
    lineHeight: '64px'
  },
  displaySmDesktop: {
    fontFamily: '$slab',
    fontSize: '48px',
    fontWeight: '$light',
    lineHeight: '52px'
  },
  displayLgDesktop: {
    fontFamily: '$slab',
    fontSize: '72px',
    fontWeight: '$light',
    lineHeight: '76px'
  }
}

export const fontWeights = {
  light: 300,
  normal: 400,
  bold: 700,
  boldChinese: 500,
  ...collect('fontWeight')
}

export const fontSizes = collect('fontSize')
export const lineHeights = collect('lineHeight')
export const letterSpacings = collect('letterSpacing')

function collect (prop: keyof CSS) {
  const map = {}
  for (const [name, style] of Object.entries(textStyles)) {
    if (prop in style) {
      map[name] = style[prop]
    }
  }
  return map
}
