# formio templates

This directory exports a mapping of template names to template objects that
the [formio.js template system] uses to render different types of content. For
some reason, formio.js templates are not functions themselves, but objects with
the following interface:

```ts
{
  form (context: object): string
}
```

To cut down on the boilerplate and number of files, we use ES module imports and
exports to shape our template mapping in [index.ts](./index.ts) and each
template module like so:

```js
// index.js
import * as debug from './debug'

export default {
  debug
}

// debug.js
export function form (ctx) {
  return `<pre>${JSON.stringify(ctx.component, null, 2)}</pre>`
}
```

Which makes the default export of this directory something we can use in the
plugin ("module") object we pass to [Formio.use()]. Note one last bit of extra
fiddling we need to do here is nest the `templates` export under the same named
key under `templates` as the value of `framework`:

```js
import templates from './templates'

Formio.use({
  framework: 'sfgov',
  templates: {
    sfgov: templates
  }
})
```

## JSX

We use [vhtml] and the [`@jsx` pragma][jsx runtime] to compile JSX expressions into
functions that return HTML strings. To enable it in a template, you **must**:

1. Name the template file with a `.tsx` or `.jsx` extension
2. Add the following at the top of the file:

    ```js
    /** @jsx h */
    /** @jsxFrag null */
    /** @jsxRuntime classic */
    import h from 'vhtml'
    ```

From that point forward, all JSX expressions will _return_ a string (or, in the
case of fragments like `<>foo</>`, an _array_ of strings). You can test this by
logging JSX expressions in your scripts:

```js
console.log(<div id="foo" />)
// logs: '<div id="foo"></div>'
```

### Raw HTML

Many formio components "pre-render" the HTML of other form elements (namely, the
children of nested components) and pass the raw HTML strings to another
template's context. When rendering these HTML strings in JSX templates, you
**must** use the [dangerouslySetInnerHTML] prop to avoid escaping them:

```jsx
// 👎 this will escape the HTML!
export function form(ctx) {
  return <div>{ctx.components}</div>
}

// 👍 this will not
export function form(ctx) {
  return <div dangerouslySetInnerHTML={{__html: ctx.components}} />
}
```

[formio.js template system]: https://help.form.io/developers/form-development/form-templates
[Formio.use()]: https://help.form.io/developers/modules#creating-a-module
[vhtml]: https://github.com/developit/vhtml
[jsx runtime]: https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
[dangerouslySetInnerHTML]: https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html