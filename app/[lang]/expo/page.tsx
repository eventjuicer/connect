
 import { Suspense } from "react";
import { callPublicApi } from "@/lib/api";
import { DataTable } from "@/components/tables";
import {columns} from './columns'
import { FilterByKeywords } from "./filters"

export default async function  Home() {

  const data = await callPublicApi("exhibitors");

  return (

    <div>

     
      <Suspense fallback={<div>asd</div>}>
      <DataTable columns={columns} data={data} searchBy="name" additionalFilters={ [ <FilterByKeywords column="keywords" />] } />
      </Suspense>
   
     
    </div>


  );
}


/**
 

{
  id: 2089,
  organizer_id: 5,
  group_id: 23,
  slug: '3lpeu',
  featured: 0,
  debut: 0,
  promo: 0,
  profile: {
    name: '3LP S.A.',
    about: 'xxx',
    products: 'fulfillment\n\ne-commerce\n\nbuffer warehouse\n\n\\\n',
    lang: 'en',
    expo: '',
    keywords: [ 'logistics', 'customer_support', 'omnichannel' ],
    website: 'https://3lp.eu/',
    facebook: 'https://www.facebook.com/3LPSA',
    twitter: '',
    linkedin: 'https://www.linkedin.com/company/3lp-s.a/',
    logotype: 'https://res.cloudinary.com/eventjuicer/image/upload/v1668074339/c_2089_logotype.png',
    opengraph_image: '',
    countries: 'europe',
    logotype_cdn: 'https://res.cloudinary.com/eventjuicer/image/upload/v1668074339/c_2089_logotype.png',
    opengraph_image_cdn: '',
    og_template: 'ebe8_template',
    thumbnail: 'https://res.cloudinary.com/eventjuicer/image/upload/w_600,h_600,c_fit,f_auto/v1668074339/c_2089_logotype.png',
    og_image: 'https://res.cloudinary.com/eventjuicer/image/upload/c_fit,h_210,w_800/u_ebe8_template_en,y_10/v1668074339/c_2089_logotype.png'
  },
  instances: [
    {
      participant_id: 182536,
      purchase_id: 189326,
      ticket_id: 2388,
      event_id: 100,
      quantity: 1,
      formdata: [Object],
      sold: 1
    }

  ]
}


 */