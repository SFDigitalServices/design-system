#!/usr/bin/env node --experimental-modules
import { URL } from 'node:url'

main()

/**
 * @typedef {import('./formio/types').AnyComponentSchema} AnyComponentSchema
 * @typedef {import('./formio/types').FormSchema} FormSchema
 * @typedef {{ schema: FormSchema, title: string }} FormPage
 */

async function main() {
  /** @type {Record<string, number>} */
  const classes = {}
  const addAll = (classString) => {
    for (const className of classString.trim().split(/\s+/).filter(Boolean)) {
      add(className)
    }
  }
  const add = (cls) => {
    if (cls in classes) {
      classes[cls]++
    } else {
      classes[cls] = 1
    }
  }
  for await (const page of getFormPages()) {
    const { components } = page.schema
    eachComponent(components, (comp) => {
      // eslint-disable-next-line max-len
      for (const classString of [comp.customClass, comp.className].filter(Boolean)) {
        addAll(classString)
      }
      if (comp.properties) {
        const classProps = Object.entries(comp.properties)
          .filter(([prop, val]) => prop.includes('class') && val)
        for (const [, classString] of classProps) {
          addAll(classString)
        }
      }
      for (const html of [comp.content, comp.html].filter(Boolean)) {
        for (const match of String(html).matchAll(/class=['"]([^'"]+)['"]/g)) {
          addAll(match[1])
        }
      }
    })
  }
  // sort by count descending
  const entries = Object.entries(classes).sort(([, a], [, b]) => b - a)
  for (const [cls, count] of entries) {
    console.log('%s: %d', cls, count)
  }
}

/**
 * @returns {AsyncGenerator<FormPage>}
 */
async function* getFormPages() {
  const perPage = 20
  const url = new URL('https://api.sf.gov/api/v2/pages/?type=sf.Form&locale=en&fields=schema')
  url.searchParams.set('limit', perPage)
  let count = 0
  let offset = 0
  while (true) {
    const { meta, items } = await fetch(url.href).then(res => res.json())
    for (const item of items) {
      yield item
      count++
    }
    if (count === meta.total_count || items.length < perPage) {
      break
    }
    offset += perPage
    url.searchParams.set('offset', offset)
  }
  echo(`got ${count} form pages`)
}

function echo(str) {
  process.stderr.write(str + '\n')
}

/**
 * We can't import formio.js Utils in node, so here's a lite version of it
 * 
 * @param {AnyComponentSchema[]} components 
 * @param {(c: AnyComponentSchema) => void} visitor
 */
function eachComponent(components, visitor) {
  for (const comp of components) {
    visitor(comp)
    if (Array.isArray(comp.components)) {
      eachComponent(comp.components, visitor)
    } else if (Array.isArray(comp.columns)) {
      for (const col of comp.columns) {
        eachComponent(col.components, visitor)
      }
    }
  }
}