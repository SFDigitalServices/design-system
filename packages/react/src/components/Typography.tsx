import { Text } from 'theme-ui'
import { UnstyledHeading } from './Heading'
import { withProps } from '../utils'

export const BodyText = withProps(Text, { as: 'span', variant: 'body' })
export const SmallText = withProps(Text, { as: 'span', variant: 'small' })
export const BigDesc = withProps(Text, { as: UnstyledHeading, variant: 'bigDesc' })
export const TitleXs = withProps(Text, { as: UnstyledHeading, variant: 'titleXs' })
export const TitleSm = withProps(Text, { as: UnstyledHeading, variant: 'titleSm' })
export const TitleMd = withProps(Text, { as: UnstyledHeading, variant: 'titleMd' })
export const TitleLg = withProps(Text, { as: UnstyledHeading, variant: 'titleLg' })
export const TitleXl = withProps(Text, { as: UnstyledHeading, variant: 'titleXl' })
export const DisplaySm = withProps(Text, { as: UnstyledHeading, variant: 'displaySm' })
export const DisplayLg = withProps(Text, { as: UnstyledHeading, variant: 'displayLg' })
export const Monospace = withProps(Text, { as: 'span', sx: { fontFamily: 'mono' } })