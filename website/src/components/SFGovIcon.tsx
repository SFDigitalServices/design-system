import React, { useLayoutEffect, useRef } from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import { styled } from '@sfgov/design-system/react'

// tell React that there's an <sfgov-icon> custom element
// with the "symbol" attribute
type SFGovIconAttributes = JSX.IntrinsicElements['div'] & {
  symbol: 'accessibility' | 'arrow-right' | 'arrow-left' | 'chevron-up' | 'chevron-down' | 'minus' | 'plus'
  class?: string
  width?: string
  height?: string
}

// merge 'sfgov-icon' into JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sfgov-icon': SFGovIconAttributes
    }
  }
}

interface SFGovIconElement extends CustomElementConstructor {
  render(): void
}

const StyledIcon = styled(function SFGovIconImpl ({ className, ...rest }: SFGovIconAttributes) {
  return <sfgov-icon class={className} {...rest} />
}, {
  fill: 'currentcolor',
  display: 'inline-flex'
})

/**
 * This is a workaround for custom elements that get their
 * <svg> contents blown away by React. We use a callback in
 * useLayoutEffect() to force the SFGovIcon instance to re-render.
 */
export default function SFGovIcon (props) {
  const ref = useRef<SFGovIconElement>()
  const isBrowser = useIsBrowser()
  useLayoutEffect(() => {
    if (isBrowser && ref.current && window?.customElements?.get('sfgov-icon')) {
      ref.current.render()
    }
  }, [isBrowser, ref, props])
  return <StyledIcon ref={ref} {...props} />
}
