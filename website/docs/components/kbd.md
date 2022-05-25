---
title: Keyboard
---

The [`<kbd>` HTML element][kbd] HTML element represents computer keyboard
interactions. We use them to display keyboard navigation instructions, such
as pressing <kbd>Tab</kbd> or <kbd>Enter</kbd>.

`<kbd>` elements should have 8px horizontal margins from adjacent text
and other elements. They're styled with <code>display: inline-block</code>,
so you can use horizontal margin utility classes to adjust spacing on each side.
At our body font-size of 16px the Rubik space character is about 4px wide,
so you can use `m*-4` utilities around text with spaces, and `m-*8` on elements
without spaces in between them.

## Keyboard shortcut

```html live
<div>Press <kbd class="mx-4">Control + X</kbd> at any time to close this dialog.</div>
```

## Data Stories component

```html live
<div class="p-20 text-slate max-w-lg">
  <div class="bg-blue-1 p-40 rounded">
    <ul class="list-none space-y-20 m-0 p-0">
      <li>
        <kbd>Control</kbd> <span class="mx-4">+</span>
        <kbd class="mr-4">Enter</kbd> to enter the dashboard
      </li>
      <li>
        <kbd class="mr-4">Tab</kbd> or <kbd class="mx-4">Arrow</kbd> to move
        between visuals
      </li>
      <li>
        <kbd>Control</kbd> <span class="mx-4">+</span>
        <kbd class="mr-4">Right arrow</kbd> to enter a visual or filter
      </li>
      <li><kbd class="mr-4">Escape</kbd> to exit a visual or dashboard</li>
    </ul>
  </div>
</div>
```

### Wrap behavior

`kbd` elements on adjacent lines should not overlap. When marking up key
combinations such as `Control + Enter`, add spacing utilities to the `+`
(e.g. `<span class="mx-4">+</span>`) to keep `kbd` elements that wrap to
the beginning of a line aligned to the left edge of their container:

```html live
<div class="w-1/2 text-slate max-w-lg">
  <div class="bg-blue-1 p-40 rounded">
    <ul class="list-none space-y-20 m-0 p-0">
      <li><kbd>Control</kbd> <span class="mx-4">+</span> <kbd class="mr-4">Enter</kbd> to enter the dashboard</li>
      <li><kbd class="mr-4">Tab</kbd> or <kbd class="mx-4">Arrow</kbd> to move between visuals</li>
      <li>
        <kbd>Control</kbd> <span class="mx-4">+</span> <kbd class="mr-4">Right arrow</kbd> to
        enter a visual or filter
      </li>
      <li><kbd>Escape</kbd> to exit a visual or dashboard</li>
    </ul>
  </div>
</div>
```

[kbd]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
