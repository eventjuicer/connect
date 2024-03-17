"use client"

import { useModal } from "@/components/modal"
import { type Presenter } from "./types"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { ScrollableMarkdownContent } from "../scrollable"
import { FixedTabs } from "@/components/tabs"
import { IconButton } from "@/components/buttons"
import { Star } from "lucide-react"
import { addToFavorites } from "./actions"

function PresentationActions({id}: {id: number}){

    return (<div className="flex gap-1 flex-row items-center">

    
        <IconButton icon={  <Star /> } onClick={()=>addToFavorites(id)} />

    </div>)

}

function Details(props: Presenter){


    return (
    <div>

    <h1 className="text-2xl mb-3">{props.presentation_title}</h1>

    <FixedTabs defaultLabel="description" items={[
        {label: "description", content:  <ScrollableMarkdownContent str={props.presentation_description} />},
        {label: "presenter", content: <ScrollableMarkdownContent str={props.bio} />}
    ]}/>
   
    </div>)
}

function Venue({name}: {name: string}){

    return name
}

function Time({time}: {time: string}){

    return time
}


export function Presentation(props: Presenter){

    const {setLabel, setContent} = useModal((state) => ({
        setLabel: state.setLabel,
        setContent: state.setContent
    }))

    return ( <Card className="transition-colors hover:bg-muted/50 cursor-pointer" onClick={()=>{
        setLabel(<div className="flex flex-row justify-between items-center">
            <div>
            <Venue name={props.presentation_venue} />
            <Time time={props.presentation_time} />
            </div>
            <PresentationActions id={props.id} />
        </div>);
        setContent(<Details {...props} />);
    }}>
        <CardHeader>
            <CardTitle>{props.presentation_title}</CardTitle>
            <CardDescription>{props.presenter}</CardDescription>
          </CardHeader>
    
            <CardContent>
                asd
            </CardContent>
        </Card>
    )
}  

