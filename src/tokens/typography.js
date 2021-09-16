const fontFamily = {
  rubik: ['Rubik', 'ui-sans-serif', 'sans-serif'],
  mono: ['Roboto mono', 'monospace']
}

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500
}

module.exports = {
  fontFamily,
  fontSize: {
    'display-lg': ['44px', {
      letterSpacing: '-1px',
      lineHeight: '48px'
    }],
    'display-sm': ['36px', {
      letterSpacing: '-1px',
      lineHeight: '40px'
    }],
    'title-xl': ['32px', {
      letterSpacing: '-1px',
      lineHeight: '36px'
    }],
    'title-lg': ['28px', {
      letterSpacing: '-1px',
      lineHeight: '32px'
    }],
    'title-md': ['24px', '28px'],
    'big-desc': ['20px', '28px'],
    'display-lg-desktop': ['72px', {
      letterSpacing: '-2px',
      lineHeight: '76px'
    }],
    'display-sm-desktop': ['48px', {
      letterSpacing: '-1px',
      lineHeight: '52px'
    }],
    'title-xl-desktop': ['60px', {
      letterSpacing: '-1px',
      lineHeight: '64px'
    }],
    'title-lg-desktop': ['44px', {
      letterSpacing: '-1px',
      lineHeight: '52px'
    }],
    'title-md-desktop': ['32px', '36px'],
    'title-sm-desktop': ['24px', '28px'],
    'title-xs-desktop': ['20px', '24px'],
    'big-desc-desktop': ['24px', '32px'],
    body: ['16px', '24px'],
    small: ['14px', '18px']
  },
  fontWeight,
  // TODO: deprecate in 3.0.0
  letterSpacing: {
    0: '0',
    n1: '-1px',
    n2: '-2px'
  }
}
