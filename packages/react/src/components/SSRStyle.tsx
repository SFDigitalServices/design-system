import React, { ComponentProps } from 'react'
import { getCssText, reset } from '../stitches.config'

export type SSRStyleProps = Omit<ComponentProps<'style'>, 'dangerouslySetInnerHTML'>

export function SSRStyle (props: SSRStyleProps) {
  const css = getCssText()
  reset()
  return <style id='sfgov-css' {...props} dangerouslySetInnerHTML={{ __html: css }} />
}
