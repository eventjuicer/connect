
 
import  Schedule  from "@/components/schedule";



export default async function  Home() {



  return (

    <div>

      


    <Schedule 
      venues={[
        {name: "A"}, 
        {name: "B"}
      ]} 
      slots={[
        {time: "10:00"}, 
        {time: "11:00"}, 
        {time: "12:00"}
      ]} 
    />

    </div>


  );
}


/**
 


{
  fname: 'Nurdan',
  lname: 'Ülker',
  cname2: 'OPLOG',
  avatar: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1706202811/Halit_Develio%C4%9Flu-kopia.png',
  presentation_title: 'The Making of a Fulfillment Maverick: Robots and Beyond',
  bio: 'Halit Develioglu is a CEO and second-time founder with a 17-year tenure in logistics. An\r\n' +
    'innovator and engineer, he first founded a pure-tech supply chain company. Leveraging his\r\n' +
    'deep understanding of technology&#39;s role in reshaping industries, he founded OPLOG in\r\n' +
    '2013, building robots and developing technologies to address the pressing problems of the\r\n' +
    'logistics industry. His visionary leadership has been recognized with his inclusion in Fortune\r\n' +
    'Turkey’s 40 under 40 list for two consecutive years.',
  position: 'Founder & CEO',
  logotype: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1696247438/Call%20for%20Papers%202023/oplog.avif',
  presentation_description: "Imagine hitting that fulfillment sweet spot — the elusive 99.99% of orders zipping out on time, every time, with robots leading the charge. After all, they don't do lunch breaks, sick days are a no-show, and they're hustling hard 24/7. But if every fulfillment company is buying robots, how do they become a differentiator for them?\r\n" +
    '\r\n' +
    "Dive into this session where we’ll strip away the hype and provide a perspective from the most important people - the ones who actually design and build them. It’s a wild ride – we’ve ridden it, got the battle scars to prove it, and now we're ready to drop some hard-earned wisdom - that the real differentiation comes from the robot maker and not the robot buyer.",
  presentation_time: '15:45',
  presenter: 'Halit Develioglu',
  presentation_venue: 'M1',
  avatar_cdn: 'https://res.cloudinary.com/eventjuicer/image/upload/v1706202867/p_182500_avatar.png',
  logotype_cdn: 'https://res.cloudinary.com/eventjuicer/image/upload/v1706202869/p_182500_logotype.avif',
  id: 182500,
  domain: 'oplog.io',
  company_id: 2063,
  event_id: 100
}

 */