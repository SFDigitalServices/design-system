/** eslint-disable */
import React, { useContext } from 'react'
import { Text } from 'theme-ui'
import { withComponent } from '../utils'

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingProps = React.ComponentPropsWithoutRef<HeadingElement>

export type UnstyledHeadingProps = HeadingProps & {
  $as?: HeadingElement
  $level?: HeadingLevel
}

export function UnstyledHeading ({
  $level,
  $as: Component = `h${$level || 1}`,
  ...rest
}: UnstyledHeadingProps): React.ReactElement<HeadingElement> {
  return <Component {...rest} />
}

export const Heading = withComponent(Text, UnstyledHeading)

export const HeadingLevelContext = React.createContext<{ headingLevel: number }>({
  headingLevel: 1
})

export function IncreaseHeadingLevel (props: { children: JSX.Element }) {
  const { headingLevel } = useContext(HeadingLevelContext)
  return <HeadingLevelContext.Provider value={{
    headingLevel: headingLevel + 1
  }} {...props} />
}
