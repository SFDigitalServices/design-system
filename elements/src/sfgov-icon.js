// @ts-check
import data from '../../icons/svg/index.json'
const icons = data.components

const templates = {}

// eslint-disable-next-line no-unused-vars
for (const [_, { id, svg }] of Object.entries(icons)) {
  const template = createElementTemplate(svg)
  templates[id] = template
}

const defaultProps = {
  height: 20
}

export function render (symbol, props = {}) {
  const { strict, ...rest } = props
  if (Object.prototype.hasOwnProperty.call(templates, symbol)) {
    const attrs = Object.assign({}, defaultProps, rest)
    const template = templates[symbol]
    return template(attrs)
  } else if (strict) {
    throw new Error(`No such sfgov icon: "${symbol}"`)
  } else {
    return ''
  }
}

const observedAttributes = ['symbol', 'width', 'height']

export class SFGovIcon extends HTMLElement {
  static get observedAttributes () {
    return observedAttributes
  }

  static get icons () {
    return icons
  }

  static get symbols () {
    return Object.keys(icons)
  }

  connectedCallback () {
    if (!this.hasAttribute('aria-hidden')) {
      this.setAttribute('aria-hidden', 'true')
    }
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'img')
    }
    this.render()
  }

  get symbol () {
    return this.getAttribute('symbol')
  }

  set symbol (value) {
    this.setAttribute('symbol', value)
  }

  get svg () {
    return this.__svg || this.querySelector('svg')
  }

  set svg (node) {
    try {
      this.replaceChild(node, this.svg)
    } catch (error) {
      this.appendChild(node)
    }
    this.__svg = node
  }

  attributeChangedCallback (...args) {
    this.render()
  }

  render () {
    this.svg = render(this.symbol, this.props)
  }

  get props () {
    const props = { }
    for (const attr of observedAttributes) {
      if (this.hasAttribute(attr)) {
        props[attr] = this.getAttribute(attr)
      }
    }
    return props
  }
}

function createElementTemplate (markup) {
  let template = document.createElement('div')
  template.innerHTML = markup
  // @ts-expect-error
  template = template.firstElementChild
  return (attrs = {}) => {
    const clone = template.cloneNode(true)
    for (const [name, value] of Object.entries(attrs)) {
      // @ts-expect-error
      clone.setAttribute(name, value)
    }
    return clone
  }
}

SFGovIcon.render = render
