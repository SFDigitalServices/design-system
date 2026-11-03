/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import { classes } from '../../react'
import h from 'vhtml'
import type { ComponentContext, Override, TableSchema } from '../types'

export default { form }

export type TableContext = Override<
  ComponentContext,
  {
    component: TableSchema
    tableKey: string
    tableComponents: string[][]
    cellClassName: string
  }
>

export const PRESERVE_CLASSES = classes('table-fixed', 'table-auto')
/**
* @see https://github.com/formio/formio.js/blob/cf9c7fec36c452e06dd7c32d887c7b6cfb7d6e11/src/components/table/Table.js#L160-L169
@see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/table/form.ejs
*/
export function form({ component, tableComponents, ...ctx }: TableContext) {
  const cellClass = ctx.cellClassName
  // XXX: always include these tailwind classes
  return (
    <table
      data-testid="formio-template-html"
      className={classes(component.customClass)}
    >
      {/* FIXME: show labels _unless_ component.hideLabel */}
      <caption className="sr-only">{component.label}</caption>
      {component.header?.length ? (
        <thead>
          <tr>
            {component.header.map((header, colIndex) => (
              <th
                key={colIndex}
                // @ts-expect-error style is a string in vhtml
                style={component.properties?.[`column.${colIndex}.style`]}
                className={
                  component.properties?.[`column.${colIndex}.className`]
                }
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody
        className={classes(
          component.bordered && 'divide-y-1 divide-neutral200'
        )}
      >
        {tableComponents.map((row, rowIndex) => (
          <tr ref={`row-${ctx.id}`} key={rowIndex}>
            {row.map((column, colIndex) => (
              <td
                key={colIndex}
                ref={`${ctx.tableKey}-${rowIndex}`}
                className={classes(
                  cellClass,
                  component.properties?.[`column.${colIndex}.className`]
                )}
                // @ts-expect-error style is a string in vhtml
                style={component.properties?.[`column.${colIndex}.style`]}
                dangerouslySetInnerHTML={{ __html: column }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
