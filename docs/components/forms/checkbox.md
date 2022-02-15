---
title: Checkbox
---

## Introduction

Here we will explain everything you could possibly need to know about the SF DesSys checkbox component

## Checkbox component anatomy

Check it out:

```html
<form>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-id">
    <label for="checkbox-id">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

### Error state

```html highlight="aria-invalid"
<form>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-id" aria-invalid="true">
    <label for="checkbox-id">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

### Disabled state

We should probably come up with guidance about accessibility and disabled form elements. We might have to be particularly descriptive about _why_ a particular element is disabled within the context of a form.

```html highlight="aria-disabled"
<form>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-id" aria-disabled="true">
    <label for="checkbox-id">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>This is the label</span>
    </label>
  </div>
</form>
```

## Fieldset

Here's how we group together a set of chekboxes. Put in da `border-0` class on da `<fieldset>` to reset da default stylez.

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
      Select all that apply
    </div>
    <div class="space-y-12">
      {%- for i in range(4) %}
        <div>
          <input type="checkbox" class="form-checkbox sr-only" id="checkbox-{{ i }}">
          <label for="checkbox-{{ i }}">
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

## Checkbox Field Alts

Here are alts to the default checkbox configuration.
### Small groups

The small checkbox groups are an option when the strings for choices are short and present better as a list of inline options. Use the class `.small-checkbox-group` on the wrapping element, with `.flex` elements as containers for the checkboxes.

```html highlight="small-checkbox-group"
<fieldset class="border-0 space-y-12">
  <div for="foo-input" class="block title-xs">
    Select the days that you’re open
  </div>
  <div id="foo-description">
    Please toggle all of the days that your business accepts customers.
  </div>
  <div class="text-small text-slate-2">
    Select all that apply
  </div>
  <div class="small-checkbox-group">
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-mon">
      <label class="vertical" for="checkbox-mon">
        <span>Mon</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-tues">
      <label class="vertical" for="checkbox-tues">
        <span>Tues</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-weds">
      <label class="vertical" for="checkbox-weds">
        <span>Weds</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-thurs">
      <label class="vertical" for="checkbox-thurs">
        <span>Thurs</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
    <div>
      <input type="checkbox" class="form-checkbox sr-only" id="checkbox-fri">
      <label class="vertical" for="checkbox-fri">
        <span>Fri</span>
        <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      </label>
    </div>
  </div>
</fieldset>
```

### Label positioning

We allow for placement of the label horizontally (by default) and vertically (via placing the class `.vertical` on the `<label>`) relative to the checkbox input element. Changing whether the label is written before the checkmark icon or after will change which end of the axis it appears on.

```html
<fieldset class="small-checkbox-group">
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-top">
    <label class="vertical" for="checkbox-top">
      <span>Top</span>
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
    </label>
  </div>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-right">
    <label for="checkbox-right">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>Right</span>
    </label>
  </div>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-btm">
    <label class="vertical" for="checkbox-btm">
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
      <span>Bottom</span>
    </label>
  </div>
  <div>
    <input type="checkbox" class="form-checkbox sr-only" id="checkbox-left">
    <label for="checkbox-left">
      <span>Left</span>
      <sfgov-icon symbol="check" class="form-checkbox-check" width="16" height="16"></sfgov-icon>
    </label>
  </div>
</fieldset>
```