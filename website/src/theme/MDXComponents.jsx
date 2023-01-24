import defaultMDXComponents from '@theme-original/MDXComponents'
import * as customComponents from '../components'
import { mdxComponents } from '../components/Markdown'
import tokens from '../../../css/src/tokens'

export default {
  ...defaultMDXComponents,
  ...customComponents,
  ...mdxComponents,
  tokens
}
