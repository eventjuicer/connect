"use server"



export async function callPublicApi(endpoint){


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_READONLY_URL}/${endpoint}`, {
      
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return data
  }
  
  export async function callServiceApi(endpoint, body){

    const res = await fetch(`${process.env.API_SERVICE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if(res.ok){
      const {data} = await res.json()
      return data
    }

   return false
 
  }
  