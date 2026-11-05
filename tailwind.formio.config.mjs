// Loaded by scripts/build-formio-tailwind.mjs after tsup, so it uses the built preset.
import preset from './dist/tailwind-preset/index.mjs'

export default {
  // formio.css only uses @apply, but Tailwind warns when content is empty.
  content: ['./src/formio/formio.css'],
  presets: [preset]
}
