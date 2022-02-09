---
title: Checkbox
---

## Introduction

Here we will explain everything you could possibly need to know about the SF DesSys checkbox component

## Checkbox component anatomy

Check it out:

```html
<label class="checkbox-container" for="foo-checkbox" tabindex=1>
  <input id="foo-checkbox" class="form-checkbox" type="checkbox" />
  <span>Label</span>
  <div class="checkmark">
    <sfgov-icon symbol="check" width="16" height="12"></sfgov-icon>
  </div>
</label>
```

### Error state

```html highlight="aria-invalid"
<label class="checkbox-container" for="foo-checkbox" tabindex=1 aria-invalid="true">
  <input id="foo-checkbox" class="form-checkbox" type="checkbox" />
  <span>Label</span>
  <div class="checkmark">
    <sfgov-icon symbol="check" width="16" height="12"></sfgov-icon>
  </div>
</label>
```

### Disabled state

We should probably come up with guidance about accessibility and disabled form elements. We might have to be particularly descriptive about _why_ a particular element is disabled within the context of a form.

```html highlight="aria-disabled"
<label class="checkbox-container" for="foo-checkbox" tabindex=1 aria-disabled="true">
  <input id="foo-checkbox" class="form-checkbox" type="checkbox" />
  <span>Label</span>
  <div class="checkmark">
    <sfgov-icon symbol="check" width="16" height="12"></sfgov-icon>
  </div>
</label>
```

## Fieldset

Here's how we group together a set of chekboxes. Put in da `border-0` class on da `<fieldset>` to reset da default stylez.

```html
<fieldset class="border-0 space-y-12">
  <div for="foo-input" class="block title-xs">
    Legend 
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
        <label class="checkbox-container" for="foo-checkbox-{{ i }}" tabindex=1>
          <input id="foo-checkbox-{{ i }}" class="form-checkbox" type="checkbox" />
          <span>Label</span>
          <div class="checkmark">
            <sfgov-icon symbol="check" width="16" height="12"></sfgov-icon>
          </div>
        </label>
      {%- endfor %}
    </div>
    <div class="text-small text-red-4">
      Please enter the first letter of a fruit
    </div>
</fieldset>
```