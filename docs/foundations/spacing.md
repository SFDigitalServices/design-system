---
title: Spacing
---

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

## Position

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
