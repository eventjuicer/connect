
import { type ScheduleSlot, type ScheduleVenue } from "./types"
import Items from "./Items"


export default async function Slot({time, venues}: {
    time: string,
    venues: Array<ScheduleVenue>
}){


return (<div className="flex md:flex-row flex-col">
        <div className="min-w-[100px] hidden md:visible">{time}</div>
        {venues.map(venue => <Items time={time} venue={venue.name} key={`${time}_${venue.name}`}/>)}
    </div>)

}