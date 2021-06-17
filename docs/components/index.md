---
eleventyNavigation:
  title: Components
  parent: primary
---

# Components

Let's say something about components here.

{% set items = collections.component | eleventyNavigation %}
{% for item in items %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
