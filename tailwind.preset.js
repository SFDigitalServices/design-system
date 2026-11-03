/* eslint-disable max-len */
const plugin = require('tailwindcss/plugin')

/**
 * @typedef {{ size?: number, color: string }} IconProps
 */
/**
 * @typedef {(props: IconProps) => string} IconFunc
 */

const XMLNS = 'xmlns="http://www.w3.org/2000/svg"'

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: require('./theme'),
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@thoughtbot/tailwindcss-aria-attributes'),
    plugin(({ addVariant, addUtilities, theme }) => {
      addVariant('callout-titles', '& strong:first-child')
      addVariant('link', '& a')
      addUtilities({
        '.outline-focus': {
          outlineStyle: 'solid',
          outlineColor: theme('colors.primary500'),
          outlineWidth: '3px',
          outlineOffset: '4px'
        }
      })
      addUtilities({
        '.appearance-none': {
          appearance: 'none',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none'
        },
        '.bg-check-white': {
          backgroundImage: svgBackgroundImage(checkIcon, {
            color: theme('colors.white')
          }),
          backgroundColor: theme('colors.primary500'),
          backgroundSize: '24px 24px',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        },
        '.check-shadow-inner': {
          'box-shadow': `inset -.005rem -.005rem 0 .45rem ${theme(
            'colors.white'
          )}`
        },
        '.dropdown-open': {
          backgroundImage: svgBackgroundImage(dropdownIcon, {
            size: 20,
            color: theme('colors.black')
          }),
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        },
        '.alert-icon': iconStyle(alertIcon, {
          size: 24,
          color: theme('colors.danger600')
        }),
        '.clock-icon': iconStyle(clockIcon, {
          size: 24,
          color: theme('colors.black')
        }),
        '.delete-icon': iconStyle(deleteIcon, {
          size: 24,
          color: theme('colors.primary600')
        }),
        '.delete-icon-white': iconStyle(deleteIcon, {
          size: 24,
          color: theme('colors.white')
        }),
        '.info-icon': iconStyle(infoIcon, {
          size: 24,
          color: theme('colors.information600')
        }),
        '.pencil-icon': iconStyle(pencilIcon, {
          size: 18,
          color: theme('colors.black')
        }),
        '.plus-icon': iconStyle(plusIcon, {
          size: 24,
          color: theme('colors.primary600')
        }),
        '.plus-icon-white': iconStyle(plusIcon, {
          size: 24,
          color: theme('colors.white')
        }),
        '.success-icon': iconStyle(checkIcon, {
          size: 24,
          color: theme('colors.success600')
        }),
        '.panel-completed': iconStyle(completedIcon, {
          size: 18,
          color: theme('colors.success400')
        }),
        '.remove-icon': iconStyle(removeIcon, {
          size: 20,
          color: theme('colors.white')
        }),
        '.right-arrow-blue': iconStyle(rightArrow, {
          size: 20,
          color: theme('colors.primary600')
        }),
        '.right-arrow-white': iconStyle(rightArrow, {
          size: 20,
          color: theme('colors.white')
        }),
        '.right-arrow-disabled': iconStyle(rightArrow, {
          size: 20,
          color: theme('colors.neutral200')
        }),
        '.thumbs-up-white': iconStyle(thumb, {
          size: 19,
          color: theme('colors.white')
        }),
        '.thumbs-up-blue': iconStyle(thumb, {
          size: 19,
          color: theme('colors.primary600')
        }),
        '.document-icon': iconStyle(documentIcon, {
          size: 20,
          color: theme('colors.black')
        })
      })
    })
  ]
}

