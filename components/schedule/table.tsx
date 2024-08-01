
import { type ScheduleProps, type Presenter } from "./types"
import Venue from "./venue"
import {Presentation} from "./presentation"
import { cn } from "@/lib/utils"
import { sortBy, nth, groupBy, head } from "lodash"
import { create } from "zustand"
 

type ScheduleState = {
  data: Presenter[],
  setData: (data: Presenter[]) => void
}

export const useSchedule = create<ScheduleState>((set) => ({
  data: [],
  setData: (data: Array<Presenter>) => set(() => ({ data })),
}))


function getPresentations(data: Array<Presenter>, times: Array<string>, venue: string, time: string): Record<string, Array<Presenter>>{

  const filteredByVenue = data.filter(item => item.presentation_venue===venue)

  times.sort() 

  const filteredBySlot = filteredByVenue.filter(item => {
  
  if(item.presentation_time < time){
    return false
  }

  const current_idx = times.indexOf(time)
  const next_time = nth(times, current_idx+1)
  if(next_time && item.presentation_time >= next_time){
    return false
  }

  return true

  })

  const sorted = sortBy(filteredBySlot, ["presentation_time"])

  const grouped = groupBy(sorted, "presentation_time")

  return grouped
}


function PresentationsForTimeSlotAndVenue({data, slots, venue, time}: {
  data: Array<Presenter>;
  slots: Array<string>;
  venue: string;
  time: string;
}){

  const grouped = getPresentations(data, slots, venue, time)

  return Object.values(grouped).map(group => <Presentation data={group} />)
  
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

      <div key={slot.time} className="flex sm:flex-row flex-col">
        <div className="min-w-[60px]">{slot.time}</div>
        <div className="grid gap-1 lg:grid-cols-4 grid-flow-row grid-cols-1">
        {venues.map(venue => <div key={`${slot.time}_${venue.name}`} className="flfex fledx-col"><PresentationsForTimeSlotAndVenue data={data} slots={slots.map(slot=>slot.time)} venue={venue.name} time={slot.time}/></div>)} 
        </div>
      </div>))}

  </div>)
}