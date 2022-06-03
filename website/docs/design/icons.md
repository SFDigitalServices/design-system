---
title: Icons
description: Icon design and usage guidelines
tags: [icons]
---

These icons allow our users to quickly see interface intent at a glance and take part in establishing hierarchy.

Icons also assist with accessibility in scenarios of low literacy or English proficiency.

## Design Guidelines

### Interface Icons vs. Picture Icons

The San Francisco Design System utilizes two types of images to assist users; interface icons and Picture icons.

Interface icons, or just icons, are generally used to convey an action or intent and are not illustrative or decorative.

Picture icons serve some of the same purposes as the interface icons but in a more expressive way.

### Deciding on a new icon

Before creating a new icon, pause and look for an icon in the SF DesSys icon library that clearly conveys your message; there’s no reason to bloat the icon library for the sake of having variety.

[SF DesSys icon library](../libraries/iconsLibrary)

<figure>
  <img className="w-1/1" alt="A calendar icon being used with the word Events and as calendar icon" src="https://user-images.githubusercontent.com/957314/152218822-6ca3e515-61df-4450-b287-9db715513ea0.png" />
  <figcaption align="center"><b>In this case, the calendar icon can represent and event and a calendar toggle button</b></figcaption>
</figure>

Once you’ve decided that there is a need for a new icon, you have to decide on the best way to represent the concept. In most cases, there is a representation of that idea that already exists.

<figure>
  <img className="w-1/1" alt="Examples of delete icons" src="https://user-images.githubusercontent.com/957314/151464294-ac829556-2d12-49bb-b48d-14098d5dce13.png" />
  <figcaption align="center"><b>A search for delete icon will generally display a trashcan or an x mark</b></figcaption>
</figure>

### Creating a new icon

Great! You’ve decided there is a need for this icon, and you know exactly what it should be. We’ve created guidelines to help your new icon feel like a cohesive member of the San Francisco Design System.

#### Interface icons

##### Workspace

20px x 20px artboard with a 1px grid, and a 2px padding.

<img width="200" alt="A 20px by 20px artboard with guides" src="https://user-images.githubusercontent.com/957314/151464344-9e35ce06-6602-4d9b-bc5f-cffd3f032d04.png" />

Keylines & base shapes

We utilize keylines to assist with the design of our icons. Having key shapes as part of the icon template allows for uniformity of size and dimension across our libraries and the general shape of the icon.

We have our orthaganals and keyshapes listed below

<img width="200" alt="Icon artboard keylines" src="https://user-images.githubusercontent.com/957314/151464591-dbf2724d-0cd9-45f2-b235-ef9a2634eb3b.png" />

<img width="200" alt="Circle Icon artboard" src="https://user-images.githubusercontent.com/957314/151464587-ea791823-872e-44d6-bdd1-9d5cf7f7ff7d.png" />
<img width="200" alt="Square Icon artboard" src="https://user-images.githubusercontent.com/957314/151464590-b9caa719-685a-47c8-aca6-b930b595ffe7.png" />
<img width="200" alt="Portrait rectangle Icon artboard" src="https://user-images.githubusercontent.com/957314/151464589-20fe39fb-6553-4863-b1d7-81bc7d88e455.png" />
<img width="200" alt="Landscape rectangle Icon artboard" src="https://user-images.githubusercontent.com/957314/151464588-4e40b571-f8bb-4538-8c6f-a47957339b31.png" />

#### Style

##### Stroke

Draw interface icons with a consistent 2px stroke both on the inside and outside strokes of the icon.

<img width="200" alt="Displaying the use of 2px stroke width throughout icon" src="https://user-images.githubusercontent.com/957314/151464770-67b3f744-8b1a-48e0-91f5-8eb61fd680bf.png" />

##### Fill vs. no fill

Currently, SFDesSys icons contain no fill beyond the stroke’s fill.

| <img className="w-1/1" alt="Correctly displaying an outlined icon" src="https://user-images.githubusercontent.com/957314/151464853-902b51be-0c6b-4794-b79e-ab711ac32329.png" /> | <img className="w-1/1" alt="An icon with a fill instead of outlined" src="https://user-images.githubusercontent.com/957314/151464961-e526f296-bb78-45a0-8321-bc5c210792cb.png" /> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yes                                                                                                                                                                             | No                                                                                                                                                                                |
| Icon is drawn with a stroke only                                                                                                                                                | The icon should not be filled with color                                                                                                                                          |

##### Corners

The corner radius on the outside of the stroke is 1px, while on the inside of the stroke is 0px.

