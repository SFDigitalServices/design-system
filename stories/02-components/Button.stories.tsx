import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@/design-system'

const ALL_VARIANTS: NonNullable<ButtonProps['variant']>[] = [
  'primary',
  'secondary',
  'link'
]

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button'
  },
  argTypes: {
    children: {
      name: 'content',
      control: {
        // FIXME: should we enforce a max length?
        // maxLength: 50
      }
    }
  },
  render: (props) => (
    <div className="space-y-16">
      <div>
        <Button {...props} />
      </div>
      <div>
        A button with some text next to it: <Button {...props} /> and some other
        text
      </div>
      <div>
        And a block button:
        <Button {...props} block />
      </div>
    </div>
  )
} satisfies Meta<typeof Button>

export default meta

type ButtonStory = StoryObj<typeof meta>

export const AllVariants: ButtonStory = {
  render: ({ children, ...args }) => (
    <>
      <div className="flex gap-8">
        {ALL_VARIANTS.map((variant) => (
          <Button {...args} variant={variant} key={variant}>
            {children} ({variant})
          </Button>
        ))}
        <Button {...args} variant="link" as="a" href="#">
          Link
        </Button>
      </div>
    </>
  )
}

export const Primary: ButtonStory = {}

export const Secondary: ButtonStory = {
  args: {
    variant: 'secondary'
  }
}

export const Link: ButtonStory = {
  args: {
    variant: 'link'
  }
}

export const LinkTag: ButtonStory = {
  args: {
    as: 'a',
    href: '#',
    variant: 'link'
  }
}
