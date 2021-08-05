---
eleventyNavigation:
  title: Components
  key: components
  parent: primary
  order: 3
---

# Components

Let's say something about components here.

## Pages
{% set items = collections.all | eleventyNavigation('components') %}
{% for item in items -%}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
