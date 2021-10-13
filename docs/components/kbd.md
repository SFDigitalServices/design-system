---
title: Keyboard
---

The [`<kbd>` HTML element][kbd] HTML element represents computer keyboard
interactions. We use them to display keyboard navigation instructions, such
as pressing <kbd>Tab</kbd> or <kbd>Enter</kbd>.

`<kbd>` elements should have **8px** horizontal margins from adjacent text
and other elements. They're styled with <code>display: inline-block</code>,
so you can use horizontal margin utility classes to adjust spacing on each side
(<code>mr-8</code> or <code>ml-8</code>) or both (<code>mx-8</code>).

## Keyboard shortcut

```html
Press <kbd>Control + X</kbd> at any time to close this dialog.
```

## Data Stories component

```html
<div class="p-20 text-slate max-w-lg">
  <div class="bg-blue-1 p-40 rounded">
    <ul class="list-none space-y-20 m-0 p-0">
      <li>
        <kbd>Control</kbd> <span class="mx-8">+</span> <kbd class="mr-8">Enter</kbd> to enter
        the dashboard
      </li>
      <li>
        <kbd class="mr-8">Tab</kbd> or <kbd class="mx-8">Arrow</kbd> to move
        between visuals
      </li>
      <li>
        <kbd class="mr-8">Control</kbd> + <kbd class="mx-8">Right arrow</kbd> to
        enter a visual or filter
      </li>
      <li><kbd class="mr-8">Escape</kbd> to exit a visual or dashboard</li>
    </ul>
  </div>
</div>
```

### Wrap behavior

`kbd` elements on adjacent lines should not overlap. When marking up key
combinations such as `Control + Enter`, add spacing utilities to the `+`
(e.g. `<span class="mx-8">+</span>`) to keep `kbd` elements that wrap to
the beginning of a line aligned to the left edge of their container:

```html
<div class="w-1/2 text-slate max-w-lg">
  <div class="bg-blue-1 p-40 rounded">
    <ul class="list-none space-y-20 m-0 p-0">
      <li><kbd>Control</kbd> <span class="mx-8">+</span> <kbd class="mr-8">Enter</kbd> to enter the dashboard</li>
      <li><kbd class="mr-8">Tab</kbd> or <kbd class="mx-8">Arrow</kbd> to move between visuals</li>
      <li><kbd>Control</kbd> <span class="mx-8">+</span> <kbd class="mx-8">Right arrow</kbd> to enter a visual or filter</li>
      <li><kbd>Escape</kbd> to exit a visual or dashboard</li>
    </ul>
  </div>
</div
```

[kbd]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
