/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import type {
  SingleColumnSchema,
  ColumnsSchema,
  ComponentContext
} from '../types'
import type { ComponentProps } from 'react'
import { classes } from '../../react'

export default { form }

type ColumnsContext = ComponentContext<ColumnsSchema> & {
  columnComponents: string[]
  columnKey: string
}

export function form({
  component,
  columnComponents,
  columnKey
}: ColumnsContext) {
  const columns = 12
  const properties = component.properties || {}
  return (
    <div className={classes('flex xs:gap-16 md:gap-28', component.customClass)}>
      {component.columns.map((col, index) => (
        <Column
          // when the component renders, all of the column's properties are
          // defined
          column={col as Required<SingleColumnSchema>}
          columns={columns}
          key={index}
          ref={columnKey}
          dangerouslySetInnerHTML={{ __html: columnComponents[index] }}
          className={properties[`column.${index}.className`]}
        />
      ))}
    </div>
  )
}

type ColumnProps = ComponentProps<'div'> & {
  column: Required<SingleColumnSchema>
  columns: number
}

function Column({ column, columns, ...rest }: ColumnProps) {
  const style: Record<string, string | number> = {
    width:
      column.currentWidth === 0
        ? 'auto'
        : percent(column.currentWidth / columns),
    ...rest.style
  }
  if (column.offset) {
    style['margin-left'] = percent(-column.offset / columns)
  }
  return (
    <div
      // @ts-expect-error style is a string in vhtml
      style={Object.entries(style)
        .map(([name, value]) => `${name}: ${value}`)
        .join('; ')}
      {...rest}
    />
  )
}

function percent(fraction: number) {
  const n = fraction * 100
  return n % 1 > 0.01 ? n.toPrecision(9) + '%' : n + '%'
}
