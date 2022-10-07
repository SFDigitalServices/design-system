import React from 'react'
import clsx from 'clsx'
import { withClasses } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  decorators: [
    withButtonTable
  ],
  args: {
    text: 'Do something',
    element: 'button'
  },
  argTypes: {
    element: {
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
      type: 'string'
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5895%3A3285'
    }
  }
}

const Button = withClasses(({ text, element: Component, ...rest }) => <Component {...rest}>{text}</Component>, 'btn')

/** @type {import('@storybook/react').Story} */
export const PrimaryButton = Button.bind({})

/** @type {import('@storybook/react').Story} */
export const SecondaryButton = withClasses(Button, 'btn-secondary')

/** @type {import('@storybook/react').Story} */
export const InverseButton = withClasses(Button, 'btn-inverse')

InverseButton.parameters = {
  container: {
    className: 'text-white bg-blue-dark'
  }
}

/** @type {import('@storybook/addons').DecoratorFunction} */
function withButtonTable (Story, { parameters: { container } }) {
  const rows = [
    {
      $label: 'Default'
    },
    {
      $label: 'Full width',
      className: 'btn-block'
    }
  ]
  const cols = [
    {
      $label: 'Rest'
    },
    {
      $label: 'Hover/Focus',
      className: 'hover focus'
    }
  ]
  return (
    <table className={clsx('w-full', container?.className)} style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}>
      <thead className='bg-white text-grey-dark'>
        <tr>
          <td style={{ width: '10em' }}></td>
          {cols.map(({ $label }) => <th key={$label} className='text-left p-8'>{$label}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ $label, ...rowProps }) => (
          <tr key={$label}>
            <th scope='row' className='text-right p-8'>{$label}</th>
            {cols.map(({ $label, ...colProps }) => (
              <td key={$label} className='text-left p-8'>
                <Story className={clsx(rowProps.className, colProps.className)} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
