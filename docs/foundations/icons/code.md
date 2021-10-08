---
title: Code
---

## Custom element

The simplest way to use our icons is with the `<sfgov-icon>` [custom
element], which is defined in our main [JavaScript
bundle](/usage/javascript/).

```html
<sfgov-icon symbol="alert"></sfgov-icon>
```

### Attributes
The `<sfgov-icon>` element respects the following attributes:

Attribute | Default | Notes
:--- | :--- | :---
`symbol` | | A valid [symbol ID](#symbols) (**required**).
`height` | `20` | Sets the height of the `<svg>` element in pixels. The width is determined by the icon's [intrinsic size] unless `width` is also specified.
`width` | | Sets the width of the `<svg>` element in pixels. The height is determined by the icon's [intrinsic size] unless `height` is also specified.
`role` | `img` | The [ARIA role] of the element.

### Icon color

Use the `text-*` [color](/foundations/color/) to change the fill
color of `<sfgov-icon>` shapes. This works because the
custom element styles its SVG elements with `fill: currentColor`.

```html
<div class="flex space-x-8 text-red-3">
  <sfgov-icon symbol="alert"></sfgov-icon>
  <b>red</b>
</div>
<div class="flex space-x-8 text-green-3">
  <sfgov-icon symbol="alert"></sfgov-icon>
  <b>green</b>
</div>
<div class="flex space-x-8 text-blue-bright">
  <sfgov-icon symbol="alert"></sfgov-icon>
  <b>blue</b>
</div>
```

### Symbols

The following table lists valid values for the `symbol` attribute:

Icon | Name | `symbol`
:--: | :--- | :--- 
{% for icon in icons -%}
<sfgov-icon symbol="{{ icon.symbol }}"></sfgov-icon> | {{ icon.name }} | `{{ icon.symbol }}`
{% endfor %}

[custom element]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
[aria role]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles
[intrinsic size]: https://www.w3.org/Graphics/SVG/WG/wiki/Intrinsic_Sizing