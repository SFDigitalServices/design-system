import React, { ComponentType } from 'react'
import { Icon, IconName, iconsIndex, Monospace, styled, theme } from '@sfgov/react'
import { ComponentMeta, Story } from '@storybook/react'

type IconArgs = {
  symbol: IconName
  color: string
  width?: number
  height?: number
}

const sortedKeys = Object.keys(iconsIndex).sort() as IconName[]

const colorKeys = Object.keys(theme.colors)
const colorMapping = Object.fromEntries(
  colorKeys.map(key => [key, `$${key}`])
)

export default {
  component: Icon,
  args: {
    symbol: 'accessibility',
    color: 'slateL4',
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

export const SingleIcon: Story<IconArgs> = ({ color, ...rest }: IconArgs) => <Icon css={{ color }} {...rest} />

const TD = styled('td', { p: 8 })
const TH = styled('th', { p: 8 })

export const AllIcons: Story<Omit<IconArgs, 'symbol'>> = args => {
  const jsxProps = [
    args.color && `css={{ color: '${args.color}' }}`,
    ...['width', 'height'].map(p => args[p] && `${p}={${args[p]}}`)
  ].filter(Boolean)
  return (
    <table>
      <thead>
        <tr>
          <TH align='center'>Icon</TH>
          <TH align='left'>Name</TH>
          <TH align='left'>JSX</TH>
          <TH align='left'>Figma</TH>
        </tr>
      </thead>
      <tbody>
        {sortedKeys.map(symbol => {
          const { name, href } = iconsIndex[symbol]
          return (
            <tr key={symbol}>
              <TD align='center'><SingleIcon {...args} symbol={symbol} /></TD>
              <TD align='left'><Monospace>{symbol}</Monospace></TD>
              <TD align='left'><Monospace>{`<Icon symbol='${symbol}' ${jsxProps.join(' ')} />`}</Monospace></TD>
              <TD align='left'><a href={href}>{name}</a></TD>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

AllIcons.parameters = {
  controls: {
    exclude: ['symbol']
  }
}
