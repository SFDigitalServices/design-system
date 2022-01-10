---
title: Usage
---

## Installation

### npm
The San Francisco Design System CSS is published as
[{{ package.name }}](https://npmjs.com/package/{{ package.name }})
on npm. You can install it in your project with:

```sh
npm install {{ package.name }}
```

The current version is `{{ package.version }}`. See the [release
history] for other available versions and release notes.

### Versioning
We use [semantic versioning][semver] conventions to number our release
versions:

- Bug fixes, documentation updates, and development-related updates are
  **patch** versions, e.g. `1.0.0` → `1.0.1`.

- New features are **minor** versions, e.g. `1.0.0` → `1.1.0`.

- Breaking changes, or any other changes that **may** break any
  sites that upgrade from the previous version, are **major**
  versions, e.g. `1.0.0` → `2.0.0`.

### CDN
There are many content delivery networks that mirror npm
packages. For instance, to import all of the design system CSS
from the latest version of the npm package from [unpkg], you
could add the following to your `<head>`:

```html static="true"
<link rel="stylesheet" href="{{ '/dist/sfds.css' | published_url(package.version) }}">
```

See the [CSS guide](./css) for more detailed usage instructions.

## Browser support
Generally speaking, our CSS supports the same browsers as
[Tailwind](https://tailwindcss.com/docs/browser-support) (as of
version 2.x, "the latest stable versions of Chrome, Firefox,
Edge, and Safari"). Starting in version 2.0, Tailwind notably
introduced the use of [CSS custom properties] (also known as "CSS
variables"), which are [supported](https://caniuse.com/css-variables) by approximately
95% of browsers relative to usage as of August, 2021.

### Internet Explorer
**Internet Explorer is not supported**. Microsoft [announced][IE
EOL] that it will no longer support the browser on June 15, 2022,
and its usage has declined rapidly since. In July of 2021 there
were **7 unique visitors** using Internet Explorer on
[sf.gov](https://sf.gov).

Support for Internet Explorer is still available in [Tailwind
version 1.9](https://v1.tailwindcss.com/). If your project
requires IE support, please [contact us](/about/#contact) and we
can offer suggestions for a custom CSS build.

[IE EOL]: https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge#:~:text=Yes%2C%20Internet%20Explorer%2011%20is,Internet%20Explorer%20(IE)%20mode.
[css custom properties]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
[release history]: https://github.com/{{ package.repository }}/releases
[semver]: https://semver.org
[tailwind]: https://tailwindcss.com/
[unpkg]: https://unpkg.com
