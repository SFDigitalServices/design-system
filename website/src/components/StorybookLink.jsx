import React from 'react'

const { NODE_ENV } = process.env
const baseUrl = NODE_ENV === 'production' ? '/storybook/' : 'http://localhost:3001/'

export default function StorybookLink ({ path, name, children = name, ...rest }) {
  return <a href={`${baseUrl}?path=${path}`} {...rest}>{children}</a>
}
