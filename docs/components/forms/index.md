---
title: Forms
see_also:
  - title: Checkbox
    href: /components/forms/checkbox/
---

## Introduction

We should probably explain what this page is and where folks can find more info about forms.

## Form component anatomy

Form components aren't just a label and an input. There are between 2 and 5 different parts of a form component, depending on its configuration and state.

```html
<div class="text-slate space-y-12">
  <label for="foo-input" class="block title-xs">
    Label 
  </label>
  <div id="foo-description">
    Description
  </div>
  <div class="space-y-8">
    <div class="text-small text-slate-2">
      Placeholder
    </div>
    <input class="form-input" type="text" value="Input">
    <div class="text-small text-red-4">
      Error message
    </div>
  </div>
</div>
```

The label and description are positioned `{{ theme.spacing[12] }}` from one another and the input, while the placeholder and error message elements are positioned `{{ theme.spacing[8] }}` from the input. In this example we use the `space-y-12` utility to apply uniform spacing to the form component's direct descendents, then wrap the placeholder, input, and error message in another div with `space-y-8`.

### Label
A label is **required**, and **must** be associated with the input either as a `<label>` with the input's `id` in its `for` attribute, or with its own `id` attribute referenced by the input's `aria-labelledby`.

```html highlight="input-id"
<div class="text-slate space-y-12">
  <label for="input-id" class="block title-xs">
    Field label
  </label>
  <input id="input-id" type="text" class="form-input">
</div>
```

Labels are styled with the `title-xs` typography class, and should be block-level (either `class="block"` directly, or contained by a block-level parent).

### Input
The form input is typically a native `<input>`, `<select>`, or `<textarea>` element; but can also be more complex input "widgets", such as multi-selects and comboboxes.

The `form-input` class applies CSS resets from [@tailwindcss/forms], and provides common styles for native input elements.

### Description
Form inputs may have a longer textual description, which **should** be referenced by its `id` in the `aria-describedby` attribute of the input.

```html highlight="input-description"
<div class="text-slate space-y-12">
  <label for="input-id" class="block title-xs">
    Field label
  </label>
  <div id="input-description">
    This is the field description. It can be several sentences long, if necessary.
  </div>
  <input id="input-id" type="text" class="form-input"
    aria-describedby="input-description">
</div>
```

### Placeholder
As a general rule, you should **avoid the `placeholder` attribute** because it poses usability challenges. Instead, place text that would normally act as a placholder before the input and reference its `id` in the input's `aria-describedby` attribute.

Placeholder text should be small (`text-small`), colored `{{ theme.colors.slate[2] }}` (`text-slate-2`), and spaced `{{ theme.spacing[8] }}` above the text input.

```html highlight="input-placeholder"
<div class="text-slate space-y-12">
  <label for="input-id" class="block title-xs">
    Field label
  </label>
  <div id="input-description">
    This is the field description. It can be several sentences long, if necessary.
  </div>
  <div class="space-y-8">
    <div id="input-placeholder" class="text-small text-slate-2">
      Type the first letter of your favorite fruit
    </div>
    <input id="input-id" type="text" class="form-input"
      aria-describedby="input-description input-placeholder">
  </div>
</div>
```

## Required fields
Required fields **must** include either:

- The `required` attribute if it is a native form control element, such as `<input>`, `<select>`, or `<textarea>`; or
- The [aria-required][aria-required] attribute if it is a custom form control with an explicit [role].

Required fields **should** be initialized with `aria-invalid="false"` to prevent screen readers from announcing the control as invalid until it's been modified. After modification, you **must** update the `aria-invalid` attribute to reflect the control's [validity state].

```html highlight="[-\w]*(required|invalid|false)"
<div class="text-slate space-y-12">
  <label for="input-id" class="block title-xs">
    Required field
  </label>
  <input id="input-id" type="text" class="form-input"
    required
    aria-invalid="false">
</div>
```

