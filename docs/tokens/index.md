---
eleventyNavigation:
  title: Tokens
  key: tokens
  parent: primary
---

# Tokens

We should say something about design tokens here.

## Pages
{% set items = collections.all | eleventyNavigation('tokens') %}
{% for item in items -%}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
