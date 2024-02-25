"use server"


import { callServiceApi } from "@/lib/api"
import { checkToken } from "@/app/actions"
export async function addToFavorites(id: number){

   const token = await checkToken()

console.log(id, token)

}