import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Column } from "./columns"

type Props<T> = {
  data: T[]
  columns: Column<T>[]
}

export function ArtistTable<T>({ data, columns }: Props<T>) {
  return (
    <div className="border rounded-lg overflow-x-auto bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <Table>
        <TableHeader className="bg-gray-100 dark:bg-slate-800">
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead key={idx} className="text-gray-700 dark:text-gray-300">
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell
                  key={colIndex}
                  className="text-gray-800 dark:text-gray-100"
                >
                  {col.cell(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
