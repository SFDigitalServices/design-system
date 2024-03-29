const transformSVGO = require('@figma-export/transform-svg-with-svgo')
const outputAsSVG = require('@figma-export/output-components-as-svg')
const outputAsReact = require('@figma-export/output-components-as-svgr')
const dedent = require('dedent')
const svgoConfig = require('./svgo.config')
const { writeFile } = require('node:fs/promises')

/**
 * @typedef {import('@figma-export/types').ComponentNode} ComponentNode
 * @typedef {import('@figma-export/types').ComponentOutputter} ComponentOutputter
 * @typedef {import('@figma-export/types').FigmaExportRC} FigmaExportRC
 * @typedef {import('@figma-export/types').PageNode} PageNode
*/

const fileId = process.env.FIGMA_ICONS_FILE
const svgDir = './icons/svg'
const reactDir = './react/src'

/** @type {FigmaExportRC} */
module.exports = {
  commands: [
    ['components', {
      fileId,
      onlyFromPages: ['Icons'],
      transformers: [
        transformSVGO(svgoConfig)
      ],
      outputters: [
        outputAsSVG({
          output: svgDir,
          getDirname: ({ dirname }) => dirname,
          getBasename: ({ componentName }) => `${normalizeIconName(componentName)}.svg`
        }),
        outputSVGIndex({
          output: `${svgDir}/index.json`
        }),
        outputAsReact({
          output: `${reactDir}/icons`,
          getDirname: ({ dirname }) => dirname,
          getComponentName: ({ componentName }) => normalizeComponentName(componentName),
          getComponentFilename: ({ componentName }) => normalizeComponentName(componentName)
        }),
        outputReactIcons({
          output: `${reactDir}/icons.tsx`
        }),
        outputReactIndex({
          output: `${reactDir}/icons/index.json`
        })
      ]
    }]
  ]
}

/**
 * @param {string} name 
 * @returns {string}
 */
function normalizeIconName (name) {
  return name.toLowerCase().replace(/ /g, '-')
}

function normalizeComponentName (name) {
  return `Icon${name
    .replace(/(^[a-z])|( [a-z])/g, substr => substr.toUpperCase())
    .replace(/ /g, '')}`
}

/**
 * @param {{ output: string }} options 
 * @returns {import('@figma-export/types').ComponentOutputter}
 */
function outputSVGIndex ({ output }) {
  return async pages => {
    const components = gatherComponents(pages)
    const index = {
      generated: timestamp(),
      components: components.map(({ page, component: { id, name, svg, ...rest } }) => ({
        id: normalizeIconName(name),
        name,
        file: `${normalizeIconName(name)}.svg`,
        size: getSize(rest),
        href: `https://figma.com/file/${fileId}/${page.name}?node-id=${id}`,
        svg
      }))
    }
    await writeJSON(output, index)
  }
}

/**
 * @param {{ output: string }} options 
 * @returns {ComponentOutputter}
 */
function outputReactIndex ({ output }) {
  return async pages => {
    const components = gatherComponents(pages)
    const index = {
      generated: timestamp(),
      components: components.map(({ page, component: { id, name, ...rest } }) => ({
        id: normalizeIconName(name),
        name,
        component: normalizeComponentName(name),
        file: `${normalizeComponentName(name)}.jsx`,
        size: getSize(rest),
        href: getFigmaHref(page, id)
      }))
    }
    await writeJSON(output, index)
  }
}

/**
 * @param {{ output: string }} options 
 * @returns {ComponentOutputter}
 */
function outputReactIcons ({ output }) {
  return async pages => {
    const components = gatherComponents(pages)
    const wrapped = dedent`
      import * as icons from './icons/index.js'
      import { createStyledIcon as wrap } from './components'

      ${components.map(({ component }) => {
        const name = normalizeComponentName(component.name)
        return `export const ${name} = wrap(icons.${name})`
      }).join('\n')}
    `
    await writeFile(output, `${wrapped}\n`)
  }
}

/**
 * @param {PageNode[]} pages
 * @returns {{ page: PageNode, component: ComponentNode }[]}
 */
function gatherComponents (pages) {
  return pages.flatMap(page => page.components.map(component => ({ component, page })))
}

/**
 * 
 * @param {PageNode} page 
 * @param {string} nodeId 
 * @returns {string}
 */
function getFigmaHref (page, nodeId) {
  const qs = nodeId ? `?node-id=${nodeId}` : ''
  return `https://figma.com/file/${fileId}/${page.name}${qs}`
}

async function writeJSON (output, data) {
  return writeFile(output, JSON.stringify(data, null, 2))
}

function timestamp () {
  return new Date().toISOString()
}

/**
 * @param {Partial<ComponentNode>} component 
 */
function getSize ({ absoluteBoundingBox: { width, height } }) {
  return {
    width: Number(width),
    height: Number(height)
  }
}
