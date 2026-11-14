import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ButtonProps } from './Button'
import { Button } from './Button'

const ALL_VARIANTS: NonNullable<ButtonProps['variant']>[] = [
  'primary',
  'secondary',
  'link'
]

const meta: Meta<typeof Button> = {
  title: 'React/Button',
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
}

export default meta

type ButtonStory = StoryObj<typeof meta>

export const AllVariants: ButtonStory = {
  render: ({ children, ...args }) => (
    <div className="flex flex-wrap gap-8">
      {ALL_VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {children} ({variant})
        </Button>
      ))}
      <Button {...args} variant="link" as="a" href="#">
        Link
      </Button>
    </div>
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
    // @ts-expect-error derp
    as: 'a',
    href: '#',
    variant: 'link'
  }
}
