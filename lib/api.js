"use server"



export async function callPublicApi(endpoint){


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_READONLY_URL}${endpoint}`, {
      
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return data
  }
  
  export async function callSericeApi(endpoint){


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVICE_URL}${endpoint}`, {
      method: "POST",
      cache: "no-store",
    })
    const data = await res.json()
   
    return data
  }
  