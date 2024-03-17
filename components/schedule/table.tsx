
import { type ScheduleProps, type Presenter } from "./types"
import Venue from "./venue"
import {Presentation} from "./presentation"


function getPresentations(data: Array<Presenter>, times: Array<string>, venue: string, time: string): Array<Presenter>{
  const filteredByVenue = data.filter(item => item.presentation_venue===venue)

  return filteredByVenue
}

export default function ScheduleTable({venues=[], slots=[], data=[]}: ScheduleProps){


return (

  <div>
    <div className="flex flex-row xl:flex-nowrap">
      <div className="min-w-[100px]">x</div>
      {venues.map(venue => 
        <Venue key={venue.name} {...venue} />
      )}
    </div>
      

    {slots.map(slot => (

      <div key={slot.time} className="flex md:flex-row flex-col">
        <div className="min-w-[100px] hidden md:visible">{slot.time}</div>
        {venues.map(venue => <div className="flex flex-col">{getPresentations(data, slots.map(slot=>slot.time), venue.name, slot.time).map(presentation => <Presentation {...presentation} />)}</div>)} 
      </div>))}

  </div>)
}