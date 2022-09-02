import clsx from 'clsx'
import React from 'react'

export function InlineCode ({ className, rounded = true, ...props }) {
  return <code
    className={clsx(rounded && 'rounded', 'px-4 py-2 bg-grey-1 border-solid border-1 border-grey-2', className)}
    {...props}
  />
}

export const mdxComponents = {
  inlineCode: InlineCode,
  // NB: we don't do <h1> in Markdown, so there's no need to style them here
  h2: props => <h2 className='title-md my-32' {...props} />,
  // don't italicize _this_
  em: props => <em className='font-medium not-italic' {...props} />
}
