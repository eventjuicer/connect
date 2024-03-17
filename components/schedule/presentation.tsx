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
import { useSetQueryString } from "@/lib/url"
import {head} from 'lodash'


function PresentationActions({id}: {id: number}){

    return (<div className="flex gap-1 flex-row items-center">

    
        <IconButton icon={  <Star /> } onClick={()=>addToFavorites(id)} />

    </div>)

}

function Details({data}: {data: Presenter[]}){

    const presentation = head(data)

    return (
    <div>

    <h1 className="text-2xl mb-3">{presentation.presentation_title}</h1>

    <FixedTabs defaultLabel="description" items={[
        {
            label: "description", 
            content:  <ScrollableMarkdownContent str={presentation.presentation_description} />
        },
        ...data.map(item => ({
            label: item.presenter, 
            content: <ScrollableMarkdownContent str={item.bio} />
        }))
        
    ]}/>
   
    </div>)
}

function Venue({name}: {name: string}){

    return name
}

function Time({time}: {time: string}){

    return time
}

function Title({title}: {title: string}){
    if(title.length > 80){
        return `${title.substring(0, 80)}...`
    }
    return title
}

function Presenters({data}:{data: Presenter[]}){

    return <div className="text-pretty">{data.map(presenter => <div className="mb-1">
    {presenter.presenter}, {presenter.position}  <span className="dark:text-primary bg-muted">{presenter.cname2}</span>
    </div>)}</div>
}

export function Presentation({data}: {data: Presenter[]}){

    const {setLabel, setContent} = useModal((state) => ({
        setLabel: state.setLabel,
        setContent: state.setContent,
    }))

    const setQueryString = useSetQueryString()

    const presentation = head(data)

    return ( <Card className="transition-colors hover:bg-muted/50 cursor-pointer mr-1 mb-1" onClick={()=>{
        setQueryString([
            ["id", presentation.id]
        ])
        setLabel(<div className="flex flex-row justify-between items-center">
            <div>
            <Venue name={presentation.presentation_venue} />
            <Time time={presentation.presentation_time} />
            </div>
            <PresentationActions id={presentation.id} />
        </div>);
        setContent(<Details data={data} />);
    }}>
        <CardHeader>
        <CardDescription>     {presentation.presentation_time}</CardDescription>
            <CardTitle>
                <Title title={presentation.presentation_title} />
            </CardTitle>
         
          </CardHeader>
    
            <CardContent>
            <Presenters data={data} />
           
            </CardContent>
        </Card>
    )
}  

