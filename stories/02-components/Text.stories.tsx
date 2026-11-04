import React from 'react'
import { Text, type TextProps } from '@/design-system'
import type { Meta, StoryObj } from '@storybook/react'
import { disableArgTypes } from '../utils'

type TextVariant = NonNullable<TextProps['variant']>

// This type will throw red squigglies if the mapping is missing a variant
const VARIANT_NAMES: { [K in TextVariant]: string } = {
  displayXXXl: 'Display (XXXL)',
  displayLg: 'Display (L)',
  headingXXl: 'Heading (XXL)',
  headingXl: 'Heading (XL)',
  headingXlSans: 'Heading (XL, sans)',
  headingLg: 'Heading (L)',
  headingLgListItem: 'Heading list item (L)',
  headingMd: 'Heading (M)',
  headingSm: 'Heading (S)',
  headingXs: 'Heading (XS)',
  body: 'Body',
  label: 'Label',
  labelXs: 'Label (XS)',
  labelSm: 'Label (S)',
  labelMd: 'Label (M)',
  small: 'Small',
  mono: 'Monospace'
}

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.'
  },
  argTypes: {
    children: {
      name: 'Text',
      type: 'string'
    }
  }
}

export default meta

type TextStory = StoryObj<typeof meta>

export const AllVariants: TextStory = {
  render(args) {
    const className = 'p-8 text-left'
    return (
      <table>
        {Object.entries(VARIANT_NAMES).map(([variant, name]) => (
          <tr key={name}>
            <th scope="row" className={className}>
              {name}
            </th>
            <td className={className}>
              <code>{variant}</code>
            </td>
            <td className={className}>
              <Text
                as="div"
                variant={variant as TextVariant}
                {...args}
                key={name}
              />
            </td>
          </tr>
        ))}
      </table>
    )
  }
}

export const Variant: TextStory = {
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'select',
      options: Object.keys(VARIANT_NAMES)
    }
  }
}

export const DisplayXXXl = variantStory('displayXXXl')
export const DisplayLg = variantStory('displayLg')
export const HeadingXXl = variantStory('headingXXl')
export const HeadingXl = variantStory('headingXl')
export const HeadingXlSans = variantStory('headingXlSans')
export const HeadingLg = variantStory('headingLg')
export const HeadingLgListItem = variantStory('headingLgListItem')
export const HeadingMd = variantStory('headingMd')
export const HeadingSm = variantStory('headingSm')
export const HeadingXs = variantStory('headingXs')
export const Body = variantStory('body')
export const Label = variantStory('label')
export const LabelXs = variantStory('labelXs')
export const LabelSm = variantStory('labelSm')
export const LabelMd = variantStory('labelMd')
export const Small = variantStory('small')
export const Monospace = variantStory('mono')

function variantStory(variant: TextVariant): TextStory {
  return {
    name: VARIANT_NAMES[variant] || variant,
    args: {
      variant
    },
    argTypes: disableArgTypes('variant')
  }
}
