const colors = require('./tokens/colors')

module.exports = {
  colors,
  fontFamily: {
    rubik: ['Rubik', 'ui-sans-serif', 'sans-serif']
  },
  fontSize: {
    body: ['17px', '24px']
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
