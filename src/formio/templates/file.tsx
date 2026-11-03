/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import { classes } from '../../react'
import h from 'vhtml'
import type { FileSchema, ComponentContext } from '../types'

export default { form }

type FileSizeFunction = (
  a: number,
  b?: number,
  c?: number,
  d?: number,
  e?: number
) => string

type HasTypesFunction = () => boolean

export type FileContext = ComponentContext<FileSchema> & {
  self: FileSchema
  fileSize: FileSizeFunction
  files: {
    name: string
    url: string
    originalName: string
    fileType: string
    size: number
  }[]
  // https://github.com/formio/formio.js/blob/v4.21.3/src/components/file/File.js#L644-L650
  statuses: {
    originalName: string
    name: string
    size: number
    status: string
    message: string
    progress: number
  }[]
  disabled: boolean
  // https://github.com/formio/formio.js/blob/v4.21.3/src/components/file/File.js#L92-L97
  support: {
    hasWarning: boolean
    filereader: boolean
    formdata: boolean
    progress: boolean
  }
  fileDropHidden: boolean
  cameraMode: boolean
  options: {
    vpat: string
  }
  hasTypes: HasTypesFunction
}
/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/file/File.js#L158-L165
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/file/form.ejs
 */

export function form({ t, ...ctx }: FileContext) {
  const hasTypes =
    ctx.component.fileTypes &&
    Array.isArray(ctx.component.fileTypes) &&
    ctx.component.fileTypes.length !== 0 &&
    (ctx.component.fileTypes[0].label !== '' ||
      ctx.component.fileTypes[0].value !== '')

  const hidden = ctx.fileDropHidden ? true : undefined

  return (
    <>
      {ctx.options.vpat ? (
        <span
          tabIndex={-1}
          className="sr-only"
          id={`invisible-${ctx.instance.id}-${ctx.component.key}`}
        ></span>
      ) : (
        ''
      )}

      {!ctx.self.imageUpload ? (
        <>
          {ctx.options.vpat ? (
            <div>
              {!ctx.component.filePattern || ctx.component.filePattern === '*'
                ? 'Any file types are allowed'
                : t('Allowed file types: ', {
                    defaultValue: 'Allowed file types: '
                  }) + ctx.component.filePattern}
            </div>
          ) : (
            ''
          )}

          <ul className="list-group list-group-striped">
            <li className="list-group-item list-group-header hidden-xs hidden-sm">
              <div className="flex justify-between items-center gap-4">
                {!ctx.disabled ? <div className="col-md-1"></div> : ''}
                <div className={`col-md-${hasTypes ? 7 : 9}`}>
                  <strong>
                    {t('File Name', { defaultValue: 'File Name' })}
                  </strong>
                </div>
                <div className="col-md-2">
                  <strong>{t('Size', { defaultValue: 'Size' })}</strong>
                </div>
                {hasTypes ? (
                  <div className="col-md-2">
                    <strong>{t('Type', { defaultValue: 'Type' })}</strong>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </li>
            {ctx.files.map((file) => (
              <li className="list-none" key={file.name}>
                <div className="flex items-center gap-4 mt-4">
                  <div
                    className={`col-md-${hasTypes ? 7 : 9} items-center w-full`}
                  >
                    {ctx.component.uploadOnly ? (
                      file.originalName || file.name
                    ) : (
                      <div className="p-8 bg-success100">
                        <a
                          ref="fileLink"
                          href={file.url || '#'}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">
                            {t('Press to open ', {
                              defaultValue: 'Press to open '
                            })}
                          </span>
                          {file.originalName || file.name}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="col-md-2 p-8 bg-success100 text-right">
                    {ctx.fileSize(file.size)}
                  </div>
                  {hasTypes && !ctx.disabled ? (
                    <div className="col-md-2">
                      <select className="file-type" ref="fileType">
                        {ctx.component.fileTypes?.map((type) => (
                          // eslint-disable-next-line react/jsx-key
                          <option
                            className="test"
                            value={type.value}
                            selected={type.label === file.fileType}
                          >
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    ''
                  )}
                  {hasTypes && ctx.disabled ? (
                    <div className="col-md-2">{file.fileType}</div>
                  ) : (
                    ''
                  )}
                  {!ctx.disabled ? (
                    <div
                      className={classes(
                        'justify-center p-16',
                        'rounded remove-icon bg-information600',
                        'hover:cursor-pointer'
                      )}
                      ref="removeLink"
                    ></div>
                  ) : (
                    ''
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          {ctx.files.map((file) => (
            <div key={file.name}>
              <span>
                <img
                  ref="fileImage"
                  src=""
                  alt={file.originalName || file.name}
                  style={{ width: `${ctx.component.imageSize}px` }}
                />
                {!ctx.disabled ? (
                  <div
                    className={classes(
                      'justify-center p-16',
                      'rounded remove-icon bg-information600',
                      'hover:cursor-pointer'
                    )}
                    ref="removeLink"
                  ></div>
                ) : (
                  ''
                )}
              </span>
            </div>
          ))}
        </div>
      )}

      {!ctx.disabled && (ctx.component.multiple || !ctx.files.length) ? (
        ctx.self.useWebViewCamera ? (
          <div className="fileSelector">
            <button className="btn btn-primary" ref="galleryButton">
              <i className="fa fa-book"></i>{' '}
              {t('Gallery', { defaultValue: 'Gallery' })}
            </button>
            <button className="btn btn-primary" ref="cameraButton">
              <i className="fa fa-camera"></i>{' '}
              {t('Camera', { defaultValue: 'Camera' })}
            </button>
          </div>
        ) : !ctx.cameraMode ? (
          <div className="fileSelector" ref="fileDrop" hidden={hidden}>
            {t('Drop files to attach, ', {
              defaultValue: 'Drop files to attach, '
            })}
            {ctx.self.imageUpload && ctx.component.webcam ? (
              <a href="#" ref="toggleCameraMode">
                <i className="fa fa-camera"></i>{' '}
                {t('use camera', { defaultValue: 'use camera' })}
              </a>
            ) : (
              ''
            )}
            {t('or ', { defaultValue: 'or ' })}
            <a href="#" ref="fileBrowse" className="browse">
              {t('browse', { defaultValue: 'browse' })}
            </a>
            <div ref="fileProcessingLoader" className="loader-wrapper">
              <div className="loader text-center"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="video-container">
              <video
                className="video"
                autoPlay={true}
                ref="videoPlayer"
                tabIndex={-1}
              ></video>
            </div>
            <button className="btn btn-primary" ref="takePictureButton">
              <i className="fa fa-camera"></i>{' '}
              {t('Take Picture', { defaultValue: 'Take Picture' })}
            </button>
            <button className="btn btn-primary" ref="toggleCameraMode">
              {t('Switch to file upload', {
                defaultValue: 'Switch to file upload'
              })}
            </button>
          </>
        )
      ) : (
        ''
      )}

      {ctx?.statuses.map((status) => {
        // const widthClass = `w-[${status.progress}%]`
        return status.status === 'progress' ? (
          <>
            <div className="flex justify-between">
              <div>{status.originalName}</div>
              <div className="">
                {status.progress}% {t('Complete', { defaultValue: 'Complete' })}
              </div>
            </div>
            {/* TODO: Fix progress bar */}
            {/* <div key={status.name} className="progress-container">
              <div
                className={`progress-bar ${widthClass} h-28`}
                role="progressbar"
                aria-valuenow={status.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${status.progress}% Complete`}
              ></div>
            </div> */}
          </>
        ) : status.status === 'error' ? (
          <div
            key={status.name}
            className={`flex w-full gap-28 py-4 alert alert-danger`}
          >
            <div
              ref="fileStatusRemove"
              className="text-neutral500 cursor-pointer"
            >
              x
            </div>
            <div>
              {status.message
                ? status.message
                : t('There was an error uploading the file.', {
                    defaultValue: 'There was an error uploading the file.'
                  })}
            </div>
          </div>
        ) : (
          <div>
            <div className={`flex justify-between w-full gap-28 py-4`}>
              <div>
                {t('Processing file, please wait... ', {
                  defaultValue: 'Processing file, please wait...'
                })}
              </div>
              <div
                ref="fileStatusRemove"
                className="px-8 rounded text-white bg-information600  cursor-pointer"
              >
                x
              </div>
            </div>
            <div className="text-label-xs text-neutral500 leading-tight">
              If this is taking a long time, there may be an error uploading
              your file. Please check that it is:
              <ul>
                <li>The accepted file type</li>
                <li>Not a duplicate</li>
                <li>Within file size limits</li>
              </ul>
              <strong>Close this message and upload another file.</strong>
            </div>
          </div>
        )
      })}

      {!ctx.component.storage || ctx.support.hasWarning ? (
        <div className={`alert alert-warning`}>
          {!ctx.component.storage ? (
            <p>
              {t(
                'No storage has been set for this field. File uploads are disabled until storage is set up.',
                {
                  defaultValue:
                    'No storage has been set for this field. File uploads are disabled until storage is set up.'
                }
              )}
            </p>
          ) : (
            ''
          )}
          {!ctx.support.filereader ? (
            <p>
              {t('File API & FileReader API not supported.', {
                defaultValue: 'File API & FileReader API not supported.'
              })}
            </p>
          ) : (
            ''
          )}
          {!ctx.support.formdata ? (
            <p>
              {t("XHR2's FormData is not supported.", {
                defaultValue: "XHR2's FormData is not supported."
              })}
            </p>
          ) : (
            ''
          )}
          {!ctx.support.progress ? (
            <p>
              {t("XHR2's upload progress isn't supported.", {
                defaultValue: "XHR2's upload progress isn't supported."
              })}
            </p>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </>
  )
}
