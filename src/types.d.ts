import type { ComponentType, ElementType } from 'react'

// eslint-disable-next-line
import type * as Classed from '@tw-classed/react'

export type { Classed }

export { ComponentType, ElementType }

export type ComponentProps<C> = Classed.ComponentProps<C>

export type AnyComponent<P = unknown> = ElementType | ComponentType<P>

export type FontWeightName = 'light' | 'normal' | 'bold' | 'semibold'
export type FixedFontWeightMap = Partial<Record<FontWeightName, number>>

// "8..144,300;8..144,400;8..144,700"
type OpticalWeights = Partial<Record<FontWeightName, [number[], number]>>

export type OpticalGoogleFont = {
  optical: true
  weights: OpticalWeights
}

export type GoogleFontOptions =
  | {
      optical: false
    }
  | OpticalGoogleFont

export type FontSpec = {
  name: string
  fallbacks: string[]
  weights: FixedFontWeightMap
  googleFont?: GoogleFontOptions
}

export type FIXMEAsableProps = {
  as?: ComponentType | ElementType
}
