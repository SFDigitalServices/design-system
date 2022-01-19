---
title: Forms
---

## Text input

```html
<label class="p-4 text-slate space-y-12">
  <div class="title-xs">Field label</div>
  <input type="text" class="form-input">
</label>
```

## Text area

```html
<label class="p-4 text-slate space-y-12">
  <div class="title-xs">Field label</div>
  <textarea class="form-textarea input-lg" rows="4">Hello</textarea>
</label>
```

## Field with short description

Field descriptions should be included in the `<label>` and are colored `{{ tokens.colors.slate[2] }}` unless they're long.

```html wrapper_class="p-20"
<label class="text-slate space-y-12">
  <div class="title-xs">Field label</div>
  <div class="text-small text-slate-2">This is the field description.</div>
  <input type="text" class="form-input">
</label>
```

## Field with long description

Longer field descriptions should use the `{{ tokens.colors.slate.DEFAULT }}` default text color.

```html wrapper_class="p-20"
<label class="text-slate space-y-12">
  <div class="title-xs">Field label</div>
  <div class="text-small">This is the long field description. You can put several sentences in here, but don't make it too long!</div>
  <input type="text" class="form-input">
</label>
```

## Error state

Text fields that match `:invalid` or `.invalid` should be accompanied by an error message colored `{{ tokens.colors.red[3] }}`.

```html wrapper_class="p-20"
<label class="text-slate space-y-12">
  <div class="title-xs">Field label</div>
  <div class="text-small">This is the long field description. You can put several sentences in here, but don't make it too long!</div>
  <input type="text" class="form-input invalid" value="invalid text" aria-describedby="error-id">
  <div id="error-id" class="text-small text-red-3">This is the error message</div>
</label>
```

### Required field

```html wrapper_class="p-20"
<label class="text-slate space-y-12">
  <div class="title-xs">Field label</div>
  <input type="text" class="form-input" required aria-describedby="error-id">
  <div id="error-id" class="text-small text-red-3">This field is required.</div>
</label>
```

## Size modifiers

The `input-sm`, `input-md`, and `input-lg` utilities establish widths for common form field sizes:

```html wrapper_class="p-20"
<div class="form-sm mt-0 mb-20">
  <label class="text-slate space-y-12">
    <div class="title-xs">Small</div>
    <input type="text" class="form-input input-sm">
  </label>
</div>

<div class="form-md my-20">
  <label class="p-4 text-slate space-y-12">
    <div class="title-xs">Medium</div>
    <input type="text" class="form-input input-md">
  </label>
</div>

<div class="form-lg mb-0">
  <label class="p-4 text-slate space-y-12">
    <div class="title-xs">Large</div>
    <input type="text" class="form-input input-lg">
  </label>
</div>
```