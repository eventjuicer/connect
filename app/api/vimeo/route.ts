
import { Vimeo } from '@vimeo/vimeo';

import { NextRequest } from 'next/server'
 


export async function getStaticProps() {
  let client = new Vimeo(`${clientId}`, `${clientSecret}`, `${accessToken}`);
  client.request(
    {
      method: 'GET',
      path: `/videos/796808098`,
    },
    function (error, body, status_code, headers) {
      if (error) {
        console.log(error);
      }

      console.log(body);
    }
  );

  return {
    props: {},
  };
}




export async function GET(request: NextRequest) {
  
  
 
  return Response.json({ revalidated: true, now: Date.now() })
}





