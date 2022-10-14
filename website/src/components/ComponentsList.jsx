import React from 'react'
import StorybookLink from './StorybookLink'
import { components } from '../../components'

export default function ComponentsList (props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Docs</th>
          <th>Status</th>
          <th>Storybook</th>
          <th>Figma</th>
        </tr>
      </thead>
      <tbody>
        {components?.map(({ name, href, story, status, design }) => (
          <tr key={name}>
            <td><a href={href}>{name}</a></td>
            <td>{status}</td>
            <td><StorybookLink name={name} {...story} /></td>
            <td>{design?.href && <a href={design.href}>{design.name || name}</a>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
