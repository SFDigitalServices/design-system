import React from 'react'
import root from 'react-shadow'
import { designSystemPackage, designSystemVersion } from '../../constants'
import { publishedUrl } from '../utils'

// FIXME: inline these at build time
const scopedStyles = `
  @import url(${publishedUrl('dist/css/sfds.css', designSystemPackage, designSystemVersion)})
`

/**
 */
export default function EncapsulatedStyleRoot ({ children, ...props }) {
  return (
    <root.div {...props}>
      <style type='text/css'>{scopedStyles}</style>
      {children}
    </root.div>
  )
}
