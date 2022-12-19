import React, { ComponentProps } from 'react'
import { getGoogleFontsCss } from './GoogleFonts'
import type { FontSpec } from '../types'

export type GlobalCSSProps = {
  fonts?: FontSpec[]
}

export type GlobalStyleProps = Omit<ComponentProps<'style'>, 'dangerouslySetInnerHTML'> & GlobalCSSProps

/**
 * @param props 
 * @returns a global <style> "singleton"
 */
export function GlobalStyle ({ fonts, ...rest }: GlobalStyleProps) {
  return <style id='sfgov-global-css' {...rest} dangerouslySetInnerHTML={{
    __html: getDefaultGlobalCss({ fonts })
  }} />
}

export function getDefaultGlobalCss (props?: GlobalCSSProps): string {
  return [
    '* { box-sizing: border-box; }',
    getGoogleFontsCss(props?.fonts)
  ].join('')
}
