---
title: Radio buttons
see_also:
  - title: Figma
    href: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/SF-Components?node-id=3861%3A3791'
---

## Introduction

Here we will explain everything you could possibly need to know about the SF DesSys radio group component

## Radio button component anatomy

Radio buttons are made up of three constitutive parts: an input, a label, and a checkmark.

```html highlight="(form-radio[-\w]*|radio-id)"
<form>
  <div>
    <input type="radio" class="form-radio" id="radio-id" name="radio" value="cool">
    <label for="radio-id" class="flex flex-wrap p-12 gap-20">
      <div class="form-radio-check"></div>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

The label acts as a wrapper for the checkmark and the label text. The `flex` utility is used to display elements side-by-side. In this example we use the `p-12` utility to expand the hover area and `gap-20` to create uniform spacing between the checkmark and label text.

A label is **required**, and **must** be associated with the input either as a `<label>` with the input's `id` in its `for` attribute, or with its own `id` attribute referenced by the input's `aria-labelledby`.

### Radio error state

Fields that are required should have the `required` attribute or `aria-invalid="true"` when the form is invalid.

```html highlight="required"
<form>
  <div>
    <input type="radio" class="form-radio" id="radio-id" name="radio" value="cool" required>
    <label for="radio-id" class="flex flex-wrap p-12 gap-20">
      <div class="form-radio-check"></div>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

### Radio disabled state

Fields that are disabled should have the `disabled` attribute or `aria-disabled="true"` and should not allow mouse or keyboard interaction.

We should probably come up with guidance about accessibility and disabled form elements. We might have to be particularly descriptive about _why_ a particular element is disabled within the context of a form.

```html highlight="disabled"
<form>
  <div>
    <input type="radio" class="form-radio" id="radio-id" name="radio" value="cool" disabled>
    <label for="radio-id" class="flex flex-wrap p-12 gap-20">
      <div class="form-radio-check"></div>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

## Radio fieldset

Two or more radio inputs should be grouped inside a `<fieldset>`. The `border-0` and `space-y-12` classes remove browser default styling and add vertical space between children.

A group of radio buttons **must** have a matching `name` value to associate them. In this example, each input has the attribute `name="radio"`.

```html
<fieldset class="border-0 space-y-12">
  <div for="foo-input" class="block title-xs">
    Title 
  </div>
  <div id="foo-description">
    Description
  </div>
  <div class="space-y-8">
    <div class="text-small text-slate-2">
      Select one
    </div>
    <div class="space-y-12">
      {%- for i in range(4) %}
        <div>
          <input type="radio" class="form-radio" id="radio-{{ i }}" name="radio" value="cool">
          <label for="radio-{{ i }}" class="flex flex-wrap p-12 gap-20">
            <div class="form-radio-check"></div>
            <span>This is the label</span>
          </label>
        </div>
      {%- endfor %}
    </div>
    <div class="text-small text-red-4">
      Please select a fruit
    </div>
</fieldset>
```

## Radio field alts

Here are alts to the default radio group configuration.

### Small radio groups

The small radio inputs groups are an option when the strings for choices are short and present better as a list of inline options. Use the `.small-input-group` class on the wrapping element, with a `<div>` as container for each radio group in the group.

```html highlight="small-input-group"
<fieldset class="border-0 space-y-12">
  <div for="foo-input" class="block title-xs">
    Select your favorite day
  </div>
  <div id="foo-description">
    Please pick the day that suits you best.
  </div>
  <div class="text-small text-slate-2">
    Select one
  </div>
  <div class="small-input-group">
    <div>
      <input type="radio" class="form-radio" id="radio-mon" name="radio" value="cool">
      <label class="vertical flex flex-wrap p-12 gap-20" for="radio-mon">
        <span>Mon</span>
        <div class="form-radio-check"></div>
      </label>
    </div>
    <div>
      <input type="radio" class="form-radio" id="radio-tues" name="radio" value="cool">
      <label class="vertical flex flex-wrap p-12 gap-20" for="radio-tues">
        <span>Tues</span>
        <div class="form-radio-check"></div>
      </label>
    </div>
    <div>
      <input type="radio" class="form-radio" id="radio-weds" name="radio" value="cool">
      <label class="vertical flex flex-wrap p-12 gap-20" for="radio-weds">
        <span>Weds</span>
        <div class="form-radio-check"></div>
      </label>
    </div>
    <div>
      <input type="radio" class="form-radio" id="radio-thurs" name="radio" value="cool">
      <label class="vertical flex flex-wrap p-12 gap-20" for="radio-thurs">
        <span>Thurs</span>
        <div class="form-radio-check"></div>
      </label>
    </div>
    <div>
      <input type="radio" class="form-radio" id="radio-fri" name="radio" value="cool">
      <label class="vertical flex flex-wrap p-12 gap-20" for="radio-fri">
        <span>Fri</span>
        <div class="form-radio-check"></div>
      </label>
    </div>
  </div>
</fieldset>
```

### Radio label positioning

We allow for placement of the label horizontally (by default) and vertically (via placing the `.vertical` class on the `<label>`) relative to the radio input element. Labels should be placed to the right or above the input element.

```html highlight="vertical"
<fieldset class="small-input-group">
  <div>
    <input type="radio" class="form-radio" id="radio-top" name="radio" value="cool">
    <label class="vertical flex flex-wrap p-12 gap-20" for="radio-top">
      <span>Top</span>
      <div class="form-radio-check"></div>
    </label>
  </div>
  <div>
    <input type="radio" class="form-radio" id="radio-right" name="radio" value="cool">
    <label for="radio-right" class="flex flex-wrap p-12 gap-20">
      <div class="form-radio-check"></div>
      <span>Right</span>
    </label>
  </div>
</fieldset>
```