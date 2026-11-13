// Loaded by scripts/build-formio-tailwind.mjs after tsup, so it uses the built preset.
// @ts-ignore this script always runs after tsup, so dist should exist
import preset from './dist/tailwind-preset/index.mjs'

export default {
  // formio.css only uses @apply, but Tailwind warns when content is empty.
  content: ['./src/formio/formio.css'],
  presets: [preset]
}
