import React, { ComponentProps } from 'react'

export type GoogleFontsSpec = Record<string, string>

export type GlobalCSSProps = {
  googleFonts?: GoogleFontsSpec
}

export type GlobalStyleProps = Omit<ComponentProps<'style'>, 'dangerouslySetInnerHTML'> & GlobalCSSProps

export const DEFAULT_GOOGLE_FONTS: GoogleFontsSpec = {
  Rubik: 'wght@300;400;600',
  'Noto Sans TC': 'wght@300;400;500',
  'Roboto Mono': 'wght@400'
}

export function getDefaultGlobalCss ({ googleFonts = DEFAULT_GOOGLE_FONTS }: GlobalCSSProps) {
  return `
    @import url('${getGoogleFontsURL(googleFonts)}');
  `.trim()
}

export function GlobalStyle ({ googleFonts = DEFAULT_GOOGLE_FONTS, ...rest }: GlobalStyleProps) {
  return <style id='sfgov-global-css' dangerouslySetInnerHTML={{
    __html: getDefaultGlobalCss({ googleFonts })
  }} />
}

export function getGoogleFontsURL (fonts: GoogleFontsSpec = DEFAULT_GOOGLE_FONTS) {
  if (!fonts || typeof fonts !== 'object' || Array.isArray(fonts)) {
    throw new Error(`Expected a Google Fonts object spec, but got ${typeof fonts}`)
  }
  const families = Object.entries(fonts)
    .map(([family, args]) => `family=${escape(family)}${args ? `:${args}` : ''}`)
    .join('&')
  return `https://fonts.googleapis.com/css2?${families}&display=swap`
}

function escape (str: string) {
  return str.replace(/ /g, '+')
}
