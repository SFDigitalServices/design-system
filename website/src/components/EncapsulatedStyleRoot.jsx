import React from 'react'
import root from 'react-shadow'
import useIsBrowser from '@docusaurus/useIsBrowser'
// eslint-disable-next-line import/no-webpack-loader-syntax
import sfdsStyles from '!!raw-loader!sfgov-design-system/dist/css/sfds.css'
import { getCssText, GlobalStaticStyles } from '@sfgov/react'

export default function EncapsulatedStyleRoot ({ children, ...props }) {
  const isBrowser = useIsBrowser()
  if (isBrowser) {
    return (
      <root.div {...props}>
        <GlobalStaticStyles />
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
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
