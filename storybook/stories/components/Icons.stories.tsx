import React, { ComponentType } from 'react'
import { Icon, Icons, Monospace, styled, theme, Flex } from '@sfgov/react'
import { ComponentMeta, Story } from '@storybook/react'

type IconArgs = {
  symbol: keyof typeof Icons
  color: string
  bg: string
  width?: number
  height?: number
}

const sortedKeys = Object.keys(Icons).sort()
// const 

const colorKeys = Object.keys(theme.colors)
const colorMapping = Object.fromEntries(
  colorKeys.map(key => [key, `$${key}`])
)

export default {
  component: Icon,
  args: {
    symbol: sortedKeys[0],
    color: 'slateL4',
    bg: 'white',
    width: 20
  },
  argTypes: {
    symbol: {
      name: 'Symbol',
      options: sortedKeys,
      control: {
        type: 'select'
      }
    },
    color: {
      name: 'Color',
      options: colorKeys,
      mapping: colorMapping,
      control: {
        type: 'select'
      }
    },
    bg: {
      name: 'Background',
      options: colorKeys,
      mapping: colorMapping,
      control: {
        type: 'select'
      }
    },
    width: {
      name: 'Size',
      control: {
        type: 'number',
        min: 1
      }
    }
  },
  parameters: {
    sourceLink: '/components/icons/',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P0usvPQSAKOzqcH5mPFf1u/Assets?node-id=38%3A8'
    }
  }
} as ComponentMeta<ComponentType<IconArgs>>

export const IconComponent: Story<IconArgs> = ({ symbol, color, bg, ...rest }: IconArgs) => (
  <Flex inline css={{ p: 8, bg }}>
    <Icon as={Icons[symbol].component} css={{ color }} {...rest} />
  </Flex>
)

const Table = styled('table', {
  'th, td': {
    p: 8
  }
})

export const AllIcons: Story<Omit<IconArgs, 'symbol'>> = args => {
  return (
    <Table>
      <thead>
        <tr>
          <th align='center'>Icon</th>
          <th align='left'>Name</th>
          <th align='left'>JSX</th>
          <th align='left'>Figma</th>
        </tr>
      </thead>
      <tbody>
        {sortedKeys.map(symbol => {
          const { name, href } = Icons[symbol]
          return (
            <tr key={symbol}>
              <td align='center'><IconComponent {...args} symbol={symbol} /></td>
              <td align='left'><Monospace>{symbol}</Monospace></td>
              <td align='left'>
                <Monospace as='pre'>
                  {`import { Icon, ${symbol} } from '@sfgov/react'\n`}
                  {`<Icon symbol={${symbol}} />`}
                </Monospace>
              </td>
              <td align='left'><a href={href}>{name}</a></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

AllIcons.parameters = {
  controls: {
    exclude: ['symbol']
  }
}
