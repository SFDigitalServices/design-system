---
title: Spacing
---

## Grid

### Responsive container

Use the `responsive-container` class to apply responsive horizontal
margins and a max-width that fits our [layout grid](https://www.figma.com/file/svEAhwa9aGljDbcKfOCBsq/Layout?node-id=862%3A98).

```html wrapper_class="p-0"
<div class="responsive-container my-20">
  <div class="rounded bg-red-2 h-96"></div>
</div>
```

### Responsive grid

Use the `responsive-grid` class to create responsive grid
layouts. You can customize the number of columns by adding
`grid-cols-*` utilities (and responsive variants). You can
adjust the column and row spans for grid elements with the
`col-span-*`  and `row-span-*` utilities and their
responsive variants.

```html
<div class="responsive-grid">
  {%- for i in range(28) %}
  <div class="rounded bg-green-2 h-96"></div>
  {%- endfor %}
</div>
```

Combine `responsive-grid` and [`responsive-container`](#responsive-container)
for fully responsive grid layouts.

```html id="responsive-grid-container"
<div class="
  responsive-container responsive-grid
  rounded bg-yellow-2
  grid-cols-1 md:grid-cols-3
">
  {%- for i in range(6) %}
  <div class="rounded bg-green-2 h-96"></div>
  {%- endfor %}
</div>
```

### 12-column grid

```html
<div class="grid grid-cols-12 gap-28">
  {%- for i in range(28) %}
  <div class="rounded bg-green-2 h-96"></div>
  {%- endfor %}
</div>
```

### 12-column grid with variable column widths

```html
<div class="grid grid-cols-12 gap-28">
  <div class="rounded bg-green-2 col-span-3 h-96"></div>
  <div class="rounded bg-green-2 col-span-6 h-96"></div>
  <div class="rounded bg-green-2 col-span-3 h-96"></div>

  <div class="rounded bg-green-2 col-span-6 h-96"></div>
  <div class="rounded bg-green-2 col-span-3 h-96"></div>
  <div class="rounded bg-green-2 col-span-3 h-96"></div>

  <div class="rounded bg-green-2 col-span-4 h-96"></div>
  <div class="rounded bg-green-2 col-span-4 h-96"></div>
  <div class="rounded bg-green-2 col-span-4 h-96"></div>

  <div class="rounded bg-green-2 col-span-5 h-96"></div>
  <div class="rounded bg-green-2 col-span-7 h-96"></div>

  <div class="rounded bg-green-2 col-span-10 h-96"></div>
  <div class="rounded bg-green-2 col-span-2 h-96"></div>
</div>
```

### 3-column grid

```html
<div class="grid grid-cols-3 gap-28">
  {%- for i in range(13) %}
  <div class="rounded bg-green-2 h-96"></div>
  {%- endfor %}
</div>
```

### 2-column grid

```html
<div class="grid grid-cols-2 gap-28">
  {%- for i in range(9) %}
  <div class="rounded bg-green-2 h-96"></div>
  {%- endfor %}
</div>
```

## Padding

```html
<div class="text-small space-y-2">
  {%- for name, value in tokens.spacing %}
  <div class="bg-green-2 p-{{ name }}">p-{{name }}</div>
  {%- endfor %}
</div>
```

## Margin

```html
<div class="text-small space-y-2">
  {%- for name, value in tokens.spacing %}
  <div class="flex bg-yellow-2"><div class="w-full p-8 bg-green-2 m-{{ name }}">m-{{ name }}</div></div>
  {%- endfor %}
</div>
```

## Size

### Width

```html
<div class="text-small space-y-2">
  {%- for name, value in tokens.spacing %}
  <div class="flex"><span class="bg-green-2 mr-8 w-{{ name }}"></span> w-{{ name }}</div>
  {%- endfor %}
</div>
```

### Height

```html
<div class="text-small flex space-x-2">
  {%- for name, value in tokens.spacing %}
  <div class="flex flex-col"><span>h-{{ name }}</span><div class="bg-green-2 h-{{ name }}"></div></div>
  {%- endfor %}
</div>
```
