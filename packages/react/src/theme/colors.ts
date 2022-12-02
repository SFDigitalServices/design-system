export const colors = flatten({
  white: '#fff',
  black: '#212123',
  action: '$blueBright',
  blueL1: '#edf4f7',
  blueL2: '#a9d6ea',
  blueBright: '#495ed4',
  blueDark: '#0c1464',
  greenL1: '#e9f7ec',
  greenL2: '#c0e2c5',
  greenL3: '#00866a',
  greenL4: '#1b674d',
  greyL1: '#f6f6f6',
  greyL2: '#e2e2e2',
  greyL3: '#c2c2c2',
  greyL4: '#a1a1a1',
  greyDark: '#424244',
  redL1: '#f5e9e5',
  redL2: '#efcabb',
  redL3: '#c55236',
  redL4: '#9b3921',
  purpleL1: '#edebf6',
  purpleL2: '#cccced',
  purpleL3: '#7d61b3',
  purpleL4: '#543a89',
  slateL1: '#eff3f4',
  slateL2: '#5a7a92',
  slateL3: '#1d4d70',
  slateL4: '#002b48',
  yellowL1: '#f8f1df',
  yellowL2: '#f9e3a3',
  yellowL3: '#f4c435',
  yellowL4: '#e0a81a',
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
})

type KeyLike = string | number | symbol
type ValueOrMap <T, K extends KeyLike = string> = T | Record<K, T | Record<string, T>>
type NestedMap <T, K extends KeyLike = string> = Record<K, T | ValueOrMap<T, K>>

function flatten <T = any> (values: NestedMap<T>) {
  return Object.fromEntries(
    Object.entries(values).map(([name, value]) => {
      return (value instanceof Object)
        ? [name, flatten(value)]
        : [name, value]
    })
  )
}
