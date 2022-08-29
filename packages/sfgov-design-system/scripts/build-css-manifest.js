const postcss = require('postcss')
const { readFileSync, writeFileSync } = require('fs')
const startCase = require('lodash.startcase')

const UTILITY_SELECTOR_PATTERN = /^\.[-:\w]+$/
const tailwindCategories = [
  {
    title: 'Layout',
    content: []
  },
  {
    title: 'Spacing',
    content: []
  },
  {
    title: 'Flexbox & Grid',
    content: []
  },
  {
    title: 'Borders',
    content: []
  },
  {
    title: 'Sizing',
    content: []
  },
  {
    title: 'Typography',
    content: []
  },
  {
    title: 'Backgrounds',
    content: []
  },
  {
    title: 'Transitions & Animation',
    content: []
  },
  {
    title: 'Transforms',
    content: []
  },
  {
    title: 'Effects',
    content: []
  },
  {
    title: 'Filters',
    content: []
  },
  {
    title: 'Interactivity',
    content: []
  },
  {
    title: 'Accessibility',
    content: []
  }
]

const utilities = [
  getUtilities('dist/css/utilities.css').byProperty
]
const manifest = buildManifest(utilities)
writeFileSync('dist/css/css-manifest.json', JSON.stringify(manifest, null, 2), 'utf8')

function buildManifest (utilities) {
  const manifest = tailwindCategories
  utilities.forEach(utils =>
    Object.keys(utils).forEach(category => {
      const entry = getEntry(category)
      const indexOfGroup = getTailwindGroup(category)
      const indexOfCategory = manifest[indexOfGroup]?.content.findIndex(cat => cat.title === entry.title)
      const isExistingTable = indexOfCategory >= 0
      const isColorProperty = category.includes('color')
      const newTableEntries =
        isColorProperty
          ? utils[category].map(decl => ([decl.value, decl.parent.selector.substring(1), `${category}: ${decl.value}`, '']))
          : utils[category].map(decl => ([decl.parent.selector.substring(1), `${category}: ${decl.value}`, '']))
      if (entry && !isExistingTable) {
        entry.table = newTableEntries
        manifest[indexOfGroup].content.push(entry)
      } else if (entry && isExistingTable) {
        const existingTableEntries = manifest[indexOfGroup]?.content[indexOfCategory]?.table
        manifest[indexOfGroup].content[indexOfCategory] = {
          ...entry,
          table: Array.from(new Set([...existingTableEntries, ...newTableEntries]))
        }
      }
    })
  )
  return manifest
}

function getUtilities (path) {
  const css = readFileSync(path, 'utf8')
  const root = postcss.parse(css)
  /** @type [postcss.Declaration] */
  const decls = []
  root.walkRules(rule => {
    if (UTILITY_SELECTOR_PATTERN.test(rule.selector)) {
      rule.walkDecls((decl, index) => {
        decls.push(decl)
      })
    }
  })

  return {
    decls,
    byClassname: Object.fromEntries(
      decls.map(decl => [
        decl.parent.selector.substring(1),
        decl
      ])
    ),
    byProperty: groupBy(
      decls,
      decl => decl.prop
    )
  }
}

function groupBy (list /** @type [any] */, keyFunction /** type Function */) {
  return list.reduce((map, d, i) => {
    const key = keyFunction(d, i)
    if (key in map) map[key].push(d)
    else map[key] = [d]
    return map
  }, {})
}

