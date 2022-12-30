import React from 'react'
import DocPage from '@theme-original/DocPage'
import { SSRStyle } from '@sfgov/react'

export default function DocPageWrapper (props) {
  return (
    <>
      <DocPage {...props} />
      <SSRStyle />
    </>
  )
}
