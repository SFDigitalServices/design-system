import { Container, DisplayLg } from '@/src/react'
import type { PropsWithChildren } from 'react'

export function MockSiteHeader({
  children = <DisplayLg>SiteHeader</DisplayLg>
}: PropsWithChildren) {
  return (
    <div className="bg-primary700 text-white py-16">
      <Container className="flex gap-16 items-center">
        <img
          src="https://www.sf.gov/_next/static/media/CCSF_seal_2026_white.ab5a6a95.svg"
          aria-hidden="true"
          className="size-60"
        />
        <div>{children}</div>
      </Container>
    </div>
  )
}
