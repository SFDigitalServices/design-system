export type FontWeightName = 'light' | 'normal' | 'bold' | 'semibold'
export type FixedFontWeightMap = Partial<Record<FontWeightName, number>>

export type FontSpec = {
  name: string
  fallbacks: string[]
  weights: FixedFontWeightMap
}
