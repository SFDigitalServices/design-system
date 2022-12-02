export const RUBIK_SANS = 'Rubik, ui-sans-serif, sans-serif'
export const ROBOTO_MONO = 'Roboto mono, ui-monospace, monospace'

export const fonts = {
  rubik: RUBIK_SANS,
  roboto: ROBOTO_MONO,
  body: '$rubik',
  monospace: '$roboto'
}

export const textStyles = {
  body: {
    fontSize: '16px',
    lineHeight: '24px'
  },
  small: {
    fontSize: '14px',
    lineHeight: '18px'
  },
  bigDesc: {
    fontSize: '20px',
    lineHeight: '28px'
  },
  bigDescDesktop: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  titleXs: {
    fontSize: '20px',
    lineHeight: '24px'
  },
  titleSm: {
    fontSize: '24px',
    lineHeight: '28px'
  },
  titleMd: {
    fontSize: '24px',
    lineHeight: '28px'
  },
  titleLg: {
    fontSize: '28px',
    lineHeight: '32px',
    letterSpacing: '-1px'
  },
  titleXl: {
    fontSize: '32px',
    lineHeight: '36px',
    letterSpacing: '-1px'
  },
  displaySm: {
    fontSize: '36px',
    lineHeight: '40px',
    letterSpacing: '-1px'
  },
  displayLg: {
    fontSize: '44px',
    lineHeight: '48px',
    letterSpacing: '-1px'
  },
  titleMdDesktop: {
    fontSize: '32px',
    lineHeight: '36px'
  },
  titleLgDesktop: {
    fontSize: '44px',
    lineHeight: '52px',
    letterSpacing: '-1px'
  },
  titleXlDesktop: {
    fontSize: '60px',
    lineHeight: '64px',
    letterSpacing: '-1px'
  },
  displaySmDesktop: {
    fontSize: '48px',
    lineHeight: '52px',
    letterSpacing: '-1px'
  },
  displayLgDesktop: {
    fontSize: '72px',
    lineHeight: '76px',
    letterSpacing: '-2px'
  }
}

export const fontWeights = {
  light: 300,
  normal: 400,
  bold: 600
}

export const fontSizes = collect('fontSize')
export const lineHeights = collect('lineHeight')
export const letterSpacings = collect('letterSpacing')

Object.assign(fontWeights, collect('fontWeight'))

function collect (prop: string) {
  const map = {}
  for (const [name, style] of Object.entries(textStyles)) {
    if (prop in style) {
      map[name] = style[prop]
    }
  }
  return map
}