/** @type {IconFunc} */
function alertIcon({ color }) {
  return `
    <svg viewBox="0 0 24 24" fill="none" ${XMLNS}>
      <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

/** @type {IconFunc} */
function clockIcon({ color }) {
  return `
    <svg viewBox="0 0 24 24" fill="none" ${XMLNS}>
      <path d="M8.95711 16.7071L13.25 12.4142L13.25 7H11.25L11.25 11.5858L7.54289 15.2929L8.95711 16.7071Z" fill="#0B0C0C"/>
      <path fill="${color}" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" />
    </svg>
  `
}

/** @type {IconFunc} */
function completedIcon({ color }) {
  return `
    <svg viewBox="0 0 18 18" fill="none" ${XMLNS}>
      <rect x="1" y="1" width="16" height="16" rx="8" fill="${color}"/>
      <rect x="1" y="1" width="16" height="16" rx="8" stroke="${color}" stroke-width="2"/>
      <path d="M4.1875 10.0833L7 13L14 5" stroke="#FCFCFC" stroke-width="2"/>
    </svg>
  `
}

/** @type {IconFunc} */
function documentIcon({ color }) {
  return `
    <svg viewBox="0 0 20 20" fill="${color}" ${XMLNS}>
      <path d="M17.65 7.38L10.9 0.38C10.7827 0.260161 10.6427 0.16485 10.4882 0.0996133C10.3337 0.0343763 10.1677 0.000515263 10 0L3.25 0C2.91848 0 2.60054 0.131696 2.36612 0.366117C2.1317 0.600537 2 0.918479 2 1.25V18.75C2 19.0815 2.1317 19.3995 2.36612 19.6339C2.60054 19.8683 2.91848 20 3.25 20H16.75C17.0815 20 17.3995 19.8683 17.6339 19.6339C17.8683 19.3995 18 19.0815 18 18.75V8.25C18.0001 7.92567 17.8747 7.61388 17.65 7.38ZM11 4.09L14.305 7.5H11V4.09ZM4.5 17.5V2.5H8.5V8.765C8.50395 9.09391 8.63738 9.40802 8.87138 9.6392C9.10537 9.87039 9.42106 10 9.75 10H15.5V17.5H4.5Z"/>
    </svg>
  `
}

/** @type {IconFunc} */
function dropdownIcon({ color }) {
  return `
    <svg viewBox="0 0 20 20" fill="none" ${XMLNS}>
      <path d="M3 7L10 14L17 7" stroke="${color}" stroke-width="2"/>
    </svg>
  `
}

/** @type {IconFunc} */
function infoIcon({ color }) {
  return `
    <svg viewBox="0 0 20 20" fill="none" ${XMLNS}>
      <circle cx="10" cy="10" r="7" stroke="${color}" stroke-width="2"/>
      <circle cx="10" cy="7" r="1" transform="rotate(180 10 7)" fill="${color}"/>
      <rect x="11" y="14" width="2" height="4" transform="rotate(180 11 14)" fill="${color}"/>
    </svg>
  `
}

/** @type {IconFunc} */
function pencilIcon({ color }) {
  return `
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" ${XMLNS}>
      <path fill="${color}" fill-rule="evenodd" clip-rule="evenodd" d="M4.3608 17.6392L0.0515442 18.0515L0.360802 13.6392L14 0L18 4L4.3608 17.6392ZM14 2.82843L15.1716 4L14 5.17157L12.8284 4L14 2.82843ZM2.21176 15.8357L2.30364 14.5248L10.9844 5.84404L12.156 7.01561L3.45482 15.7168L2.21176 15.8357Z" />
    </svg>
  `
}

/** @type {IconFunc} */
function removeIcon({ color }) {
  return `
    <svg viewBox="0 0 20 20" fill="${color}" ${XMLNS}>
      <path d="M11.77 10l7.115-7.115a1.252 1.252 0 00-1.77-1.77L10 8.23 2.885 1.115a1.252 1.252 0 00-1.77 1.77L8.23 10l-7.115 7.115a1.26 1.26 0 000 1.77 1.255 1.255 0 001.77 0L10 11.77l7.115 7.115a1.255 1.255 0 001.77 0 1.26 1.26 0 000-1.77L11.77 10z"/>
    </svg>
  `
}

/** @type {IconFunc} */
function plusIcon({ color }) {
  return `
    <svg viewBox="0 0 24 24" fill="${color}" ${XMLNS}>
      <path d="M11 13V21H13V13H21V11H13V3H11V11H3V13H11Z" />
    </svg>
  `
}

/** @type {IconFunc} */
function deleteIcon({ color }) {
  return `
    <svg viewBox="0 0 24 24" fill="${color}" ${XMLNS}>
      <path d="M11 18L11 12H13V18H11Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 22L18.8571 10H20V5H16V2H8V5H4V10H5.14286L6 22H18ZM7.14795 10L7.86224 20H16.1378L16.852 10H7.14795ZM14 5V4H10V5H14ZM6 7H18V8H6V7Z" />
    </svg>
  `
}

/** @type {IconFunc} */
function checkIcon({ color }) {
  return `
    <svg viewBox="0 0 24 24" fill="none" ${XMLNS}>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="${color}"
        d="M22.7311 4.68202L8.02488 20.4387L1.29297 13.7068L2.70718 12.2926L7.97527 17.5607L21.269 3.31738L22.7311 4.68202Z" 
      />
    </svg>
  `
}

/** @type {IconFunc} */
function rightArrow({ color }) {
  return `
    <svg viewBox="0 0 20 20" fill="none" ${XMLNS}>
      <path d="M11 16L17 10L11 4" stroke="${color}" stroke-width="2"/>
      <path d="M2 10L16 10" stroke="${color}" stroke-width="2"/>
    </svg>
  `
}

/** @type {IconFunc} */
function thumb({ color }) {
  return `
    <svg viewBox="0 0 19 19" fill="none" ${XMLNS}>
      <path d="M11.789 0.00701502C11.2879 0.0597623 10.8132 0.402619 10.5495 0.903718C10.2066 1.58943 7.67473 
      6.67954 7.17363 7.18064C6.67253 7.68174 6.01319 7.9191 5.27473 7.9191V18.4686H14.5055C15.0593 18.4686 
      15.5341 18.1257 15.7451 17.651C15.7451 17.651 18.4615 9.97625 18.4615 9.23778C18.4615 8.49932 17.8813 
      7.9191 17.1429 7.9191H13.1868C12.4484 7.9191 11.8681 7.25976 11.8681 6.60042C11.8681 5.94108 12.8967 
      2.43339 13.1077 1.74767C13.3187 1.06196 12.9758 0.323499 12.2901 0.0861359C12.1055 0.0333886 11.9736 
      -0.0193586 11.789 0.00701502ZM0 7.9191V18.4686H2.63736V7.9191H0Z" fill="${color}"/>
    </svg>
  `
}

/**
 * @param {IconFunc | string} svg
 * @param {IconProps?} props
 */
function iconStyle(svg, props) {
  const size = props?.size || 20
  return {
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: svgBackgroundImage(svg, props),
    backgroundSize: `${size}px ${size}px`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    flexShrink: 0
  }
}

/**
 * @param {IconFunc | string} icon
 * @param {IconProps?} props
 */
function svgBackgroundImage(icon, props) {
  const svg = typeof icon === 'function' ? icon(props) : icon
  const data = encodeURIComponent(svg.trim())
  return `url("data:image/svg+xml;charset=utf-8,${data}")`
}
