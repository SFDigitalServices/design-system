const transformSVGO = require('@figma-export/transform-svg-with-svgo')
const outputAsSVG = require('@figma-export/output-components-as-svg')
const outputAsReact = require('@figma-export/output-components-as-svgr')
const { writeFile } = require('node:fs/promises')

/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    ['components', {
      fileId: process.env.FIGMA_ICONS_FILE,
      onlyFromPages: ['Icons'],
      transformers: [
        transformSVGO({
          multipass: true,
          plugins: [
            'removeDimensions',
            { name: 'removeViewBox', active: false },
            {
              name: 'removeAttrs',
              params: {
                attrs: ['fill', 'clip-path', 'id']
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
          getBasename: ({ componentName }) => `${normalizeComponentName(componentName)}.svg`
        }),
        outputAsReact({
          output: './generated/jsx',
          getDirname: ({ dirname }) => dirname,
          getComponentFilename: ({ componentName }) => normalizeComponentName(componentName)
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
function normalizeComponentName (name) {
  return name.toLowerCase().replace(/ /g, '-')
}

/**
 * 
 * @param {{ output: string }} options 
 * @returns {import('@figma-export/types').ComponentOutputter}
 */
function outputJSONIndex ({ output }) {
  return async pages => {
    const components = pages.flatMap(page => page.components)
    const index = {
      components: components.map(({ id, name, svg }) => ({ id, name, svg })),
      generated: Date.now()
    }
    await writeFile(output, JSON.stringify(index, null, 2))
  }
}
