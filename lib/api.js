"use server"



export async function callPublicApi(endpoint, options = {
  cache: 3600,
  tags: []
}){


    const res = await fetch(`${process.env.API_READONLY_URL}/${endpoint}`, {
      
      next: { 
        revalidate: options.cache,
        tags: [endpoint, ...options.tags]
      }, 
    })
    if(res.ok){
      const data = await res.json()
      return data?.data
    }
   
    return false
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
      const data = await res.json()
      return data?.data
    }

   return false
 
  }
  