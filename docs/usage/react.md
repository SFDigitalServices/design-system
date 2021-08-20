---
title: React
order: 2
---

The {{ site.title }} does not **officially** support React yet. However,
at least partial support should be possible with CSS-in-JS tools
that support Tailwind (such as [tailwind-styled-components]) by
importing [our Tailwind configuration] in your own Tailwind
config:

```js
// e.g. tailwind.config.js
module.exports = require('{{ package.name }}/tailwind.config')
```

[tailwind-styled-components]: https://www.npmjs.com/package/tailwind-styled-components
[our tailwind configuration]: https://unpkg.com/{{ package.name }}@{{ package.version }}/tailwind.config.js
