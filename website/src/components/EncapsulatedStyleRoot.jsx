import React from 'react'
import root from 'react-shadow'
import useIsBrowser from '@docusaurus/useIsBrowser'
// eslint-disable-next-line import/no-webpack-loader-syntax
import sfdsStyles from '!!raw-loader!sfgov-design-system/dist/css/sfds.css'

export default function EncapsulatedStyleRoot ({ children, ...props }) {
  const isBrowser = useIsBrowser()
  if (isBrowser) {
    return (
      <root.div {...props}>
        <style>
          {sfdsStyles}
        </style>
        {children}
      </root.div>
    )
  } else {
    return children
  }
}
