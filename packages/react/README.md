# @sfgov/react

This package provides the [SF.gov Design System's][website] React components.

## Install

You can install the package via [npm] or a similar package manager. In addition to the `@sfgov/react` package, you'll also need to install its [peer dependencies]. (See the `peerDependencies` field in [package.json](./package.json) for version requirements.)

```sh
npm install @sfgov/react theme-ui @emotion/react react
```

## Usage

First and foremost, you'll need to wrap all of this package's components in a `<ThemeProvider>`. This provides the color, spacing, typography, and other thematic values from the SF.gov design system to components from both this package and Theme UI.

```jsx
import { ThemeProvider } from '@sfgov/react'

function App () {
  return (
    <ThemeProvider>
      Your app here
    </ThemeProvider>
  )
}
```

[npm]: https://npmjs.com
[peer dependencies]: https://nodejs.org/es/blog/npm/peer-dependencies/
[website]: https://design-system.sf.gov
