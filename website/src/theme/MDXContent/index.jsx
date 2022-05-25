import React from 'react'
import MDXContent from '@theme-original/MDXContent'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

if (ExecutionEnvironment.canUseDOM) {
  require('sfgov-design-system')
}

export default function MDXContentWrapper (props) {
  // TODO: add components={ourComponents}?
  return (
    <MDXContent {...props} />
  )
}
