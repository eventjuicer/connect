
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import getPresentersForSlot from "./actions"


function Item(){

    return ( <Card>
        <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
    
            <CardContent>
                asd
            </CardContent>
        </Card>
    )
}  

export default async function Items({time, venue}: {time: string, venue: string}){


     const items =  await getPresentersForSlot(venue, time)



    return null
    return <div className="m-1 w-[100px] min-h-[100px]">

    {items.map(item=> <Item key={item.id} />)}

   
    </div>
}