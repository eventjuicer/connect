"use server"

import { callPublicApi } from "./api"

export async function loadTranslations() {

    const res = await fetch(`${process.env.TRANSLATIONS_URL}`, {
    
      next: { 
        revalidate: 60,
        tags: ["i18n"]
      }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return data
}


export async function exhibitors(){
  return await callPublicApi("exhibitors")
}


