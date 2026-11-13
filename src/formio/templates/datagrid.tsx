/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import type {
  AnyComponentSchema,
  ComponentContext,
  DataGridSchema,
  Override
} from '../types'
import { classes } from '../../react'
import type { ComponentProps } from 'react'

export default { form }

export type DataGridContext = Override<
  ComponentContext<DataGridSchema>,
  {
    datagridKey: string
    columns: AnyComponentSchema[]
    rows: Record<string, string>[]
    numColumns: number
    hasHeader: boolean
    hasAddButton: boolean
    hasBottomSubmit: boolean
    hasTopSubmit: boolean
    hasExtraColumn: boolean
    hasRemoveButtons: boolean
    hasToggle: boolean
    hasGroups: boolean
    canAddColumn: boolean
    placeholder: string
    groups: Record<number, { label: string }>
  }
>
/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/datagrid/DataGrid.js#L266-L289
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/datagrid/form.ejs
 */
export function form(ctx: DataGridContext) {
  const { rows, columns, component, datagridKey, numColumns, t } = ctx
  // cells should have 8px padding and no outer padding on the first and last
  const cellClasses = classes(
    'align-top !p-8 first:!pl-0 last:!pr-0 !border-y-0',
    component.properties?.cellClasses
  )
  const hasAddButton = !ctx.builder && ctx.hasAddButton
  return (
    <>
      {hasAddButton && ctx.hasTopSubmit ? (
        <div className="text-right">
          <AddButton />
        </div>
      ) : null}
      <table
        className={classes(
          'border-collapse border-spacing-0 w-full table-auto',
          component.customClass
        )}
      >
        {ctx.hasHeader ? (
          <thead>
            <tr>
              {columns.map((col, index) => {
                const label = col.hideLabel ? undefined : col.label || col.title
                return (
                  <th
                    className={classes(
                      label && col.validate?.required && 'field-required',
                      cellClasses,
                      '!py-0 text-left'
                    )}
                    // @ts-expect-error style is a string in vhtml
                    style={component.properties?.[`column.${index}.style`]}
                    key={index}
                  >
                    {/* FIXME: do we allow HTML here? */}
                    {label}
                    {/* FIXME: remove this (we don't support tooltips?) */}
                    {col.tooltip ? (
                      <i
                        ref="tooltip"
                        tabIndex={0}
                        data-title={col.tooltip}
                        className={`${ctx.iconClass(
                          'question-sign'
                        )} text-muted`}
                        data-tooltip={col.tooltip}
                      />
                    ) : null}
                  </th>
                )
              })}
            </tr>
          </thead>
        ) : null}
        <tbody ref={`${datagridKey}-tbody`} data-key={datagridKey}>
          {rows.map((row, rowIndex) => (
            <>
              {ctx.hasGroups && ctx.groups[rowIndex] ? (
                <tr
                  key={rowIndex + '-group-header'}
                  ref={`${datagridKey}-group-header`}
                  className={classes(
                    cellClasses,
                    'datagrid-group-header',
                    ctx.hasToggle ? 'clickable' : null
                  )}
                >
                  <td
                    ref={`${datagridKey}-group-label`}
                    colSpan={numColumns}
                    className={classes(cellClasses, 'datagrid-group-label')}
                  >
                    {ctx.groups[rowIndex].label}
                  </td>
                </tr>
              ) : null}
              <tr ref={`${datagridKey}-row`} key={rowIndex}>
                {ctx.columns.map((col, index) => (
                  <td
                    ref={datagridKey}
                    key={col.key}
                    className={classes(
                      cellClasses,
                      component.properties?.[`column.${index}.className`]
                    )}
                    // @ts-expect-error style is a string in vhtml
                    style={component.properties?.[`column.${index}.style`]}
                    dangerouslySetInnerHTML={{
                      __html: row[col.key as string]
                    }}
                  />
                ))}
                {ctx.hasRemoveButtons ? (
                  <td
                    className={classes(cellClasses, 'align-bottom text-right')}
                  >
                    <RemoveButton />
                  </td>
                ) : null}
                {ctx.canAddColumn ? (
                  <td
                    ref={`${ctx.key}-container`}
                    className="col-md-3"
                    dangerouslySetInnerHTML={{ __html: ctx.placeholder }}
                  />
                ) : null}
              </tr>
            </>
          ))}
          {hasAddButton && ctx.hasBottomSubmit ? (
            <tr>
              {columns.map((c, i) => (
                <td key={i} className={cellClasses} />
              ))}
              <td className={classes(cellClasses, 'text-right')}>
                <AddButton />
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </>
  )

  function RemoveButton() {
    return (
      <button
        type="button"
        className="btn btn-primary hover:cursor-pointer !p-8"
        ref={`${datagridKey}-removeRow`}
        tabIndex={ctx.tabIndex}
        // FIXME: this appears not to be localizable; we could stash it in a
        // custom property?
        aria-label={t('Remove row', {
          defaultValue: 'Remove row'
        })}
      >
        <Icon name="delete" />
      </button>
    )
  }

  function AddButton() {
    const iconName = component.properties?.addAnotherIcon as 'plus'
    const addAnotherText =
      component.addAnother || t('Add Another', { defaultValue: 'Add another' })
    return (
      <button
        className="btn btn-primary hover:cursor-pointer !p-8"
        ref={`${datagridKey}-addRow`}
        data-testid="datagrid-add-row"
        tabIndex={ctx.tabIndex}
        title={iconName ? addAnotherText : undefined}
      >
        {iconName ? <Icon name={iconName} /> : addAnotherText}
      </button>
    )
  }
}

function Icon({
  name,
  className,
  ...rest
}: ComponentProps<'div'> & {
  name: 'plus' | 'delete'
}) {
  return (
    <div
      className={classes(
        name === 'delete' && 'delete-icon-white',
        name === 'plus' && 'plus-icon-white',
        '!w-20 !h-20',
        className
      )}
      {...rest}
    />
  )
}
