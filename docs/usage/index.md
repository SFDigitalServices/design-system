---
title: Usage
bundles:
  css:
    - path: dist/css/sfds.css
      desc: includes all of the bundles listed below. Use this if you don't have any other CSS on your site.
    - path: dist/css/base.css
      desc: contains so-called "base" styles, including global resets, focus, and placeholder styles. These may conflict with other global styles.
    - path: dist/css/fonts.css
      desc: imports all of the custom web fonts necessary to display Latin and Traditional Chinese text. Fonts are currently (in version 1.x) loaded from [Google](https://fonts.google.com/), but this may change in future versions.
    - path: dist/css/typography.css
      desc: contains all of the typography styles. These are offered separately so as not to conflict with other (global) type styles.
    - path: dist/css/utilities.css
      desc: contains all of the [Tailwind]-generated utility classes.
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

## CDN
There are many content delivery networks that mirror npm
packages. For instance, to import all of the design system CSS
from the latest version of the npm package from [unpkg], you
could add the following to your `<head>`:

```html static="true"
<link rel="stylesheet" href="https://unpkg.com/{{ package.name }}/dist/sfds.css">
```

## CSS
There are several different CSS files ("bundles") that contain different parts
of the system so that you can tailor it to your needs without a custom build
process:

File | Description
:--- | :---
{% for bundle in bundles.css -%}
  `{{ bundle.path }}` `({{ manifest[bundle.path].size | filesize }})` | {{ bundle.desc }}
{% endfor %}

[tailwind]: https://tailwindcss.com/
[unpkg]: https://unpkg.com
[release history]: https://github.com/{{ package.repository }}/releases
