import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from '@/lib/utils'


type FixedType = {
    label: string;
    content: React.ReactElement;
}

type FixedTabsProps = {
    defaultLabel: string;
    contentClassName?: string;
    items: Array<FixedType>
}


export function FixedTabs({defaultLabel, items, contentClassName=""}: FixedTabsProps){


   return (

    <Tabs defaultValue={defaultLabel} className="max-w-[750px] w-full ">
    <TabsList>
    {items.map((item: FixedType) => (<TabsTrigger key={item.label} value={item.label}>{item.label}</TabsTrigger>
    ))}
    </TabsList>

    {items.map((item: FixedType) => (  <TabsContent key={item.label} className={cn(contentClassName)}value={item.label}>{
        item.content
    }</TabsContent>))}


    </Tabs>


   )

}



