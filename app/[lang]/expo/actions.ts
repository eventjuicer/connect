"use server"
import { callServiceApi } from "@/lib/api"
import { cookies } from 'next/headers'
import { checkToken } from "@/app/actions"
export async function addToFavorites(id: number){

   const token = await checkToken()

console.log(id, token)

}