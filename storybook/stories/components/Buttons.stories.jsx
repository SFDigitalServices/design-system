import React from 'react'
import clsx from 'clsx'
import { polymorphic, withClasses, withPropsTransform } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Buttons',
  decorators: [
    withButtonTable
  ],
  args: {
    text: 'Do something',
    as: 'button',
    href: 'javascript:void(0)'
  },
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
      type: 'string'
    },
    href: {
      name: 'URL (href)',
      type: 'string',
      // only show the href control if (as === 'a')
      if: {
        arg: 'as',
        eq: 'a'
      }
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const PrimaryButton = withClasses(
  withPropsTransform(
    polymorphic('button'),
    ({ text, children = text, ...rest }) => ({ children, ...rest })
  ),
  'btn'
)

/** @type {import('@storybook/react').Story} */
export const SecondaryButton = withClasses(PrimaryButton, 'btn-secondary')

/** @type {import('@storybook/react').Story} */
export const InverseButton = withClasses(PrimaryButton, 'btn-inverse')

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
