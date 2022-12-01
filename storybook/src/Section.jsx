import React from 'react'
import tw from 'tailwind-styled-components'
import { withVariants } from './utils'

const SectionContainer = withVariants(tw.section`
  py-80
`, {
  lightblue: { className: 'bg-blue-1 text-slate' },
  darkblue: { className: 'bg-blue-dark text-white' },
  yellow: { className: 'bg-yellow-1 text-slate' },
  white: { className: 'bg-white text-slate' }
}, 'white')

const ResponsiveContainer = tw.div`
  responsive-container
`

const Section = ({ children, ...props }) =>
  <SectionContainer {...props}>
    <ResponsiveContainer>
      {children}
    </ResponsiveContainer>
  </SectionContainer>

export default Section
