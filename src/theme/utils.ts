export function px(n: string | number) {
  return typeof n === 'string' ? n : n === 0 ? '0' : `${n}px`
}

export function pxMap(values: Array<string | number>): Record<string, string> {
  return Object.fromEntries(values.map((value) => [value, px(value)]))
}

export function tokenMap(tokens: Record<string, { value: string }>) {
  return Object.fromEntries(
    Object.entries(tokens).map(([key, { value }]) => {
      const int = parseInt(value, 10)
      return [key, px(int)]
    })
  )
}
