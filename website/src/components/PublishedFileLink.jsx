import React from 'react'
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
