"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {TranslatedBadge} from '@/components/badges'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type ExhibitorProfile = {
    name: string;
    tags: Array<string>;
}

type ExhibitorPurchase = {
  formdata: {ti: string, id: string};
}

type Exhibitor = {
    id: string;
    amount: number;
    slug: string;
    profile: ExhibitorProfile;
    instances: Array<ExhibitorPurchase>;
  }
   
export const columns: ColumnDef<Exhibitor>[] = [

    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },

   
    {
      id: "name",
      accessorFn: (row) => row.profile.name,
      header: "name",
    },
    {
      id: "keywords",
      accessorKey: "profile.keywords",
      cell: ({row}) => {
        const tags = row.getValue("keywords")

        if(!Array.isArray(tags)){
          return null
        }
        return (
          <div className="flex gap-1 flex-wrap">
            {tags.map(label => <TranslatedBadge key={label} label={label} />) }
          </div>
        )
      },
      header: "tags",
      filterFn: 'arrIncludesSome'
    },
    {
      id: "booths",
      accessorFn: (row) => {
        if(!Array.isArray(row.instances)){
          return ""
        }
        return row.instances.reduce(function(prev, current){
          console.log(prev, current)
          return 1
        }, "")
        
        // filter(item=>item.formdata && "ti" in item.formdata).map(item => item.formdata.ti.slice(0,5)).join(", ")
      },
      header: "Booth",
      cell: ({row}) => {
        const booths = row.getValue("booths")
        console.log(booths)
        return booths
      }
    },

    {
        id: "actions",
        cell: ({row}) => {
            const exhibitor = row.original
            return (
                <div className="flex md:flex-row flex-col gap-1">
               
                <Button variant="outline" size="icon">
                <MoreHorizontal className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
                </Button>

                <Button variant="outline" size="icon">
                <MapPin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
                </Button>
                
                </div>
            )
        }
    },
]