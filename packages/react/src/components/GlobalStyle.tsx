import React, { ComponentProps } from 'react'
import { getGoogleFontsCss } from './GoogleFonts'
import type { GlobalCSSProps } from '../types'
import { SSRStyle } from './SSRStyle'

export type GlobalStyleProps = Omit<ComponentProps<'style'>, 'dangerouslySetInnerHTML'> & GlobalCSSProps

/**
 * This component renders a <style> tag that pulls in static
 * global CSS, including Google Fonts CSS imports. For critical CSS rendered
 * server-side, use <SSRStyle>.
 * 
 * @see {SSRStyle}
 * @see {getGlobalStaticCss}
 * @param props 
 * @returns a global <style> "singleton"
 */
export function GlobalStaticStyles ({ fonts, ...rest }: GlobalStyleProps) {
  return <style id='sfgov-global-css' {...rest} dangerouslySetInnerHTML={{
    __html: getStaticGlobalCss({ fonts })
  }} />
}

/**
 * For static and non-React environments, use this function to generate CSS
 * content for a global <style> element.
 * 
 * @param props 
 * @returns 
 */
export function getStaticGlobalCss (props?: GlobalCSSProps): string {
  return [
    getGoogleFontsCss(props?.fonts)
  ].join('')
}
