import React from 'react'
import { mergeProps, polymorphic, withPropsTransform } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5993%3A6306'
    }
  }
}

const FieldsetLegend = props => <legend {...mergeProps({ className: 'm-0 p-0 w-full table' }, props)} />

/** @type {import('@storybook/react').Story} */
export const Fieldset = withPropsTransform(
  polymorphic('fieldset', {
    className: 'border-solid border-1 border-slate-3 text-slate-4 bg-white rounded-4',
    style: {
      margin: 0,
      minWidth: 0
    }
  }),
  ({ title, description, legend, children, ...rest }) => ({
    ...rest,
    children: (
      <div className='p-28 space-y-28'>
        <FieldsetLegend className='space-y-4'>
          {legend || (
            <>
              {title && <div className='font-medium'>{title}</div>}
              {description && <div>{description}</div>}
            </>
          )}
        </FieldsetLegend>
        {children}
      </div>
    )
  })
)

Fieldset.args = {
  title: 'This is a fieldset',
  description: 'Some text about how complicated this field is and this explains it.'
}

Fieldset.argTypes = {
  title: {
    name: 'Title',
    type: 'string'
  },
  description: {
    name: 'Description',
    type: 'string'
  }
}
