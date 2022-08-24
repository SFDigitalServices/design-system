import React, { useMemo } from 'react'

/**
 * This is a workaround for re-rendered custom elements that ignores children
 * and memoizes the return value.
 * 
 * @param {React.PropsWithoutRef} props 
 * @returns {JSX.Element}
 */
export default function SFGovIcon ({ children, ...props }) {
  return useMemo(() => (<sfgov-icon {...props} />), [props])
}
