import React from 'react'
import PropTypes from 'prop-types'
import { publishedUrl } from '../utils'
import { designSystemPackage, designSystemVersion } from '../../constants'

/**
 * This component simplifies linking to published files by path, defaulting the
 * package name and version to `designSystemPackage` and `designSystemVersion`
 * constants:
 *
 * ```jsx
 * <PublishedFileLink path='sfds.css'>our stylesheet</PublishedFileLink>
 * <PublishedFileLink>sfds.css</PublishedFileLink>
 * <PublishedFileLink path='sfds.css' />
 * ```
 */
export default function PublishedFileLink ({
  children,
  path = children,
  pkg = designSystemPackage,
  version = designSystemVersion,
  ...rest
}) {
  const href = publishedUrl(path || children, pkg, version)
  return <a href={href} {...rest}>{children || path}</a>
}

PublishedFileLink.propTypes = {
  children: PropTypes.element,
  path: PropTypes.string,
  pkg: PropTypes.string,
  version: PropTypes.string
}
