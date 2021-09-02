---
title: Documentation
---

This site is built with [Eleventy] and hosted on [Heroku]. All of the pages on
the site live in the [docs directory](../..), and most are written in either
[Markdown] or HTML.

## Eleventy
There are a couple of things to note about our Eleventy setup:

- Markdown documents are processed first with [Nunjucks](#nunjucks), then
  with our custom [Markdown pipeline](#remark)
- We use a handful of custom [template plugins](#template-plugins)

## Markdown
Whenever possible, please write your documents in [Markdown] rather than HTML.
The syntax is easier to read and write, and allows us to enhance the content
programmatically with [remark](#remark).

### Frontmatter
The term [frontmatter][] (sometimes written as "front matter" or "front
matter") was popularized by a static site generator called [Jekyll], which
heavily influenced Eleventy's conventions. Like Jekyll, Eleventy allows us to
embed metadata with frontmatter written in [YAML] at the top of each page.
YAML frontmatter is delimited by an opening and closing `---` starting on the
first line of the file:

```yaml
---
key: value
list: [a, b, c]
# comments look like this
objects:
  can:
    nest: deeply
---

Everything from here on out is treated as Markdown.
```

The only **required** piece of metadata is the page's title:

```yaml
---
title: Title goes here
---
```

You may add whatever data you want, and you can even reference it in your
document with [Nunjucks](#nunjucks) in your markdown. For instance, to generate
a list of links with predictable URLs you could do something like this:


```md
---
fruits:
  - apple
  - strawberry
  - pear
---

## Fruits
{% raw %}{% for fruit in fruits %}
- [{{ fruit }}](https://google.com/search?q={{ fruit }})
{% endfor %}{% endraw %}
```

This becomes really powerful when generating [code examples](#code-examples)
from data, e.g. in an HTML [code block]:

    ```html
    <ul>
    {% raw %}{% for key, value in tokens.colors %}
      <li>
        <b>{{ key }}</b>: <code>{{ value }}</code>
        <span class="text-{{ key }}">text-{{ key }}</span> /
        <span class="bg-{{ key }}">bg-{{ key }}
      </li>
    {% endfor %}{% endraw %}
    </ul>
    ```

## Remark
[Remark] is a tool for parsing and transforming Markdown with plugins. Support
for Markdown is [built into][eleventy markdown] Eleventy, but we use [an
Eleventy plugin](https://npm.im/@fec/eleventy-plugin-remark) to configure
Remark as Eleventy's Markdown "engine" so that we can process it with Remark
plugins. Remark has three distinct phases to be aware of:

- The **parse** phase takes raw text from the `.md` documents and creates a
  [tree structure][AST] in which each distinct piece of the document &mdash; a
  heading, list item, link, or other tag &mdash; is represented as a **node**
  in the tree.

- The **transform** phase applies plugins that walk the tree and add, remove,
  or update nodes.

- The **stringify** phase walks the tree to generate a string of HTML. This
  phase uses [Rehype].

⚠️ It's important to remember that Markdown documents are processed with Nunjucks
**before** they're parsed with Remark. This can cause problems if your template
instructions produce malformed Markdown, but you can always drop into HTML if
need be.

### HTML in Markdown
We support HTML nested in Markdown with a handy package called [rehype-raw].
This gives us the option of dropping into HTML at any point in our Markdown
documents (for instance, to style specific elements with our design system's
CSS utilities):

### Markdown plugins
See the [lib/remark]({{ 'lib/remark' | repo_url }}) directory for more
information about the plugins we use and provide.

### Directives
We also rely on a [proposed syntax][markdown directives] for "generic" Markdown
directives that allows us to apply macros at the Markdown node level (rather
than the Nunjucks template level). This is an experimental feature, but it offers
a simplified syntax that's compatible with Markdown. For instance, we've
implemented `:::swatches` and `::swatch` directives to render swatches on the
[Colors page](/foundations/color/) like so:

```md
:::swatches
- ::swatch[Black]{value="{{ tokens.colors.black }}"}
- ::swatch[White]{value="{{ tokens.colors.white }}"}
:::
```

Is that any easier to read than this, though?  🤷‍♀️

```django
{% raw %}{{ swatches([
  { title: 'Black', value: tokens.colors.black },
  { title: 'White', value: tokens.colors.white }
]) }}{% endraw %}
```

### Code examples
When documenting a design system, it's often useful to show a "live" rendering
alongside HTML code. Our setup involves a three-step process:

1. When Markdown documents are processed by Eleventy, we "upgrade" HTML [code
   blocks][code block] by turning them into a two-pane UI that renders the HTML
   in an `<iframe>` above the code.

2. In a [computed data] handler, we parse all of the Markdown docs
   (`docs/**/*.md`) with a Remark pipeline that uses the same plugins to
   extract the code blocks as makes them available as data to Eleventy.

3. Finally, the [docs/examples]({{ 'docs/examples' | repo_url }}) Eleventy
   templates "paginate" the examples and output one page per example. The URLs
   of the example data determine both the [permalink] of the generated page and
   the `src` attribute of the `<iframe>` generated earlier.

It's not pretty, but there is even an [examples listing](/examples) where you
can see all of the code examples found on the site, each rendered in its own
`<iframe>`.

By default, every Markdown [code block] renders a live example. You can opt out
or modify the display of each code block in its "meta" string, which is the
optional text **after** the <code>```html</code> opening delimiter:

    ```html key="value"

These should be formatted like HTML attributes, e.g. `key="value"`. The quotes
are required, and the keys may contain only letters, numbers, and underscores.
We support the following meta attributes:

- `id="..."` sets the ID for this example, which also determines its URL:
  `/examples/{id}.html`
- `title="..."` sets the example's title, which is rendered in the [examples
  listing](/examples)
- `static="true"` opts out of live example rendering

#### Implicit example titles
Because adding metadata to each example can be tedious, code blocks without an
`id` or `title` in their meta string will "inherit" them from the nearest
(previous) heading. When this happens, the `title` will be the text of the
heading and the `id` will be its [slug][remark-slug]. For instance, this
Markdown:

    ### Meta example
    
    ```html
    <div class="p-20 bg-green-4 text-white">
      Hi, I'm <b>bold</b>!
    </div>
    ```

...is rendered into the example below and written to
[/examples/meta-example.html](/examples/meta-example.html):

#### Meta example
```html
<div class="p-20 bg-green-4 text-white">
  Hi, I'm <b>bold</b>!
</div>
```

## Nunjucks
[Nunjucks] is a popular templating engine built by Mozilla with a syntax
similar to [Django], [Jinja], [Twig], and a number of other templating tools.
Support for Nunjucks is [built into][eleventy nunjucks] Eleventy.

### Template plugins
See [lib/eleventy]({{ 'lib/eleventy' | repo_url }}) for more information about
template customizations, including Nunjucks filters and navigation helpers.

[eleventy]: https://www.11ty.dev
[heroku]: https://heroku.com
[jekyll]: https://jekyllrb.com
[markdown]: https://www.markdownguide.org
[frontmatter]: https://jekyllrb.com/docs/front-matter/
[remark]: https://remark.js.org/
[rehype]: https://github.com/rehypejs/rehype#readme
[nunjucks]: https://mozilla.github.io/nunjucks/
[yaml]: https://yaml.org/
[django]: https://docs.djangoproject.com/en/3.2/ref/templates/language/
[jinja]: https://palletsprojects.com/p/jinja/
[twig]: https://twig.symfony.com/
[eleventy nunjucks]: https://www.11ty.dev/docs/languages/nunjucks/
[eleventy markdown]: https://www.11ty.dev/docs/languages/markdown/
[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
[markdown directives]: https://talk.commonmark.org/t/generic-directives-plugins-syntax/444
[code block]: https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
[computed data]: https://www.11ty.dev/docs/data-computed/
[permalink]: https://www.11ty.dev/docs/permalinks/
[remark-slug]: https://github.com/remarkjs/remark-slug#readme
[rehype-raw]: https://github.com/rehypejs/rehype-raw#readme
