import type { ReactNode } from 'react'
import { PageLabel } from './PageLabel'
import { DisplayXXXl } from './Text'

export type PageTitleSectionProps = {
  title?: string | null
  label?: string | null
  isHidden?: boolean
  children?: ReactNode
}

export function PageTitleSection({
  label,
  title,
  isHidden,
  children
}: PageTitleSectionProps) {
  return (
    <>
      {label ? <PageLabel isHidden={!!isHidden}>{label}</PageLabel> : null}
      {title ? (
        <>
          <DisplayXXXl as="h1" className="mb-12 md:mb-20">
            {title}
          </DisplayXXXl>
          {children}
        </>
      ) : null}
    </>
  )
}
