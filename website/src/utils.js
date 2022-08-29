import { defaultBranch, defaultPackage, repoUrl } from '../constants'

export function publishedUrl (path, pkg = defaultPackage) {
  return new URL(path, `https://unpkg.com/${pkg.name}@${pkg.version}/`).toString()
}

export function githubFileUrl (path, ref) {
  return new URL(path, `${repoUrl}/tree/${ref || defaultBranch}/`).toString()
}

export function packageUrl (packageName = defaultPackage.name) {
  return `https://npmjs.com/package/${packageName}`
}
