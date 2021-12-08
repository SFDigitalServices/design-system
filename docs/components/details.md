---
title: Details
subtitle: The progressive disclosure element
---

The HTML [`<details>` element][details] is a browser-native disclosure control
for showing and hiding a single element. Without any styling, the markup looks
like this this:

```html id="bare-details" standalone="false" height="40"
<details>
  <summary>Summary text</summary>
  <div>Details content</div>
</details>
```

## Details reset
Browsers style the `<details>` and `<summary>` elements differently, so we
provide a `details-reset` class to normalize them and remove the ▶ summary
marker. You can still click the word "Summary" to hide and show "Details":

```html height="96"
<details class="details-reset cursor-pointer">
  <summary class="title-xs">Summary</summary>
  <div class="mt-8 bg-blue-1 rounded p-20">Details</div>
</details>
```

## Open variants
We provide `open:` utility class variants so that you can conditionally
show and hide elements within the `<summary>` when the `<details>` element is
open (whenever the `open` attribute is present).
This is how you would visually swap a
<sfgov-icon symbol="chevron-right" aria-label="chevron-right icon"></sfgov-icon>
when closed for a 
<sfgov-icon symbol="chevron-down" aria-label="chevron-down icon"></sfgov-icon>
when open:

```html height="96"
<details class="details-reset">
  <summary class="flex gap-8 justify-start align-middle cursor-pointer">
    <div class="title-xs">
      Summary
    </div>
    <sfgov-icon symbol="chevron-right" class="open:hidden"></sfgov-icon>
    <sfgov-icon symbol="chevron-down" class="hidden open:inline-flex"></sfgov-icon>
  </summary>
  <div class="mt-8 bg-blue-1 rounded p-20">Details</div>
</details>
```

<div class="flex items-start gap-20 bg-blue-1 rounded p-20 my-40">
  <sfgov-icon symbol="info" class="mt-2"></sfgov-icon>
  <div>
    It's not necessary to label icons with <code>aria-label</code> or
    <code>title</code> attributes. Doing so may confuse screen reader users.
  </div>
</div>

The `open:` variants apply to the `<details>` and `<summary>` elements, and
descendents of the `<summary>`, and are available for:

- display utilities (`hidden`, `block`, etc.)
- color utilities (`bg-*`, `text-<color>`, etc.)
- border utilities (`border-*`)

Also note that the variants only target the **directly descendent** summary of
the open details element, which makes it possible to distinctly style nested
summary elements.

## Putting it all together
This example uses border, color, typography, and spacing utilities with `open:`
variants to style a `<details>` element as they're currently shown on SF.gov:

```html height="180"
<details class="details-reset rounded overflow-hidden border-solid border-3 border-action">
  <summary class="
    title-xs bg-white text-action
    open:bg-action open:text-white
    hocus:bg-action hocus:text-white
    px-20 py-16
    cursor-pointer
  ">
    <div class="flex space-between">
      <span class="flex-auto">Summary</span>
      <sfgov-icon symbol="plus" class="open:hidden"></sfgov-icon>
      <sfgov-icon symbol="minus" class="hidden open:inline-flex"></sfgov-icon>
    </div>
  </summary>
  <div class="px-20 py-16 space-y-20">
    <p class="m-0">These are the details.</p>
    <p class="m-0">You can put whatever you want in here, really.</p>
  </div>
</details>
```

## Guidelines
When styling `<details>`:

1. Use the `cursor-pointer` class on the `<summary>` to make it more obviously
   clickable.
1. Use `hocus:` variants to style the `<summary>` clearly when it's hovered or
   focused.
1. Do not use `open:` variants in the content portion (the element after
   `<summary>`) of a `<details>`. They will have no effect because this element
   is only visible when the details element is **open**.

[details]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
