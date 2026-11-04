declare module '@thoughtbot/tailwindcss-aria-attributes' {
  import type plugin from 'tailwindcss/plugin'

  const ariaAttributes: ReturnType<typeof plugin>
  export default ariaAttributes
}
