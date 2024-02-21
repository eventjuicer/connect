"use client"
 
import React from 'react'

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Input } from '@/components/ui/input'



interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchBy?: string;
    additionalFilters?: React.ReactElement[]
  }
   
  export function DataTable<TData, TValue>({
    columns,
    data,
    searchBy,
    additionalFilters
  }: DataTableProps<TData, TValue>) {

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        columnFilters,
      },
    })

   
    return (
      <div>
      <div className="flex items-center py-4 gap-4">

        {searchBy? <Input
          placeholder="Filter names..."
          value={(table.getColumn(searchBy)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchBy)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />: null}
      
     
      {additionalFilters.map((filter: React.ReactElement) => React.cloneElement(filter, {
        onValueChange: (value: string) => table.getColumn(filter.props.column)?.setFilterValue(value)
      }))}

      

      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      </div>
    )
  }