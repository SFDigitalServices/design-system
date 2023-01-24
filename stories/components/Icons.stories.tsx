import React, { ComponentType } from 'react'
import iconMeta from '../../icons/index.json'
import { Monospace, styled, theme, Flex } from '../../react'
import * as allSymbols from '../../react'
import { ComponentMeta, Story } from '@storybook/react'

type IconArgs = {
  symbol: string
  color?: string
  bg?: string
  width?: number
}

const symbolNames = iconMeta.components.map(c => c.component).sort()
const iconsBySymbolName = Object.fromEntries(
  iconMeta.components.map(c => [c.component, c])
)

const colorKeys = [''].concat(Object.keys(theme.colors))
const colorMapping = Object.fromEntries(
  colorKeys.map(key => key ? [key, `$${key}`] : ['', undefined])
)

export default {
  args: {
    symbol: symbolNames[0],
    color: undefined,
    bg: undefined,
    width: undefined,
    height: undefined
  },
  argTypes: {
    symbol: {
      name: 'Symbol',
      options: symbolNames,
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
      name: 'Width',
      control: {
        type: 'number',
        min: 8
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

export const SingleIcon: Story<IconArgs> = ({ symbol, color, bg, ...rest }: IconArgs) => {
  const Component = allSymbols[symbol] || 'svg'
  return (
    <Flex inline css={{ p: 8, bg }}>
      <Component css={{ color }} {...rest} />
    </Flex>
  )
}

const Table = styled('table', {
  'th, td': {
    p: 8
  }
})

export const AllIcons: Story<Omit<IconArgs, 'symbol'>> = args => {
  const propsString = getPropsString(args)
  return (
    <Table>
      <thead>
        <tr>
          <th align='center'>Icon</th>
          <th align='left'>Figma</th>
          <th align='left'>Import</th>
          <th align='left'>Code</th>
        </tr>
      </thead>
      <tbody>
        {symbolNames.map(symbol => {
          const { name, href } = iconsBySymbolName[symbol]
          return (
            <tr key={symbol}>
              <td align='center'><SingleIcon {...args} symbol={symbol} /></td>
              <td align='left'><a href={href}>{name}</a></td>
              <td align='left'><Monospace>{symbol}</Monospace></td>
              <td align='left'><Monospace>{`<${symbol} ${propsString} />`}</Monospace></td>
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

function getPropsString (args: Partial<IconArgs>) {
  const cssString = ['bg', 'color']
    .filter(k => args[k])
    .reduce((list, k) => list.concat(`${k}: '${args[k]}'`), [] as string[])
    .join(', ')
  return [
    cssString && `css={{ ${cssString} }}`,
    args.width && `width={${args.width}}`
  ].filter(Boolean).join(' ')
}
