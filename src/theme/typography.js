const { pxMap } = require('./utils')

const fontFamily = {
  body: 'var(--font-sans)',
  sans: 'var(--font-sans)',
  slab: 'var(--font-slab)',
  monospace: 'var(--font-mono)',
  chinese: 'var(--font-chinese)'
}

const lineHeight = {
  auto: 'AUTO',
  ...pxMap([56, 52, 48, 44, 40, 36, 32, 28, 24, 20, 16])
}

const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  boldChinese: 500
}

const fontSize = {
  small: ['14px', '24px'],
  h1: ['36px', '24px'],
  h2: ['32px', '24px'],
  h3: ['26px', '24px'],
  h4: ['20px', '24px'],
  h6: ['16px', '24px'],
  'desktop-display-xxxl': [
    '46px',
    {
      lineHeight: lineHeight['56'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'desktop-display-lg': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'desktop-heading-xxl': [
    '40px',
    {
      lineHeight: lineHeight['52'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'desktop-heading-xl': [
    '32px',
    {
      lineHeight: lineHeight['44'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'desktop-heading-lg': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'desktop-heading-lg-li': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'desktop-heading-md': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.bold
    }
  ],
  'desktop-heading-sm': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.extrabold
    }
  ],
  'desktop-heading-xs': [
    '14px',
    {
      lineHeight: lineHeight['20'],
      letterSpacing: '0px',
      fontWeight: fontWeight.light
    }
  ],
  'display-xxxl': [
    '32px',
    {
      lineHeight: lineHeight['40'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'display-lg': [
    '20px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'heading-xxl': [
    '28px',
    {
      lineHeight: lineHeight['36'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'heading-xl': [
    '24px',
    {
      lineHeight: lineHeight['32'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'heading-lg': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.medium
    }
  ],
  'heading-lg-li': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.semibold
    }
  ],
  'heading-md': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.bold
    }
  ],
  'heading-sm': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.extrabold
    }
  ],
  'heading-xs': [
    '14px',
    {
      lineHeight: lineHeight['20'],
      letterSpacing: '0px',
      fontWeight: fontWeight.light
    }
  ],
  body: [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'label-md': [
    '20px',
    {
      lineHeight: lineHeight['28'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'label-sm': [
    '16px',
    {
      lineHeight: lineHeight['24'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ],
  'label-xs': [
    '14px',
    {
      lineHeight: lineHeight['20'],
      letterSpacing: '0px',
      fontWeight: fontWeight.normal
    }
  ]
}

module.exports = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight
}
