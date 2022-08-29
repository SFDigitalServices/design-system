---
title: Layout
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
`col-span-*` and `row-span-*` utilities and their
responsive variants.

```html live
<div class="responsive-grid">
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
</div>
```

Combine `responsive-grid` and [`responsive-container`](#responsive-container)
for fully responsive grid layouts.

```html live
<div
  class="responsive-container responsive-grid rounded bg-yellow-2 grid-cols-1 md:grid-cols-3"
>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
</div>
```

### 12-column grid

```html live
<div class="grid grid-cols-12 gap-28">
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
</div>
```

### 12-column grid with variable column widths

```html live
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

```html live
<div class="grid grid-cols-3 gap-28">
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
</div>
```

### 2-column grid

```html live
<div class="grid grid-cols-2 gap-28">
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
  <div class="rounded bg-green-2 h-96"></div>
</div>
```

## Padding

```html live
<div class="text-small space-y-2">
  <div class="bg-green-2 p-0">p-0</div>
  <div class="bg-green-2 p-2">p-2</div>
  <div class="bg-green-2 p-4">p-4</div>
  <div class="bg-green-2 p-8">p-8</div>
  <div class="bg-green-2 p-12">p-12</div>
  <div class="bg-green-2 p-16">p-16</div>
  <div class="bg-green-2 p-20">p-20</div>
  <div class="bg-green-2 p-24">p-24</div>
  <div class="bg-green-2 p-28">p-28</div>
  <div class="bg-green-2 p-40">p-40</div>
  <div class="bg-green-2 p-48">p-48</div>
  <div class="bg-green-2 p-60">p-60</div>
  <div class="bg-green-2 p-80">p-80</div>
  <div class="bg-green-2 p-96">p-96</div>
  <div class="bg-green-2 p-100">p-100</div>
</div>
```

## Margin

```html live
<div class="text-small space-y-2">
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-0">m-0</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-2">m-2</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-4">m-4</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-8">m-8</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-12">m-12</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-16">m-16</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-20">m-20</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-24">m-24</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-28">m-28</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-40">m-40</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-48">m-48</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-60">m-60</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-80">m-80</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-96">m-96</div>
  </div>
  <div class="flex bg-yellow-2">
    <div class="w-full p-8 bg-green-2 m-100">m-100</div>
  </div>
</div>
```

## Size

### Width

```html live
<div class="text-small space-y-2">
  <div class="flex"><span class="bg-green-2 mr-8 w-0"></span> w-0</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-2"></span> w-2</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-4"></span> w-4</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-8"></span> w-8</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-12"></span> w-12</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-16"></span> w-16</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-20"></span> w-20</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-24"></span> w-24</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-28"></span> w-28</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-40"></span> w-40</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-48"></span> w-48</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-60"></span> w-60</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-80"></span> w-80</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-96"></span> w-96</div>
  <div class="flex"><span class="bg-green-2 mr-8 w-100"></span> w-100</div>
</div>
    
```

### Height

```html live
<div class="text-small flex space-x-2">
  <div class="flex flex-col"><span>h-0</span><div class="bg-green-2 h-0"></div></div>
  <div class="flex flex-col"><span>h-2</span><div class="bg-green-2 h-2"></div></div>
  <div class="flex flex-col"><span>h-4</span><div class="bg-green-2 h-4"></div></div>
  <div class="flex flex-col"><span>h-8</span><div class="bg-green-2 h-8"></div></div>
  <div class="flex flex-col"><span>h-12</span><div class="bg-green-2 h-12"></div></div>
  <div class="flex flex-col"><span>h-16</span><div class="bg-green-2 h-16"></div></div>
  <div class="flex flex-col"><span>h-20</span><div class="bg-green-2 h-20"></div></div>
  <div class="flex flex-col"><span>h-24</span><div class="bg-green-2 h-24"></div></div>
  <div class="flex flex-col"><span>h-28</span><div class="bg-green-2 h-28"></div></div>
  <div class="flex flex-col"><span>h-40</span><div class="bg-green-2 h-40"></div></div>
  <div class="flex flex-col"><span>h-48</span><div class="bg-green-2 h-48"></div></div>
  <div class="flex flex-col"><span>h-60</span><div class="bg-green-2 h-60"></div></div>
  <div class="flex flex-col"><span>h-80</span><div class="bg-green-2 h-80"></div></div>
  <div class="flex flex-col"><span>h-96</span><div class="bg-green-2 h-96"></div></div>
  <div class="flex flex-col"><span>h-100</span><div class="bg-green-2 h-100"></div></div>
</div>
    
```
