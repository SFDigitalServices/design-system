import { px, pxMap } from './utils'

describe('px()', () => {
  it('converts numbers to pixels, leaves zero unitless, and preserves strings', () => {
    expect(px(80)).toBe('80px')
    expect(px(0)).toBe('0')
    expect(px('1rem')).toBe('1rem')
  })
})

describe('pxMap()', () => {
  it('maps pixel values rather than array indices', () => {
    expect(pxMap([0, 2, 4, 8, 12, 16, 20, 28, 40, 60, 80, 96])).toEqual({
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      28: '28px',
      40: '40px',
      60: '60px',
      80: '80px',
      96: '96px'
    })
  })

  it('handles a single value and preserves CSS strings', () => {
    expect(pxMap([80])).toEqual({ 80: '80px' })
    expect(pxMap(['1rem', '50%'])).toEqual({ '1rem': '1rem', '50%': '50%' })
  })

  it('handles an empty scale', () => {
    expect(pxMap([])).toEqual({})
  })
})
