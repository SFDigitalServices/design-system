
export function identity (v: any) {
  return v
}


export function pxMap (values: number[]): Record<number, string> {
  return values.reduce((o, n) => Object.assign(o, { [n]: px(n) }), {})
}

export function px (n: number | string) {
  return (typeof n === 'string') ? n : n === 0 ? '0' : `${n}px`
}
