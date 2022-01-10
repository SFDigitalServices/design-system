---
title: JavaScript
bundles:
  - path: dist/js/sfds.js
    desc: Includes all of the bundles listed below.
  - path: dist/js/icons.js
    desc: Defines the `<sfgov-icon>` [custom element] for embedding [icons](../../foundations/icons) in HTML.
  - path: dist/js/docs.js
    desc: Documentation support for this site, including clipboard copying functionality.
---

## Browser bundles
We distribute several JavaScript files, each of which "bundles"
different parts of the system so that you can tailor it to your site
without the need for a custom build process.

Our browser bundles (with the `.js` filename extension) conform to
the [Universal Module Definition (UMD)][umd] spec, and—barring
availability of browser globals such as `window` and
`document`—should run in both web browsers and Node.js.

File | Size | Description
:--- | ---: | :---
{% for bundle in bundles -%}
  {%- set url = bundle.path | published_url(package.version) -%}
  {%- set size = manifest[bundle.path].size -%}
  [`{{ bundle.path }}`]({{ url }}) | {{ size | filesize }} | {{ bundle.desc | safe }}
{% endfor %}

## ESM
Each bundle is also available in the [ECMAScript Module (ESM)][esm]
format with the `.mjs` extension:

File | Size | Description
:--- | ---: | :---
{% for bundle in bundles -%}
  {%- set path = bundle.path | replace('.js', '.mjs') -%}
  {%- set url = path | published_url(package.version) -%}
  {%- set size = manifest[path].size -%}
  [`{{ path }}`]({{ url }}) | {{ size | filesize }} | {{ bundle.desc | safe }}
{% endfor %}

[tailwind]: https://tailwindcss.com/
[custom element]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
[umd]: https://github.com/umdjs/umd
[esm]: https://nodejs.org/api/esm.html#esm_introduction
