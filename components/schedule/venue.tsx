import { type ScheduleVenue } from "./types"

export default function Venue({name}: ScheduleVenue){

        return <div className="min-w-[100px]">{name}</div>

}