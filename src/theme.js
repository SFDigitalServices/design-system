/* eslint-disable key-spacing */
const colors = require('./tokens/colors')

module.exports = {
  colors,
  fontFamily: {
    rubik: ['Rubik', 'ui-sans-serif', 'sans-serif']
  },
  fontSize: {
    body:     ['16px', '24px'],
    title5:   ['20px', '32px'],
    title4:   ['24px', '32px'],
    title3:   ['30px', '40px'],
    title2:   ['40px', '48px'],
    title1:   ['62px', '72px'],
    display2: ['50px', '64px'],
    display1: ['72px', '80px']
  },
  letterSpacing: {
    0: '0',
    display1: '-2px'
  },
  fontWeight: {
    light: 300,
    normal: 300,
    medium: 500,
    bold: 700
  },
  spacing: {
    0: '0',
    '1/2': '5px',
    1: '10px',
    2: '20px',
    3: '30px',
    4: '40px',
    gutter: '96px'
  },
  borderColor: {
    current: 'currentColor',
    ...colors
  },
  borderRadius: {
    DEFAULT: '8px',
    0: '0'
  },
  borderWidth: {
    DEFAULT: '4px',
    0: '0',
    1: '1px'
  }
}
