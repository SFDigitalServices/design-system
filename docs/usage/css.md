---
title: CSS
bundles:
  - path: dist/css/sfds.css
    desc: Includes all of the bundles listed below, **except** `fonts.css`. Use this if you don't have any other CSS on your site.
  - path: dist/css/base.css
    desc: Defines "base" styles, including global resets, focus, and placeholder styles.
  - path: dist/css/fonts.css
    desc: Imports web fonts needed to display Latin and Traditional Chinese text.
  - path: dist/css/typography.css
    desc: Defines global typography styles.
  - path: dist/css/utilities.css
    desc: Includes all of the [Tailwind]-generated utility classes.
---

## Bundles
We distribute several CSS files, each of which "bundles"
different parts of the system so that you can tailor it to your
site without the need for a custom build process:

File | Size | Description
:--- | ---: | :---
{% for bundle in bundles -%}
  {%- set url = bundle.path | published_url(package.version) -%}
  {%- set size = manifest[bundle.path].size -%}
  [`{{ bundle.path }}`]({{ url }}) | {{ size | filesize }} ([stats](https://cssstats.com/stats/?url={{ url | e }})) | {{ bundle.desc }}
{% endfor %}

### All CSS and custom fonts

```html static="true"
<link rel="stylesheet" href="{{ '/dist/css/sfds.css' | published_url(package.version) }}">
<link rel="stylesheet" href="{{ '/dist/css/fonts.css' | published_url(package.version) }}">
```

### Only utilities

```html static="true"
<link rel="stylesheet" href="{{ '/dist/css/utilities.css' | published_url(package.version) }}">
```

[tailwind]: https://tailwindcss.com/
