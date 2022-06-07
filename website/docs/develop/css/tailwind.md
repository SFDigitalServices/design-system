---
title: Tailwind
see_also:
  - title: Utility classes
    href: /usage/css/utilities/
---

We use [Tailwind] to build our CSS (specifically the [utility classes](/usage/css/utilities/)), and we encourage consumers of the design system to use it too.

:::info

We currently build our CSS with Tailwind version <b>2.x</b>. Please review <a href="https://tailwindcss.com/docs/upgrade-guide">Tailwind's upgrade guide</a> for incompatibilities if you're using version 3.x or higher.

:::

## Preset

We publish a [Tailwind preset][presets] so that you can use it in your own `tailwind.config.js` like so:

```js title="tailwind.config.js"
module.exports = {
  presets: ["sfgov-design-system/tailwind.preset"],
  theme: {
    extend: {
      // your theme extensions here
    },
  }
}
```

## Theme

If you don't want or need all of the plugins provided by our preset, you can import the theme directly:

```js filename="tailwind.config.js"
const theme = require('sfgov-design-system/src/theme')
module.exports = {
  theme,
  // your plugins, etc.
}
```

If you need to extend the theme, you'll need to merge it manually, e.g.:

```js filename="tailwind.config.js"
const merge = require('merge-deep')
const theme = require('sfgov-design-system/src/theme')
module.exports = {
  theme: merge(theme, {
    // your theme extensions here
  }),
  // your plugins, etc.
}
```

[tailwind]: https://v2.tailwindcss.com/
[presets]: https://v2.tailwindcss.com/docs/presets
