"use client"
 
import React, { useEffect } from 'react'

import {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
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
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
      select: false
    });

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        columnFilters,
        columnVisibility
      },
      onColumnVisibilityChange: setColumnVisibility,
    })

    useEffect(()=>{

      if(columnFilters.length>1){
      //TODO: reset TAGS when using search

      //console.log(columnFilters)

      }


      //table.getRowModel().rows?.length

      if(!columnFilters.length || !table.getFilteredRowModel().rows?.length){
        setColumnVisibility({select: false})
      }else{
        setColumnVisibility({select: true})

      }


    }, [columnFilters])

  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
  //     data,
  //     columns,
  //     initialState: {
  //         hiddenColumns: columns.map(column => {
  //             if (column.show === false) return column.accessor || column.id;
  //         }),
  //     },
  // });
    /**
     * 
    
    useEffect(() => {
    if (localStorage.getItem("visibleColumnIds") === null) {
      const columIds = table.getAllColumns().map((column) => column.id);
      localStorage.setItem("visibleColumnIds", JSON.stringify(columIds));
    }
    const allHideableColumnIds = table
      .getAllColumns()
      .filter((column) => column.getCanHide())
      .map((column) => column.id);
    const savedColumnIds: string[] = JSON.parse(localStorage.getItem("visibleColumnIds") || "[]") as string[];
    const initialColumnVisibility: VisibilityState = allHideableColumnIds.reduce((visibilityState, columnId) => {
      visibilityState[columnId] = savedColumnIds.includes(columnId);
      return visibilityState;
    }, {} as VisibilityState);

    setColumnVisibility(initialColumnVisibility);
  }, []);

  */


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
        key: filter.props.column,
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