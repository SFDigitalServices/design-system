import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import EncapsulatedStyleRoot from './EncapsulatedStyleRoot'

/**
 * Use the <DoDont> component to display "do" and "don't" examples with
 * explanatory text for each:
 *
 * ```js
 * <DoDont>
 *  <Do reasons={['This is good', 'Another reason']}>
 *    Your good example here
 *  </Do>
 *  <Dont reasons={['This is bad', 'And another thing']}>
 *    Your bad example here
 *  </Dont>
 * </DoDont>
 * ```
 *
 * @param {{ className: string }} props
 * @returns {React.ReactElement}
 */
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
      <div className={clsx('relative border-1 border-solid border-grey-1 overflow-hidden', className)} {...props}>
        <EncapsulatedStyleRoot>
          {children}
        </EncapsulatedStyleRoot>
        <div className={clsx(`
          absolute bottom-12 right-12
          w-40 h-40 rounded-full
          bg-white border-2 border-solid
          flex items-center justify-center
        `, borderClass, iconClass)}>
          {iconSymbol && <sfgov-icon symbol={iconSymbol} width={16} height={16} />}
        </div>
      </div>
      <ul className={clsx('m-0 mb-20 pl-28 lg:mb-0 border-0 border-t-4 border-solid', borderClass, reasonsClass)}>
        {reasons?.map((reason, i) => (
          <li key={i} className={clsx('p-8 pl-0', i > 0 && 'border-solid border-0 border-t-1 border-grey-2')}>
            {reason}
          </li>
        ))}
      </ul>
    </>
  )
}

Box.propTypes = {
  borderClass: PropTypes.string,
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
      {...props}
    />
  )
}

Dont.propTypes = { ...Box.propTypes }
