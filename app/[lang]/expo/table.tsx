"use client"

import { DataTable } from "@/components/tables";
import {columns} from './columns'
import { FilterByKeywords } from "./filters"
import { Exhibitor } from "./types"
import {useOnRowClick} from './details'
import { useSearchParams } from "next/navigation"

export function Table({data}: {data: Exhibitor[]}){

    const callback = useOnRowClick()
    const searchParams = useSearchParams()
    const initialKeyword = searchParams.get('keywords') || ''

    return (
        <DataTable
        columns={columns} 
        data={data} 
        searchBy="name" 
        additionalFilters={[
            <FilterByKeywords 
                column="keywords" 
                initialValue={initialKeyword}
            />
        ]} 
        onRowClick={callback}
        defaultFilters={{
            keywords: initialKeyword
        }}
        
        />
    )
}
    

