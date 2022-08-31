import React from 'react'
import PropTypes from 'prop-types'
import { publishedUrl } from '../utils'
import { defaultPackage } from '../../constants'

/**
 * ```jsx
 * <PublishedFileLink path='sfds.css'>our stylesheet</PublishedFileLink>
 * <PublishedFileLink>sfds.css</PublishedFileLink>
 * <PublishedFileLink path='sfds.css' />
 * ```
 */
export default function PublishedFileLink ({ children, path = children, pkg = defaultPackage, ...rest }) {
  return <a href={publishedUrl(path || children, pkg)} {...rest}>{children || path}</a>
}

PublishedFileLink.propTypes = {
  children: PropTypes.element,
  path: PropTypes.string,
  pkg: PropTypes.string
}
