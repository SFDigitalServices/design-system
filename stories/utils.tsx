export function disableArgTypes(...names: string[]) {
  return Object.fromEntries(
    names.map((name) => [name, { table: { disable: true } }])
  )
}
