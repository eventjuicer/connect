"use server"

import {headers, cookies} from 'next/headers'

export async function loadTranslations() {

    // console.log({

    //   headers: headers(),
    //   cookies: cookies()
    // })

    const res = await fetch(`${process.env.TRANSLATIONS_URL}`, {
    
      next: { 
        revalidate: 60,
        tags: ["i18n"]
      }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return data
}