function getEntry (category) {
  const baseURL = 'https://tailwindcss.com/docs'
  const entry = {
    title: startCase(category),
    docs: `${baseURL}/${category}`,
    description: ''
  }
  switch (category) {
    case 'align-content':
      entry.description = 'Utilities for controlling how rows are positioned in multi-row flex and grid containers.'
      break
    case 'align-items':
      entry.description = "Utilities for controlling how flex and grid items are positioned along a container's cross axis."
      break
    case 'bottom':
    case 'left':
    case 'right':
    case 'top':
      entry.title = 'Top / Right / Bottom / Left'
      entry.docs = `${baseURL}/top-right-bottom-left`
      entry.description = 'Utilities for controlling the placement of positioned elements.'
      break
    case 'border-bottom-left-radius':
    case 'border-bottom-right-radius':
    case 'border-radius':
    case 'border-top-left-radius':
    case 'border-top-right-radius':
      entry.title = 'Border Radius'
      entry.docs = `${baseURL}/border-radius`
      entry.description = 'Utilities for controlling the border radius of an element.'
      break
    case 'border-bottom-width':
    case 'border-left-width':
    case 'border-right-width':
    case 'border-top-width':
    case 'border-width':
      entry.title = 'Border Width'
      entry.docs = `${baseURL}/border-width`
      entry.description = "Utilities for controlling the width of an element's borders."
      break
    case 'border-color':
      entry.description = "Utilities for controlling the color of an element's borders."
      break
    case 'border-style':
      entry.description = "Utilities for controlling the style of an element's borders."
      break
    case 'margin':
    case 'margin-bottom':
    case 'margin-left':
    case 'margin-right':
    case 'margin-top':
      entry.title = 'Margin'
      entry.docs = `${baseURL}/margin`
      entry.description = "Utilities for controlling an element's margin."
      break
    case 'padding':
    case 'padding-bottom':
    case 'padding-left':
    case 'padding-right':
    case 'padding-top':
      entry.title = 'Padding'
      entry.docs = `${baseURL}/padding`
      entry.description = "Utilities for controlling an element's padding."
      break
    case 'display':
      entry.description = 'Utilities for controlling the display box type of an element.'
      break
    case 'overflow':
    case 'overflow-x':
    case 'overflow-y':
      entry.title = 'Overflow'
      entry.docs = `${baseURL}/overflow`
      entry.description = 'Utilities for controlling how an element handles content that is too large for the container.'
      break
    case 'position':
      entry.description = 'Utilities for controlling how an element is positioned in the DOM.'
      break
    case 'visibility':
      entry.description = 'Utilities for controlling the visibility of an element.'
      break
    case 'z-index':
      entry.description = 'Utilities for controlling the stack order of an element.'
      break
    case 'gap':
    case 'column-gap':
    case 'row-gap':
    case '-webkit-column-gap':
      entry.title = 'Gap'
      entry.docs = `${baseURL}/gap`
      entry.description = 'Utilities for controlling gutters between grid and flexbox items.'
      break
    case 'flex':
      entry.description = 'Utilities for controlling how flex items both grow and shrink.'
      break
    case 'flex-direction':
      entry.description = 'Utilities for controlling the direction of flex items.'
      break
    case 'flex-shrink':
      entry.description = 'Utilities for controlling how flex items shrink.'
      break
    case 'flex-wrap':
      entry.description = 'Utilities for controlling how flex items wrap.'
      break
    case 'grid-auto-flow':
      entry.description = 'Utilities for controlling how elements in a grid are auto-placed.'
      break
    case 'grid-column':
      entry.description = 'Utilities for controlling how elements are sized and placed across grid columns.'
      break
    case 'grid-row':
      entry.description = 'Utilities for controlling how elements are sized and placed across grid rows.'
      break
    case 'grid-template-columns':
      entry.description = 'Utilities for specifying the columns in a grid layout.'
      break
    case 'grid-template-rows':
      entry.description = 'Utilities for specifying the rows in a grid layout.'
      break
    case 'justify-content':
      entry.description = "Utilities for controlling how flex and grid items are positioned along a container's main axis."
      break
    case 'justify-items':
      entry.description = 'Utilities for controlling how grid items are aligned along their inline axis.'
      break
    case 'height':
      entry.description = 'Utilities for setting the height of an element.'
      break
    case 'max-width':
      entry.description = 'Utilities for setting the maximum width of an element.'
      break
    case 'width':
      entry.description = 'Utilities for setting the width of an element.'
      break
    case 'color':
      entry.title = 'Text Color'
      entry.docs = `${baseURL}/text-color`
      entry.description = 'Utilities for controlling the text color of an element.'
      break
    case 'font-family':
      entry.description = 'Utilities for controlling the font family of an element.'
      break
    case 'font-size':
      entry.description = 'Utilities for controlling the font size of an element.'
      break
    case 'font-weight':
      entry.description = 'Utilities for controlling the font weight of an element.'
      break
    case 'letter-spacing':
      entry.description = 'Utilities for controlling the tracking (letter spacing) of an element.'
      break
    case 'line-height':
      entry.description = 'Utilities for controlling the leading (line height) of an element.'
      break
    case 'list-style-type':
      entry.description = 'Utilities for controlling the bullet/number style of a list.'
      break
    case 'text-align':
      entry.description = 'Utilities for controlling the alignment of text.'
      break
    case 'text-decoration':
      entry.description = 'Utilities for controlling the decoration of text.'
      break
    case 'vertical-align':
      entry.description = 'Utilities for controlling the vertical alignment of an inline or table-cell box.'
      break
    case 'white-space':
      entry.docs = `${baseURL}/whitespace`
      entry.description = "Utilities for controlling an element's white-space property."
      break
    case '-moz-osx-font-smoothing':
    case '-webkit-font-smoothing':
      entry.title = 'Font Smoothing'
      entry.docs = `${baseURL}/font-smoothing`
      entry.description = 'Utilities for controlling the font smoothing of an element.'
      break
    case 'background-color':
      entry.description = "Utilities for controlling an element's background color."
      break
    case 'opacity':
      entry.description = 'Utilities for controlling the opacity of an element.'
      break
    case 'appearance':
    case '-webkit-appearance':
      entry.description = 'Utilities for suppressing native form control styling.'
      break
    case 'cursor':
      entry.description = 'Utilities for controlling the cursor style when hovering over an element.'
      break
    case 'pointer-events':
      entry.description = 'Utilities for controlling whether an element responds to pointer events.'
      break
    default:
      return null
  }

  return entry
}

