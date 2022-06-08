import React from 'react'
import clsx from 'clsx'
import { isActiveSidebarItem, ThemeClassNames } from '@docusaurus/theme-common'
import Link from '@docusaurus/Link'
import isInternalUrl from '@docusaurus/isInternalUrl'
import IconExternalLink from '@theme/IconExternalLink'
import styles from './styles.module.css'
export default function DocSidebarItemLink ({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className } = item
  const isActive = isActiveSidebarItem(item, activePath)
  const isInternalLink = isInternalUrl(href)
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          'text-slate-4',
          !isInternalLink && styles.menuExternalLink,
          isActive && 'menu__link--active',
          isActive && 'bg-slate-2',
          isActive && 'text-grey-1'
        )}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined
        })}
        {...props}>
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  )
}
