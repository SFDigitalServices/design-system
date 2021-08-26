---
title: Development
order: 3
---

## Tools
- [Tailwind](https://tailwindcss.com/) is our CSS framework, and provides a
  theme-able suite of utilities that form the backbone of our CSS system.
- [postcss] is our CSS compiler
- [Babel] is our JavaScript compiler
- [Eleventy][] (AKA "11ty") is our site framework

## Layout
All of the source files for the published design system package
live in the [`src` directory]({{ 'src' | repo_url }}).

Source files for this web site live in a couple of places:

- [`docs`]({{ 'docs' | repo_url }}) contains all of the actual
  documentation files (Markdown and HTML), Nunjucks
  [includes]({{ 'docs/_includes' | repo_url }}), and supporting
  [data files]({{ 'docs/_data' | repo_url }}).

- [`lib`]({{ 'lib' | repo_url }}) contains support code for our
  custom [eleventy]({{ 'lib/eleventy' | repo_url }})
  and [remark]({{ 'lib/remark' | repo_url }}) functionality.

## Workflow

### Setup
1. [Get Node.js] version `{{ package.engines.node | default(14) }}` or greater
1. Clone [this repository](https://github.com/{{ package.repository }}) with git
1. Install `npm install` to install the dependencies

### Develop
First, make sure that everything in your development environment
is working by running:

```sh
npm run build
```

This should create files in the `dist/css`, `dist/js`, and
`public` directories. Once you've confirmed that it's working,
you can run one or both of the following:

- `npm run watch` watches the source files and rebuilds the CSS
  and JavaScript bundles when they change
- `npm run develop` starts the [eleventy] server with
  `NODE_ENV=develop`, which enables some helpful reloading and
  debugging features

### npm scripts
Common development tasks are listed in the [package.json]({{ 'package.json' | repo_url }}):

`npm run <name>` | Command
:------ | :---
{% for name, command in pkg.scripts -%}
`{{ name }}` | `{{ command | safe }}`
{% endfor %}

## Code style
We lint our JavaScript with [ESlint] and the [eslint-plugin-sfgov] preset.

We do not yet lint our CSS, but when we do we will use [stylelint].

Shell [scripts]({{ 'scripts' | repo_url }}) are linted with [shellcheck].

[babel]: https://babeljs.io/
[eleventy]: https://www.11ty.dev/
[eslint]: https://eslint.org/
[eslint-plugin-sfgov]: https://github.com/SFDigitalServices/eslint-plugin-sfgov
[get node.js]: https://nodejs.org/en/download/
[postcss]: https://postcss.org/
[shellcheck]: https://www.shellcheck.net/
[stylelint]: https://stylelint.io/
[tailwind]: https://tailwindcss.com/