function getTailwindGroup (category) {
  switch (category) {
    case 'bottom':
    case 'display':
    case 'left':
    case 'overflow':
    case 'overflow-x':
    case 'overflow-y':
    case 'position':
    case 'right':
    case 'top':
    case 'visibility':
    case 'z-index':
      return 0
    case 'margin':
    case 'margin-bottom':
    case 'margin-left':
    case 'margin-right':
    case 'margin-top':
    case 'padding':
    case 'padding-bottom':
    case 'padding-left':
    case 'padding-right':
    case 'padding-top':
      return 1
    case 'align-content':
    case 'align-items':
    case 'column-gap':
    case 'flex':
    case 'flex-direction':
    case 'flex-shrink':
    case 'flex-wrap':
    case 'gap':
    case 'grid-auto-flow':
    case 'grid-column':
    case 'grid-row':
    case 'grid-template-columns':
    case 'grid-template-rows':
    case 'justify-content':
    case 'justify-items':
    case 'row-gap':
    case '-webkit-column-gap':
      return 2
    case 'border-bottom-left-radius':
    case 'border-bottom-right-radius':
    case 'border-bottom-width':
    case 'border-color':
    case 'border-left-width':
    case 'border-radius':
    case 'border-right-width':
    case 'border-style':
    case 'border-top-left-radius':
    case 'border-top-right-radius':
    case 'border-top-width':
    case 'border-width':
      return 3
    case 'height':
    case 'max-width':
    case 'width':
      return 4
    case 'color':
    case 'font-family':
    case 'font-size':
    case 'font-weight':
    case 'letter-spacing':
    case 'line-height':
    case 'list-style-type':
    case 'text-align':
    case 'text-decoration':
    case 'vertical-align':
    case 'white-space':
    case '-moz-osx-font-smoothing':
    case '-webkit-font-smoothing':
      return 5
    case 'background-color':
      return 6
    case 'opacity':
      return 9
    case 'appearance':
    case 'cursor':
    case 'pointer-events':
    case '-webkit-appearance':
      return 11
    default:
      return null
  }
}
