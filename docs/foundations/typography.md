---
title: Typography
specimens:
  sm: The quick brown fox jumps over the lazy dog.
  md: Sagittis aliquam malesuada bibendum arcu vitae (regular)
  lg: Euismod in pellentesque massa placerat duis ultricies. Mauris vitae ultricies leo integer malesuada nunc vel. Sed odio morbi quis commodo odio.
  xl: 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies. Mauris vitae ultricies leo integer malesuada nunc vel. Sed odio morbi quis commodo odio. 
    <br><br>
    Sagittis aliquam malesuada bibendum arcu vitae. Eros in cursus turpis massa tincidunt dui ut. Urna nunc id cursus metus aliquam eleifend mi. Ac turpis egestas sed tempus. Diam quis enim lobortis scelerisque fermentum. Rutrum quisque non tellus orci ac auctor augue mauris.
---

## Introduction
Our typeface is Rubik, which was designed by Hubert and Fischer in 2015 for
Google Fonts. It is an open-source typeface that comes in 5 weights with
Roman and Italic styles, and can be accessed for free through [Google
Fonts][rubik].

We are primarily using only 3 of Rubik’s weights: Light, Regular, and Semibold.

## Text styles
This set of standardized text styles should cover most needs, including
headings and body copy.

For some of the larger titles, there are special mobile styles that are sized
down so that text will still fit on a smaller screen.

### Bold
Rubik Bold is very wide and heavy, so we use Rubik Semibold as our “bold”
weight option. This is used in headers, but also any text that is `<strong>` or
`<b>`. Rubik Bold should not be used.

### Italic
We try to avoid Italic text on SF.gov. It is difficult to read, especially for
people with dyslexia or visual impairments. Try to differentiate your text
using color, size, spacing, or other treatments instead.

### Links
We primarily use underlines to indicate clickable links. If a link is included
in any of the text styles, it should be underlined. Note, color is also often
used to differentiate the link text.

### Monospace
Use rarely. Monospace can help separate code or labels from natural language
text (for instance in `<kbd>` for keyboard instructions). In the future,
another possible use is when proportionally spaced characters would cause
misalignment or jumping.

```html
<p class="font-mono m-0">The quick brown fox jumps over the lazy dog.</p>
```

## Desktop text styles
These styles are used on larger screens.

### Page tiles
Use page titles to introduce and group sections of content. Ideally, page
titles should be nested, from [x-large](#x-large-title) to
[x-small](#x-small-title) sizes, but occasionally a title style is skipped for
a greater size difference. Use either [x-large](#x-large-title) title (pages
with color banner) or display [large](#large-title) (pages with no color
banner) to style the one-time page title (`<h1>`).

#### X-large title
```html
<h1 class="title-xl m-0 mb-8">The quick brown fox jumps over the lazy dog.</h1>
```

#### Large title
```html
<h1 class="title-lg m-0 mb-8">The quick brown fox jumps over the lazy dog.</h1>
```

#### Medium title
```html
<h1 class="title-md m-0 mb-8">The quick brown fox jumps over the lazy dog.</h1>
```

#### Small title
```html
<h1 class="title-sm m-0 mb-8">The quick brown fox jumps over the lazy dog.</h1>
```

#### X-small title
```html
<h1 class="title-xs m-0 mb-8">The quick brown fox jumps over the lazy dog.</h1>
```

#### X-small title link
```html
<h1 class="title-xs m-0 mb-8">
  <a href="#">The quick brown fox jumps over the lazy dog.</a>
</h1>
```

#### Display large
```html
<h1 class="display-lg m-0 mb-8">The quick brown fox jumps over the lazy dog.</h1>
```

#### Display small
```html
<h1 class="display-sm m-0 mb-8">The quick brown fox jumps over the lazy dog.</h1>
```

### Additional text styles

#### Big description
Use to draw attention to blocks of text, such as the page introduction
paragraph. This style is slightly larger in size and line height compared to
the regular body text style.

```html
<p class="big-desc m-0">Euismod in pellentesque massa placerat duis ultricies. Mauris vitae ultricies leo integer malesuada nunc vel. Sed odio morbi quis commodo odio.</p>
```

#### Body
Use for paragraph and list text. This style can be used in regular, bold and
link format.

```html
<p class="text-body m-0">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies. Mauris vitae ultricies leo integer malesuada nunc vel. Sed odio morbi quis commodo odio. 
  <br><br>
  Sagittis aliquam malesuada bibendum arcu vitae. Eros in cursus turpis massa tincidunt dui ut. Urna nunc id cursus metus aliquam eleifend mi. Ac turpis egestas sed tempus. Diam quis enim lobortis scelerisque fermentum. Rutrum quisque non tellus orci ac auctor augue mauris.
</p>
```

#### Small text
Use this style sparingly for text that is smaller than the regular body style
size, such as photo credits.

```html
<p class="text-small m-0">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

### Mobile text styles
These styles follow the same guidelines as the desktop styles but are
smaller in size for use on smaller screens.


[google fonts]: https://fonts.google.com
[rubik]: https://fonts.google.com/specimen/Rubik
