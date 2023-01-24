import React, { ComponentProps } from 'react'
import { defaultFonts } from '../constants'
import type { FontSpec, FontSpecProps, LinkProps } from '../types'

/**
 * Render a <style> tag that imports the necessary Google Fonts for our typography.
 * This can be used for client-side rendering, but will cause a flash of unstyled
 * typography. If you have the ability to render server-side, please use
 * {@link GoogleFontsPreloadStyles} or {@link SSRStyle} instead.
 * 
 * @param props <style> props and FontSpecProps (including the `fonts` prop), plus
 * additional CSS text as children (strings)
 */
export function GoogleFontsStylesheet ({ fonts, children, ...rest }: ComponentProps<'style'> & FontSpecProps) {
  const url = getGoogleFontsURL(fonts)
  return url
    ? <style {...rest}>{`@import url(${url});`}{children}</style>
    : null
}

export function GoogleFontsPreloadStyles (props: FontSpecProps) {
  return <>
    {getGooglePreloadLinks(props.fonts).map((props, i) => (
      <link key={i} {...props} />
    ))}
  </>
}

export function getGooglePreloadLinks (fonts?: FontSpec[]): LinkProps[] {
  const url = getGoogleFontsURL(fonts || defaultFonts)
  if (!url) return []
  return [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preload', as: 'style', href: url },
    { rel: 'stylesheet', href: url }
  ]
}

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