## Error messages
Fields that are [required](#required-fields) and/or validated should include an error message, which **must** be referenced by its `id` in the `aria-describedby` attribute of the input, and **should not** have accessible text content unless the input is invalid (either matching `:invalid` or with `aria-invalid="true"`).

```html highlight="input-error"
<div class="text-slate space-y-12">
  <label for="input-id" class="block title-xs">
    Field label
  </label>
  <div id="input-description">
    This is the field description. It can be several sentences long, if necessary.
  </div>
  <div class="space-y-8">
    <div id="input-placeholder" class="text-small text-slate-2">
      Type the first letter of your favorite fruit
    </div>
    <input id="input-id" type="text" value="x"
      aria-describedby="input-description input-placeholder input-error"
      aria-invalid="true"
      class="form-input">
    <div id="input-error" class="text-small text-red-3">
      Please enter the first letter of a fruit
    </div>
  </div>
</div>
```

Error message text should be small (`text-small`) and `{{ theme.colors.red[3] }}` (`text-red-3`).

## Size modifiers

The `input-sm`, `input-md`, and `input-lg` utilities establish widths for common form field sizes:

```html
<div class="form-sm">
  <div class="text-slate space-y-12">
    <label class="block title-xs" for="input1">Small</label>
    <input type="text" class="form-input input-sm" id="input1">
  </label>
</div>

<div class="form-md my-20">
  <label class="text-slate space-y-12">
    <label class="block title-xs" for="input2">Medium</label>
    <input type="text" class="form-input input-md" id="input2">
  </label>
</div>

<div class="form-lg">
  <label class="text-slate space-y-12">
    <label class="block title-xs" for="input3">Large</label>
    <input type="text" class="form-input input-lg" id="input3">
  </label>
</div>
```

## Input types

### Text input

Text-based `<input>` elements **must** have a `type` attribute (e.g. `type="text"`) and the `form-input` class to get the correct styles.

```html
<div class="text-slate space-y-12">
  <label for="input-id" class="block title-xs">
    Field label
  </label>
  <input type="text" id="input-id" class="form-input">
</div>
```

### Text area

HTML `<textarea>` elements must have the `form-textarea` class to receive form styles. Use the `w-full` utility or one of the [size modifiers](#size-modifiers) to establish the element's width.

```html
<div class="text-slate space-y-12">
  <label for="input-id" class="block title-xs">
    Field label
  </label>
  <textarea id="input-id" class="form-textarea w-full" rows="4">Hello</textarea>
</div>
```

## Text field components

Often times, forms call for more complex text components, like date inputs and pickers. Here we'll show examples of those and other tools to help organize form patterns.

### Form well

A form well is useful for grouping together a set of related form inputs, like an address fieldset.

A `<fieldset>` using utility classes for spacing and to create a rounded border should be used to indicate the grouping. A well should have a title label (using `title-xs`) and its fields should each have smaller, bolded labels (`text-small` and `font-medium`).

```html
<form>
  <fieldset class="border-1 rounded-4 border-slate-3 py-24 px-28">
    <div class="text-slate space-y-12">
      <label class="block title-xs">
        Address fieldset in a well
      </label>
      <div id="input-description">
        Some text about how complicated this field is and this explains it.
      </div>
      <label for="addr-1" class="block text-small font-medium">
        Address line 1
      </label>
      <input type="text" id="addr-1" class="form-input">
      <label for="addr-2" class="block text-small font-medium">
        Address line 2
      </label>
      <input type="text" id="addr-2" class="form-input">
      <label for="city" class="block text-small font-medium">
        City
      </label>
      <input type="text" id="city" class="form-input block">
      <div class="flex justify-between">
        <div class="space-y-12">
          <label for="state" class="block text-small font-medium">
            State
          </label>
          <input type="text" id="state" class="form-input">
        </div>
        <div class="space-y-12">
          <label for="zip-code" class="block text-small font-medium">
            Zip code
          </label>
          <input type="text" id="zip-code" class="form-input">
        </div>
      </div>
    </div>
  </fieldset>
</form>
```

[aria-required]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required
[role]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
[validity state]: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
[@tailwindcss/forms]: https://github.com/tailwindlabs/tailwindcss-forms