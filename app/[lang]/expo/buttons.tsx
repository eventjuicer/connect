"use client"


import React from 'react'
import { Button } from "@/components/ui/button"
import { MoreHorizontal, MapPin } from "lucide-react"
import { useOnRowClick } from './details'






export function ShowDetails({id, details}:{id?: number}){

  
    const onClick  = useOnRowClick()

    return ( <Button variant="outline" size="icon" onClick={()=>onClick(id)}>
    <MoreHorizontal className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
    </Button>
    )
}


export function ShowLocation({id}:{id?: number}){



    return ( <Button variant="outline" size="icon">
    <MapPin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
    </Button>
    )
}