import { CSS, globalCss } from '../stitches.config'

export function GlobalStyle (css?: CSS) {
  globalCss({
    '@import': `url('${getFontsURL({
      Rubik: 'wght@300;400;600',
      'Noto Sans TC': 'wght@300;400;500',
      'Roboto Mono': 'wght@400'
    })}')`
  })
  return null
}

function getFontsURL (fonts: Record<string, string | null>) {
  const families = Object.entries(fonts)
    .map(([family, args]) => `family=${escape(family)}${args ? `:${args}` : ''}`)
    .join('&')
  return `https://fonts.googleapis.com/css2?${families}&display=swap`
}

function escape (str: string) {
  return str.replace(/ /g, '+')
}
