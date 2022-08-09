import { defaultBranch, designSystemPackage, designSystemVersion, repoUrl } from '../constants'

/**
 * Get a browser-friendly URL for a published file on unpkg.com for a known
 * package name and version, which default to the design system (sfgov-design-system).
 *
 * @param {string} path
 * @param {{ name: string, version: string }?} pkg
 * @param {string?} version
 * @returns {string}
 */
export function publishedUrl (path, pkg = designSystemPackage, version = designSystemVersion) {
  return new URL(path, `https://unpkg.com/${pkg.name}@${version || pkg.version}/`).toString()
}

/**
 * Get the github.com tree URL (which will redirect to the blob URL if
 * applicable) for a specific path.
 *
 * @param {string} path
 * @param {string?} ref
 * @returns {string}
 */
export function githubFileUrl (path, ref = undefined) {
  return new URL(path, `${repoUrl}/tree/${ref || defaultBranch}/`).toString()
}

/**
 * Get the canonical URL of the published package (i.e. on npm).
 *
 * @param {string} packageName
 * @returns {string}
 */
export function packageUrl (packageName = designSystemPackage.name) {
  return `https://npmjs.com/package/${packageName}`
}
