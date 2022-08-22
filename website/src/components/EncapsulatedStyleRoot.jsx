import React from 'react'
import root from 'react-shadow'
// eslint-disable-next-line import/no-webpack-loader-syntax
import sfdsStyles from '!!raw-loader!sfgov-design-system/dist/css/sfds.css'

export default function EncapsulatedStyleRoot ({ children, ...props }) {
  return (
    <root.div {...props}>
      <style>
        {sfdsStyles}
      </style>
      {children}
    </root.div>
  )
}
