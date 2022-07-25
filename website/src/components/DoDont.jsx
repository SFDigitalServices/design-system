import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function DoDont ({ className, ...rest }) {
  return (
    <div className={clsx(`
      grid gap-x-20
      my-40
      md:grid-flow-col md:grid-rows-2 md:grid-cols-2
      md:gap-x-40
    `, className)} {...rest} />
  )
}

DoDont.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

function Box ({ borderClass, iconSymbol, iconClass, children, reasons, reasonsClass, className, ...props }) {
  return (
    <>
      <div className={clsx('relative border-0 border-solid border-b-2 overflow-hidden', borderClass, className)} {...props}>
        {children}
        <div className={clsx(`
          absolute bottom-12 right-12
          w-40 h-40 rounded-full
          bg-white border-2 border-solid
          flex items-center justify-center
        `, borderClass, iconClass)}>
          {iconSymbol && <sfgov-icon symbol={iconSymbol} width={16} height={16} />}
        </div>
      </div>
      <ul className={clsx('m-0 mb-20 lg:mb-0', reasonsClass)}>
        {reasons?.map((reason, i) => (
          <li key={i} className={clsx('p-8', i > 0 && 'border-solid border-0 border-t-1 border-grey-2')}>
            {reason}
          </li>
        ))}
      </ul>
    </>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  iconSymbol: PropTypes.string,
  iconClass: PropTypes.string,
  children: PropTypes.element,
  reasons: PropTypes.arrayOf(PropTypes.string)
}

export function Do (props) {
  return (
    <Box
      borderClass='border-green-3'
      iconSymbol='check'
      iconClass='text-green-3'
      reasonsClass='bg-green-1'
      {...props}
    />
  )
}

Do.propTypes = { ...Box.propTypes }

export function Dont (props) {
  return (
    <Box
      borderClass='border-red-3'
      iconSymbol='close'
      iconClass='text-red-3'
      reasonsClass='bg-red-1'
      {...props}
    />
  )
}

Dont.propTypes = { ...Box.propTypes }
