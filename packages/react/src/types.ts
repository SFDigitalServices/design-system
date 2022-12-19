import type { ComponentProps } from 'react'

export type LinkProps = ComponentProps<'link'>

export type FontWeightName = 'light' | 'normal' | 'bold' | 'semibold'
export type FixedFontWeightMap = Partial<Record<FontWeightName, number>>

// "8..144,300;8..144,400;8..144,700"
type OpticalWeights = Partial<Record<FontWeightName, [number[], number]>>

export type OpticalGoogleFont = {
  optical: true
  weights: OpticalWeights
}

export type GoogleFontOptions = {
  optical: false
} | OpticalGoogleFont

export type FontSpec = {
  name: string
  fallbacks?: string[]
  weights: FixedFontWeightMap
  googleFont?: GoogleFontOptions
}
