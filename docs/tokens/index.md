---
eleventyNavigation:
  title: Tokens
  parent: primary
---

# Tokens

We should say something about design tokens here.

{% set items = collections.token | eleventyNavigation %}
{% for item in items %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
