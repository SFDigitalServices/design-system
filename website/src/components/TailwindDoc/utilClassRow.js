import React from 'react'
import clsx from 'clsx'

const UtilClassRow = ({ rowItem, key }) => {
  const colorMatch =
    /^\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\-|\\/'[\]{}]|[?.,]*\w)$/i

  return (
    <>
      {rowItem.toLowerCase().match(colorMatch) ||
      rowItem.toLowerCase().match(/^transparent/i)
        ? (
        <ColorSample color={rowItem} key={key} />
          )
        : (
        <td
          className='first:text-red-4 first:whitespace-nowrap border-0 font-mono'
          key={key}
        >
          {rowItem}
        </td>
          )}
    </>
  )
}

export default UtilClassRow

// Color sample
const ColorSample = ({ color, index }) => {
  return (
    <td className='border-0' key={index}>
      <div
        className={clsx(
          'w-28 h-28 rounded-full border-1 border-black border-solid bg-yellow-50'
        )}
        style={{ backgroundColor: color }}
      />
    </td>
  )
}

// TODO: Complete these and place them
/*
// Border color sample
const BorderColor = ({ color }) => {
  return (
    <div className={clsx('w-28 h-28 rounded-full border-4 border-solid')} />
  )
}

// Border width
const BorderWidth = ({ width }) => {
  return (
    <div
      className={clsx(
        'w-28 h-28 rounded border-black border-solid bg-yellow-50',
        width
      )}
    />
  )
}
*/
