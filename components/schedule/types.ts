export type ScheduleVenue = {
    name: string;
  }
  
export type ScheduleSlot = {
    time: string;
  }
  
export type ScheduleProps = {
    venues: Array<ScheduleVenue>;
    slots: Array<ScheduleSlot>;
    items: Array<any>;
  }