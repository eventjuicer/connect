"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Exhibitor = {
    id: string
    amount: number
    slug: string
    email: string
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
      accessorKey: "profile.name",
      header: "slug",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },

    {
        id: "actions",
        cell: ({row}) => {
            const exhibitor = row.original
            return (
                <>
               
                <Button variant="outline" size="icon">
                <MoreHorizontal className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
                </Button>

                <Button variant="outline" size="icon">
                <MapPin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
                </Button>
                
                </>
            )
        }
    },
]