<img width="200" alt="1px corner radius displayed using a circle" src="https://user-images.githubusercontent.com/957314/151464813-5acc3f81-da90-49fe-99a6-d8519bbc4fe1.png" />

##### Icon perspective

Make sure to illustrate the icons from the same perspective as the other icons. SFDesSys icons are drawn in a single-point, forward-facing view.

| <img className="w-1/1" alt="Icon illustrated from a single-point perspective" src="https://user-images.githubusercontent.com/957314/151465020-1a5c43cc-ba9f-4731-b6ee-b76cfe553a9d.png" /> | <img className="w-1/1" alt="Icon illustrated in an isometric way" src="https://user-images.githubusercontent.com/957314/151465093-5b4e364d-793b-464b-86e3-ac34465c2cb2.png" /> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Yes                                                                                                                                                                                        | No                                                                                                                                                                             |
| Icons should be drawn from a single point                                                                                                                                                  | Icon is drawn in an isometric style                                                                                                                                            |

## Usage Guidelines

### When to use

It’s primarily up to the designer when to introduce an icon to their design. The designer should ask if an icon will enhance the experience of the user or create noise and confusion.

### Guide for use

#### Sizing

The icons are sized at 20px and should generally not be scaled beyond that size.

| <img className="w-1/1" alt="icon-size-correct" src="https://user-images.githubusercontent.com/957314/151465258-0f916e68-b94b-4183-9853-2aa8805f3ea6.png" /> | <img className="w-1/1" alt="icon-size-incorrect" src="https://user-images.githubusercontent.com/957314/151465276-4ee44c10-dbfc-435f-83a0-e0ba1e342f7a.png" /> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yes                                                                                                                                                         | No                                                                                                                                                            |
| Icon is implemented at 20px                                                                                                                                 | Icon has been scaled beyond the recommended 20px                                                                                                              |

#### Margins & padding

We’ve created all icons 2px padding, and that padding should not be infringed upon by other icons or text.

| <img className="w-1/1" alt="icon-margin-correct" src="https://user-images.githubusercontent.com/957314/151465295-84677aab-e5f0-4c66-8935-00b3c4c7d4ac.png" /> | <img className="w-1/1" alt="icon-margin-incorrect" src="https://user-images.githubusercontent.com/957314/151465312-a47a07b4-e280-4e94-9415-c2a3fb7933cc.png" /> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yes                                                                                                                                                           | No                                                                                                                                                              |
| The right padding of the icon is respected                                                                                                                    | The right padding on the icon has been ignored and crowds the label                                                                                             |

#### Alignment

The icons should be center aligned to the accompanying label and not to the baseline of the icon.

| <img className="w-1/1" alt="icon-alignment-correct" src="https://user-images.githubusercontent.com/957314/151465336-51e25205-6332-4d40-b7ff-4e6b3778fc3c.png" /> | <img className="w-1/1" alt="icon-alignment-incorrect" src="https://user-images.githubusercontent.com/957314/151465355-161d8d63-27e7-4836-b174-7b583dec1202.png" /> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Yes                                                                                                                                                              | No                                                                                                                                                                 |
| Icon is center aligned with the label                                                                                                                            | The icon and text should not sit on the same baseline                                                                                                              |

#### Label Placement

A label should generally accompany icons with a few exceptions. When in doubt, get a sanity check from other designers, your accessibility professional, or quick tests.

| <img className="w-1/1" alt="icon-label-correct" src="https://user-images.githubusercontent.com/957314/151465383-ed53a872-1579-4f89-8a8b-c492735e7e09.png" /> | <img className="w-1/1" alt="icon-label-incorrect" src="https://user-images.githubusercontent.com/957314/151465406-0c81e84a-5916-4d44-8a20-66c8d6b36142.png" /> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yes                                                                                                                                                          | No                                                                                                                                                             |
| An uncommon icon has an accompanying label for clarity                                                                                                       | The icon is alone in the button and its purpose may not be clear                                                                                               |

#### Color

Icons should be a single color and have the same color as their label.

| <img className="w-1/1" alt="icon-color-correct" src="https://user-images.githubusercontent.com/957314/151465434-449ccd31-a1e4-48f5-a8b6-38f9b87632b1.png" /> | <img className="w-1/1" alt="icon-color-incorrect" src="https://user-images.githubusercontent.com/957314/151465468-c3ca2ba3-5c91-4768-a4a0-3bce6b976eef.png" /> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yes                                                                                                                                                          | No                                                                                                                                                             |
| The icon and label are both the same slate blue                                                                                                              | The icon's color should be updated to match the label                                                                                                          |
