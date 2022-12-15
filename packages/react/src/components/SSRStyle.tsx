import React, { ComponentProps } from 'react'
import { GlobalCSSProps, getGoogleFontsURL, DEFAULT_GOOGLE_FONTS } from './GlobalStyle'
import { getCssText, reset } from '../stitches.config'

export type SSRStyleProps = Omit<ComponentProps<'style'>, 'dangerouslySetInnerHTML'> & GlobalCSSProps

/**
 * The SSR (Server Side Render) styles component is necessary for avoiding
 * the FOUC (Flash of Unstyled Content) when rendering server-side then
 * hydrating on the client. It does a couple of things:
 * 
 * 1. It adds all of the requisite <link> elements to preload Google Fonts
 * 2. It collects any "critical path" CSS rendered by our Stitches instance
 *    (since the last call to reset(), which prevents accumulation of CSS
 *    from other pages when running in a server that renders multiple pages
 *    in the same process.
 * 3. It renders a <style> element with the critical path CSS and passes
 *    along any additional props.
 * 
 * @param props
 * @returns a fragment suitable for use in <head>, Helmet, next/head, etc.
 */
export function SSRStyle ({ googleFonts = DEFAULT_GOOGLE_FONTS, ...rest }: SSRStyleProps) {
  const css = getCssText()
  reset()
  const googleFontsUrl = getGoogleFontsURL(googleFonts)
  return <>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
    <link rel='preload' as='style' href={googleFontsUrl} />
    <link rel='stylesheet' href={googleFontsUrl} />
    <style id='sfgov-ssr-css' {...rest} dangerouslySetInnerHTML={{ __html: css }} />
  </>
}
