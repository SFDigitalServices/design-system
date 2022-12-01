import { ColorModesScale } from 'theme-ui'

const blue = {
  1: '#edf4f7',
  2: '#a9d6ea',
  bright: '#495ed4',
  dark: '#0c1464'
}

const slate = {
  1: '#eff3f4',
  2: '#5a7a92',
  3: '#1d4d70',
  4: '#002b48'
}

const grey = {
  1: '#f6f6f6',
  2: '#e2e2e2',
  3: '#c2c2c2',
  4: '#a1a1a1',
  dark: '#424244'
}

export default {
  white: '#fff',
  black: '#212123',
  transparent: 'transparent',
  text: {
    secondary: '#59595c'
  },
  action: blue.bright,
  blue,
  slate: {
    ...slate,
    light: slate[2]
  },
  green: {
    1: '#e9f7ec',
    2: '#c0e2c5',
    3: '#00866a',
    4: '#1b674d'
  },
  red: {
    1: '#f5e9e5',
    2: '#efcabb',
    3: '#c55236',
    4: '#9b3921'
  },
  purple: {
    1: '#edebf6',
    2: '#cccced',
    3: '#7d61b3',
    4: '#543a89'
  },
  yellow: {
    1: '#f8f1df',
    2: '#f9e3a3',
    3: '#f4c435',
    4: '#e0a81a'
  },
  grey: {
    ...grey,
    focus: grey[4]
  },
  sequential: {
    darkBlue: {
      1: '#9389ad',
      2: '#8074a3',
      3: '#6e6099',
      4: '#5a4d8f',
      5: '#463a84',
      6: '#2f287a',
      7: '#0d1670'
    },
    orange: {
      1: '#472917',
      2: '#603418',
      3: '#7b3f18',
      4: '#964a17',
      5: '#b15514',
      6: '#ce610f',
      7: '#eb6d05'
    },
    teal: {
      1: '#004644',
      2: '#055451',
      3: '#0b625f',
      4: '#12706d',
      5: '#197f7c',
      6: '#208e8b',
      7: '#279d9a'
    },
    blue: {
      1: '#1e405d',
      2: '#204e73',
      3: '#205c89',
      4: '#1f6ba0',
      5: '#1b7ab7',
      6: '#1389cf',
      7: '#0099e8'
    },
    purple: {
      1: '#241a37',
      2: '#32244d',
      3: '#402e65',
      4: '#4f397d',
      5: '#5e4397',
      6: '#6e4fb1',
      7: '#7e5acc'
    },
    pink: {
      1: '#39121f',
      2: '#51152b',
      3: '#691737',
      4: '#831644',
      5: '#9e1451',
      6: '#b90e5f',
      7: '#d5006d'
    },
    grey: {
      0: '#c6c6c6'
    }
  }
} as ColorModesScale
