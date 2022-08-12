import React from 'react'
import root from 'react-shadow'

// FIXME uggggh
const { dependencies: { 'sfgov-design-system': sfdsVersion } } = require('../../package.json')

/**
 */
export default function EncapsulatedStyleRoot ({ children, ...props }) {
  return (
    <root.div {...props}>
      <style type='text/css'>@import url(https://unpkg.com/sfgov-design-system@{sfdsVersion}/dist/css/sfds.css);</style>
      {children}
    </root.div>
  )
}
