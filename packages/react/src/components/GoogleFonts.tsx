import type { FontSpec, LinkProps } from '../types'
import { defaultFonts } from '../constants'

export function getGoogleFontsCss (fonts?: FontSpec[]) {
  return `@import url('${getGoogleFontsURL(fonts)}');`
}

export function getGoogleFontsURL (fonts?: FontSpec[]) {
  const families = (fonts || defaultFonts)
    .map(font => [
      font.name,
      formatFontWeights(font)
    ])
    .map(([family, args]) => `family=${escape(family)}${args ? `:${args}` : ''}`)
    .join('&')
  return `https://fonts.googleapis.com/css2?${families}&display=swap`
}

export function getPreloadLinks (fonts?: FontSpec[]): LinkProps[] {
  const url = getGoogleFontsURL(fonts || defaultFonts)
  if (!url) return []
  return [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preload', as: 'style', href: url },
    { rel: 'stylesheet', href: url }
  ]
}

function formatFontWeights (font: FontSpec) {
  if (font.googleFont?.optical) {
    const weights = Object.values(font.googleFont.weights)
      .map(([range, weight]) => `${range.join('..')},${weight}`)
    return `opsz,wght@${weights.join(';')}`
  } else {
    const { weights } = font
    return `wght@${Object.values(weights).join(';')}`
  }
}

function escape (str: string) {
  return str.replace(/ /g, '+')
}
