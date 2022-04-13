---
title: Utility classes
utility_groups:
  - title: Text color
    css: color
    theme: colors
  - title: Background color
    css: background-color
    theme: colors
  - title: Font size
    css: font-size
    theme: fontSize
---

## All classes

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