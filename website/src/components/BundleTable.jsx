import React from 'react'
import PropTypes from 'prop-types'
import filesize from 'filesize'
import PublishedFileLink from './PublishedFileLink'

export default function BundleTable ({ files = [], pkg, ...rest }) {
  const hasDesc = files?.some(file => file.desc)
  return (
    <table {...rest}>
      <thead>
        <tr>
          <th>File</th>
          <th>Size</th>
          {hasDesc ? <th>Description</th> : null}
        </tr>
      </thead>
      <tbody>
        {files.map(({ path, size, desc }) => {
          return (
            <tr key={path}>
              <td>
                <PublishedFileLink path={path} pkg={pkg}>
                  {path}
                </PublishedFileLink>
              </td>
              <td>{filesize(size || 0)}</td>
              {hasDesc ? <td>{desc || null}</td> : null}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

BundleTable.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      desc: PropTypes.string
    })
  ),
  pkg: PropTypes.shape({
    name: PropTypes.string,
    version: PropTypes.string
  })
}

BundleTable.decorate = (files, meta = []) => {
  const entries = Array.isArray(meta)
    ? meta
    : Object.entries(meta).map(([path, data]) => ({ path, ...data }))
  return Object.entries(files).map(([path, file]) => {
    const data = entries.find(entry => file.path?.includes(entry.path))
    return Object.assign({ ...file, path, data })
  })
    .filter(file => file.hide !== true)
}
