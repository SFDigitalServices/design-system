# sf.gov design system

This is the home of the design system for the City & County of San Francisco's
web site, [sf.gov](https://www.sf.gov/).

## Install

You can install the design system with [npm] or any npm-compatible package
manager ([pnpm], [yarn], etc.):

```sh
npm install @sfgov/design-system
```

### Dependencies

The `@sfgov/design-system` package requires [Tailwind CSS v3] for styling and
[React] for rendering components. If you don't have them already, you can
install them with:

```sh
npm install tailwindcss@3 react@18 react-dom@18
```

## Entrypoints

The package provides the following entrypoints:

- `@sfgov/design-system` exports the `react` and `tokens` namespaces.
- `@sfgov/design-system/react` exports the React components and helpers,
  including `classed()`.
- `@sfgov/design-system/tailwind-preset` is the [Tailwind preset](#tailwind).
- `@sfgov/design-system/tokens` exports the design tokens: `breakpoints`,
  `colors`, `spacing`, and `widths`.
- `@sfgov/design-system/formio` exports the `FormioForm` React component and
  other support code.
- `@sfgov/design-system/formio/factories` exports form.io-specific test
  factories like `FormFactory` that are used by sf.gov's `FormPage` tests.

## React components

React components are exported from `@sfgov/design-system/react`:

```tsx
import { Button, Container } from '@sfgov/design-system/react'

export function Greeting() {
  return (
    <Container>
      <Button onClick={() => alert('hello!')}>Say hi</Button>
    </Container>
  )
}
```

### `classed()` components

The components entrypoint also exports a `classed()` function that can be used
to create new, higher order components:

```tsx
import { classed, Button } from '@sfgov/design-system/react'

// renders <Button className="fancy">
export const FancyButton = classed(Button, 'fancy')
```

## Tailwind

The `@sfgov/design-system` package includes a [Tailwind preset] that you can use
in your own configuration. In order for Tailwind to include styles for the
included React components, you'll also need to add an entry to the [content
sources] option that tells Tailwind to look for class names in _this_ package:

```js
// tailwind.config.js
const sfgov = require('@sfgov/design-system/tailwind-preset')
const { dirname } = require('node:path')

const designSystemDist = dirname(require.resolve('@sfgov/design-system'))

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sfgov],
  content: [
    './src/**/*.tsx',
    `${designSystemDist}/**/*.{js,mjs}`
  ]
}
```

[content sources]: https://v3.tailwindcss.com/docs/upgrade-guide#configure-content-sources
[npm]: https://www.npmjs.com/
[pnpm]: https://pnpm.io/
[react]: https://react.dev/
[tailwind css v3]: https://v3.tailwindcss.com/
[tailwind preset]: https://v3.tailwindcss.com/docs/presets
[yarn]: https://yarnpkg.com/
