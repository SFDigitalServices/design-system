---
eleventyNavigation:
  title: Components
  key: components
  parent: primary
---

# Components

Let's say something about components here.

## Pages
{% set items = collections.all | eleventyNavigation('components') %}
{% for item in items -%}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
