
"use client"

import { DataTable } from "@/components/tables";
import {columns} from './columns'
import { FilterByKeywords } from "./filters"
import { Exhibitor } from "./types"
import {useOnRowClick} from './details'

export function Table({data}: {data: Exhibitor[]}){

    const callback = useOnRowClick()

    return (
        <DataTable
        columns={columns} 
        data={data} 
        searchBy="name" 
        additionalFilters={ [ <FilterByKeywords column="keywords" />] } 
        onRowClick={callback}
        
        />
    )
}
    

