


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



  export async function callPaymentApi(endpoint, body){

    const res = await fetch(`${process.env.API_PAYMENT_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    console.log(res.text)

    if(res.ok){
      const data = await res.json()
      console.log(data)
      return data
     //return data?.data
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
  

  export async function loadTranslations() {

    const res = await fetch(`${process.env.TRANSLATIONS_URL}`, {
    
      next: { 
        revalidate: 600,
        tags: ["i18n"]
      }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return data
}