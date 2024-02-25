
import { type ScheduleProps } from "./types"
import Venue from "./venue"
import Slot from "./slot"


function getItemsForSlot(slots: Array<any>, time: string){

}

export default function ScheduleTable({venues=[], slots=[], data=[]}: ScheduleProps){

  console.log(data)

return (<div>
   
   <div className="flex flex-row xl:flex-nowrap">
    <div className="w-[100px]">x</div>
    {venues.map(venue => <Venue key={venue.name} {...venue} />)}
   </div>
    

    {slots.map(slot => <Slot key={slot.time} {...slot} venues={venues} items={getItemsForSlot(data, slot.time)}/>)}
     
  
  </div>
  )

}