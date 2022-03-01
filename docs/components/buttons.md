---
title: Buttons
---

Use buttons for important or major actions.

Buttons draw more attention than a simple text link. Because of their larger surface and color, they are visually more findable and easier to click or tap. 

## Types of buttons


### Primary

<img width="175" alt="primarybutton" src="https://user-images.githubusercontent.com/32344055/156226459-7bf023c6-e70b-4df5-8247-485bf3e612c2.png">

<button class="btn">
  Do something
</button>

Use these to direct people to a clear primary action. Try not to have more than 1 primary button on a page (or section of a page). 

To call out that they are actionable, they are Action blue. This is the most common type of button.


### Secondary

[insert image]

Secondary buttons don’t have as much visual weight because they are outlined instead of solid. Use these if your button is not the most important action or you do not want to draw as much attention.

You can pair it side-by-side with a primary button if you want to make two buttons more distinguishable from each other.

[insert side by side example image]


### Inverse

[insert image]

On some backgrounds, the primary button color will not have sufficient contrast. In this case, use Inverse buttons which have a white fill.


## Variations


### Centered

[insert image of centered button in situ]

Centered buttons are typically used on mobile layouts when you want buttons to stretch to fill the width of the screen. They come in the same types - primary, secondary, and inverse.


### Icons

[insert image of “next” button]

Icons can be on the left or right of the text in a button. Do not use more than one icon in a button.

Icons should reinforce the meaning of the button’s text. In rare cases, an icon can be used without text. Only do this if the icon is extremely universally understood, such as an arrow or search magnifying glass. [Read more about icons](#)


## Style

Something goes here

## Usage

### When to use

Use a button when an action has more weight or significance, for instance when:

* There is a clear primary action users should take
* Highlighting a suggested action
* A significant or destructive action will be applied and users need to be aware

If the action should not be highlighted, a text link may be a better option.

You should not have more than 1 button on a page (or section of a page). With more than one primary button, it requires more cognitive load for users to figure out what action they are expected to take.

### How to use

Buttons are typically left aligned with other content, not centered. For exceptions, see Centered buttons.

[insert do and do not with a centered button]

Button text should ideally be less than 15 characters. A maximum of 25 characters is OK if necessary. 

[insert do and do not with too long button, maybe wrapping]

If you have 2 button options, place them side by side instead of on top of one another. This reduces the chance of accidentally clicking the wrong one.

[insert do and do not with side by side, top/bottom]



## Link buttons

This is some text about link buttons. We should explain why we want links to
look like buttons.

### Inline link
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

## HTML buttons

This is some text about actual styling actual `<button>` elements.

### Inline button
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
