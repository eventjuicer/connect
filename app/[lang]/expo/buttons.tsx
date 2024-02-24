"use client"

import { Button } from "@/components/ui/button"
import { MoreHorizontal, MapPin } from "lucide-react"
import { useModal } from "@/components/modal"
import { CompanyDetailsWithLoader, CompanyName, CompanyActions } from "./details"


function DetailsHeader({id}:{id?: number}){


    return (<div className="flex flex-row justify-between items-center">
        <CompanyName id={id} />
        <CompanyActions id={id} />
    </div>)
}



export function ShowDetails({id, details}:{id?: number}){

    const {setLabel, setSecondaryLabel, setContent} = useModal(state=>({
        setLabel: state.setLabel,
        setSecondaryLabel: state.secondaryLabel,
        setContent: state.setContent
    }))



    return ( <Button variant="outline" size="icon" onClick={() => {
        setLabel(<DetailsHeader id={id} />);
        setContent(<CompanyDetailsWithLoader id={id} />);
    }}>
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