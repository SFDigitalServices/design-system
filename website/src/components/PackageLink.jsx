import React from 'react'
import PropTypes from 'prop-types'
import { packageUrl } from '../utils'

export default function PackageLink ({ children, pkg = children, ...rest }) {
  return <a href={packageUrl(pkg)} {...rest}>{children}</a>
}

PackageLink.propTypes = {
  children: PropTypes.element,
  pkg: PropTypes.string
}
