---
title: Buttons
---
Use buttons for major actions.

Buttons draw more attention than a simple text link. Because of their larger surface and color, they are visually more findable and easier to click or tap.

## When to use

Use a button when an action has more weight or significance. Examples:

* There is a clear primary action people should take
* Highlighting a suggested action in a page section
* A significant or destructive action will be applied and users need to be aware

If the action should not be prompted, a text link may be a better option.

## Types of buttons

### Primary button

This is the most common type of button. Use these to direct people to a clear primary action. To call out that these buttons are actionable, they are action blue (`{{ tokens.colors.action }}`).

```html
<button class="btn">
  Do something
</button>
```

Try not to have more than 1 primary button on a page. Multiple primary buttons puts more cognitive load on people. It takes them more time and effort to figure out what to do.

### Inverse button

On some backgrounds, the primary button color will not have sufficient contrast. In this case, use inverse buttons, which have a white fill.

```html wrapper_class="bg-blue-dark p-20"
<div class="bg-blue-dark">
  <button class="btn btn-inverse">
    Do something
  </button>
</div>
```

### Secondary button

```html
<button class="btn btn-secondary">
  Do something
</button>
```

Secondary buttons don’t have as much visual weight because they are outlined instead of solid. Use these if your button is not an important action on the page.

Pair it side-by-side with a primary button to prompt toward the primary button’s action.

```html id="buttons-side-by-side"
<div class="flex gap-20">
  <button class="btn btn-secondary">
    Cancel
  </button>
  <button class="btn">
    Continue
  </button>
</div>
```

## Variations

### Block buttons

Block buttons stretch to fill the width of the screen or area instead of having a set width. They are often used on mobile layouts.

```html
<div class="bg-blue-1 p-20 text-slate text-body">
  <div>COVID-19 vaccination appointments available only for San Francisco Health Network patients.</div>
  <a href="#" class="btn btn-block my-20">
    Check for availability
  </a>
  <div class="text-center">
    Or call <a href="tel:1234567890" class="text-action">123-456-7890</a>
  </div>
</div>
```

### Icons

Icons can be on the left or right of the text in a button. Do not use more than one icon in a button.

```html
<div class="flex justify-center items-center gap-16 title-xs">
  <a href="#" class="btn btn-secondary flex gap-8">
    <sfgov-icon symbol="arrow-left"></sfgov-icon>
    <span>Previous</span>
  </a>
  <a href="#" class="text-action">1</a>
  <span>...</span>
  <a href="#" class="text-action">8</a>
  <a href="#" class="text-action">9</a>
  <span>10</span>
  <a href="#" class="text-action">11</a>
  <a href="#" class="btn btn-secondary flex gap-8">
    <span>Next</span>
    <sfgov-icon symbol="arrow-right"></sfgov-icon>
  </a>
</div>
```

Icons should reinforce the meaning of the button’s text. In rare cases, an icon can be used without text. Only do this if the icon is extremely universally understood, such as an arrow or search magnifying glass. [Read more about icons](/foundations/icons/)

## Appearance

<img alt="" src="/static/images/button-specs.png" width="392" class="min-w-full">

Buttons have:
* corner radius of 8px
* 8px padding on the top and bottom
* 20px padding left and right, but can be variable on block buttons
* Body Bold text

## Usage

### Alignment

Buttons are typically left aligned with other content, not centered. For exceptions, see <a href="#block-buttons">block buttons</a>.

| <img class="w-1/1" alt="Left aligned button with left aligned text" src="/static/images/alignment-correct.png"> | <img class="w-1/1" alt="Center aligned button with left aligned text" src="/static/images/alignment-incorrect.png"> |
| ----------- | ----------- |
| Yes      | No       |
| Button is left aligned with other content | Button is centered |

### Arrangement of multiple buttons

For 2 or more button options, place them side by side instead of on top of one another if possible. This reduces the chance of accidentally clicking the wrong one and avoids alignment issues.

| <div class="flex gap-20"><button class="btn btn-secondary">Cancel</button><button class="btn">Continue</button></div> | <div><button class="btn btn-secondary mb-20">Cancel</button><br><button class="btn mb-20">Continue</button></div> |
| ----------- | ----------- |
| Yes      | No       |
| Choices are side by side | Choices are stacked |

### Writing button text

Button text should ideally be less than 15 characters. A maximum of 25 characters is OK if necessary.

Refer to the [button text library](https://sfgovdt.jira.com/wiki/spaces/SFGOV/pages/3221651460/Button+text+library) for common button uses.

Long button text is less legible, less impactful, and sometimes can even cause wrapping.

| <button class="btn mb-48">Apply now</button> | <button class="btn mb-48">Apply now for this grant</button> |
| ----------- | ----------- |
| Yes      | No       |
| Button text is short | Button text is very long |

| <button class="btn mb-20">Apply now</button> | <button class="btn mb-20">Apply now for your<br>Small Business Grant</button> |
| ----------- | ----------- |
| Yes      | No       |
| Button text fits on one line | Button text wraps to fit |

## HTML implementation

Buttons styles can be applied to both HTML links (`<a>` elements) and interactive buttons (`<button>`).

### Link buttons

```html
<a class="btn" href="#">
  This is a link
</a>
```

### Block link

```html
<a class="btn btn-block" href="#">
  This is a block link
</a>
```

### HTML buttons

```html
<button class="btn">
  This is a button
</button>
```

### Block button

```html
<button class="btn btn-block">
  This is a block button
</button>
```

### Horizontal arrangement

For horizontal alignment and correct spacing (`{{ tokens.spacing['20'] }}`), wrap the buttons in an element with `flex gap-x-20`:

```html
<div class="flex gap-x-20">
  <button class="btn btn-secondary">Cancel</button>
  <button class="btn">Continue</button>
</div>
```
