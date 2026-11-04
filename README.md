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
npm install tailwindcss@3 react react-dom
```

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
included React components, you'll also need to add the package directory to your
configuration's [content sources]:

```js
// tailwind.config.js (or .ts)
import sfgov from '@sfgov/design-system/tailwind-preset'

/** @type {import('tailwindcss').Config} */
export {
  presets: [sfgov],
  content: [
    './src/**/*.tsx',
    './node_modules/@sfgov/design-system/**/*',
  ]
}
```

[react]: https://react.dev/
[tailwind css v3]: https://v3.tailwindcss.com/
[tailwind preset]: https://v3.tailwindcss.com/docs/presets
[content sources]: https://v3.tailwindcss.com/docs/upgrade-guide#configure-content-sources
