export type ScheduleVenue = {
    name: string;
  }
  
export type ScheduleSlot = {
    time: string;
  }
  
export type ScheduleProps = {
    venues: Array<ScheduleVenue>;
    slots: Array<ScheduleSlot>;
    data: Array<Presenter>;
  }

export type Presenter = {
    logotype_cdn: string;
    avatar_cdn: string;
    presentation_venue: string;
    logotype: string;
    presentation_time: string;
    featured: string | number;
    avatar: string;
    presentation_description: string;
    presentation_title: string;
    bio: string;
    position: string;
    presenter: string;
    presenters?: Array<string>;
    lname: string;
    fname: string;
    cname2: string;
    id: number,
    domain: string;
    company_id: number;
    event_id: number;
}