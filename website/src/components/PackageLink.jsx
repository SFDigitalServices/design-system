import React from 'react'
import { packageUrl } from '../utils'

export default function PackageLink ({ children, pkg = children, ...rest }) {
  return <a href={packageUrl(pkg)} {...rest}>{children}</a>
}
