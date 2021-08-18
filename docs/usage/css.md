---
title: CSS
bundles:
  - path: dist/css/sfds.css
    desc: Includes all of the bundles listed below. Use this if you don't have any other CSS on your site.
  - path: dist/css/base.css
    desc: Defines the so-called "base" styles, including global resets, focus, and placeholder styles. These may conflict with other global styles.
  - path: dist/css/fonts.css
    desc: Imports all of the custom web fonts necessary to display Latin and Traditional Chinese text. Fonts are currently (in version 1.x) loaded from [Google](https://fonts.google.com/), but this may change in future versions.
  - path: dist/css/typography.css
    desc: Defines all of the typography styles. These are offered separately so as not to conflict with other (global) type styles.
  - path: dist/css/utilities.css
    desc: Includes all of the [Tailwind]-generated utility classes.
---

## Bundles
There are several different CSS files ("bundles") that contain different parts
of the system so that you can tailor it to your site without the
need for a custom build process:

File | Description
:--- | :---
{% for bundle in bundles -%}
  [`{{ bundle.path }}`](https://unpkg.com/{{ package.name }}@{{ package.version }}/{{ bundle.path }}) ({{ manifest[bundle.path].size | filesize }}) | {{ bundle.desc }}
{% endfor %}

