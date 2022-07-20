---
title: Utility classes
see_also:
  - title: Tailwind
    href: /usage/css/tailwind/
utility_groups:
  - title: Text color
    css: color
    theme: colors
  - title: Background color
    css: background-color
    theme: colors
  - title: Border color
    css: border-color
    theme: colors
  - title: Font family
    css: font-family
    theme: fontFamily
  - title: Font size
    css: font-size
    theme: fontSize
  - title: Font weight
    css: font-weight
    theme: fontWeight
---

This is an incomplete listing of classes styled by [our CSS](/usage/css). You
can mix and match these in the `class` attribute of any HTML element.

{% for group in utility_groups %}
## {{ group.title }}
These are all of the utility classes that define CSS property `{{ group.css }}`.

| Class | Value | Theme token |
| :---- | :---- | :---- |
{% for decl in utilities.byProperty[group.css] %}
{%- set path = decl.value.toString() | get_path(theme[group.theme]) -%}
{%- if path %}{% set path %}{{ group.theme }}.{{ path }}{% endset %}{% endif -%}
| `{{ decl.parent.selector.substring(1) }}` | `{{ decl.value }}` | {% if path %}`{{ path }}`{% endif %} |
{% endfor %}

{% endfor %}
