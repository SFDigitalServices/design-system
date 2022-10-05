import IconComponent, { symbols } from '../../src/Icon'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  component: IconComponent,
  decorators: [
    withMultipleSizes
  ],
  args: {
    symbol: 'info'
  },
  argTypes: {
    symbol: {
      options: symbols,
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P0usvPQSAKOzqcH5mPFf1u/Assets?node-id=38%3A8'
    },
    sizes: [
      20,
      40,
      64,
      96
    ]
  }
}

export const Icon = (args, context) => <IconComponent {...context} {...args} />

function withMultipleSizes (Story, { parameters: { sizes } }) {
  return <div className='flex items-start gap-20'>
    {sizes.map(size => <Story size={size} />)}
  </div>
}