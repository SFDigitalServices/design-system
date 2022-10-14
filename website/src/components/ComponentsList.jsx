import React from 'react'
import StorybookLink from './StorybookLink'
import { components } from '@site/components'

export default function ComponentsList (props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Docs</th>
          <th>Status</th>
          <th>Storybook</th>
        </tr>
      </thead>
      <tbody>
        {components?.map(({ name, href, story, status }) => (
          <tr key={name}>
            <td><StorybookLink name={name} {...story} /></td>
            <td><a href={href}>{name}</a></td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
