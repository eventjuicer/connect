"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import {TranslatedBadge} from '@/components/badges'
import { ShowDetails, ShowLocation } from "./buttons" 
import { uniq, get } from "lodash"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type ExhibitorProfile = {
    name: string;
    keywords: Array<string>;
}

type ExhibitorPurchase = {
  formdata: {ti: string, id: string};
}

type Exhibitor = {
    id: number;
    amount: number;
    slug: string;
    profile: ExhibitorProfile;
    instances: Array<ExhibitorPurchase>;
  }
   
export const columns: ColumnDef<Exhibitor>[] = [

    {
        id: "select",
        header: ({ table }) => {

          const {columnFilters} = table.getState()

          if(!columnFilters.length || !table.getFilteredRowModel().rows.length){
            return null
          }

          return (
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
              aria-label="Select all"
            />
          )
        },
        cell: ({ row, table }) => {

          const {columnFilters} = table.getState()
          
        if(!columnFilters.length){
          return null
        }


          return (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          )
        },
        enableSorting: false,
        enableHiding: false,
      },

      {
        id: "actions",
        cell: ({row}) => {

            const {id} = row.original  
            return (
              <ShowDetails id={id} />
            )
        }
    },

   
    {
      id: "name",
      accessorFn: (row) => row.profile.name,
      header: "name"
    },
    {
      id: "keywords",
      accessorFn: (row) => Array.isArray(get(row, "profile.keywords"))? uniq(get(row, "profile.keywords")): [],
      cell: ({row}) => {

        return (
          <div className="flex gap-1 flex-wrap">
            { row.getValue("keywords").map(label => <TranslatedBadge className="text-gray-800 dark:text-gray-400" key={label} label={label} />) }
          </div>
        )
      },
      header: "tags",
      filterFn: (row, id, value) => {
        return row.getValue(id).includes(value)
      },
    },
   
    {
      id: "secondaryActions",
      cell: ({row}) => {

          const {id} = row.original  
          return (
            <ShowLocation id={id} />
          )
      }
  },
  

   
]