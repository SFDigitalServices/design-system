---
title: Keyboard
---

The [`<kbd>` HTML element][kbd] represents textual user input.
We use it to mark up keyboard shortcuts on sf.gov.

## Keyboard shortcut

```html
Press <kbd>Control + X</kbd> at any time to close this dialog.
```

### Wrap behavior

In tight containers, the `kbd` elements should not overlap.

```html
<div class="w-1/2 text-slate max-w-lg">
  <div class="bg-blue-1 p-40 rounded">
    <ul class="list-none space-y-20 m-0 p-0">
      <li><kbd class="mr-8">Control</kbd> + <kbd class="mx-8">Enter</kbd> to enter the dashboard</li>
      <li><kbd class="mr-8">Tab</kbd> or <kbd class="mx-8">Arrow</kbd> to move between visuals</li>
      <li><kbd class="mr-8">Control</kbd> + <kbd class="mx-8">Right arrow</kbd> to enter a visual or filter</li>
      <li><kbd class="mr-8">Escape</kbd> to exit a visual or dashboard</li>
    </ul>
  </div>
</div
```

[kbd]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
