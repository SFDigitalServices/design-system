import defaultPackage from 'sfgov-design-system/package.json'
import { repoUrl } from '../docusaurus.config'

export function publishedUrl (path, pkg = defaultPackage) {
  return new URL(path, `https://unpkg.com/${pkg.name}@${pkg.version}/`).toString()
}

export function githubFileUrl (path, pkg = defaultPackage, ref = 'main') {
  return new URL(path, `${repoUrl}/tree/${ref}`).toString()
}
