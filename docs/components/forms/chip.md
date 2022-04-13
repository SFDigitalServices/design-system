---
title: Chips
see_also:
  - title: Figma
    href: "https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/SF-Components?node-id=4437%3A3317"
---

## Introduction

Chips are input elements that represent compact pieces of information, typically a keyword or phrase. They can be helpful in forms that ask for preferences or in cases where it's helpful to group information more complex than a text, radio, or checkbox group can do.

## Chip component anatomy

Chips are an abstraction on checkboxes. They share the same parts — an input, a label, and an optional icon.

```html highlight="(form-chip[-\w]*|chip-id)"
<form class="flex">
  <div class="flex-none">
    <input type="checkbox" class="form-chip sr-only" id="chip-id" />
    <label for="chip-id" class="inline-flex px-12 py-2 gap-8">
      <span>Chip label</span>
      <sfgov-icon
        symbol="close"
        class="form-checkbox-check"
        width="11"
        height="11"
      ></sfgov-icon>
    </label>
  </div>
</form>
```

## Usage

### Entered chips

One common usage is entering a set of keywords. Tokens are added by user input to a text field, which can then be selected or deleted. (The example below only demos selection, not deletion.)

```html
<form>
  <div class="text-slate space-y-12">
    <label for="foo-input" class="block title-xs"> Label </label>
    <div class="space-y-8">
      <div class="text-small text-slate-2">Hint</div>
      <input id="foo-input" class="form-input" type="text" value="Input" />
    </div>
  </div>
  <div class="flex flex-wrap gap-x-16 gap-y-20 mt-20">
    {%- for i in range(5) %}
    <div class="flex-none">
      <input type="checkbox" class="form-chip sr-only" id="chip-id-{{ i }}" />
      <label for="chip-id-{{ i }}" class="inline-flex px-12 py-2 gap-8">
        <span>Chip #{{ i + 1 }}</span>
        <sfgov-icon
          symbol="close"
          class="form-checkbox-check"
          width="11"
          height="11"
        ></sfgov-icon>
      </label>
    </div>
    {%- endfor %}
  </div>
</form>
```

The `flex` and `flex-wrap` utilities are used so the chips will display side-by-side and wrap to a new line. Each chip is wrapped with the `flex-none` utility to keep longer labels from wrapping. This makes sure every chip is a uniform height.

### Filter chips

Chips can also be helpful as a collection of keywords or phrases that can be selected for filtering content.

```html
<form>
  <div class="text-slate space-y-12">
    <label for="foo-input" class="block title-xs">Find a museum exhibit during your trip</label>
  </div>
  <div class="flex flex-wrap gap-x-16 gap-y-20 mt-20">
    <div class="flex-none">
      <input type="checkbox" class="form-chip sr-only" id="chip-id-1" />
      <label for="chip-id-1" class="inline-flex px-12 py-2 gap-8">
        <span>art</span>
      </label>
    </div>
    <div class="flex-none">
      <input type="checkbox" class="form-chip sr-only" id="chip-id-5" checked />
      <label for="chip-id-5" class="inline-flex px-12 py-2 gap-8">
        <span>penguins</span>
        <sfgov-icon
          symbol="check"
          class="form-checkbox-check"
          width="11"
          height="11"
        ></sfgov-icon>
      </label>
    </div>
    <div class="flex-none">
      <input type="checkbox" class="form-chip sr-only" id="chip-id-2" />
      <label for="chip-id-2" class="inline-flex px-12 py-2 gap-8">
        <span>space</span>
      </label>
    </div>
    <div class="flex-none">
      <input type="checkbox" class="form-chip sr-only" id="chip-id-3" />
      <label for="chip-id-3" class="inline-flex px-12 py-2 gap-8">
        <span>natural science</span>
      </label>
    </div>
    <div class="flex-none">
      <input type="checkbox" class="form-chip sr-only" id="chip-id-4" checked />
      <label for="chip-id-4" class="inline-flex px-12 py-2 gap-8">
        <span>SF history</span>
        <sfgov-icon
          symbol="check"
          class="form-checkbox-check"
          width="11"
          height="11"
        ></sfgov-icon>
      </label>
    </div>
  </div>
</form>
```
