import React from 'react'
import tokens from '@sfgov/design-system/css/src/tokens'

/**
 * 
 * @param {{ field: string, value?: React.Component } & React.ComponentProps<'table'>} props 
 * @returns {JSX.Element}
 */
export default function TokenList ({ field, value: Value = JSONFormattedValue, ...rest }) {
  const values = flatten(tokens[field] || {}, field)
  return (
    <table {...rest}>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {values.map(({ key, value }) => (
          <tr key={key}>
            <td><code>{key}</code></td>
            <td><Value value={value} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/**
 * 
 * @param {object} obj 
 * @param  {...string} prefixes 
 * @returns {{ key: string, value: any }[]}
 */
function flatten (obj, ...prefixes) {
  return Object.entries(obj)
    .flatMap(([key, value]) => {
      const path = [...prefixes, key].filter(Boolean)
      return shouldNest(value)
        ? flatten(value, ...path)
        : {
            key: path.join('.'),
            value
          }
    })
    .sort((a, b) => a.key.localeCompare(b.key))
}

/**
 * 
 * @param {any} value 
 * @returns {boolean}
 */
function shouldNest (value) {
  return (value instanceof Object) && !Array.isArray(value)
}

/**
 * 
 * @param {React.ComponentProps<'code'>} param0 
 * @returns 
 */
function JSONFormattedValue ({ value, ...props }) {
  return <code {...props}>{JSON.stringify(value)}</code>
}

/**
 * @param {{ value: any } & React.ComponentProps<'a' | JSONFormattedValue>} param0 
 * @returns {JSX.Element}
 */
export function FontSizeValue ({ value, ...props }) {
  if (Array.isArray(value)) {
    const [fontSize, rest] = value
    const { lineHeight, letterSpacing } = (typeof rest === 'string')
      ? { lineHeight: rest }
      : rest
    return <dl className='m-0 grid grid-cols-2' {...props}>
      {
        Object.entries({ fontSize, letterSpacing, lineHeight })
          .filter(([key, value]) => value)
          .map(([key, value]) => <>
            <dt><code>{key}:</code></dt>
            <dd><JSONFormattedValue value={value} /></dd>
          </>)
      }
    </dl>
  } else {
    return <JSONFormattedValue value={value} {...props} />
  }
}
