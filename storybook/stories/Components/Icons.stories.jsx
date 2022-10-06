import IconComponent, { symbols } from '../../src/Icon'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  args: {
    symbol: 'info'
  },
  argTypes: {
    size: {
      name: 'Size',
      type: 'number',
      description: 'Width and height, in pixels',
      defaultValue: 20,
      control: {
        type: 'number',
        min: 16,
        max: 64
      }
    }
  },
  parameters: {
    controls: {
      expanded: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P0usvPQSAKOzqcH5mPFf1u/Assets?node-id=38%3A8'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Icon = IconComponent.bind({})

Icon.argTypes = {
  symbol: {
    name: 'Icon',
    description: 'The predefined symbol name',
    type: 'string',
    options: symbols,
    control: {
      type: 'select'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const AllIcons = args => (
  <table style={{ borderCollapse: 'collapse' }}>
    <tbody>
      {symbols.map(symbol => (
        <tr key={symbol}>
          <th scope='row' className='font-normal font-mono text-left'>{symbol}</th>
          <td className='p-16'>
            <IconComponent {...args } symbol={symbol} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
