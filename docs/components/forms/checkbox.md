---
title: Checkbox
see_also:
  - title: Figma
    href: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/SF-Components?node-id=3861%3A4832'
---

## Introduction

Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.

## Checkbox component anatomy

Checkboxes are made up of three parts: an input, a label, and a `<sfgov-icon>` checkmark.

```html highlight="(form-checkbox[-\w]*|checkbox-id)"
<form>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-id">
    <label for="checkbox-id" class="flex flex-wrap items-center p-12 gap-20">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

The label acts as a wrapper for the checkmark and the label text. The `flex` utility is used to display elements side-by-side. In this example we use the `p-12` utility to expand the hover area and `gap-20` to create uniform spacing between the checkmark and label text.

A label is **required**, and **must** be associated with the input either as a `<label>` with the input's `id` in its `for` attribute, or with its own `id` attribute referenced by the input's `aria-labelledby`.

### Error state

Fields that are required should have the `required` attribute or `aria-invalid="true"` when the form is invalid.

```html highlight="required"
<form>
  <div class="space-y-8">
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-id" aria-describedby="error-msg" required>
    <label for="checkbox-id" class="flex flex-wrap items-center p-12 gap-20">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>This is the label</span>
    </label>
    <div id="error-msg" class="text-small text-red-4">
      Error message
    </div>
  </div>
</form>
```

### Disabled state

As a rule of thumb, from a usability and accessibility perspective, disabled checkboxes should ideally be avoided all together.

In scenarios where a diabled field _must_ be used, it should have the `disabled` attribute or `aria-disabled="true"` and should not allow mouse or keyboard interaction.

```html highlight="disabled"
<form>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-id" disabled>
    <label for="checkbox-id" class="flex flex-wrap items-center p-12 gap-20">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

## Fieldset

Two or more checkboxes should be grouped inside a `<fieldset>`. The `border-0` and `space-y-12` classes remove browser default styling and add vertical space between children.

```html
<fieldset class="border-0 space-y-12">
  <legend class="block title-xs">
    Title 
  </legend>
  <div id="foo-description">
    Description
  </div>
  <div class="space-y-8">
    <div class="text-small text-slate-2">
      Select all that apply
    </div>
    <div class="space-y-12">
      {%- for i in range(4) %}
        <div>
          <input type="checkbox" class="form-checkbox sr-only" id="checkbox-{{ i }}">
          <label for="checkbox-{{ i }}" class="flex flex-wrap items-center p-12 gap-20">
            <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
            <span>This is the label</span>
          </label>
        </div>
      {%- endfor %}
    </div>
    <div class="text-small text-red-4">
      Please enter the first letter of a fruit
    </div>
</fieldset>
```

## Variations

### Small groups

The small checkbox groups are an option when the strings for choices are short and present better as a list of inline options. Use the `.small-input-group` class on the wrapping element, with a `<div>` as container for each checkbox in the group.

```html highlight="small-input-group"
<fieldset class="border-0 space-y-12">
  <legend class="block title-xs">
    Select the days that you’re open
  </legend>
  <div id="foo-description">
    Please toggle all of the days that your business accepts customers.
  </div>
  <div class="text-small text-slate-2">
    Select all that apply
  </div>
  <div class="small-input-group">
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-mon">
      <label class="vertical flex flex-wrap items-center p-12 gap-20" for="checkbox-mon">
        <span>Mon</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-tues">
      <label class="vertical flex flex-wrap items-center p-12 gap-20" for="checkbox-tues">
        <span>Tues</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-weds">
      <label class="vertical flex flex-wrap items-center p-12 gap-20" for="checkbox-weds">
        <span>Weds</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-thurs">
      <label class="vertical flex flex-wrap items-center p-12 gap-20" for="checkbox-thurs">
        <span>Thurs</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-fri">
      <label class="vertical flex flex-wrap items-center p-12 gap-20" for="checkbox-fri">
        <span>Fri</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
  </div>
</fieldset>
```

### Label positioning

We allow for placement of the label horizontally (by default) and vertically (via placing the `.vertical` class on the `<label>`) relative to the checkbox input element. Labels should be placed to the right or above the input element.

```html highlight="vertical"
<fieldset class="small-input-group">
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-top">
    <label class="vertical flex flex-wrap items-center p-12 gap-20" for="checkbox-top">
      <span>Top</span>
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
    </label>
  </div>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-right">
    <label class="flex flex-wrap items-center p-12 gap-20" for="checkbox-right">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>Right</span>
    </label>
  </div>
</fieldset>
```