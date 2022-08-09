import React from 'react'
import MDXContent from '@theme-original/MDXContent'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

if (ExecutionEnvironment.canUseDOM) {
  require('sfgov-design-system')
  // TODO inline sfgov-design-system stylesheet(s)
}

export default function MDXContentWrapper (props) {
  // TODO override Docusaurus MDX components with: components={{ ... }}
  return (
    <MDXContent {...props} />
  )
}
