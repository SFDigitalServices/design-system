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
 * The objects can also be used to generate static HTML outside of React.
 * @param props
 * @returns a fragment suitable for use in <head>, Helmet, next/head, etc.
 */
export function SSRStyle ({ googleFonts, ...rest }: SSRStyleProps) {
  const css = getCssText()
  reset()
  const links = SSRStyle.getPreloadLinks({ googleFonts })
  return <>
    {links.map((props, i) => <link key={i} {...props} />)}
    <style id='sfgov-ssr-css' {...rest} dangerouslySetInnerHTML={{ __html: css }} />
  </>
}

/**
 * This function returns an array of <link> element attributes (or React props)
 * that should be included in the <head> of server-rendered documents to preload
 * Google Fonts CSS for optimal performance and display.
 * 
 * @param props An optional object containing a Google Fonts spec in `googleFonts`
 *   listing the fonts to be loaded.
 * @returns an array of <link> attribute/props objects
 */
SSRStyle.getPreloadLinks = (props?: SSRStyleProps) => {
  const googleFontsUrl = getGoogleFontsURL(props?.googleFonts || DEFAULT_GOOGLE_FONTS)
  return [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preload', as: 'style', href: googleFontsUrl },
    { rel: 'stylesheet', href: googleFontsUrl }
  ] as ComponentProps<'link'>[]
}
