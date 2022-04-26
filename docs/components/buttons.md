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

<button class="btn">
  Do something
</button>


This is the most common type of button. Use these to direct people to a clear primary action. To call out that these buttons are actionable, they are Action blue.

Try not to have more than 1 primary button on a page. Multiple primary buttons puts more cognitive load on people. It takes them more time and effort to figure out what to do.

### Inverse button

[insert code sample]

On some backgrounds, the primary button color will not have sufficient contrast. In this case, use Inverse buttons which have a white fill.


### Secondary button

[insert code sample]

Secondary buttons don’t have as much visual weight because they are outlined instead of solid. Use these if your button is not an important action on the page. 

Pair it side-by-side with a primary button to prompt toward the primary button’s action.

[insert side by side example image]


## Variations


### Block buttons

<button class="btn btn-block">
  This is a block button
</button>


Block buttons stretch to fill the width of the screen or area instead of having a set width. They are often used on mobile layouts.


### Icons

[insert image of “next” button]

Icons can be on the left or right of the text in a button. Do not use more than one icon in a button.

Icons can be on the left or right of the text in a button. Do not use more than one icon in a button.

Icons should reinforce the meaning of the button’s text. In rare cases, an icon can be used without text. Only do this if the icon is extremely universally understood, such as an arrow or search magnifying glass. [Read more about icons](/foundations/icons/)


## Appearance

Buttons have:
* corner radius of 8px
* 8px padding on the top and bottom
* 20px padding left and right, but can be variable on block buttons
* Body Bold text


## Usage

### Placement

#### Alignment

Buttons are typically left aligned with other content, not centered. For exceptions, see Centered buttons.

| <img class="w-1/1" alt="Left aligned button with left aligned text" src=""> | <img class="w-1/1" alt="Center aligned button with left aligned text" src=""> |
| ----------- | ----------- |
| Yes      | No       |
| Button is left aligned with other content | Button is centered |

#### Arrangement of multiple buttons
For 2 or more button options, place them side by side instead of on top of one another if possible. This reduces the chance of accidentally clicking the wrong one and avoids alignment issues.

| <img class="w-1/1" alt="Two buttons are to the right and left of each other" src=""> | <img class="w-1/1" alt="Two buttons are above and below each other" src=""> |
| ----------- | ----------- |
| Yes      | No       |
| Choices are side by side| Choices are stacked |


### Writing button text

Button text should ideally be less than 15 characters. A maximum of 25 characters is OK if necessary. 

Refer to the [button text library](https://sfgovdt.jira.com/wiki/spaces/SFGOV/pages/3221651460/Button+text+library) for common button uses. 

Long button text is less legible, less impactful, and sometimes can even cause wrapping.

| <img class="w-1/1" alt="Button with text Apply now" src=""> | <img class="w-1/1" alt="Button with text Apply now for your Small Business Grant" src=""> | <img class="w-1/1" alt="Button with text Apply now for your on the first line and Small Business Grant on the second line" src=""> |
| ----------- | ----------- | ----------- |
| Yes      | No       | No       |
| Button text is short (details can be explained outside the button)| Button text is very long | Button text wraps to fit |



## Technical implementation

### Link buttons

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
