import React, { useLayoutEffect, useRef } from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'

/**
 * This is a workaround for custom elements that get their
 * <svg> contents blown away by React. We use a callback in
 * useLayoutEffect() to force the SFGovIcon instance to re-render.
 */
export default function SFGovIconWrapper (props) {
  const ref = useRef()
  const isBrowser = useIsBrowser()
  useLayoutEffect(() => {
    if (isBrowser && ref.current && window?.customElements?.get('sfgov-icon')) {
      ref.current.render()
    }
  }, [isBrowser, ref, props])
  return <sfgov-icon ref={ref} {...props} />
}
