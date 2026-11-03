#!/usr/bin/env node --experimental-modules
import purgecss from '@fullhuman/postcss-purgecss'
import cssnano from 'cssnano'
import nanoPreset from 'cssnano-preset-advanced'
import { spawnSync } from 'node:child_process'
import { writeFile } from "node:fs/promises"
import { createRequire } from 'node:module'
import postcss from "postcss"
import filterRules from "postcss-filter-rules"
import atImport from "postcss-import"
import importUrls from 'postcss-import-url'
import prefixSelector from "postcss-prefix-selector"
import { format } from 'prettier'
import { FORM_CLASS } from '../formio/constants.mjs'

main('formio/bootstrap.css')

/**
 * @param {string} outfile 
 */
async function main(outfile) {
  // import.meta.resolve() doesn't work in this case, not sure why
  const require = createRequire(import.meta.url)

  // purge (remove) selectors that aren't "used" (don't match any of the
  // strings) in the listed source files
  const purge = purgecss({
    content: [
      // the formiojs build includes all of the stock component templates
      require.resolve('formiojs/dist/formio.form.js')
    ]
  })

  // namespace every selector (in every rule) with our form class
  const addSelectorPrefix = prefixSelector({
    prefix: `.${FORM_CLASS}`
  })

  const allowBootstrapSelectorPatterns = [
    /\./,
    /\b(input|select)\b/
  ]

  const ignoreBootstrapSelectorPatterns = [
    /\.[mp][trblxy]?-[123]\b/,
    // we have our own padding and margin reset utilities
    /\.[mp][trblxy]?-0\b/,
  ]

  const ignoreFormioSelectorPatterns = [
    /formio-component-htmlelement/,
  ]

  /**
   * Our stylesheet is broken up into pieces like this so that we can process
   * each one with different postcss plugins.
   * @type {{
   *  css: string
   *  plugins?: import('postcss').Plugin[]
   * }}
   */
  const sheets = [
    {
      // import fontawesome from the CDN for now
      // FIXME: we should bundle this somehow
      css: `@import url('https://cdn.jsdelivr.net/npm/font-awesome@^4.7.0/css/font-awesome.min.css');`
    },
    {
      css: `/** bootstrap */ @import url('https://cdn.jsdelivr.net/npm/bootstrap@^4.6.0/dist/css/bootstrap.css');`,
      plugins: [
        // inline the bootstrap css (by fetching the @import URL recursively)
        importUrls(),
        purge,
        // filter out rules that don't match our allowed selector patterns
        filterRules({
          filter(selector) {
            return allowBootstrapSelectorPatterns
              .some(pattern => pattern.test(selector)) &&
              !ignoreBootstrapSelectorPatterns
                .some(pattern => pattern.test(selector))
          }
        }),
        // prefix selectors with our class scope
        addSelectorPrefix,
        replaceRoot(),
        patches()
      ]
    },
    {
      css: `/** formio */ @import url('formiojs/dist/formio.form.css');`,
      plugins: [
        // inline the formio styles
        atImport(),
        purge,
        filterRules({
          filter(selector) {
            return !ignoreFormioSelectorPatterns
              .some(pattern => pattern.test(selector))
          }
        }),
        // prefix selectors with our class scope
        addSelectorPrefix
      ]
    }
  ]

  const start = Date.now()
  const results = await Promise.all(
    sheets.map(({ css, plugins = [] }) => {
      /** @type {import('cssnano-preset-advanced').Options} */
      const nanoPresetOptions = {
        normalizeWhitespace: {},
        cssDeclarationSorter: {
          order: 'alphabetical'
        },
        // discardComments: {
        //   removeAll: true
        // },
        discardDuplicates: {},
        discardEmpty: {}
      }
      plugins.push(
        cssnano({
          preset: nanoPreset(nanoPresetOptions)
        })
      )

      return process(css, plugins)
    })
  )

  // fix broken protocol in @import() rules
  let css = results.map(out => out).join('\n')
    .replace(/: \/\//g, '://')
    // fix poorly prettified *zoom hack for IE, which throws errors
    // when imported via webpack in next
    .replace(/\*\s+zoom:/g, '*zoom:')

  css = format(css, { parser: 'css' })

  await writeFile(outfile, css, { encoding: 'utf8' })
  const size = spawnSync('du', ['-h', outfile], { encoding: 'utf8' })
    .stdout.trim().split(/\s+/)[0]
  console.log(
    'built %s (%s, %dms)',
    outfile, size, Date.now() - start
  )
}

/**
 * This is ridiculous. postcss doesn't have any concept of plugin "order"
 * because plugins are async and event-based. As a workaround, we iteratively
 * process the input css with each plugin individually and return the result.
 * @see https://github.com/vitejs/vite/discussions/13916
 * @param {string} css
 * @param {import('postcss').Plugin[]} plugins 
 */
async function process(css, plugins) {
  for (const plugin of plugins) {
    css = await postcss([plugin]).process(css, { from: undefined })
      .then(result => result.css)
  }
  return css
}

/**
 * Bootstrap sets CSS vars on :root, but we want them scoped to the form
 * elements so that they don't conflict with any of our variables.
 * @returns {import('postcss').Plugin}
 */
function replaceRoot() {
  return {
    postcssPlugin: '@local/replace-root',
    Rule(rule) {
      if (rule.selector.includes(':root')) {
        rule.selector = `.${FORM_CLASS}`
      }
    }
  }
}

/**
 * This plugin applies various patches to the CSS that improve compatibility
 * with webpack other build tools.
 * @returns {import('postcss').Plugin}
 */
function patches() {
  return {
    postcssPlugin: '@local/patches',
    Declaration(decl) {
      // The presence of color-adjust causes webpack (?) to inline a deprecation
      // warning, which is just unnecessary noise
      if (decl.prop === 'color-adjust') {
        decl.prop = 'print-color-adjust'
      }
    }
  }
}