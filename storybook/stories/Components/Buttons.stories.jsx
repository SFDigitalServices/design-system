import React from 'react'
import clsx from 'clsx'
import { mergeProps, withClasses } from '../../src/utils'

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

/** @type {import('@storybook/react').Story} */
export const Button = withClasses(({ text, element: Component, ...rest }) => <Component {...rest}>{text}</Component>, 'btn')

Button.storyName = 'Primary'

/** @type {import('@storybook/react').Story} */
export const Secondary = withClasses(Button, 'btn-secondary')

/** @type {import('@storybook/react').Story} */
export const Inverse = withClasses(Button, 'btn-inverse')

Inverse.parameters = {
  container: {
    className: 'text-white bg-blue-dark'
  }
}

/** @type {import('@storybook/addons').DecoratorFunction} */
function withButtonTable (Story, { parameters: { container } }) {
  const rows = [
    {
      label: 'Default'
    },
    {
      label: 'Full width',
      storyProps: {
        className: 'btn-block'
      }
    }
  ]
  const cols = [
    {
      label: 'Rest'
    },
    {
      label: 'Hover/Focus',
      storyProps: {
        className: 'hover focus'
      }
    }
  ]
  return (
    <table className={clsx('w-full', container?.className)} style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}>
      <thead className='bg-white text-grey-dark'>
        <tr>
          <td style={{ width: '10em' }}></td>
          {cols.map(({ label }) => <th key={label} className='text-left p-8'>{label}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ label, ...row }) => (
          <tr key={label}>
            <th scope='row' className='text-right p-8'>{label}</th>
            {cols.map(col => (
              <td key={col.label} {...mergeProps({ className: 'text-left p-8' }, row.cellProps, col.cellProps)}>
                <Story {...mergeProps(row.storyProps, col.storyProps)} wtf={true} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
