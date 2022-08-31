import React from 'react'
import { githubFileUrl } from '../utils'

/**
 * Render a link to a file in the GitHub repo, with the path specified either in
 * the `path` prop or (preferred) the children. Any of these should work:
 *
 * ```jsx
 * <GitHubFileLink path='foo.json'>the foo file</GitHubFileLink>
 * <GitHubFileLink>foo.json</GitHubFileLink>
 * <GitHubFileLink path='foo.json' />
 * ```
 */
export default function GitHubFileLink ({ children, path, ref, ...rest }) {
  return <a href={githubFileUrl(path || children, ref)} {...rest}>{children || path}</a>
}
