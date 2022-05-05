---
title: Fields and Forms
subtitle: Forms are easily one of the essential parts of the SF.gov product. They allow us to lower the friction involved when applying for a service or grant.
---

This documentation will cover some of the more technical aspects of the forms, but please visit our [Form Style Guide](https://sfgovdt.jira.com/wiki/spaces/SFGOV/pages/1807024424/Form+style+guide) for guidance on writing effective forms.

## Field types <!-- This will be replaced with a component later. -->
This page documents the general guidelines that apply to most form field types. Pick from our form fields selection below for information around a specific field type.

|       |  |
| ----------- | ----------- |
| [Text field](https://design-system.sf.gov/components/forms/#) | [Chips](https://design-system.sf.gov/components/forms/#) |
| [Radio button](https://design-system.sf.gov/components/forms/#) | [File upload](https://design-system.sf.gov/components/forms/#) |
| [Checkbox button](https://design-system.sf.gov/components/forms/#) | [Form alerts](https://design-system.sf.gov/components/forms/#) |
| [Dropdown](https://design-system.sf.gov/components/forms/#) | [Form patterns](https://design-system.sf.gov/components/forms/#) |

## Form field structure

### Form field layout

<figure>
  <img class="w-1/1" alt="A diagram showing form field structure" src="https://user-images.githubusercontent.com/957314/158282202-43128233-c1c7-464c-b2d7-d3ece55850b6.png">
  <figcaption align="center">1. Optional label, 2. Field name, 3. Field description, 4. Hint text, 5. Field area, 6. Field status message</figcaption>
</figure>

#### Optional label

Many web forms indicate required fields with red text ("required") or asterisks ("*"). We’ve decided to take a slightly different route when distinguishing between required and optional fields.

Most of our forms have more required fields than optional ones. This leads to a series of red asterisks (*) next to most fields. While pretty universal on forms, the asterisk next to the field label is not universally understood and can lead to confusion. If the intent of the asterisk is not understood, the user will have to find your footnote describing its use and then navigate back to their place.

The repeated use of a red asterisk also adds unnecessary visual noise to an interface that benefits from having the least visual noise possible.

#### Field name

The field name should be as specific as possible and as brief as possible. We have the field description and hint text to add more context to the field if needed.

#### Field description

Use the field description when required to add context to the form field beyond what the field label provides.

Two guiding principles with the field description are:

- There isn’t a need to use it with every field. If the field name is clear and a concept that doesn’t require further explanation, like “first name,” skip it.
- Keep it as brief as possible without degrading the message.

#### Hint text<a name="placeholder-text"></a>

Our implementation of the placeholder text is somewhat different from most. We do not use the `placeholder` attribute, and instead provide hint text outside the text field. This placement ensures that it's always visible, allows for translation, and makes it easier for screen readers to access since [placeholder text is not universally supported](https://www.w3.org/WAI/tutorials/forms/instructions/#placeholder-text).

Some guidelines for hint text are:

- **Use sparingly**. No hint is needed if the field name is clear and doesn’t require further explanation (e.g. “First name”).
- But **be thoughtful** about its use. For instance, if your audience includes a sizeable immigrant population it may be helpful to add “Your surname or family name” as hint text for a “last name” field.
- **Keep it short**. Hint text should not exceed one line.

#### Field area

In the example above, the field area contains a text field for typed input. The field area in our main configuration could be any interactive form element beyond a text field. Examples of an interactive form element could include a text area, date picker, a series of radio buttons, etc.

#### Field status message

The status message contains text describing the field's error or success status.

The text should describe the status of an individual field and not the larger form section.

An example would be communicating that the user placed text characters in a date field vs. an automatic lookup that relied on multiple fields and failed to find a result.
