import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { StrictArgTypes } from '@storybook/csf'
import {
  Box,
  BoxOwnProps,
  Button,
  ButtonProps,
  ButtonVariant,
  PrimaryButton,
  SecondaryButton,
  InverseButton,
  LinkButton,
  GenericButtonProps
} from '@sfgov/react'

type ButtonArgs = {
  text: string
  variant?: ButtonVariant
  block?: boolean
  hocus?: boolean
  as?: ButtonProps['as']
  href?: string
}

export default {
  component: Button,
  args: {
    text: 'Do something',
    as: 'button',
    href: 'javascript:void(0)'
  } as ButtonArgs,
  argTypes: {
    as: {
      name: 'Element',
      options: [
        'button',
        'a'
      ],
      control: {
        type: 'select',
        labels: {
          button: '<button>',
          a: '<a> (link)'
        }
      }
    },
    text: {
      name: 'Text',
      type: {
        name: 'string'
      }
    },
    href: {
      name: 'URL (href)',
      type: {
        name: 'string'
      },
      // only show the href control if (as === 'a')
      if: {
        arg: 'as',
        eq: 'a'
      }
    }
  } as StrictArgTypes<ButtonArgs>,
  parameters: {
    sourceLink: '/components/buttons/',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5895%3A3285'
    }
  }
} as ComponentMeta<ComponentType<ButtonArgs>>

export const Primary = createButtonStory(PrimaryButton)

export const Secondary = createButtonStory(SecondaryButton)

export const Inverse = createButtonStory(InverseButton)
Inverse.parameters = {
  container: {
    bg: 'blue.dark',
    color: 'white'
  } as BoxOwnProps
}

export const Link = createButtonStory(LinkButton)

export const Generic = createButtonStory<GenericButtonProps>(Button)

Generic.argTypes = {
  variant: {
    name: 'Variant',
    options: [
      'primary',
      'secondary',
      'inverse',
      'link'
    ] as ButtonVariant[],
    control: {
      type: 'select',
      labels: {
        primary: 'Primary',
        secondary: 'Secondary',
        inverse: 'Inverse',
        link: 'Link'
      } as Record<ButtonVariant, string>
    }
  }
}

Generic.args = {
  variant: 'primary'
}

export const Alignment: Story<ButtonArgs> = (args: ButtonArgs) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
    <PrimaryButton {...args}>Primary</PrimaryButton>
    <SecondaryButton {...args}>Secondary</SecondaryButton>
    <InverseButton {...args}>Inverse</InverseButton>
    <LinkButton {...args}>Link</LinkButton>
  </Box>
)

Alignment.parameters = {
  container: {
    bg: 'blue.1'
  }
}

type LabelProps = ButtonProps & {
  $label: string,
  cellStyle?: BoxOwnProps['sx']
}
const cols: LabelProps[] = [
  { $label: 'Rest' },
  { $label: 'Hover/focus', __simulatedHocus: true }
]
const rows: LabelProps[] = [
  { $label: 'Inline' },
  { $label: 'Block', $block: true, cellStyle: { minWidth: '300px' } }
]

function createButtonStory<P extends ButtonProps = ButtonProps> (Component: ComponentType<P>) {
  const derp = <Button variant='primary' />
  return (({ text, ...rest}: ButtonArgs) => {
    return (
      <table>
        <thead>
          <tr>
            <td></td>
            {cols.map(({ $label }) => (
              <th key={$label} className='p-8 text-left'>{$label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ $label, cellStyle: rowStyle, ...row }) => (
            <tr key={$label}>
              <th scope='row' className='p-8 text-right'>{$label}</th>
              {cols.map(({ $label: columnLabel, cellStyle: colStyle, ...col }) => (
                <td key={columnLabel} className='p-8 text-left'>
                  <Box sx={{ ...rowStyle, ...colStyle }}>
                    <Component {...row} {...col} {...rest}>{text}</Component>
                  </Box>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }) as Story<ButtonArgs>
}
