---
title: React
---

## @sfgov/design-system/react

This package provides the [SF.gov Design System's][website] React components.

## Install

You can install the package via [npm] or a similar package manager. In addition
to the `@sfgov/design-system/react` package, you'll also need to install its
[peer dependencies]. (See the `peerDependencies` field in
[package.json](./package.json) for version requirements.)

```sh
npm install @sfgov/design-system react
```

## Usage

Our styling library, [Stitches], exposes the `css` prop on our React components. 

```jsx
import { ThemeProvider } from '@sfgov/design-system/react'

const MyPage = () =>
  <TitleXl css={{ color: 'red' }}>
    A red title
  </TitleXl>
```

[npm]: https://npmjs.com
[peer dependencies]: https://nodejs.org/es/blog/npm/peer-dependencies/
[Stitches]: https://stitches.dev/
[website]: https://design-system.sf.gov
