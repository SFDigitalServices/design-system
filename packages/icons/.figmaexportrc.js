const transformSVGO = require('@figma-export/transform-svg-with-svgo')
const outputAsSVG = require('@figma-export/output-components-as-svg')
const outputAsReact = require('@figma-export/output-components-as-svgr')
const { writeFile } = require('node:fs/promises')

const fileId = process.env.FIGMA_ICONS_FILE

/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    ['components', {
      fileId,
      onlyFromPages: ['Icons'],
      transformers: [
        transformSVGO({
          multipass: true,
          js2svg: {
            pretty: true,
            indent: 2
          },
          plugins: [
            'removeDimensions',
            { name: 'removeViewBox', active: false },
            {
              name: 'removeAttrs',
              params: {
                attrs: ['fill', 'stroke', 'id', 'clipPath', 'clip-path', 'clipRule']
              }
            },
            'removeUselessDefs',
            'removeXMLNS',
            'collapseGroups'
          ]
        })
      ],
      outputters: [
        outputAsSVG({
          output: './generated/svg',
          getDirname: ({ dirname }) => dirname,
          getBasename: ({ componentName }) => `${normalizeIconName(componentName)}.svg`
        }),
        outputAsReact({
          output: './generated/jsx',
          getDirname: ({ dirname }) => dirname,
          getComponentName: ({ componentName }) => normalizeComponentName(componentName),
          getComponentFilename: ({ componentName }) => normalizeIconName(componentName)
        }),
        outputJSONIndex({
          output: './generated/index.json'
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
  return name
    .replace(/(^[a-z])|( [a-z])/g, substr => substr.toUpperCase())
    .replace(/ /g, '')
}

/**
 * 
 * @param {{ output: string }} options 
 * @returns {import('@figma-export/types').ComponentOutputter}
 */
function outputJSONIndex ({ output }) {
  return async pages => {
    const components = pages.flatMap(page => page.components.map(component => ({ component, page })))
    const index = {
      generated: {
        date: Date.now()

      },
      components: components.reduce((map, { page, component: { id, name, svg } }) => {
        map[normalizeIconName(name)] = {
          name,
          svg,
          component: normalizeComponentName(name),
          href: `https://figma.com/file/${fileId}/${page.name}?node-id=${id}`
        }
        return map
      }, {})
    }
    await writeFile(output, JSON.stringify(index, null, 2))
  }
}
