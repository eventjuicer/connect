"use server"
import { unstable_cache } from "next/cache"
import { callPublicApi } from "./api"

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


export async function exhibitors(){
  return await callPublicApi("exhibitors")
}

export async function presenters(){
  return await callPublicApi("presenters")
}

export async function bookingmap(){
  return await callPublicApi("bookingmap")
}

export async function formdata(){
  return await callPublicApi("formdata")
}

