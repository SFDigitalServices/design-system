import React, { ComponentType } from 'react'
import { styled, Text as T, TextProps, TextVariant } from '@sfgov/react'
import { ComponentMeta, Story } from '@storybook/react'
import { StrictArgTypes } from '@storybook/csf'

const variants: TextVariant[] = [
  'body',
  'bigDesc',
  'small',
  'titleXs',
  'titleSm',
  'titleMd',
  'titleLg',
  'titleXl',
  'displaySm',
  'displayLg'
]

type TextArgs = {
  content: string
  variant: TextVariant
  lang?: string
  as?: string
}

export default {
  component: T,
  args: {
    content: 'The quick brown fox jumps over the lazy dog',
    lang: 'en'
  } as TextArgs,
  argTypes: {
    content: {
      name: 'Text content'
    },
    variant: {
      name: 'Variant',
      options: variants,
      control: {
        type: 'select',
        labels: {
          body: 'Body',
          bigDesc: 'Big description',
          small: 'Small',
          titleXs: 'Title (xs)',
          titleSm: 'Title (sm)',
          titleMd: 'Title (md)',
          titleLg: 'Title (lg)',
          titleXl: 'Title (xl)',
          displaySm: 'Display (sm)',
          displayLg: 'Display (lg)'
        } as Record<TextVariant, string>
      }
    },
    lang: {
      name: 'Language',
      options: [
        'en',
        'es',
        'zh',
        'fil'
      ],
      control: {
        type: 'select',
        labels: {
          en: 'English',
          es: 'Spanish',
          zh: 'Chinese',
          fil: 'Filipino'
        }
      }
    }
  } as StrictArgTypes<TextArgs>
} as ComponentMeta<ComponentType<TextArgs>>

export const Text = createTextStory(T)

const Cell = styled('td', { p: 8 })

export const AllStyles = ({ content, ...rest }: Omit<TextArgs, 'variant'>) => (
  <table>    
    {variants.map(variant => (
      <tr key={variant}>
        <Cell as='th' scope='row' align='right'><T variant='mono'>{variant}</T></Cell>
        <Cell><T variant={variant} {...rest}>{content}</T></Cell>
      </tr>
    ))}
  </table>
)

function createTextStory (Component: ComponentType<Partial<TextProps>>) {
  return (
    ({ content, ...rest }: TextArgs) => <Component {...rest}>{content}</Component>
  ) as Story<TextArgs>
}
