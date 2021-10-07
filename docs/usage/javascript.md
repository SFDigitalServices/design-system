---
title: JavaScript
bundles:
  - path: dist/js/sfds.js
    desc: Includes all of the bundles listed below.
  - path: dist/js/icons.js
    desc: Defines the `<sfgov-icon>` [custom element] for embedding [icons](../../foundations/icons) in HTML.
---

## Browser-ready bundles
We distribute several JavaScript files, each of which "bundles"
different parts of the system so that you can tailor it to your site
without the need for a custom build process.

File | Size | Description
:--- | ---: | :---
{% for bundle in bundles -%}
  {%- set url -%}https://unpkg.com/{{ package.name }}@{{ package.version }}/{{ bundle.path }}{% endset %}
  {%- set size = manifest[bundle.path].size -%}
  [`{{ bundle.path }}`]({{ url }}) | {{ size | filesize }} | {{ bundle.desc | safe }}
{% endfor %}

[tailwind]: https://tailwindcss.com/
[custom element]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
