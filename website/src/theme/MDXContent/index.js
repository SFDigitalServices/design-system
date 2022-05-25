import React from 'react'
import MDXContent from '@theme-original/MDXContent'
import '@github/clipboard-copy-element'
import 'sfgov-design-system/dist/js/icons'

export default function MDXContentWrapper (props) {
  return (
    <>
      <MDXContent {...props} />
    </>
  )
}
