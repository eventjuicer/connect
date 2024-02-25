"use client"


import React from 'react'
import { Button } from "@/components/ui/button"
import { MoreHorizontal, MapPin } from "lucide-react"
import { useModal } from "@/components/modal"
import { 
    CompanyDetailsWithLoader, 
    CompanyName, 
    CompanyActions, 
    CompanyLocation 
} from "./details"

export function useOnRowClick(){

    const {setLabel, setSecondaryLabel, setContent} = useModal(state=>({
        setLabel: state.setLabel,
        setSecondaryLabel: state.setSecondaryLabel,
        setContent: state.setContent
    }))

    return React.useCallback((id: number)=>{
        setLabel(<DetailsHeader id={id} />);
        setSecondaryLabel(  <CompanyLocation id={id} /> );
        setContent(<CompanyDetailsWithLoader id={id} />);
    }, [])
}

function DetailsHeader({id}:{id?: number}){


    return (<div className="flex flex-row justify-between items-center">
        <CompanyName id={id} />
        <CompanyActions id={id} />
    </div>)
}



export function ShowDetails({id, details}:{id?: number}){

  
    const onClick  = useOnRowClick()

    return ( <Button variant="outline" size="icon" onClick={()=>onClick(id)}>
    <MoreHorizontal className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
    </Button>
    )
}


export function ShowLocation({id}:{id?: number}){


    const {setLabel, setSecondaryLabel, setContent} = useModal(state=>({
        setLabel: state.setLabel,
        setSecondaryLabel: state.secondaryLabel,
        setContent: state.setContent
    }))

    return ( <Button variant="outline" size="icon" onClick={()=>{
        setLabel("dupa");
        setContent(<div>asdas</div>);
    }}>
    <MapPin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
    </Button>
    )
}