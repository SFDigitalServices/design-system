import { CSS } from '@stitches/react'

export const fonts = {
  rubik: 'Rubik, ui-sans-serif, sans-serif',
  roboto: 'Roboto mono, ui-monospace, monospace',
  noto: 'Noto Sans TC, ui-sans-serif, sans-serif',
  body: '$rubik',
  chinese: '$noto',
  monospace: '$roboto'
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
    fontFamily: '$body',
    fontSize: '20px',
    fontWeight: '$bold',
    lineHeight: '24px'
  },
  titleSm: {
    fontFamily: '$body',
    fontSize: '24px',
    fontWeight: '$bold',
    lineHeight: '28px'
  },
  titleMd: {
    fontFamily: '$body',
    fontSize: '24px',
    fontWeight: '$bold',
    lineHeight: '28px'
  },
  titleLg: {
    fontFamily: '$body',
    fontSize: '28px',
    fontWeight: '$bold',
    lineHeight: '32px',
    letterSpacing: '-1px'
  },
  titleXl: {
    fontFamily: '$body',
    fontSize: '32px',
    fontWeight: '$bold',
    lineHeight: '36px',
    letterSpacing: '-1px'
  },
  displaySm: {
    fontFamily: '$body',
    fontSize: '36px',
    fontWeight: '$light',
    lineHeight: '40px',
    letterSpacing: '-1px'
  },
  displayLg: {
    fontFamily: '$body',
    fontSize: '44px',
    fontWeight: '$light',
    lineHeight: '48px',
    letterSpacing: '-1px'
  },
  titleMdDesktop: {
    fontFamily: '$body',
    fontSize: '32px',
    fontWeight: '$bold',
    lineHeight: '36px'
  },
  titleLgDesktop: {
    fontFamily: '$body',
    fontSize: '44px',
    fontWeight: '$bold',
    lineHeight: '52px',
    letterSpacing: '-1px'
  },
  titleXlDesktop: {
    fontFamily: '$body',
    fontSize: '60px',
    fontWeight: '$bold',
    lineHeight: '64px',
    letterSpacing: '-1px'
  },
  displaySmDesktop: {
    fontFamily: '$body',
    fontSize: '48px',
    fontWeight: '$light',
    lineHeight: '52px',
    letterSpacing: '-1px'
  },
  displayLgDesktop: {
    fontFamily: '$body',
    fontSize: '72px',
    fontWeight: '$light',
    lineHeight: '76px',
    letterSpacing: '-2px'
  }
}

export const fontWeights = {
  light: 300,
  normal: 400,
  bold: 600,
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
